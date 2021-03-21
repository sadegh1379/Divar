import React from 'react'
import { Text , View , StyleSheet , TouchableOpacity , ScrollView } from 'react-native';
import { useTheme } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";


const GroupItems = (props)=>{
  const { colors } = useTheme();

    return(
        <ScrollView>
            <TouchableOpacity style={styles.boxContainer}>
              <View style={styles.box}>
                <View>
                  <Entypo
                    name="chevron-small-left"
                    size={20}
                    color={colors.textIcon}
                  />
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
                      //   fontWeight: "bold",
                      marginRight: 20,
                    }}
                  >
                    املاک
                  </Text>
                  <MaterialCommunityIcons
                    name="home-city-outline"
                    size={24}
                    color={colors.textIcon}
                  />
                </View>
              </View>
             
            </TouchableOpacity>
            <TouchableOpacity style={styles.boxContainer}>
              <View style={styles.box}>
                <View>
                  <Entypo
                    name="chevron-small-left"
                    size={20}
                    color={colors.textIcon}
                  />
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
                      //   fontWeight: "bold",
                      marginRight: 20,
                    }}
                  >
                   وسایل نقلیه
                  </Text>
                  <Ionicons
                    name="car"
                    size={24}
                    color={colors.textIcon}
                  />
                </View>
              </View>
             
            </TouchableOpacity>
            <TouchableOpacity style={styles.boxContainer}>
              <View style={styles.box}>
                <View>
                  <Entypo
                    name="chevron-small-left"
                    size={20}
                    color={colors.textIcon}
                  />
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
                      //   fontWeight: "bold",
                      marginRight: 20,
                    }}
                  >
                   لوازم الکترونیکی
                  </Text>
                  <MaterialCommunityIcons
                    name="cellphone-android"
                    size={24}
                    color={colors.textIcon}
                  />
                </View>
              </View>
            
            </TouchableOpacity>
            <TouchableOpacity style={styles.boxContainer}>
              <View style={styles.box}>
                <View>
                  <Entypo
                    name="chevron-small-left"
                    size={20}
                    color={colors.textIcon}
                  />
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
                      //   fontWeight: "bold",
                      marginRight: 20,
                    }}
                  >
                  مربوط به خانه
                  </Text>
                  <MaterialCommunityIcons
                    name="ceiling-light"
                    size={24}
                    color={colors.textIcon}
                  />
                </View>
              </View>
             
            </TouchableOpacity>
            <TouchableOpacity style={styles.boxContainer}>
              <View style={styles.box}>
                <View>
                  <Entypo
                    name="chevron-small-left"
                    size={20}
                    color={colors.textIcon}
                  />
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
                      //   fontWeight: "bold",
                      marginRight: 20,
                    }}
                  >
                  خدمات
                  </Text>
                  <MaterialIcons
                    name="cleaning-services"
                    size={24}
                    color={colors.textIcon}
                  />
                </View>
              </View>
             
            </TouchableOpacity>
            <TouchableOpacity style={styles.boxContainer}>
              <View style={styles.box}>
                <View>
                  <Entypo
                    name="chevron-small-left"
                    size={20}
                    color={colors.textIcon}
                  />
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
                      //   fontWeight: "bold",
                      marginRight: 20,
                    }}
                  >
                  وسایل شخصی
                  </Text>
                  <Octicons
                    name="watch"
                    size={24}
                    color={colors.textIcon}
                  />
                </View>
              </View>
            
            </TouchableOpacity>
            <TouchableOpacity style={styles.boxContainer}>
              <View style={styles.box}>
                <View>
                  <Entypo
                    name="chevron-small-left"
                    size={20}
                    color={colors.textIcon}
                  />
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
                      //   fontWeight: "bold",
                      marginRight: 20,
                    }}
                  >
                  سرگرمی و فراغت
                  </Text>
                  <Entypo
                    name="game-controller"
                    size={24}
                    color={colors.textIcon}
                  />
                </View>
              </View>
             
            </TouchableOpacity>
            <TouchableOpacity style={styles.boxContainer}>
              <View style={styles.box}>
                <View>
                  <Entypo
                    name="chevron-small-left"
                    size={20}
                    color={colors.textIcon}
                  />
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
                      //   fontWeight: "bold",
                      marginRight: 20,
                    }}
                  >
                  اجتماعی
                  </Text>
                  <MaterialIcons
                    name="group"
                    size={24}
                    color={colors.textIcon}
                  />
                </View>
              </View>
             
            </TouchableOpacity>
            <TouchableOpacity style={styles.boxContainer}>
              <View style={styles.box}>
                <View>
                  <Entypo
                    name="chevron-small-left"
                    size={20}
                    color={colors.textIcon}
                  />
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
                      //   fontWeight: "bold",
                      marginRight: 20,
                    }}
                  >
                  برای کسب و کار
                  </Text>
                  <FontAwesome5
                    name="user-tie"
                    size={24}
                    color={colors.textIcon}
                  />
                </View>
              </View>
           
            </TouchableOpacity>
            <TouchableOpacity style={styles.boxContainer}>
              <View style={styles.box}>
                <View>
                  <Entypo
                    name="chevron-small-left"
                    size={20}
                    color={colors.textIcon}
                  />
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
                      //   fontWeight: "bold",
                      marginRight: 20,
                    }}
                  >
                  استخدام و کار یابی 
                  </Text>
                  <MaterialIcons
                    name="work"
                    size={24}
                    color={colors.textIcon}
                  />
                </View>
              </View>
             
            </TouchableOpacity>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    text: {
      fontFamily: "iranSans",
    },
    box: {
      margin: 10,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    boxContainer: {
      borderBottomWidth: 1,
      borderBottomColor: "#eeeeee",
      padding : 5
    },
  });

export {GroupItems};