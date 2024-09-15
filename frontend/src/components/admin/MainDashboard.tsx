import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Cookies from "universal-cookie";
import Api from "../../utils/Api";
import axios from "axios";

const MainDashboard: any = () => {
  const cookeis = new Cookies();
  const token = cookeis.get("TOKEN");
  const [user, setUser] = useState();
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    const config = {
      method: "get",
      url: `${Api}/user/manager`,
      data: null,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios(config)
      .then((result) => {
        setIsAdmin(result.data.isAdmin);
        setUser(result.data);
        console.log(result.data);
        console.log(isAdmin);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div dir="rtl">
      <div>
        <button
          data-drawer-target="logo-sidebar"
          data-drawer-toggle="logo-sidebar"
          aria-controls="logo-sidebar"
          type="button"
          className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark: dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span className="sr-only">Open sidebar</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            />
          </svg>
        </button>
        {/* sibare  */}
        <Sidebar />
        {/* sibare  */}
        <div className="p-4 sm:ml-64">
          <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
                <p className="text-xl  dark:text-gray-500">
                  نام: {user ? user.firstName : ""}
                </p>
              </div>
              <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
                <p className="text-xl  dark:text-gray-500">
                  نام خانوادگی: {user ? user.lastName : ""}
                </p>
              </div>
              <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
                <p className="text-xl  dark:text-gray-500">
                  نام کاربری :{user ? user.userName : ""}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
              <p className="text-xl  dark:text-gray-500">
                آدرس :{user ? user.address : ""}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                <p className="text-xl  dark:text-gray-500">
                  ایمیل :{user ? user.email : ""}
                </p>
              </div>
              <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                <p className="text-xl  dark:text-gray-500">
                  نقش کاربری : {isAdmin ? "مدیریت" : ""}
                </p>
              </div>
              <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                شماره تماس :{user ? user.phoneNumber : ""}
              </div>
              <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                <p className="text-xl  dark:text-gray-500">تعداد محصولات :</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                تعداد سفارشات :
              </div>
              <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                <p className="text2xl  dark:text-gray-500">تعداد مقالات :</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;
