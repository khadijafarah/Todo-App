import { Divider, Input } from "antd";
import Form from "antd/es/form/Form";
import axios from "axios";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { IoLogoApple } from "react-icons/io5";
import { MdOutlineLock } from "react-icons/md";
import { TiMail } from "react-icons/ti";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password,setPassword]= useState("");
  const navigate = useNavigate();
  const onFinish = async(values) => {
    try {
      const response = await axios.post("https://staging-be-ecom.techserve4u.com/api/user/signin",{email,password});
      
      const token =response?.data?.token;
      if(token){
        localStorage.setItem("user-token",token)
      }
      setTimeout(
        ()=>{
          navigate("/home");
        },500
      );

    } catch (error) {
      alert ("Error login!");
      console.log(error);
    }

    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };


  return (
    <div className="signin-container">
      <div className="signin-form-container">
        <Form
          className="signin-form"
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
          {/* <p className="text-center">or Sign Up With</p> */}

          <Divider className="text-center">or Sign In With</Divider>
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
              prefix={<TiMail size={20} />}
              type="text"
              placeholder="Enter email"
              className="input-box"
              onChange={(e) => setEmail(e.target.value)}
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
              <Input prefix={<MdOutlineLock size={20}/>} type="password" placeholder="Enter password" className="input-box"    onChange={(e) => setPassword(e.target.value)}></Input>
            </Form.Item>
            <input type="checkbox" className="mx-2" /><label>Keep signed in to stay connected</label>
            <button className="form-btn my-3 ">Sign in</button>
            <p className="text-center">Dont have an account ? <Link to={"/sign-up"}> Sign Up</Link></p>
            <Divider></Divider>
           <p className="text-center fs-6 fw-bold"> <Link to={"/forget-password"}>Forget Password</Link></p>
        </Form>
      </div>
    </div>
  );
};

export default SignIn;
