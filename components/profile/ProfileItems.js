import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { useTheme } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const ProfileItems = (props) => {
  const { colors } = useTheme();
  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <TouchableOpacity style={styles.box}>
        <View>
          <Entypo name="chevron-small-left" size={20} color={colors.textIcon} />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <Text
            style={{
              color: colors.text,
              fontFamily: "iranSans",
              fontWeight: "bold",
              marginRight: 20,
            }}
          >
            نشان ها و یادداشت ها
          </Text>
          <FontAwesome name="bookmark" size={24} color={colors.textIcon} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box}>
        <View>
          <Entypo name="chevron-small-left" size={20} color={colors.textIcon} />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <Text
            style={{
              color: colors.text,
              fontFamily: "iranSans",
              fontWeight: "bold",
              marginRight: 20,
            }}
          >
            بازدید های اخیر
          </Text>
          <FontAwesome name="history" size={24} color={colors.textIcon} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box}>
        <View>
          <Entypo name="chevron-small-left" size={20} color={colors.textIcon} />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <Text
            style={{
              color: colors.text,
              fontFamily: "iranSans",
              fontWeight: "bold",
              marginRight: 20,
            }}
          >
            تنظیمات
          </Text>
          <Ionicons name="settings-sharp" size={20} color={colors.textIcon} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box}>
        <View>
          <Entypo name="chevron-small-left" size={20} color={colors.textIcon} />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <Text
            style={{
              color: colors.text,
              fontFamily: "iranSans",
              fontWeight: "bold",
              marginRight: 20,
            }}
          >
            دیوار برای کسب و کار ها
          </Text>
          <Fontisto name="shopping-store" size={20} color={colors.textIcon} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box}>
        <View>
          <Entypo name="chevron-small-left" size={20} color={colors.textIcon} />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <Text
            style={{
              color: colors.text,
              fontFamily: "iranSans",
              fontWeight: "bold",
              marginRight: 20,
            }}
          >
            پشتیبانی و قوانین
          </Text>
          <FontAwesome name="support" size={20} color={colors.textIcon} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box}>
        <View>
          <Entypo name="chevron-small-left" size={20} color={colors.textIcon} />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <Text
            style={{
              color: colors.text,
              fontFamily: "iranSans",
              fontWeight: "bold",
              marginRight: 20,
            }}
          >
            درباره دیوار
          </Text>
          <AntDesign name="infocirlceo" size={20} color={colors.textIcon} />
        </View>
      </TouchableOpacity>
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "iranSans",
  },
  box: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom : 10
  },
});

export { ProfileItems };
