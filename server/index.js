const express=require('express');
const cors=require('cors');//crossplatform use
const {userModel,productModel,usersModel,loginModel, hrModel,Attendance,Leave,Performance,Salary
,empmonthlyPM
}=require("./dataconfig");//import userModel from dataconfig
const bcrypt = require('bcrypt');
const saltRounds = 10;
const app=express();

//multer
// const upload=require('./multerfiles/uploadcode.js')
//mutler
const { uploads, upload}=require("./multerfile/uploadfile.js")
// const { u}=require("./multerfile/uploadfile.js")

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static('image1'));
app.use(express.static('images'));
app.use(express.static('image2'));
//upload image

 //app.post("/addproduct",upload.single('image'),(req,res)=>{
    
  // const{ productname}=req.body;
   // console.log(productname)
   // const image="http://localhost:8000/"+req.file.filename;
   // console.log(image)
   // productModel.create({
    //  productname,
    //  image});
    //res.json("success")
//})
//emp register
app.post('/register', uploads.single("images1"), async (req, res) => {
  const { fullname, email, crs, password } = req.body;
  const image = "http://localhost:8000/" + req.file.filename;
  const result = await userModel.find({ 'email': email });
  if (result.length > 0) {
    return res.json({ status: 0, msg: "email already existing" });
  } else {
    bcrypt.hash(password, saltRounds, async function (err, hashedPassword) {
      if (err) {
        console.error(err)
        res.json({ status: 0, msg: "registration failed" });
      } else {
       const newUser=await userModel.create({
         
          fullname,
          email,
          crs,
          password: hashedPassword,
          image
          
        });
        console.log(newUser._id);

        // Insert into logintable
        await loginModel.create({
          
          email,
          password: hashedPassword,
          usertype: "Employee",
          userId:newUser._id,
          
        });
        
        res.json({ status: 1, msg: "thank you for registering here!!" });
      }
    });
  }
});

//common login


app.post("/login",async(req,res)=>{
    const {email,password}=req.body;
    const result= await loginModel.find({"email":email})
    console.log(result)
    if(result.length>0){
        const pwd=result[0].password;
        const userId=result[0].userId;
        console.log(userId);
        const usertype=result[0].usertype;
        console.log(usertype);
        console.log(usertype);
        bcrypt.compare(password,pwd,function(err,result) {
            // result == true
            if(result==true){
                res.json({'status':1,'msg':"SUCCESSFULLY LOGIN","userId":userId,"usertype":usertype})
            }else{
                res.json({'status':0,'msg':"iNCORRECT PASSWORD"})
            }
        });
    
    }
    else{

      
            res.json({'status':0,'msg':"incorrect email"})
    
        
    }


    
});

//hrregister

app.post('/hrregister', upload.single("image2"), async (req, res) => {
  const { fullname, email, password } = req.body;
  const hrimage = "http://localhost:8000/" +req.file.filename;
  const result = await hrModel.find({ 'email': email });
  if (result.length > 0) {
    return res.json({ status: 0, msg: "email already existing" });
  } else {
    bcrypt.hash(password, saltRounds, async function (err, hashedPassword) {
      if (err) {
        console.error(err);
        res.json({ status: 0, msg: "registration failed" });
      } else {
        const newHr=await hrModel.create({
          fullname,
          email,
          password: hashedPassword,
          hrimage
        });

        // Insert into logintable
        await loginModel.create({
          email,
          password: hashedPassword,
          usertype: "HR",
          userId:newHr._id
        });
        
        res.json({ status: 1, msg: "thank you for registering here!!" });
      }
    });
  }
});

//hrlogin
app.post("/hrlogin",async(req,res)=>{
  const {email,password}=req.body;
  console.log("hello")
  console.log(email);
  console.log(password);
  const result= await hrModel.find({"email":email})
  console.log(result)
  if(result.length>0){
      const pwd=result[0].password;
      const userid=result[0]._id
      bcrypt.compare(password,pwd,function(err,result) {
          // result == true
          if(result==true){
              res.json({'status':1,'msg':"SUCCESSFULLY LOGIN","userid":userid,"usertype":usertype})
          }else{
              res.json({'status':0,'msg':"iNCORRECT PASSWORD"})
          }
      });
  
  }
  else{

    
          res.json({'status':0,'msg':"incorrect email"})
  
      
  }


  
});


//fetch emp


app.get("/fetchAllemp",async (req,res)=>{
  const result=await userModel.find();
  if(result.length>0){

    res.json(result)
  }
  else{
    res.json([])
  }
})

//fetch id emp

