import axios from "axios";
import { useState } from "react";
import Api from "../../../Api";
import toast from "react-hot-toast";
import Sidebar from "../Sidebar";

const CategoryCreate = () => {
  const [title, setTitle] = useState("");
  const [mainimg, setmainimg] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const sendData = await axios.post(`${Api}/category/addcategory`, {
      title,
      mainimg,
      message,
    });
    setMessage(sendData.data.message);
    toast.success(<div dir="rtl">{sendData.data.message}</div>);
    setTitle("");
    setmainimg("");
  };
  return (
    <div>
      <div dir="rtl">
        <div className="p-4 sm:ml-64">
          <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg">
            <Sidebar />
            <section className="w-full " dir="rtl">
              <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16 ">
                <h2 className="mb-4 text-xl font-bold text-gray-900">
                  افزودن دسته بندی
                </h2>

                <form onSubmit={(e) => handleSubmit(e)}>
                  <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="title"
                        className="block  mb-2 text-sm font-medium text-gray-900 "
                      >
                        عنوان دسته بندی
                      </label>
                      <input
                        type="text"
                        name="title"
                        placeholder="Category Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                      ></input>
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="title"
                        className="block  mb-2 text-sm font-medium text-gray-900 "
                      >
                        تصویر
                      </label>
                      <input
                        type="text"
                        name="mainImg"
                        placeholder="mainImg "
                        value={mainimg}
                        onChange={(e) => setmainimg(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                      ></input>
                    </div>

                    <button
                      type="submit"
                      id="btnSubmit"
                      className="mx-auto block mb-4 mt-10 bg-orange-500 text-white p-3 rounded-lg"
                    >
                      ذخیره
                    </button>
                  </div>
                </form>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCreate;
