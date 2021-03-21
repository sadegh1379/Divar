import React, { useState, useEffect } from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import { ActivityIndicator, View, StatusBar } from "react-native";
import { LightTheme, DarkTheme } from "./screens/theme/Theme";
import MainScreen from "./screens/main/Main";
import AddScreen from "./screens/main/Add";
import { Provider } from "react-redux";
import { Store } from "./redux/store";

const Stack = createStackNavigator();

export default function App() {
  const [loading, setLoading] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [loaded] = useFonts({
    iranSans: require("./assets/fonts/IRANSansMobile.ttf"),
    BYekan: require("./assets/fonts/BYekan.ttf"),
  });

  useEffect(() => {
    setLoading(false);
  }, []);

  if (!loaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator color="red" size={24} />
      </View>
    );
  }

  const theme = isDark ? DarkTheme : LightTheme;

  return (
    <Provider store={Store}>
      <NavigationContainer theme={theme}>
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />
        <Stack.Navigator initialRouteName="Main">
          <Stack.Screen
            name="Main"
            component={MainScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Add"
            component={AddScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
