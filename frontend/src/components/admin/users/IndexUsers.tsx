import React, { useEffect, useState } from "react";
import Api from "../../../utils/Api";
import axios from "axios";
import Sidebar from "../Sidebar";
import DataTable from "react-data-table-component";
import fullDate from "../../../utils/FullTime";

type users = {
  firstName: string;
  lastName: string;
  userName: string;
  createAt: Date;
};
const IndexUsers = () => {
  const [data, setData] = useState<users[]>([]); //data is an empty array of categories
  const [filterData, setFilterData] = useState<users[]>([]);

  // initila Data Table of ract-data-table-component
  // define columns for DataTable
  const columns = [
    // define first Column
    {
      name: "نام",
      selector: (row: users) => row.firstName,
      sortable: true,
    },
    //Define second column
    {
      name: "نام خانوادگی",
      selector: (row: users) => row.lastName,
      sortable: true,
    },

    //Define second column
    {
      name: "نام کاربری",
      selector: (row: users) => row.userName,
      sortable: true,
    },
    //Define second column
    {
      name: "تاریخ",
      selector: (row: users) => fullDate(row.createAt),
      sortable: true,
    },
  ];

  const fetchData = async () => {
    try {
      const result = await axios.get(`${Api}/user`);
      setData(result.data);
      setFilterData(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const search = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newData = filterData.filter((row: users) => {
      return row.userName.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase());
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

export default IndexUsers;
