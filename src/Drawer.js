import React from 'react';
import { DrawerNavigator } from 'react-navigation';

import Home from './components/home';

const DrawerExample = DrawerNavigator(
  {
    Home: { screen: Home }
  },
  {
    initialRouteName: 'Home',
    contentOptions: {
      activeTintColor: '#e91e63'
    },
    contentComponent: props => <SideBar {...props} />
  }
);

export default DrawerExample;
