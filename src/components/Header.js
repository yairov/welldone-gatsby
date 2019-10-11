import React, {useState} from 'react';
import Toolbar from 'shared/components/Navigation/Toolbar/Toolbar';
import SideDrawer from 'shared/components/Navigation/SideDrawer/SideDrawer';

const ButtonTypes = {
  Danger: 0,
  Success: 1,
};

const Header = () => {
  const [showSideDrawer, setShowSideDrawer] = useState(false);
  const [buttonType, setButtonType] = useState(ButtonTypes.Success);

  const sideDrawerClosedHandler = () => {
    setShowSideDrawer(false);
  };

  const sideDrawerToggleHandler = () => {
    setShowSideDrawer(prevState => {
      return !prevState;
    });
  };

  const buttonTypeSuccessHandler = () => {
    setButtonType(ButtonTypes.Danger);
  };

  const buttonTypeDangerHandler = () => {
    setButtonType(ButtonTypes.Success);
  };

  // React.useEffect(() => {
  //   // console.log('whatt');
  //   console.log(ButtonTypes.Success);
  //   console.log(ButtonTypes.Danger);
  // }, []);

  return (
    <>
      <Toolbar
        drawerToggleClicked={sideDrawerToggleHandler}
        buttonType={buttonType}
        buttonTypeSuccessHandler={buttonTypeSuccessHandler}
        buttonTypeDangerHandler={buttonTypeDangerHandler}
      />
      <SideDrawer open={showSideDrawer} closed={sideDrawerClosedHandler} />
    </>
  );
};

export default Header;
