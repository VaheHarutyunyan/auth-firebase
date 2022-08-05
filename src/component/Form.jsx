import React from "react";
import {LockOutlined, UserOutlined} from "@ant-design/icons";
import {Button, Form, Input} from "antd";

const Forms = ({onFinish, btn}) => {
  return (
    <div className="form-container">
      <Form
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="E-mail"
          name="email"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Email"
          />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              min: 6,
              max: 30,
              message: "Password must be between 6 and 30",
            },
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit" shape="around">
            {btn}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Forms;
