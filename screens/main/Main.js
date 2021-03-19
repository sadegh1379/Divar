import React from "react";
import { Image } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./Home";
import ChatScreen from "./Chat";
import ProfileScreen from "./Profile";
import AddScreen from "./Add";
import GroupeScreen from "./Groupe";
import { Foundation } from "@expo/vector-icons";
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const Main = (props) => {
  return (
    <Tab.Navigator initialRouteName="Chat" tabBarOptions={{
        labelStyle : {
            fontFamily :'iranSans'
        },
        activeTintColor : '#d50000'
    }}>
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: "دیوار من ",
          
          tabBarIcon: ({ size, color }) => (
            <FontAwesome name="user" size={20} color={color} />
          ),
          
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          title: "چت",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="chatbubbles-sharp" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={AddScreen}
        options={{
          title: "ثبت آگهی",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="add-circle" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Groupe"
        component={GroupeScreen}
        options={{
          title: "دسته ها",
          tabBarIcon: ({ size, color }) => (
            <Foundation name="list-bullet" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "آگهی ها",
          tabBarIcon: ({ size, color }) => (
            <Image style={{width : 30 , borderWidth : color ? 3 :0 , borderColor : color , height : 30 , borderRadius : 30 , margin : 5}} source={require('../../assets/images/divar.png')}/>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Main;
