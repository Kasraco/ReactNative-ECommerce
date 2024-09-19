import { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import Api from "../../../utils/Api";
import axios, { AxiosRequestConfig } from "axios";
import toast from "react-hot-toast";
const CreatePost = () => {
  const cookies = new Cookies();
  const token = cookies.get("TOKEN");

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("");
  const [shortdesc, setShortdesc] = useState("");
  const [writer, setWriter] = useState("");
  const [mainimg, setMainimg] = useState("");
  const [message, setMessage] = useState("");
  const [selectedCategory, setSelectedCategory] = useState([]);

  useEffect(() => {
    const configWriter = {
      method: "get",
      url: `${Api}/user/Manager`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const fetchData = async () => {
      const res = await axios.get(`${Api}/category/`);
      console.log(res.data);
      setSelectedCategory(res.data);
    };

    //Fetch data from category for SelectedCategory
    fetchData();

    if (selectedCategory.length > 0) {
      setCategory(selectedCategory[0].title);
    }

    //get firstName And LastName Of Current User
    axios
      .get(`${Api}/user/Manager`, configWriter)
      .then((result) => {
        setWriter(`${result.data.firstName} ${result.data.lastName}`);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // add post
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const sendData = await axios.post(`${Api}/blog/addBlog`, {
      title,
      desc,
      shortdesc,
      writer,
      category,
      mainimg,
      message,
    });
    setMessage(sendData.data.message);
    toast.success(<div dir="rtl">{sendData.data.message}</div>);
    setTitle("");
    setMainimg("");
    setCategory("");
    setDesc("");
    setShortdesc("");
  };
  // add post

  return (
    <section dir="rtl" className="w-full">
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16 ">
        <h2 className="mb-4 text-xl font-bold text-gray-900">افزودن مقاله</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2 ">
              <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="txtTitle">
                عنوان
              </label>
              <input
                name="txtTitle"
                id="txtTitle"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                type="text"
              />
            </div>
            <div>
              <label
                className="block mb-2 text-sm font-medium text-gray-900"
                htmlFor="categoryselect"
              >
                دسته بندی
              </label>
              <select
                name="categoryselect"
                id="categoryselect"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              >
                {selectedCategory.map((e, i) => {
                  return (
                    <option key={i} value={e.title}>
                      {e.title}
                    </option>
                  );
                })}
              </select>
            </div>

            <div>
              <label
                className="block mb-2 text-sm font-medium text-gray-900"
                htmlFor="txtShortDescription"
              >
                توضیحات کوتاه
              </label>
              <input
                name="txtShortDescription"
                id="txtShortDescription"
                value={shortdesc}
                onChange={(e) => setShortdesc(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                type="text"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="txtWriter">
                نویسنده
              </label>
              <input
                name="txtWriter"
                id="txtWriter"
                readOnly
                value={writer}
                onChange={(e) => setWriter(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                type="text"
              />
            </div>

            <div>
              <label
                className="block mb-2 text-sm font-medium text-gray-900"
                htmlFor="txtmainImage"
              >
                تصویر اصلی
              </label>
              <input
                name="txtmainImage"
                id="txtmainImage"
                value={mainimg}
                onChange={(e) => setMainimg(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                type="text"
              />
            </div>

            <div className="sm:col-span-2 ">
              <label
                className="block mb-2 text-sm font-medium text-gray-900"
                htmlFor="txtDescription"
              >
                توضیحات
              </label>
              <textarea
                rows={10}
                name="txtDescription"
                id="txtDescription"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              />
            </div>
          </div>
          <button className="mx-auto block mb-4 mt-10 bg-orange-500 text-white p-3 rounded-lg">
            ذخیره
          </button>
        </form>
      </div>
    </section>
  );
};

export default CreatePost;
