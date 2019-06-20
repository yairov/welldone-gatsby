import styles  from './Toolbar.module.css';
import Logo from '../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import { Link } from "react-scroll";
import {media} from '../../../theme/media';
import React, { useEffect, useRef } from "react"
import styled from "styled-components"

import Button from '../../UI/Button/Button';


const BiggerHeadeer = styled.div`
transition: 0.5s; /* Add a transition effect (when scrolling - and font size is decreased) */
${media.minSmallDesktop`
&.scrolled {
  margin-top:0;
  padding:0;
  height: 3rem;
  font-size: 0.9rem;
  align-items: baseline;
}
`}

`
const ButtonSize = styled.div`
`


const Header = ( props ) => {
    
    const ref = useRef()
    useEffect(() => {
      const onScroll = () => {
        let fn = null;
        if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
          fn =  "add";
            props.btnTypeSuccessHandler();
        } else {
          fn = 'remove'
            props.btnTypeDangerHandler();
        }

        ref.current.classList[fn]("scrolled")
      }
    
      document.addEventListener("scroll", onScroll)
      return () => {
        document.removeEventListener("scroll", onScroll)
      }
    }, [])
   // console.log(props);
    return (
    <BiggerHeadeer ref={ref} className={styles.Toolbar}>
        <div className={styles.Items}>

            <div ref={ref} className={styles.Logo}>
                <Logo className={styles.Logo}/>
            </div>
            <div ref={ref} className={styles.DrawerToggle} >
                 <DrawerToggle  clicked={props.drawerToggleClicked}/>
            </div>
            <nav className={styles.DesktopOnly}>
                <NavigationItems/>
                  <ButtonSize ref={ref} className={styles.ButtonHeight}>
                    <Link onClick={props.closed}  
                      activeClass="NavigationItem-module--active--3NifW"
                      to={"LetsTalk"}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration= {500}>         
                          <Button btnType = {props.btnType} > Lets Talk</Button>
                      </Link>

                  </ButtonSize>


            </nav>
        </div>
    </BiggerHeadeer>
    );
};

export default Header;









