import React from "react";
import cl from './Sidebar.module.css';

const Sidebar =() => {
    return (
      <div className={cl.sidebar}>
        <div className={cl.logo}>
          <h2>Система заявок</h2>
        </div>
        <ul className={cl.side_menu}>
          <li className={cl.active}>
            <a href="/#"><i class='bx bx-food-menu'></i> Заявка </a>
          </li>
          <li>
            <a href="/#"><i class='bx bxs-food-menu'></i> Мои заявки </a>
          </li>
          <li>
            <a href="/#"><i class='bx bx-user'></i> Профиль </a>
          </li>
        </ul>
        <ul className={cl.side_menu}>
          <li>
            <a href="/#" className={cl.logout}> <i class='bx bx-log-out' > </i> Выйти </a>
          </li>
        </ul>
      </div>
    );
}

export default Sidebar;