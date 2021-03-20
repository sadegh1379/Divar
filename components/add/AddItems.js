import React, { useState } from "react";
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Switch,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";

const AddItems = (props) => {
  const { colors } = useTheme();

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={styles.container}>
      <View>
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
        <View style={styles.itemsContainer}>
          <ScrollView style={{ flex: 1 }}>
            <View style={{ padding: 10, paddingTop: 20 }}>
              <Text
                style={[
                  styles.text,
                  { color: colors.text, fontWeight: "bold", fontSize: 18 },
                ]}
              >
                دسته آگهی را انتخاب کنید{" "}
              </Text>
            </View>
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
              {isEnabled ? (
                <Animatable.View
                  animation="bounceInRight"
                  style={{ padding: 10 }}
                >
                  <Text style={[styles.text, { color: colors.caption }]}>
                    اجاره مسکونی ، فروش مسکونی ، اجاره اداری و تجاری ، اجاره 
                    کوتاه مدت ، خدمات املاک و متفرقه
                  </Text>
                </Animatable.View>
              ) : null}
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
              {isEnabled ? (
                <Animatable.View
                  animation="bounceInRight"
                  style={{ padding: 10 }}
                >
                  <Text style={[styles.text, { color: colors.caption }]}>
                    خودرو ، قطعات یدکی و لوازم جانبی خودرو ،
                    موتور سیکلت و لوازم جانبی ،
                    قایق و لوازم جانبی و متفرقه
                  </Text>
                </Animatable.View>
              ) : null}
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
              {isEnabled ? (
                <Animatable.View
                  animation="bounceInRight"
                  style={{ padding: 10 }}
                >
                  <Text style={[styles.text, { color: colors.caption }]}>
                   موبایل و تبلت ، رایانه ، کنسول ، 
                   بازی ویدیویی و آنلاین ، صوتی و تصویری ، 
                   تلفن رومیزی و متفرقه
                  </Text>
                </Animatable.View>
              ) : null}
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
              {isEnabled ? (
                <Animatable.View
                  animation="bounceInRight"
                  style={{ padding: 10 }}
                >
                  <Text style={[styles.text, { color: colors.caption }]}>
                  وسایل و تزیینات خانه ، وسایل آشپزخانه ، 
                  ابزار ساختمان و حیاط و متفرقه
                  </Text>
                </Animatable.View>
              ) : null}
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
              {isEnabled ? (
                <Animatable.View
                  animation="bounceInRight"
                  style={{ padding: 10 }}
                >
                  <Text style={[styles.text, { color: colors.caption }]}>
                    موتور و ماشین ، پذیرایی /مراسم ، 
                    خدمات رایانه ای و موبایل ، مالی / حسابداری / بیمه ، حمل و نقل ،
                    آرایشگری و زیبایی ، نظافت ، باغبانی و نظافت کاری ،
                    آموزشی و متفرقه
                  </Text>
                </Animatable.View>
              ) : null}
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
              {isEnabled ? (
                <Animatable.View
                  animation="bounceInRight"
                  style={{ padding: 10 }}
                >
                  <Text style={[styles.text, { color: colors.caption }]}>
                   کیف ، کفش ، لباس ، تزیینی ، آرایشی ، بهداشتی و درمانی ،
                   وسایل بچه و اسباب بازی ،لوازم التحیری و متفرقه
                  </Text>
                </Animatable.View>
              ) : null}
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
              {isEnabled ? (
                <Animatable.View
                  animation="bounceInRight"
                  style={{ padding: 10 }}
                >
                  <Text style={[styles.text, { color: colors.caption }]}>
                   کیف ، کفش ، لباس ، تزیینی ، آرایشی ، بهداشتی و درمانی ،
                   وسایل بچه و اسباب بازی ،لوازم التحیری و متفرقه
                  </Text>
                </Animatable.View>
              ) : null}
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
              {isEnabled ? (
                <Animatable.View
                  animation="bounceInRight"
                  style={{ padding: 10 }}
                >
                  <Text style={[styles.text, { color: colors.caption }]}>
                   رویداد ، داوطلبانه ، گمشده ها و متفرقه
                  </Text>
                </Animatable.View>
              ) : null}
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
              {isEnabled ? (
                <Animatable.View
                  animation="bounceInRight"
                  style={{ padding: 10 }}
                >
                  <Text style={[styles.text, { color: colors.caption }]}>
                   تجهیزات  و ماشین آلات ، عمده فروشی و متفرقه
                  </Text>
                </Animatable.View>
              ) : null}
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
                  استخدام و کار یابی (غیر رایگان)
                  </Text>
                  <MaterialIcons
                    name="work"
                    size={24}
                    color={colors.textIcon}
                  />
                </View>
              </View>
              {isEnabled ? (
                <Animatable.View
                  animation="bounceInRight"
                  style={{ padding: 10 }}
                >
                  <Text style={[styles.text, { color: colors.caption }]}>
                   اداری و مدیریت ، سرایداری و نظافت ، معماری ، عمران و ساختمانی ، خدمات فروشگاه و رستوران ، 
                   رایانه و فناوری اطلاعات ، مالی و حسابداری و حقوقی ، 
                   بازاریابی وفروش ، آموزشی ، حمل و نقل ، هنری و رسانه و متفرقه
                  </Text>
                </Animatable.View>
              ) : null}
            </TouchableOpacity>
          
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
  text: {
    fontFamily: "iranSans",
  },
  topHead: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eeeeee",
  },
  box: {
    margin: 5,
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

export { AddItems };
