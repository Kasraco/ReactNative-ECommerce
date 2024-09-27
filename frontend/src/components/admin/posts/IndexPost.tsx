import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FcDeleteDatabase, FcEditImage } from "react-icons/fc";
import Api from "../../../utils/Api";
import axios from "axios";
import Sidebar from "../Sidebar";
import DataTable from "react-data-table-component";
import fullDate from "../../../utils/FullTime";

type posts = {
  title: string;
  mainimg: string;
  createAt: Date;
  _id: string | undefined;
};
const IndexPost = () => {
  const [data, setData] = useState<posts[]>([]); //data is an empty array of categories
  const [filterData, setFilterData] = useState<posts[]>([]);

  // initila Data Table of ract-data-table-component
  // define columns for DataTable
  const columns = [
    // define first Column
    {
      name: "تصویر", // Set Title of Column
      selector: (
        row: posts //set value for column rows
      ) => (
        <div className="flex">
          <img
            src={row.mainimg}
            alt={row.title}
            className="object-cover w-16 h-16 rounded-full p-1 shadow-md "
          />
        </div>
      ),
      sortable: true, //set sortable property to true for enable sort data
    },
    //End of define first Column
    //Define second column
    {
      name: "عنوان",
      selector: (row: posts) => row.title,
      sortable: true,
    },
    //Define second column
    {
      name: "تاریخ",
      selector: (row: posts) => fullDate(row.createAt),
      sortable: true,
    },
    {
      name: "عملیات",
      selector: (row: posts) => (
        <div className="flex">
          <Link to={`/post-edit/${row._id}`}>
            <FcEditImage className="text-2xl m-3" />
          </Link>

          <button title="Delete" onClick={() => deletePost(row._id)}>
            <FcDeleteDatabase className="text-2xl m-3" />
          </button>
        </div>
      ),
      sortable: true,
    },
  ];

  const fetchData = async () => {
    try {
      const result = await axios.get(`${Api}/blog`);
      setData(result.data);
      setFilterData(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deletePost = async (id: string) => {
    try {
      const confres = confirm("آیا برای حذف این پست اطمینان دارید؟");
      if (confres) {
        await axios.delete(`${Api}/blog/deleteBlog/${id}`);
        fetchData(); // Call fetchData after deletion
      }
    } catch (error) {
      console.log(error);
    }
  };

  const search = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newData = filterData.filter((row: posts) => {
      return row.title.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase());
    });
    setData(newData);
  };

  return (
    <div>
      <div dir="rtl">
        <div className="p-4 sm:ml-64">
          <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg">
            <Sidebar />
            {/* Middle Content */}
            <div className="bg-white/10 col-span-9 rounded-lg p-6 ">
              <div className="text-end">
                <input
                  onChange={search}
                  className="block mx-auto h-10 w-64 p-4 rounded-lg shadow-lg shadow-blue-400 hue-rotate-15 outline-none"
                  placeholder="جستجو"
                />
              </div>
              <Link
                to={`/post-create`}
                className="bg-indigo-700 text-white text-center shadow-lg shadow-indigo-200 mb-3 mt-3 p-3 rounded-lg "
              >
                ایجاد
              </Link>
              <div className="container shadow-lg shadow-gray-600 rounded-lg m-2 mt-10 clear-both">
                <DataTable
                  columns={columns}
                  direction="rtl"
                  data={data}
                  fixedHeader
                  pagination
                  responsive
                ></DataTable>
              </div>
            </div>
            {/* Middle Content */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexPost;
