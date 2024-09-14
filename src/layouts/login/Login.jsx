import { useState } from 'react' 
import { useAuth } from '../../service/auth'

const Login = () => {
  const [email, setEmail] = useState('john@mail.com')
  const [password, setPassword] = useState('changeme')
  return (
    <div className="flex items-center justify-center h-[100vh] bg-gradient-to-r bg-slate-500">
      <form onSubmit={(e)=>{
        e.preventDefault();
        useAuth({email,password})
      }} id="loginForm"  className="bg-[#fff] flex flex-col w-[450px] gap-[10px] rounded-[12px] px-[20px] py-3 justify-between">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-[20px]">Register</h1>
        <a className="flex items-center mt-1 text-[25px]"  href="./pages/user/user.html">
          <i className="bi bi-x"></i>
        </a>
      </div>

      <label htmlFor="password">
        <input
          id="passwordInput"
          className="bg-slate-400 px-3 p-1 rounded-md w-full"
          autoComplete="12345"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          required
        />
      </label>

      <label htmlFor="name">
        <input
          id="nameInput"
          className="bg-slate-400 px-3 p-1 rounded-md w-full"
          type="text"
          placeholder="Ismingiz"
          required
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />
      </label>

      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <input className="w-[15px] h-[15px]" type="checkbox" />
          <h3>Remember me</h3>
        </div>
        <button className="text-[#FE4500]">Forget Password?</button>
      </div>

      <div className="flex">
        <button
          id="registerButton"
          className="bg-[#FE4500] py-[5px] px-[12px] text-[#fff] rounded-[7px] ms-[83.5%]"
        >
          Log in
        </button>
      </div>
    </form>
    </div>
  )
}

export default Login