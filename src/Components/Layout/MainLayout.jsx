import  { useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const MainLayout = () => {
    const [token, setToken] = useState (null);
    useEffect (() => {
        const localToken = localStorage.getItem("token");
        if(localToken){
            setToken(true)
        }else {
            setToken(false)
        }
    },[])
    if(token===null){
        return <div> Please wait until page is loading</div>
    }
  return (
    <>
    {token?<Outlet></Outlet>: <Navigate to={"/sign-in"}></Navigate>}
    </>
  )
}

export default MainLayout