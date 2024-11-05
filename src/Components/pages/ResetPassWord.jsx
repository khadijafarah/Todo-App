import { Form, Input } from "antd";
import { MdOutlineLock } from "react-icons/md";
import { Link } from "react-router-dom";

const ResetPassWord = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="forgetpass-container">
      <div className="forgetpass-form-container">
        <Form
          className="resetpass-form"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          name="auth-form"
        >
          <h3>Reset Password</h3>
          <p>Setting Password for test123@gmail.com</p>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Enter new Password",
              },
            ]}
          >
            <Input
              prefix={<MdOutlineLock size={20} />}
              type="password"
              placeholder="Enter new password"
              className="input-box"
            ></Input>
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Confirm Password",
              },
            ]}
          >
            <Input
              prefix={<MdOutlineLock size={20} />}
              type="password"
              placeholder="Confirm password"
              className="input-box"
            ></Input>
          </Form.Item>

          <button className="form-btn my-2 ">Reset Password</button>
          <p className="text-center">
            {" "}
            By clicking Sign In, You agree to our
            <Link>
              {" "}
              Terms of <br /> Use and Privacy Policy
            </Link>
          </p>
        </Form>
      </div>
    </div>
  );
};

export default ResetPassWord;
