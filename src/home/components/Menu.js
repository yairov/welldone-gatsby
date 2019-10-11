import React, {useState} from 'react';
import Toolbar from './Navigation/Toolbar/Toolbar';
import SideDrawer from './Navigation/SideDrawer/SideDrawer';
import useBooleanState from '../../shared/hooks/useBooleanState';

const ButtonTypes = {
  Danger: 0,
  Success: 1,
};

const Menu = () => {
  const [isSideDrawerOpen, toggleSideDrawer, , closeSideDrawer] = useBooleanState(false);
  const [buttonType, setButtonType] = useState(ButtonTypes.Success);

  const buttonTypeSuccessHandler = () => setButtonType(ButtonTypes.Danger);
  const buttonTypeDangerHandler = () => setButtonType(ButtonTypes.Success);

  return (
    <>
      <Toolbar
        drawerToggleClicked={toggleSideDrawer}
        buttonType={buttonType}
        buttonTypeSuccessHandler={buttonTypeSuccessHandler}
        buttonTypeDangerHandler={buttonTypeDangerHandler}
        onClick={closeSideDrawer}
      />
      <SideDrawer isOpen={isSideDrawerOpen} onClick={closeSideDrawer} />
    </>
  );
};

export default Menu;
