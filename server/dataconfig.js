const mongoose=require('mongoose')


main().catch=((err)=>{console.log(err)});
async function main(){
   await  mongoose.connect('mongodb://127.0.0.1:27017/softhrm')
    console.groupCollapsed("data base connected");
}

//schema
const userSchema=new mongoose.Schema({
    fullname:String,
    email:String,
    crs:String,
    password:String,
    image:String,
    usertype:String,
},{timestamps: true})
 //model
 const userModel=new mongoose.model('usertable',userSchema)

 

   //schema
const hrSchema=new mongoose.Schema({
    fullname:String,
    email:String,
    // crs:String,
    password:String,
    hrimage:String
},{timestamps: true})
 //model
 const hrModel=new mongoose.model('hrtable',hrSchema )


 const loginSchema=new mongoose.Schema({
    email:String,
    password:String,
    usertype:String,
    userId:String
 },{timestamps: true})

 const loginModel=new mongoose.model('logintable',loginSchema)
 //attentance schema

//  const attentanceSchema=new mongoose.Schema({
//     employeeId:String,
//     date:String,
//     status:String,
// },{timestamps: true})

// //model
// const attentanceModel=new mongoose.model('attentancetable',attentanceSchema)


// //schema
// const loginModel= new mongoose.Model('logintable',loginschema)
// email:String,
// password:String
// },{}

//managesalary



// const salarySchema = new mongoose.Schema({
//   name: String,
//   employeeId: String,
//   salary: Number,
// });
// const SalaryModel = mongoose.model('Salarytable', salarySchema);
//

const Schema = mongoose.Schema;

// Define the schema for the Leave entity
const leaveSchema = new Schema({
  userId:{ type: String, required: true },
  userName: { type: String, required: true},
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  reason: { type: String, required: true },
  comment: { type: String, required: false }, // Assuming comment is optional
  status: Number, //
});

// Create a model based on the schema
const Leave = mongoose.model('Leave', leaveSchema);

module.exports = Leave;

// Define the schema for attendance
const attendanceSchema = new Schema({
  userId: { type: String, required: true },
  name: { type: String, required: true },
  date: { type: Date, default: Date.now },
  punchInTime:  String ,
  punchOutTime: String,
  attendmark:{type:String,default:'absent'},
});

// Create a model based on the schema
const Attendance = mongoose.model('Attendance', attendanceSchema);



// Define the performance schema
const performanceSchema = new Schema({
  userId: { type: String, required: true },
  fromDate :{type:String,required:true},
  toDate :{type:String,required:true},
  performance:{type:String,required:true}
  
});

// Create a model based on the schema
const Performance = mongoose.model('Performance', performanceSchema);

module.exports = Performance;

// Salary Schema
const salarySchema = new mongoose.Schema({
  employee: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee',
  },
  amount: Number,
  
  date: Date,
});

const Salary = mongoose.model('Salary', salarySchema);


const empMonthlyP=new mongoose.Schema({
  empid:{type:mongoose.Schema.Types.ObjectId, ref:'employee_tbl'},
  performance:{type:String},
  month:{type:String},
  year:{type:String}
},{timestamps:true})
const  empmonthlyPM=new mongoose.model('empperformence',empMonthlyP)





module.exports = {userModel,hrModel,loginModel,Attendance,Leave,Performance,Salary,empmonthlyPM};