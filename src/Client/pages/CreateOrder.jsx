import React from "react";
import Sidebar from "../components/UI/sidebar/Sidebar";
import Navbar from "../components/UI/navbar/Navbar";
import Main from "../components/UI/main/Main";
import FormCreateOrder from "../components/UI/form/FormCreateOrder";

const CreateOrder = () => {
    return (
      <div>
        <Sidebar />
        <Navbar />
        <Main />
        <aside>
          <FormCreateOrder />
        </aside>
        
      </div>
    );
}

export default CreateOrder;