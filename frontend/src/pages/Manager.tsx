import { useState } from "react";

const Manager: any = () => {
  const [register, setRegister] = useState(false);
  const [login, setLogin] = useState(false);

  const handleRegister = (e) => {
    console.log("submit");
  };

  const handleLogin = (e) => {
    console.log("submit");
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
                    name="txtEmail"
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
                    name="txtName"
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
                    name="txtLastName"
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
                    name="txtUserName"
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
                    name="txtTellNumber"
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
                    name="txtPassword"
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
                  type="email"
                  name="txtEmail"
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
