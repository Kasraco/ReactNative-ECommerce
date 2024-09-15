import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FcDeleteDatabase, FcEditImage } from "react-icons/fc";
import Api from "../../../utils/Api";
import axios from "axios";
import Sidebar from "../Sidebar";
import DataTable from "react-data-table-component";
import fullDate from "../../../utils/FullTime";

type categories = {
  title: string;
  mainimg: string;
  createAt: date;
  _id: string | undefined;
};
const CategoryIndex = () => {
  const [data, setData] = useState<categories[]>([]); //data is an empty array of categories
  const [filterData, setFilterData] = useState<categories[]>([]);

  // initila Data Table of ract-data-table-component
  // define columns for DataTable
  const columns = [
    // define first Column
    {
      name: "تصویر", // Set Title of Column
      selector: (
        row: any //set value for column rows
      ) => (
        <div className="flex">
          <img
            src={row.mainimg}
            alt={row.title}
            className="object-contain w-16 h-16 rounded-full p-1 shadow-md "
          />
        </div>
      ),
      sortable: true, //set sortable property to true for enable sort data
    },
    //End of define first Column
    //Define second column
    {
      name: "عنوان",
      selector: (row: any) => row.title,
      sortable: true,
    },
    //Define second column
    {
      name: "تاریخ",
      selector: (row: any) => fullDate(row.createAt),
      sortable: true,
    },
    {
      name: "عملیات",
      selector: (row: any) => (
        <div className="flex">
          <Link to={`/dashboard-category-edit/${row._id}`}>
            <FcEditImage className="text-2xl m-3" />
          </Link>

          <button title="Delete" onClick={() => deleteCategory(row._id)}>
            <FcDeleteDatabase className="text-2xl m-3" />
          </button>
        </div>
      ),
      sortable: true,
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`${Api}/category`)
        .then((result) => {
          setData(result.data);

          setFilterData(result.data);
        })
        .catch((err) => console.log(err));
    };
    fetchData();
  }, []);

  const deleteCategory = async (id: any) => {
    try {
      const confres = confirm("آیا برای حذف این دسته بندی اطمینان دارید؟");
      if (confres) {
        await axios.delete(`${Api}/category/deletecategory/${id}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const search = (e: any) => {
    const newData = filterData.filter((row: any) => {
      console.log(row.title);
      return row.title
        .toLocaleLowerCase()
        .includes(e.target.value.toLocaleLowerCase());
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
                to={`/dashboard-category-create`}
                className="bg-indigo-700 text-white text-center shadow-lg shadow-indigo-200 mb-3 mt-3 p-3 rounded-lg "
              >
                ایجاد
              </Link>
              <div className="container shadow-lg shadow-gray-600 rounded-lg m-2 mt-10 clear-both">
                <DataTable
                  direction="rtl"
                  columns={columns}
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

export default CategoryIndex;
