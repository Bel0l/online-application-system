import React, { useEffect, useState } from 'react';
import UserData from './UsersData.js';
import AdminSideBar from './AdminSideBar.js';

const API = "https://jsonplaceholder.typicode.com/users";

const Pending_Applications = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.length > 0) {
        setUsers(data);
      }
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchUsers(API);
  }, []);

  return (
    <div className="h-screen - bg-[#1F4887] flex flex-col items-center justify-center">
        <div className='mt-0 -ml-[1010px]'>
            <AdminSideBar/>
        </div>
      <div className="flex-grow p-4 -mt-[870px] ml-60 flex items-center justify-center w-full">
        <table className="w-full max-w-4xl mt-16 border border-gray-200 rounded-lg shadow-sm">
          <thead className="bg-gray-300">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">UserName</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Batch</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Applicaton Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Attached Files</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <UserData users={users} />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Pending_Applications;
