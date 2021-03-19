import React from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";
import { useTheme } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const ChatHeader = (props) => {
  const { colors } = useTheme();
  const { text, func, showS } = props;

  return (
    <View
      style={[styles.container, { backgroundColor: colors.backgroundHead
         , flexDirection : showS ? 'row' : 'row-reverse' }]}
    >
      {showS ? (
        <Pressable onPress={() => func()}>
          <Ionicons name="settings-sharp" size={25} color={colors.textIcon} />
        </Pressable>
      ) : null}
      <Text style={[styles.text, { color: colors.textHead  }]}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 10,
    justifyContent:'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "iranSans",
  },
});

export { ChatHeader };