app.get("/fetchByid/:idn", async (req, res) => {
  try {
    console.log("call made");
    const idn = req.params.idn;
    const result = await userModel.find({ '_id': idn });
    console.log(idn)
    console.log(result)
    if (result.length > 0) {
      res.status(200).json(result); // User found (200 OK)
      // console.log("value returned")
    } else {
      res.status(404).json([]); // User not found (404 Not Found)
      // console.log("value returned 2")
    }
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ error: "Internal Server Error" }); // Server error (500 Internal Server Error)
  }
});

//fetches the hr

app.get("/fetchByidhr/:idn", async (req, res) => {
  try {
    console.log("call made");
    const idn = req.params.idn;
    const result = await hrModel.find({ '_id': idn });
    console.log(idn)
    console.log(result)
    if (result.length > 0) {
      res.status(200).json(result); // User found (200 OK)
      // console.log("value returned")
    } else {
      res.status(404).json([]); // User not found (404 Not Found)
      // console.log("value returned 2")
    }
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ error: "Internal Server Error" }); // Server error (500 Internal Server Error)
  }
});


//fetch emps

app.get("/fetchAllemps",async (req,res)=>{
  const result=await usersModel.find();
  if(result.length>0){

    res.json(result)
  }
  else{
    res.json([])
  }
})



//admin
// Dummy admin credentials
const adminCredentials = {
  username: 'admin',
  password: 'admin@123',
};

// Admin login endpoint
app.post('/adminlogin',(req, res) => {
  const { username, password } = req.body;

  // Check if the submitted credentials match the admin credentials
  if (username === adminCredentials.username && password === adminCredentials.password) {
    // Return success message
    res.json({status:1,msg:"LOGIN SUCCESSFUL!!"})
  } else {
    // Return error message
    res.json({status:0,msg: 'INCORRECT USERNAME OR PASSWORD' });
  }
});


//delete

app.get("/Deleteuser/:id",async(req,res) => {
  await userModel.deleteOne({'_id':req.params.id});
  res.json("data detected")
})
//add attentance




// Create a router instance
// const router = express.Router();

// Route to handle adding attendance by admin
// Route to handle adding attendance by admin
//
// Connect to MongoDB

app.get('/addattendance/:employeeId', async (req, res) => {
  try {
    const { employeeId } = req.params;
    const { date, status } = req.query;

    // Validate employee ID and attendance details
    if (!employeeId || !date || !status) {
      return res.status(400).json({ error: 'Invalid input data' });
    }

    // Check if the employee exists
    const employee = await Employee.findById(employeeId);
    if (!employee) {
      return res.status(404).json({ error: 'Employee not found' });
    }

    // Create a new attendance record
    const newAttendance = new Attendance({
      employeeId,
      date,
      status,
    });

    // Save the attendance record to the database
    await newAttendance.save();

    // Return success response
    res.status(200).json({ message: 'Attendance added successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error adding attendance' });
  }
});


//manage salary


// server.js



// const bodyParser = require('body-parser');



// // MongoDB connection setup
// mongoose.connect('mongodb://localhost:27017/salaryDB', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// // Salary model
// const Salary = require('./models/Salary');

// // Middleware
// app.use(bodyParser.json());

// // Routes
// app.get('/api/salaries', async (req, res) => {
//   try {
//     const salaries = await Salary.find();
//     res.json(salaries);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Server error' });
//   }
// });

// app.put('/api/salaries/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { salary } = req.body;

//     await Salary.findByIdAndUpdate(id, { salary });
//     res.json({ message: 'Salary updated successfully' });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Server error' });
//   }
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });



//apply leave


// Assuming you have Express and other required packages installed

const bodyParser = require('body-parser');


const PORT = 5000; // Or any other port you prefer

