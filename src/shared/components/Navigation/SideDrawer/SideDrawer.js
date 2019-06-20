import React from 'react';
//import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';
import Backdrop from "../../UI/Backdrop/Backdrop";
import Aux from '../../../../Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button';
import Logo from '../Logo/Logo';
const sideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if(props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }

    return  (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')} onClick={props.closed}>
                <div className={classes.Logo}>
                     <Logo/>
                </div>
                <nav>
                    <NavigationItems closed={props.closed}/> 
                    <Button btnType = {'Success'} > Lets Talk</Button>           
                </nav>
            </div>
        </Aux>

    );
};
export default sideDrawer;
