import React, { useState, useEffect } from 'react';
import { Form, Input, Select, Button, message } from 'antd';
import axios from 'axios';

const { Option } = Select;

const SalaryForm = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/fetchAllemp')
      .then(res => {
        setEmployees(res.data);
      })
      .catch(err => {
        console.error('Error fetching employees:', err);
      });
  }, []);

  const onFinish = (values) => {
    axios.post('http://localhost:8000/salaries', { employee_id: values.employeeId, amount: values.amount, date: values.date })
      .then(() => {
        message.success(`Salary added for employee ${values.employeeId}`);
      })
      .catch(err => {
        message.error(`Error: ${err.response.data.error}`);
      });
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
      <h2>Add Salary</h2>
      <Form
        layout="vertical"
        onFinish={onFinish}
      >
        <Form.Item
          name="employeeId"
          label="Employee"
          rules={[{ required: true, message: 'Please select an employee' }]}
        >
          <Select placeholder="Select Employee">
            {employees.map(employee => (
              <Option key={employee._id} value={employee._id}>{employee.email}</Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          name="amount"
          label="Amount"
          rules={[{ required: true, message: 'Please enter the amount' }]}
        >
          <Input type="number" />
        </Form.Item>
        <Form.Item
          name="date"
          label="Date"
          rules={[{ required: true, message: 'Please select a date' }]}
        >
          <Input type="date" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Add Salary
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SalaryForm;




