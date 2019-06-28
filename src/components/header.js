import React, {Component} from 'react';
import Toolbar from '../shared/components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../shared/components/Navigation/SideDrawer/SideDrawer';

class Header extends Component {
  state = {
    showSideDrawer: false,
    btnType: 'Success',
  };

  sideDrawerClosedHandler = () => {
    this.setState({showSideDrawer: false});
  };

  sideDrawerToggleHandler = () => {
    this.setState(prevState => {
      return {showSideDrawer: !prevState.showSideDrawer};
    });
  };

  btnTypeSuccessHandler = () => {
    this.setState({
      btnType: 'Danger',
    });
  };

  btnTypeDangerHandler = () => {
    this.setState({btnType: 'Success'});
  };

  render() {
    const {btnType, showSideDrawer} = this.state;
    return (
      <>
        <Toolbar
          drawerToggleClicked={this.sideDrawerToggleHandler}
          btnType={btnType}
          btnTypeSuccessHandler={this.btnTypeSuccessHandler}
          btnTypeDangerHandler={this.btnTypeDangerHandler}
        />
        <SideDrawer open={showSideDrawer} closed={this.sideDrawerClosedHandler} />
      </>
    );
  }
}

export default Header;
