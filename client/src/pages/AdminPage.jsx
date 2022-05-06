import React from "react";
import Announcment from "../components/Announcment/Announcment";
import Navbar from "../components/Navbar/Navbar";
import MenuAdmin from '../components/Menu/MenuAdmin';

const AdminPage = () => {
  return (
    <div>
      <Announcment />
      <Navbar />
      <MenuAdmin />
      {/* <h2>Admin Info HERE</h2> */}
    </div>
  );
};

export default AdminPage;