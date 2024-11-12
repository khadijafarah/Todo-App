import { Flex, Input} from "antd"
import Title from "antd/es/skeleton/Title"
import axios from "axios"
import { useState } from "react"
import { Link,useNavigate } from "react-router-dom"


const Verification = ({email}) => {
  const [otp,setOtp] = useState();
  const navigate = useNavigate();

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

  return (
    <div className="signin-container">
       <div className="signin-form-container" >
         
        <Flex className="verification-form" gap="middle" align="flex-start"  vertical>
          <h3>Verification</h3>
          <p>Enter the 6-digit code that we sent to <br /> s********0@gmail.com</p>
        <Title level={5}>Verification</Title>
        <Input.OTP variant="filled" style={{width:"515px"}}
        onChange={(value) => setOtp(value)}
        />
         {/* <input type="email" style={{}}  onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email"/> */}
        <button className="form-btn my-2 " onClick = {handleOTP}>Submit</button>
        <p className="text-center py-5">OTP(One time password) valid for 5 minutes <br />Didn’t receive your code, or did the code time expire?<Link> Get a new one.</Link></p>
        </Flex>
        
       </div>
    </div>
  )
}

export default Verification