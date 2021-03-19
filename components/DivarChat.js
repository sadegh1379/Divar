import React from "react";
import { Text, View, ScrollView, TouchableOpacity ,  StyleSheet, Image } from "react-native";
import { useTheme } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import { Caption } from "react-native-paper";

const DivarChat = (props) => {
  const { colors } = useTheme();
  return (
    <ScrollView style={styles.scrollView}>
      <TouchableOpacity style={styles.topBox}>
        <View
          style={{
            width: "20%",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Entypo name="chevron-small-left" size={20} color={colors.textIcon} />
          <Text style={{ fontFamily: "iranSans" , color:colors.text }}>20 بهمن </Text>
        </View>
        <View style={{ width: "60%", alignItems: "flex-end" }}>
          <Text style={[styles.text,{color:colors.text}]}>پستچی دیوار</Text>
          <Caption style={[styles.text , {color:colors.caption}]}>...آگهی شما منتشر شد</Caption>
        </View>
        <View
          style={{
            width: "20%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            style={styles.divar}
            source={require("../assets/images/divar.png")}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.mainBox}>
        <View style={styles.mainBoxHead}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View style={{ flexDirection: "row" , justifyContent:'flex-end' }}>
              <Entypo
                name="chevron-small-left"
                size={20}
                color={colors.textIcon}
              />
              <Caption style={{ fontFamily: "iranSans" ,color:colors.text }}>20 بهمن </Caption>
            </View>

            <View>
              <Text style={[styles.text,{color:colors.text}]}>سارا طاهر</Text>
            </View>
          </View>
          <Caption style={[styles.text , {textAlign:'right' , color:colors.caption}]}>سلام قیمت کالا چقدر هستش </Caption>
        </View>
        <View style={styles.mainBoxBody}>
          <View style={styles.picContainer}>
            <Image
              style={styles.pic}
              source={require("../assets/images/nopic.png")}
            />
          </View>
          <View>
            <Text style={[styles.text,{color:colors.text}]}>لباس ورزشی </Text>
          </View>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {},
  topBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5,
  },
  divar: {
    width: 50,
    height: 50,
    margin: 10,
  },
  text: {
    fontFamily: "iranSans",
  },
  mainBox: {
    margin: 8,
    borderBottomWidth : 1,
    borderBottomColor : '#eeeeee'
  },
  mainBoxHead: {
    // alignItems: "flex-end",
  },
  mainBoxBody: {
    flexDirection: "row-reverse",
    alignItems: "center",
    paddingBottom : 10
  },
  pic: {
    width: 40,
    height: 40,
    opacity : 0.6
  },
  picContainer: {
    backgroundColor: "#fafafa",
    marginLeft: 20,
    margin: 6,
  },
});

export { DivarChat };
