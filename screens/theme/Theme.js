import React from "react";
import {  DarkTheme as NavigationDarkTheme , DefaultTheme as NavigationDefaultTheme } from "@react-navigation/native";
import {  DarkTheme as PaperDarkTheme , DefaultTheme as PaperDefaultTheme } from "react-native-paper";

export const DarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    color : '#fff',
    background : '#333'
}
export const LightTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    color :  '#333',
    background : '#fff',
}