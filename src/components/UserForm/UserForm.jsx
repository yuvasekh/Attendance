import React, { useEffect, useState } from 'react';
import { Form, Input, DatePicker, Select } from 'antd';
import jwtDecode from 'jwt-decode';

const { Option } = Select;

const UserDataForm = () => {
  const [form] = Form.useForm();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Fetch data from localStorage when component mounts
    const storedData = localStorage.getItem('token')
    if (storedData) {
        let info=jwtDecode(storedData)
      setUserData(info);
    }
  }, []);

  useEffect(() => {
    // When userData changes, set form fields' values
    if (userData) {
      form.setFieldsValue(userData);
    }
  }, [userData, form]);

  return (
    <div>
      {userData && (
        <Form form={form} layout="vertical">
          <Form.Item label="ID" name="Id">
            <Input disabled />
          </Form.Item>
          <Form.Item label="Name" name="name">
            <Input />
          </Form.Item>
          <Form.Item label="Role" name="role">
            <Select>
              <Option value="user">User</Option>
              {/* Add other options as needed */}
            </Select>
          </Form.Item>
          {/* <Form.Item label="Joining Date" name="joiningDate">
            <DatePicker />
          </Form.Item> */}
          <Form.Item label="Degree" name="degree">
            <Input />
          </Form.Item>
        </Form>
      )}
    </div>
  );
};

export default UserDataForm;