// Middleware to parse incoming request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Endpoint to handle form submission
app.post('/submit-leave', (req, res) => {
  const { startDate, endDate, reason, comment } = req.body;
  // Add logic to handle the leave application, such as storing it in a database
  console.log('Received leave application:', { startDate, endDate, reason, comment });
  // Respond with a success message or any other appropriate response
  res.status(200).json({ message: 'Leave application submitted successfully.' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});




// Route for handling punch-in action


// app.post('/punchIn', async (req, res) => {
//   const { userId } = req.body;

//   // Check if user exists
//   const user = await userModel.findById(userId);
//   if (!user) {
//     return res.status(400).json({ error: 'User not found' });
//   }

//   // Check if user has already punched in for today
//   const currentDate = new Date().toISOString().slice(0, 10);
//   Attendance.create({
//     userId: userId,
//     date: currentDate,
//     punchOutTime: { $exists: true },
//     attendmark:'1',

//   });

//   const existingAttendance= await Attendance.find({userid:userId,date:currentDate,attendmark:1})
// if(existingAttendance.length>0){
//   res.json({"status":1,"msg":" marked attendance",att:existingAttendance[0].attendmark});
  
// }
// else{
//   res.json({"status":0,"msg":"already marked attendance"});
  
// }


//   // Prepare data for new attendance record


  
// });


// // Route for handling punch-out action
// app.post('/punchOut', async (req, res) => {
//   const { userId } = req.body;

//   try {
//     const attendance = await Attendance.findOneAndUpdate(
//       { userId, punchOutTime: null },
//       { $set: { punchOutTime: new Date() } },
//       { new: true }
//     );

//     if (!attendance) {
//       return res.status(400).json({ error: 'No punch-in record found' });
//     }

//     res.status(200).json({ success: true, message: 'Punch Out successful' });
//   } catch (error) {
//     console.error('Error punching out:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

//punchin,puchout

app.post('/punchIn', async (req, res) => {
  const { userId } = req.body;

  // Check if user exists
  const user = await userModel.findById(userId);
  if (!user) {
    return res.status(400).json({ error: 'User not found' });
  }

  // Check if user has already punched in for today
  const currentDate = new Date().toISOString().slice(0, 10);
  const existingAttendance = await Attendance.find({
    userId: userId,
    date: currentDate,
    punchOutTime: { $exists: true }
  });

  if (existingAttendance.length > 0) {
    return res.json({"status":0,"msg":"Already marked attendance"});
  }

  // Prepare data for new attendance record
  const attendanceData = {
    userId: user._id,
    name: user.fullname,
    date: currentDate,
    punchInTime: new Date().toLocaleTimeString(), // Use current time for punch-in
  };

  const attendance = new Attendance(attendanceData);

  try {
    await attendance.save();
    res.status(200).json({ success: true, message: 'Punch In successful' });
  } catch (error) {
    console.error('Error punching in:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// Route for handling punch-out action
app.post('/punchOut', async (req, res) => {
  const { userId } = req.body;

  try {
    const attendance = await Attendance.findOneAndUpdate(
      { userId, punchOutTime: null },
      { $set: { punchOutTime: new Date() } },
      { new: true }
    );

    if (!attendance) {
      return res.status(400).json({ error: 'No punch-in record found' });
    }

    res.status(200).json({ success: true, message: 'Punch Out successful' });
  } catch (error) {
    console.error('Error punching out:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// //view attendance
// app.get('/attendances', async (req, res) => {
//   try {
//     // Fetch all attendance records from the database
//     const attendances = await Attendance.find();
//     res.json(attendances);
//   } catch (error) {
//     // If an error occurs, send a 500 status code along with the error message
//     res.status(500).json({ error: error.message });
//   }
// });




// app.get('/attendances/:id', async (req, res) => {
//   const { id } = req.params;

//   try {
//     // Find the attendance record by ID in the database
//     const attendance = await Attendance.findById(id);

//     if (!attendance) {
//       return res.status(404).json({ message: 'Attendance record not found' });
//     }

//     res.json(attendance);
//   } catch (error) {
//     // If an error occurs, send a 500 status code along with the error message
//     res.status(500).json({ error: error.message });
//   }
// });


// Define your API endpoint to get attendance records by userId
app.get('/attendances/user/:userId', async (req, res) => {
  const { userId } = req.params;

  try {
    // Find attendance records by userId in the database
    const attendances = await Attendance.find({ userId });

    if (!attendances || attendances.length === 0) {
      return res.status(404).json({ message: 'Attendance records not found for this user' });
    }

    res.json(attendances);
  } catch (error) {
    // If an error occurs, send a 500 status code along with the error message
    res.status(500).json({ error: error.message });
  }
});


// Define your API endpoint to get all attendance records
app.get('/attendances', async (req, res) => {
  try {
    // Find all attendance records in the database
    const attendances = await Attendance.find();

    if (!attendances || attendances.length === 0) {
      return res.status(404).json({ message: 'No attendance records found' });
    }

    res.json(attendances);
  } catch (error) {
    // If an error occurs, send a 500 status code along with the error message
    res.status(500).json({ error: error.message });
  }
});





// POST route for submitting leave
app.post('/submitleave', async (req, res) => {
  try {
    // Assuming you're receiving form data in req.body
    const { userId, startDate, endDate, reason, comment } = req.body;
    const user=await userModel.findOne({'_id':userId});
    const username=user.fullname;
    const status=0;

    // Perform data validation if necessary
    if (!userId || !startDate || !endDate || !reason) {
      return res.status(400).json({ error: 'Missing required fields in the request.' });
    }

    // Create a new leave instance
    const newLeave = new Leave({
      userId,
      userName:username,
      startDate,
      endDate,
      reason,
       comment,
      status:status,
    });
    console.log(newLeave);

    // Save the leave instance to the database
    await newLeave.save();

    res.status(200).json({ message: 'Leave application submitted successfully.' });
  } catch (error) {
    console.error('Error submitting leave application:', error);

    // Handle specific errors if needed
    if (error.name === 'ValidationError') {
      return res.status(400).json({ error: error.message });
    }

    // Handle other types of errors
    res.status(500).json({ error: 'An error occurred while submitting the leave application.' });
  }
});


// ======================================================================================
// ----------------fetchallleaves
app.get('/fetchallleaves', async (req, res) => {
  try {
    const results = await Leave.find({"status":0});
    console.log(results); // Log the results to the console for debugging
    res.json(results);
  } catch (error) {
    console.error('Error fetching all leaves:', error);
    res.status(500).json({ error: 'An error occurred while fetching all leaves.' });
  }
});


// ==============approve leave=====================
app.put('/approveLeave/:userId', async (req, res) => {
  const userId = req.params.userId;
  console.log(userId);
  try {
    const result = await Leave.findOne({ '_id': userId });
    // result.updateOne({
    //   status:1,
    // })
    console.log(result);
    if (result) {
      // Update the document if it exists
      const updatedResult = await Leave.findOneAndUpdate(
        { '_id': userId },
        { $set: { status: 1 } },
        { new: true } // To return the updated document
      );
      res.status(200).json({ message: 'Leave approved successfully.', data: updatedResult });
    } else {
      res.status(404).json({ error: 'User not found.' });
    }
  } catch (error) {
    console.error('Error approving leave:', error);
    res.status(500).json({ error: 'An error occurred while approving leave.' });
  }
});
// ==============rejected leave=====================
app.put('/rejectLeave/:userId', async (req, res) => {
  const userId = req.params.userId;
  console.log(userId);
  try {
    const result = await Leave.deleteOne({ '_id': userId });
    // result.updateOne({
    //   status:1,
    // })
   res.json({"status":1,"message":"Leave Reuest rejected"})
  } catch (error) {
    console.error('Error approving leave:', error);
    res.status(500).json({ error: 'An error occurred while approving leave.' });
  }
});
// =============approved leaves===================
app.get('/viewapprovedleaves/:userId', async (req, res) => {
  try {
    
    const userId = req.params.userId;
    console.log(userId);
    // Assuming status 1 indicates approved leaves
    const approvedLeaves = await Leave.find({ userId, status: 1 }); 
    console.log(approvedLeaves);// Fetch approved leaves for the specified userId
    console.log("hii")

    res.json(approvedLeaves); // Send the approved leaves as JSON response
  } catch (error) {
    console.error('Error fetching approved leaves:', error);
    res.status(500).json({ error: 'An error occurred while fetching approved leaves.' });
  }
});

app.post('/performances', async (req, res) => {
  try {
    const { userId, fromDate, toDate, performance } = req.body;
    const newPerformance = new Performance({ userId, fromDate, toDate, performance });
    const savedPerformance = await newPerformance.save();
    res.status(201).json(savedPerformance);
  } catch (error) {
    console.error('Error creating performance record:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Add salary for an employee
app.post('/salaries', async (req, res) => {
  try {
    const { employee_id, amount, date } = req.body;
    const salary = new Salary({ employee: employee_id, amount, date });
    await salary.save();
    res.json(salary);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Endpoint to get salary for a specific employee
// app.get('/salary/:employeeId', async (req, res) => {
//   try {
//     const { employeeId } = req.params;
//     const salaries = await Salary.find({ employee: employeeId }).populate('employee');
//     res.json(salaries);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });


app.get('/salaries/:employeeId', async (req, res) => {
  const { employeeId } = req.params;

  try {
    // Assuming Salary is your Mongoose model for salaries
    const employeeSalaries = await Salary.find({ employee: employeeId });

    if (employeeSalaries.length > 0) {
      res.json(employeeSalaries);
    } else {
      res.status(404).json({ message: 'Salaries not found for the employee' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


//performence 
app.post("/monthlyP/:id",async(req,res)=>{
  console.log("mpnthly P")
  const {performance,month,year}=req.body 
  empmonthlyPM.create({empid:req.params.id,performance,month,year})
  res.json("data register successfully")
 })




app.get("/monthlyP",async(req,res)=>{
  console.log("mpnthly P")
  
  const rel=await empmonthlyPM.find()
  res.json(rel)
 })
 app.get("/monthlyP/:id",async(req,res)=>{
  console.log("mpnthly P")
  
  const rel=await empmonthlyPM.find({'_id':req.params.id})
  res.json(rel)
 })

app.listen(8000,()=>{
    console.log('server running http://localhost:8000/');


 })


 

















