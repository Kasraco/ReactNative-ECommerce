import { useState } from "react";
import axios, { Axios } from "axios";
import Cookies from "universal-cookie";
import Api from "../utils/Api";
import toast from "react-hot-toast";

const Manager: any = () => {
  const [register, setRegister] = useState(false);
  const [login, setLogin] = useState(false);

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("Ahva, Iran");
  const [message, setMessage] = useState("");
  const [submit, setSubmit] = useState(false);
  const [error, setError] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  const cookies = new Cookies();
  const handleRegister = async (e: any) => {
    try {
      e.preventDefault();
      const config = {
        method: "POST",
        url: `${Api}/user/register`,
        data: {
          email,
          firstName,
          lastName,
          userName,
          password,
          phoneNumber,
          address,
          message,
          submit,
          error,
        },
      };

      await axios(config).then((result) => {
        setSubmit(true);
        setMessage(result.data.message);

        result.data.error
          ? toast.error(<div>{result.data.error}</div>)
          : toast.success(<div>{result.data.message}</div>);

        setEmail("");
        setFirstName("");
        setLastName("");
        setPhoneNumber("");
        setUserName("");
        setPassword("");
        setAddress("");
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogin = async (e: any) => {
    try {
      e.preventDefault();
      const configLogin = {
        method: "POST",
        url: `${Api}/user/login`,
        data: {
          email,
          password,
          error,
          message,
        },
      };
      await axios(configLogin).then((result) => {
        cookies.set("TOKEN", result.data.token, {
          path: "/",
        });
        console.log(result);

        if (result.data.success) {
          const admin = result.data.user.isAdmin;
          if (admin) {
            setMessage(result.data.message);
            setSubmit(true);

            result.data.error
              ? toast.error(<div>{result.data.error}</div>)
              : toast.success(<div>{result.data.message}</div>);

            setTimeout(() => {
              window.location.href = "/dashboard";
            }, 1000);
          } else {
            window.location.href = "/";
          }
        } else {
          result.data.error
            ? toast.error(<div>{result.data.error}</div>)
            : toast.success(<div>{result.data.message}</div>);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="flex flex-wrap justify-center align-middle gap-10 items-center h-screen">
        <div>
          <button
            className="p-3 rounded-lg shadow-lg shadow-indigo-300 bg-indigo-900 text-white"
            onClick={() => {
              setRegister(!register);
            }}
          >
            Register
          </button>
          {register ? (
            <div className="bg-indigo-400 shadow-lg shadow-indigo-300 rounded-lg w-72 m-5 p-4 block mx-auto">
              <form
                className="space-y-4 md:space-y-6 "
                onSubmit={(e) => {
                  handleRegister(e);
                }}
              >
                <div>
                  <label
                    htmlFor=""
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2 "
                    placeholder="Enter YourEmail"
                  />
                </div>

                <div>
                  <label
                    htmlFor=""
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2 "
                    placeholder="Enter Your FirstName"
                  />
                </div>

                <div>
                  <label
                    htmlFor=""
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    LastName
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2 "
                    placeholder="Enter Your LastName"
                  />
                </div>

                <div>
                  <label
                    htmlFor=""
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    UserName
                  </label>
                  <input
                    type="text"
                    name="userName"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2 "
                    placeholder="Enter Your UserName"
                  />
                </div>

                <div>
                  <label
                    htmlFor=""
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Contact Number
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2 "
                    placeholder="Enter Your Tell Number"
                  />
                </div>
                <div>
                  <label
                    htmlFor=""
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2 "
                    placeholder="Enter Your Password"
                  />
                </div>
                <button
                  className="w-full text-white p-3 rounded-lg shadow-xl bg-indigo-800 "
                  type="submit"
                >
                  Register
                </button>
              </form>
            </div>
          ) : (
            ""
          )}
        </div>
        {/* Login */}
        <button
          className="p-3 rounded-lg shadow-lg shadow-indigo-300 bg-indigo-900 text-white"
          onClick={() => {
            setLogin(!login);
          }}
        >
          Login
        </button>

        {login ? (
          <div className="bg-indigo-400 shadow-lg shadow-indigo-300 rounded-lg w-72 m-5 p-4 block ">
            <form
              className="space-y-4 md:space-y-6 "
              onSubmit={(e) => {
                handleLogin(e);
              }}
            >
              <div>
                <label
                  htmlFor=""
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Email
                </label>
                <input
                  type="text"
                  name="txtEmail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2 "
                  placeholder="Enter YourEmail"
                />
              </div>

              <div>
                <label
                  htmlFor=""
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Password
                </label>
                <input
                  type="password"
                  name="txtPassword"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2 "
                  placeholder="Enter Your Password"
                />
              </div>
              <button
                className="w-full text-white p-3 rounded-lg shadow-xl bg-indigo-800 "
                type="submit"
              >
                Login
              </button>
            </form>
          </div>
        ) : (
          ""
        )}
        {/* Login */}
      </div>
    </div>
  );
};

export default Manager;
