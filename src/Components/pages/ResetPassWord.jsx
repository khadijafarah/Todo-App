import { Form, Input } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { MdOutlineLock } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";

const ResetPassWord = () => {
  const [form] = Form.useForm(); /*creates a form instance*/
  const location = useLocation();
  const params = new URLSearchParams(location.search).get("email");
  const [otp, setOtp] = useState();
  const [email, setEmail] = useState("");
  const [resetPassword, setResetPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (params) {
      setEmail(params);
      form.setFieldsValue({
        email: params,
      }); /* adding this line to update the form inital value*/
    }
  }, [params]);
  const onFinish = async (values) => {
    const data = {
      otp: values.otp,
      email: values.email,
      password: values.password,
    };

    try {
      const response = await axios.patch(
        "https://staging-be-ecom.techserve4u.com/api/user/resetPassword",
        data
      );
      console.log(response);
      if (response?.data?.success) {
        navigate("/sign-in");
      }
    } catch (error) {
      console.log("error", error);
    }

    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  console.log(email);
  return (
    <div className="forgetpass-container">
      <div className="forgetpass-form-container">
        <Form
          form={form} /*pasinh the form as a property */
          className="resetpass-form"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          name="auth-form"
          initialValues={{ email: email }}
        >
          <h3>Reset Password</h3>
          <p>Setting Password for test123@gmail.com</p>
          <Form.Item
            name="otp"
            rules={[
              {
                required: true,
                message: "Enter OTP",
              },
            ]}
          >
            <Input
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              prefix={<MdOutlineLock size={20} />}
              type="number"
              placeholder="Enter OTP"
              className="input-box"
            ></Input>
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Enter new Password",
              },
            ]}
          >
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              prefix={<MdOutlineLock size={20} />}
              type="email"
              placeholder="Enter email"
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
              value={resetPassword}
              onChange={(e) => setResetPassword(e.target.value)}
              prefix={<MdOutlineLock size={20} />}
              type="password"
              placeholder="New password"
              className="input-box"
            ></Input>
          </Form.Item>

          <button className="form-btn my-2 ">Reset Password</button>
          <p className="text-center py-5">
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
