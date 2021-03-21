import React, { Component } from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./Home";
import ChatScreen from "./Chat";
import ProfileScreen from "./Profile";
import GroupeScreen from "./Groupe";
import { Foundation } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import {connect} from 'react-redux';
import {get_data} from '../../redux/actions';

const Tab = createBottomTabNavigator();

const Empty = () => {
  return null;
};

class Main extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    console.log(this.props);
    this.props.get_data();
  }


  render() {
    return (
      <Tab.Navigator
        initialRouteName="Group"
        tabBarOptions={{
          labelStyle: {
            fontFamily: "iranSans",
          },
          activeTintColor: "#d50000",
        }}
      >
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            title: "دیوار من ",

            tabBarIcon: ({ size, color }) => (
              <FontAwesome name="user" size={25} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Chat"
          component={ChatScreen}
          options={{
            title: "چت",
            tabBarIcon: ({ size, color }) => (
              <Ionicons name="chatbubbles-sharp" size={25} color={color} />
            ),
          }}
        />
        <Tab.Screen
          listeners={({ navigation }) => ({
            tabPress: (event) => {
              event.preventDefault();
              navigation.navigate("Add");
            },
          })}
          name="AddContainer"
          component={Empty}
          options={{
            title: "ثبت آگهی",
            tabBarIcon: ({ size, color }) => (
              <Ionicons name="add-circle" size={25} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Group"
          component={GroupeScreen}
          options={{
            title: "دسته ها",
            tabBarIcon: ({ size, color }) => (
              <Foundation name="list-bullet" size={25} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "آگهی ها",
            tabBarIcon: ({ size, color }) => (
              <Image
                style={{
                  width: 30,
                  borderWidth: color ? 3 : 0,
                  borderColor: color,
                  height: 30,
                  borderRadius: 30,
                  margin: 5,
                }}
                source={require("../../assets/images/divar.png")}
              />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
}

export default connect(null , {get_data})(Main);
