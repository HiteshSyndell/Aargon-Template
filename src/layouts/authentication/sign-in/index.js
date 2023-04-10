import { useEffect, useState } from "react";

// react-router-dom components
import { Link, useNavigate } from "react-router-dom";

// @mui material components
import Switch from "@mui/material/Switch";

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonInput from "components/ArgonInput";
import ArgonButton from "components/ArgonButton";

// Authentication layout components
import IllustrationLayout from "layouts/authentication/components/IllustrationLayout";
import { useGetUserDataQuery } from "Features/UserAPI";

// Image
const bgImage =
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/signin-ill.jpg";

function Illustration() {
  const [rememberMe, setRememberMe] = useState(false);

  const [signIn,setSignIn]=useState()

  let [input,setInput]=useState({
    email:'',
    password:''
  })

  const {email,password} =input

  let navigate=useNavigate()

  const handleSetRememberMe = () => {
    setRememberMe(!rememberMe);
  
  }

  const {data,isLoading}=useGetUserDataQuery()
  
  useEffect(()=>{
    {
      isLoading?'':setSignIn(data)
    }
  },[isLoading])
  
  let signUser=()=>{
   
    console.log(signIn)
    if(signIn[0].email==email && signIn[0].password==password  ){
      localStorage.setItem("admin",JSON.stringify(input))
      localStorage.setItem("login",true)
      localStorage.setItem("ifadmin",'ifAdmin')
      navigate('/')
      alert("admin")
    }
    else if(signIn[1].email==email && signIn[1].password==password  ){
      localStorage.setItem("manager",JSON.stringify(input))
      localStorage.setItem("login",true)
      localStorage.setItem("ifmanager",'ifManager') 
      navigate('/')
      alert('manager')
    }
    else if(signIn[2].email==email && signIn[2].password==password  ){
      localStorage.setItem("user",JSON.stringify(input))
      localStorage.setItem("login",true)
      localStorage.setItem("ifuser",'ifUser')
      navigate('/')
      alert('user')
    }
    else{
      alert('Invalid Cradintails...:( Please Try Again Later')
    }
  }

  return (
    <IllustrationLayout
      title="Sign In"
      description="Enter your email and password to sign in"
      illustration={{
        image: bgImage,
        title: '"Attention is the new currency"',
        description:
          "The more effortless the writing looks, the more effort the writer actually put into the process.",
      }}
    >
      
          <ArgonBox component="form" role="form">
        <ArgonBox mb={2}>
          <ArgonInput type="email" placeholder="Email" size="large" name="email" value={email} 
          onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})} required />
        </ArgonBox>
        <ArgonBox mb={2}>
          <ArgonInput type="password" placeholder="Password" size="large" name="password" value={password}
          onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})} />
        </ArgonBox>
        <ArgonBox display="flex" alignItems="center">
          <Switch checked={rememberMe} onChange={handleSetRememberMe} />
          <ArgonTypography
            variant="button"
            fontWeight="regular"
            onClick={handleSetRememberMe}
            sx={{ cursor: "pointer", userSelect: "none" }}
          >
            &nbsp;&nbsp;Remember me
          </ArgonTypography>
        </ArgonBox>
        <ArgonBox mt={4} mb={1}>
          <ArgonButton color="info" size="large" fullWidth onClick={signUser}>
            Sign In
          </ArgonButton>
        </ArgonBox>
        <ArgonBox mt={3} textAlign="center">
          <ArgonTypography variant="button" color="text" fontWeight="regular">
            Don&apos;t have an account?{" "}
            <ArgonTypography
              component={Link}
              to="/sign-up"
              variant="button"
              color="info"
              fontWeight="medium"
            >
              Sign up
            </ArgonTypography>
          </ArgonTypography>
        </ArgonBox>
      </ArgonBox>
    
    </IllustrationLayout>
  );
}

export default Illustration;
