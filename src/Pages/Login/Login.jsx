import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../Components/Context/UserProvider";


import TitlePic from "../../Images/Homepage/PokemonLogo.png";

const Login = () => {
  const navigate = useNavigate()
  const { handleSubmit, register } = useForm();
  const {user,setUser}  = useContext(UserContext)
  console.log(user)

  
  const onSubmit = (values) => {
  if(values.password.length <= 8) return alert('cannot be less than 8 characters')
    console.log(values)
    localStorage.setItem('users',JSON.stringify(values))
    setUser(values)
    navigate('/')


  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="h-screen  flex justify-center items-center bg-customBlue">
        <div className="h-96 w-96 bg-white rounded-xl items-center flex flex-col">
          <img className="h-10 mt-5" src={TitlePic} alt="" />
          <p className="mt-10 font-kanit">Username</p>
          <input
            type="text"
            {...register("username")}
            className="border-2 border-slate-600 font-kanit "
          />
          <p className="mt-10 font-kanit">Password</p>
          <input
            type="password"
            {...register("password")}
            className="border-2 border-slate-600 font-kanit"
          />
          <button
            type="submit"
            className="mt-20 h-9 w-28  bg-customBlue text-white font-kanit"
          >
            Login
          </button>
        </div>
      </div>
    </form>
  );
};

export default Login;
