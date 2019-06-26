
import Logo from '../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import { Link } from "react-scroll";

import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import {media} from '../../../theme/media';
import Button from '../../UI/Button/Button';


const Toolbar = styled.div`
transition: 0.5s; /* Add a transition effect (when scrolling - and font size is decreased) */
height: 60px;
width: 100%;
position: fixed;
top: 0;
right: 0;
left: 0;
background-color: #1FABF3;
display: flex;
justify-content: space-between;
padding: 0, 20px;
box-sizing: border-box;
z-index: 90;
background: none;
font-size: 1.2rem;
color: #51718C;
${media.minSmallDesktop`
height: 7rem;
&.scrolled {
  margin-top:0;
  padding:0;
  height: 2.5rem;
  font-size: 0.9rem;
  align-items: baseline;
  background:white;
}
`}
`

const Items = styled.div`
  float: left;
  position: relative;
  width: 100%;
  height: 100%;
  margin-top:0; 
  background:none;
`

const LogoSize = styled.div`
height: 100%;
float: left;
`
const DrawerToggleSize = styled.div`
  float: right;
  margin-top: 0%;
  margin-right: 20px;
  display: flex;
`
const DesktopOnly = styled.div`
  float: right;
  margin-top: 0%;
  display: flex;
  margin-right: 20px;
  height: 100%;
  ${media.maxSmallDesktop`
    display: none;
`}
`


const ButtonSize = styled.div`
  margin: auto;
  width: 8rem;
  font-size: small;
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
    <Toolbar ref={ref}>
        <Items >
            <LogoSize ref={ref}>
                <Logo/>
            </LogoSize>
            <DrawerToggleSize ref={ref} >
                 <DrawerToggle  clicked={props.drawerToggleClicked}/>
            </DrawerToggleSize>
            <DesktopOnly>
                <NavigationItems/>
                  <ButtonSize ref={ref}>
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
            </DesktopOnly>
        </Items>
    </Toolbar>
    );
};

export default Header;









