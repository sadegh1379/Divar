import React from "react";
import { Text, View, Switch } from "react-native";

const ShowAboutGroup = (props) => {
  return (
    <View style={styles.topHead}>
      <View>
        <Switch
          trackColor={{ false: "#767577", true: "#d50000" }}
          thumbColor={isEnabled ? "#d50000" : "#d50000"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <View>
        <Text style={[styles.text, { color: colors.text }]}>
          نمایش راهنمای دسته بندی ها
        </Text>
      </View>
    </View>
  );
};

export {ShowAboutGroup}
