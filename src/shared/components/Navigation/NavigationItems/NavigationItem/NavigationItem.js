import React from 'react';
import classes from './NavigationItem.module.css'
import { Link } from "react-scroll";

const navigationItem = (props) => {
  //  console.log(props)
    return (
<div>
     <li onClick={props.closed} className={classes.NavigationItem}
        >
            <Link onClick={props.closed}
                activeClass="NavigationItem-module--active--3NifW"
                to={props.link}
                spy={true}
                smooth={true}
                offset={-70}
                duration= {500}>         
                {props.children}
            </Link>
        </li>
    </div>

    );
}




export default navigationItem;