import React from 'react'
import { Text , ScrollView, View , StyleSheet } from 'react-native';
import {useTheme} from '@react-navigation/native'
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";

const TopFlatList = (props)=>{
    const {colors} = useTheme();
    return(
        <View style={[styles.container , {backgroundColor : colors.backgroundHead}]}>
            <ScrollView style={{flexDirection : 'row-reverse'}} horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View style={styles.box}>
                        <View style={[styles.iconBox,{backgroundColor:colors.background}]}>
                            <MaterialIcons
                                name="work"
                                size={24}
                                color={colors.text}
                            />
                        </View>
                        <Text style={[styles.text , {color:colors.text}]}>استخدام</Text>
                    </View>
                    <View style={styles.box}>
                        <View style={[styles.iconBox,{backgroundColor:colors.background}]}>
                            <FontAwesome5
                                name="user-tie"
                                size={24}
                                color={colors.text}
                            />
                        </View>
                        <Text style={[styles.text , {color:colors.text}]}>برای کسب و کار</Text>
                    </View>
                    <View style={styles.box}>
                        <View style={[styles.iconBox,{backgroundColor:colors.background}]}>
                            <MaterialIcons
                                name="group"
                                size={24}
                                color={colors.text}
                            />
                        </View>
                        <Text style={[styles.text , {color:colors.text}]}>اجتماعی</Text>
                    </View>
                    <View style={styles.box}>
                        <View style={[styles.iconBox,{backgroundColor:colors.background}]}>
                            <Entypo
                                name="game-controller"
                                size={24}
                                color={colors.text}
                            />
                        </View>
                        <Text style={[styles.text , {color:colors.text}]}>سرگرمی و فراغت</Text>
                    </View>
                    <View style={styles.box}>
                        <View style={[styles.iconBox,{backgroundColor:colors.background}]}>
                            <Octicons
                                name="watch"
                                size={24}
                                color={colors.text}
                            />
                        </View>
                        <Text style={[styles.text , {color:colors.text}]}>وسایل شخصی</Text>
                    </View>
                    <View style={styles.box}>
                        <View style={[styles.iconBox,{backgroundColor:colors.background}]}>
                            <MaterialIcons
                                name="cleaning-services"
                                size={24}
                                color={colors.text}
                            />
                        </View>
                        <Text style={[styles.text , {color:colors.text}]}>خدمات</Text>
                    </View>
                    <View style={styles.box}>
                        <View style={[styles.iconBox,{backgroundColor:colors.background}]}>
                            <MaterialCommunityIcons
                                name="ceiling-light"
                                size={24}
                                color={colors.text}
                            />
                        </View>
                        <Text style={[styles.text , {color:colors.text}]}>مربوط به خانه</Text>
                    </View>
                    <View style={styles.box}>
                        <View style={[styles.iconBox,{backgroundColor:colors.background}]}>
                            <MaterialCommunityIcons
                                name="cellphone-android"
                                size={24}
                                color={colors.text}
                            />
                        </View>
                        <Text style={[styles.text , {color:colors.text}]}>لوازم الکترونیکی</Text>
                    </View>
                    <View style={styles.box}>
                        <View style={[styles.iconBox,{backgroundColor:colors.background}]}>
                            <Ionicons
                                name="car"
                                size={24}
                                color={colors.text}
                            />
                        </View>
                        <Text style={[styles.text , {color:colors.text}]}>وسایل نقلیه</Text>
                    </View>
                    <View style={styles.box}>
                        <View style={[styles.iconBox,{backgroundColor:colors.background}]}>
                            <MaterialCommunityIcons
                                name="home-city-outline"
                                size={24}
                                color={colors.text}
                            />
                        </View>
                        <Text style={[styles.text , {color:colors.text}]}>املاک</Text>
                    </View>
            </ScrollView>
        </View>
    )
   
}

const styles = StyleSheet.create({
    container : {
      width : '100%'
    },
    text : {
        fontFamily:'iranSans',
    },
    box : {
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        margin : 15
    },
    iconBox:{
        width : 50,
        height : 50,
        borderWidth : 1,
        borderColor : 'grey',
        padding  : 10,
        borderRadius : 50,
        marginBottom : 10,
        justifyContent:'center',
        alignItems : 'center'
        
    }
})

export {TopFlatList};