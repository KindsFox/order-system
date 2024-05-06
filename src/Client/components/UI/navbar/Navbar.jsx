import React from "react";
import cl from './Navbar.module.css';


const Navbar =() => {
  return (
    <div className={cl.content}>
      <nav>
        <i class="bx bx-menu"></i>
        <form action="#">
          <div className={cl.form_input}>
            <input type="search" placeholder="Поиск..." />
            <button className={cl.search_btn}>
              <i class="bx bx-search"></i>
            </button>
          </div>
        </form>
        <input type="checkbox" id="theme_toggle" hidden />
        <label for="theme_toggle"></label>
        <a href="#" className={cl.notif}>
          <i class="bx bx-bell"></i>
          <span className={cl.count}></span>
        </a>
      </nav>
    </div>
  );
}

export default Navbar;