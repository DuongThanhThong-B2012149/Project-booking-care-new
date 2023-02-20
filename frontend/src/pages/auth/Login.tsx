import { useAppDispatch } from "app/hooks";
import { ChangeEvent, FormEvent, useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { userService } from "services";
import "styles/Login.scss";
import { setUser } from ".";

interface Props {}
const Login = (props: Props) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [loginValues, setLoginValues] = useState({
    username: "",
    password: "",
  });

  const [isShowPassword, setIsShowPassword] = useState(false);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginValues({
      ...loginValues,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const { data } = await userService.handleLogin(
        loginValues.username,
        loginValues.password
      );

      // Set user in redux
      if (data) {
        dispatch(setUser(data));
        navigate("/");
      }
    } catch (error: any) {
      console.log(error.response.data.message);
      toast.error(error.response.data.message);
    }
  };
  return (
    <div className="login-background">
      <form onSubmit={handleSubmit}>
        <div className="login-container">
          <div className="login-content row">
            <div className="col-12 text-center text-login">Login</div>
            <div className="col-12 form-group login-input">
              <label>Username</label>
              <input
                onChange={handleChange}
                value={loginValues.username}
                placeholder="Enter your username"
                type="text"
                name="username"
                className="form-control my-1"
              />
            </div>
            <div className="col-12 form-group login-input">
              <label>Password</label>
              <div className="custom-input-password">
                <input
                  onChange={handleChange}
                  value={loginValues.password}
                  placeholder="Enter your password"
                  type={isShowPassword ? "text" : "password"}
                  name="password"
                  className="form-control my-1"
                />
                <button
                  type="button"
                  onClick={() => {
                    setIsShowPassword(!isShowPassword);
                  }}
                  className="icon-eye btn"
                >
                  {isShowPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
                </button>
              </div>
            </div>
            <div className="col-12">
              <button type="submit" className="btn w-100 btn-login border-0">
                Login
              </button>
            </div>
            <div className="col-12">
              <span className="text-forgot-password">Forgot your password</span>
            </div>
            <div className="col-12">
              <p className="text-center fs-6 text-other-login">
                Or Login with:{" "}
              </p>
            </div>
            <div className="col-12 social-login d-flex justify-content-center gap-2">
              <FcGoogle className="fs-2" />
              <BsFacebook className="fs-3 text-primary" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
