import React from "react";
import {  DarkTheme as NavigationDarkTheme , DefaultTheme as NavigationDefaultTheme } from "@react-navigation/native";
import {  DarkTheme as PaperDarkTheme , DefaultTheme as PaperDefaultTheme } from "react-native-paper";

export const DarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
        ...NavigationDarkTheme.colors,
        ...PaperDarkTheme.colors,
        background: '#333',
        text : '#fff',
        backgroundHead : '#424242',
        textHead : '#fff',
        textIcon : '#e0e0e0'

      },
   
}
export const LightTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
        ...NavigationDefaultTheme.colors,
        ...PaperDefaultTheme.colors,
        background: '#fff',
        text : '#333',
        backgroundHead : '#fafafa',
        textHead : '#333',
        textIcon : '#757575'
      },
    }   