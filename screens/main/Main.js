import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./Home";
import ChatScreen from "./Chat";
import ProfileScreen from "./Profile";
import AddScreen from "./Add";
import GroupeScreen from "./Groupe";

const Tab = createBottomTabNavigator();

const Main = (props) => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Add" component={AddScreen} />
      <Tab.Screen name="Groupe" component={GroupeScreen} />
      <Tab.Screen name="Home" component={HomeScreen} />
    </Tab.Navigator>
  );
};

export default Main;
