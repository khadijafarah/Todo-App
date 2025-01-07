import { Form, Input } from "antd";
import axios from "axios";
import { useState } from "react";
import { TiMail } from "react-icons/ti";
import { Link, useNavigate } from "react-router-dom";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [isOtpSend, setIsOtpSend] = useState(false);
  const navigate = useNavigate();
  const onFinish = async (values) => {
    const data = {
      email: values.email,
    };

    try {
      const response = await axios.post(
        "https://staging-be-ecom.techserve4u.com/api/user/forgotPassword",
        data
      );
      console.log(response);
      if (response?.data?.isOtpSend) {
        setIsOtpSend(true);
        navigate(`/reset-password?email=${values.email}`);
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  console.log(isOtpSend);
  return (
    <div className="forgetpass-container">
      <div className="forgetpass-form-container">
        <Form
          className="forgetpass-form"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          name="auth-form"
        >
          <h3>Forget Password</h3>
          <p>
            Enter your account email address. We will send a confirmation email{" "}
            <br />
            to reset your password.
          </p>
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              prefix={<TiMail size={20} />}
              type="text"
              placeholder="Enter email"
              className="input-box"
            ></Input>
          </Form.Item>
          <button className="form-btn my-2 ">Get OTP</button>
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

export default ForgetPassword;
