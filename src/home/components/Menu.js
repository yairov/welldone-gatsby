import React from 'react';
import Toolbar from './Navigation/Toolbar/Toolbar';
import SideDrawer from './Navigation/SideDrawer/SideDrawer';
import useBooleanState from '../../shared/hooks/useBooleanState';

const Menu = ({navItems, lang}) => {
  const [isSideDrawerOpen, toggleSideDrawer, , closeSideDrawer] = useBooleanState(false);
  return (
    <>
      <Toolbar
        drawerToggleClicked={toggleSideDrawer}
        onClick={closeSideDrawer}
        navItems={navItems}
        lang={lang}
      />
      <SideDrawer isOpen={isSideDrawerOpen} onClick={closeSideDrawer} navItems={navItems} />
    </>
  );
};

export default Menu;
