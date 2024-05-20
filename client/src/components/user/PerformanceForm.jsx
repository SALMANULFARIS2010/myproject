// import React, { useState } from 'react';
// import { Form, Input, DatePicker, Button, message } from 'antd';
// import axios from 'axios';

// const PerformanceForm = () => {
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (values) => {
//     setLoading(true);
//     try {
//       const response = await axios.post('http://localhost:8000/performances', values);
//       message.success('Performance record created successfully');
//       console.log('Response:', response.data);
//     } catch (error) {
//       console.error('Error creating performance record:', error);
//       message.error('Failed to create performance record');
//     }
//     setLoading(false);
//   };

//   return (
//     <Form
//       layout="vertical"
//       onFinish={handleSubmit}
//     >
//       <Form.Item
//         label="User ID"
//         name="userId"
//         rules={[{ required: true, message: 'Please input the user ID' }]}
//       >
//         <Input />
//       </Form.Item>

//       <Form.Item
//         label="From Date"
//         name="fromDate"
//         rules={[{ required: true, message: 'Please select the from date' }]}
//       >
//         <DatePicker />
//       </Form.Item>

//       <Form.Item
//         label="To Date"
//         name="toDate"
//         rules={[{ required: true, message: 'Please select the to date' }]}
//       >
//         <DatePicker />
//       </Form.Item>

//       <Form.Item
//         label="Performance"
//         name="performance"
//         rules={[{ required: true, message: 'Please input the performance' }]}
//       >
//         <Input.TextArea />
//       </Form.Item>

//       <Form.Item>
//         <Button type="primary" htmlType="submit" loading={loading}>
//           Submit
//         </Button>
//       </Form.Item>
//     </Form>
//   );
// };

// export default PerformanceForm;


import React from 'react';
import { Form, Input, Select, Button, message } from 'antd';
import { UserOutlined, PercentageOutlined, CalendarOutlined } from '@ant-design/icons';
import axios from 'axios';
import { useParams } from 'react-router-dom';
const { Option } = Select;

const PerformanceForm = () => {
    const params=useParams()
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    console.log(params.id)
    try {
      await axios.post(`http://localhost:8000/monthlyP/${params.id}`, values); // Replace '/api/submit-performance' with your actual backend endpoint
      message.success('Performance data submitted successfully');
      //form.resetFields();
    } catch (error) {
      console.error('Error submitting performance data:', error);
      message.error('Failed to submit performance data. Please try again later.');
    }
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      initialValues={{
        empId: '',
        performance: '',
        month: undefined,
        year: undefined,
      }}
      scrollToFirstError
      validateTrigger="onSubmit"
      colon={false}
      requiredMark={false}
    >
      {/* <Form.Item
        label="Employee ID"
        name="empId"
        rules={[{ required: true, message: 'Please enter employee ID' }]}
      >
        <Input prefix={<UserOutlined />} placeholder="Enter Employee ID" />
      </Form.Item> */}
      <Form.Item
        label="Performance"
        name="performance"
        rules={[{ required: true, message: 'Please enter performance' }]}
      >
        <Input prefix={<PercentageOutlined />} type="number" placeholder="Enter Performance" />
      </Form.Item>
      <Form.Item
        label="Month"
        name="month"
        rules={[{ required: true, message: 'Please select month' }]}
      >
        <Select
          prefix={<CalendarOutlined />}
          placeholder="Select Month"
          allowClear
        >
          {Array.from({ length: 12 }, (_, i) => {
            const month = new Date(null, i + 1, null).toLocaleDateString('en', { month: 'long' });
            return <Option key={month} value={month}>{month}</Option>;
          })}
        </Select>
      </Form.Item>
      <Form.Item
        label="Year"
        name="year"
        rules={[{ required: true, message: 'Please select year' }]}
      >
        <Select
          prefix={<CalendarOutlined />}
          placeholder="Select Year"
          allowClear
        >
          {Array.from({ length: 10 }, (_, i) => {
            const year = new Date().getFullYear() - i;
            return <Option key={year} value={year}>{year}</Option>;
          })}
        </Select>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default PerformanceForm;