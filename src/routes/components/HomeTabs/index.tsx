import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ContactScene from '../../../scenes/ContactScene';
import ChatListScene from '../../../scenes/ChatListScene';
import MoreScene from '../../../scenes/MoreScene';
import TabBar from './components/TabBar';

const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator
        screenOptions={{ headerShown: false }}
        tabBar={props => <TabBar {...props}/>}
    >
      <Tab.Screen name='Contacts' component={ContactScene} />
      <Tab.Screen name='Chats' component={ChatListScene} />
      <Tab.Screen name='More' component={MoreScene} />
    </Tab.Navigator>
  );
}

export default HomeTabs;
