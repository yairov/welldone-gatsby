import React from 'react';
import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'

const navigationItems = (props) => {
   // console.log(props)
    return (    
    <ul className={classes.NavigationItems}>
        <NavigationItem closed={props.closed} link="Projects" >Latest Projects</NavigationItem> 
        <NavigationItem closed={props.closed} link="CustomersSays" >What Customers Says</NavigationItem>
        <NavigationItem closed={props.closed} link="CoreValues" >Who We Are</NavigationItem> 
        <NavigationItem closed={props.closed} link="WhatWeDo" >What We Do</NavigationItem> 
        <NavigationItem closed={props.closed} link="Join" >Join Us</NavigationItem>

    </ul>
    );
}

export default navigationItems;