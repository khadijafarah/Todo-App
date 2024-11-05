import { useState } from "react";
import { Divider, Form } from "antd";
import Input from "antd/es/input/Input";
import { FaRegUserCircle } from "react-icons/fa";
import { TiMail } from "react-icons/ti";
import { FcGoogle } from "react-icons/fc";
import { IoLogoApple } from "react-icons/io5";
import { MdOutlineLock } from "react-icons/md";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";


const SignUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isOtpSend, setIsOtpSend] = useState(false);
  const [otp, setOtp] = useState("");
  // const navigate = useNavigate();



  const handleOTP = async (e) => {
    e.preventDefault();
    try {
      const data = {
        otp,
        email,
      };
  console.log(data);
      const response = await axios.post(
        "https://staging-be-ecom.techserve4u.com/api/user/verifyotp",
        data
      );
      console.log("otp", response);
      if(response.data.token){
        localStorage.setItem("token",response.data.token)
        navigate("/sign-in");

      }
    } catch (error) {
      console.log("error", error);
    }
  };
  const onFinish = async(values) => {
    const data = {
      name :values.name,
      password :values.password,
      email :values.email,
    };
    try {
    
      const response = await axios.post(
        "https://staging-be-ecom.techserve4u.com/api/user/signup",
        data
      );
      if (response?.data?.isOtpSend) {
        // alert("Registered Succefully")
        setIsOtpSend(true);
      }
      console.log("response", response);
    } catch (error) {
      console.log("error", error);
    }
   
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="signup-container">
      {isOtpSend ? (
        <div className="login-form-box">
          <h2>Verify OTP</h2>
          <form onSubmit={handleOTP} className="login-form">
            <div className="form-group">
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
              />
            </div>
            <button type="submit">Send & Verify</button>
          </form>
        </div>
      ) : (
        <div className="signup-form-container">
          <Form
    
            className="signup-form"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            name="auth-form"
          >
            <h3>Create New Account</h3>
            <p>To stay connected with us, please sign up.</p>
            <Form.Item
              name="Google"
            >
              <Input

                prefix={<FcGoogle size={20} />}
                placeholder="Continue With Google"
                className="input-box"
              ></Input>
            </Form.Item>
            <Form.Item
              name="Apple"
            >
              <Input
                prefix={<IoLogoApple size={20} />}
                placeholder="Continue With Apple"
                className="input-box"
              ></Input>
            </Form.Item>
            <Divider>Or Sign Up With</Divider>

            <Form.Item
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please input your name!",
                },
              ]}
            >
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                prefix={<FaRegUserCircle />}
                type="text"
                placeholder="Enter name"
                className="input-box"
              ></Input>
            </Form.Item>
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
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input
                 value={password}
                 onChange={(e) => setPassword(e.target.value)}
                prefix={<MdOutlineLock size={20} />}
                type="password"
                placeholder="Enter password"
                className="input-box"
              ></Input>
            </Form.Item>
            <input type="checkbox" className="mx-2" />
            <label>Keep signed in to stay connected</label>
            <button className="form-btn my-3">Sign Up</button>
            <p className="text-center my-3">
              Already have an account? <Link to="/sign-in">Sign In</Link>
            </p>
            <p className="text-center my-3">
              By clicking, Sign In , You agree to our Terms of <br /> Use and
              Privacy Policy
            </p>
          </Form>
        </div>
      )}
    </div>
  );
};

export default SignUp;
