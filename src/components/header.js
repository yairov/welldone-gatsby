import React, {Component} from "react";
import Aux from "../shared/components/UI/Auxiliary";
import Toolbar from '../shared/components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../shared/components/Navigation/SideDrawer/SideDrawer';
//import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Header extends Component {
  state = {
    showSideDrawer: false,
    btnType: 'Success'
  }
  sideDrawerClosedHandler = ( ) => {
    this.setState({showSideDrawer: false});
  } 
  sideDrawerToggleHandler = ( ) => {
    // console.log(this.state);
    this.setState((prevState) => {
      return {showSideDrawer: !prevState.showSideDrawer};
    });
  } 

  btnTypeSuccessHandler = ( ) => {
       this.setState({btnType: 'Danger'});
  } 
  btnTypeDangerHandler = ( ) => {
      this.setState({btnType: 'Success'});
} 
  render() {
    return (
    <Aux>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} btnType={this.state.btnType} btnTypeSuccessHandler={this.btnTypeSuccessHandler} btnTypeDangerHandler={this.btnTypeDangerHandler} />
        <SideDrawer 
          open={this.state.showSideDrawer} 
          closed={this.sideDrawerClosedHandler}/>
    </Aux>
    )
  }
}


export default Header;
