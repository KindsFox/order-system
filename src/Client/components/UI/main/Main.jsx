import React from "react";
import cl from './Main.module.css';
import OrderList from "../OrderList";

const Main = () => {
    return (
      <div className={cl.content}>
        <main>
            <div className={cl.header}>
                <h1>Создание заявки</h1>                
            </div>
          
            <OrderList />
        </main>
      </div>
    );
}

export default Main;