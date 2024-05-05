import CustomNavbar from "@/component/navbar/page"
import Link from "next/link"
Link


const Login = () => {
  return (
    <>
    <div>
        <CustomNavbar/>
        <input placeholder='enter password' type='password'/> <br/>
        <input placeholder='enter email'/> <br/>
        <button className="bg-black text-white m-4">Login</button>
        <br/>
        Don't have an account? <Link href="/register">Signup</Link>
    </div>
    </>
  )
}

export default Login