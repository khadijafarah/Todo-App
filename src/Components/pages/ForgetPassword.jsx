import { Form, Input } from "antd";
import { TiMail } from "react-icons/ti";
import { Link } from "react-router-dom";


const ForgetPassword = () => {
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
          className="forgetpass-form"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          name="auth-form"
         >
           <h3>Forget Password</h3>
           <p>Enter your account email address. We will send a confirmation email <br />to reset your password.</p>
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
            ></Input>
          </Form.Item>
          <button className="form-btn my-2 ">Get OTP</button>
          <p className="text-center"> By clicking Sign In, You agree to our<Link> Terms of <br /> Use and Privacy Policy</Link></p>
         </Form>
      </div>

    </div>
  )
}

export default ForgetPassword