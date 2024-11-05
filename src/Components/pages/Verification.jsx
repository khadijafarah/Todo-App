import { Flex, Input} from "antd"
import Title from "antd/es/skeleton/Title"
import { Link } from "react-router-dom"


const Verification = () => {
  return (
    <div className="signin-container">
       <div className="signin-form-container" >
         
        <Flex className="verification-form" gap="middle" align="flex-start"  vertical>
          <h3>Verification</h3>
          <p>Enter the 6-digit code that we sent to <br /> s********0@gmail.com</p>
        <Title level={5}>Verification</Title>
        <Input.OTP variant="filled"/>

        <button className="form-btn my-2 ">Submit</button>
        <p className="text-center">OTP(One time password) valid for 5 minutes</p>
        <p className="text-center">Didn’t receive your code, or did the code time expire?<Link> Get a new one.</Link></p>
        </Flex>
        
       </div>
    </div>
  )
}

export default Verification