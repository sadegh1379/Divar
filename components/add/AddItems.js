import React , {useState} from "react";
import { Text, View, StyleSheet , TouchableOpacity, Switch  } from "react-native";
import { useTheme } from "@react-navigation/native";

const AddItems = (props) => {
  const { colors } = useTheme();

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
        <TouchableOpacity>
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
                    <Text style={styles.text}>نمایش راهنمای دسته بندی ها</Text>
                </View>
            </View>
        </TouchableOpacity>
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
  text:{
      fontFamily : 'iranSans'
  },
  topHead:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems : 'center',
      padding : 10,
      borderBottomWidth : 1,
      borderBottomColor : '#eeeeee'
  }
});

export { AddItems };
