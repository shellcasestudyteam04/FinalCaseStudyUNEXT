import React from "react";
import { Link } from "react-router-dom";
import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";

const menuLinks = {
    Employee: '/Login',
    Contractor: '/Login1',
    // Add more mappings as needed
};

function Menu() {
    return ( 
      <div className = "menu" >
        <h1 className = "menuTitle" > Select Profile </h1> 
        <div className = "menuList"> 
        {
            MenuList.map((menuItem, key) => {
                const linkTo = menuLinks[menuItem.name];

                if (linkTo) {
                    return ( 
                      <Link key = { key }
                        to = { linkTo } >
                        <
                        MenuItem image = { menuItem.image }
                        name = { menuItem.name }
                        /> </Link>
                    );
                }

                // Handle cases where no link is defined for a menu item
                return ( <
                    MenuItem key = { key }
                    image = { menuItem.image }
                    name = { menuItem.name }
                    />
                );
            })
        } 
        </div> 
        </div>
    );
}

export default Menu;