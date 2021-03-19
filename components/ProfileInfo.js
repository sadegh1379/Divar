import React from 'react'
import { Text , View , StyleSheet , TouchableOpacity } from 'react-native';
import {useTheme} from '@react-navigation/native';

const ProfileInfo = (props)=>{
    const {colors} = useTheme();
    return(
        <View style={[styles.container , {backgroundColor : colors.background}]}>
            <Text style={[styles.text ,{color : colors.text} ]}>
                برای استفاده از تمامی امکانات دیوار ، مانند ثبت و مدیریت آگهی ،  چت و یادداشت گذاری وارد حساب دیوار شوید .
            </Text>
            <TouchableOpacity style={styles.press}>
                <Text style={[styles.text ,{color : colors.text} ]}>ورود به حساب</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container :{
        width : '100%',
        padding : 10,

    },
    text:{
        fontSize : 12,
        // fontWeight : 'bold',
        fontFamily:'iranSans',
        lineHeight : 20
    },
    press:{
        borderWidth : 1,
        borderColor :'grey',
        borderRadius : 30,
        width : 100,
        height : 30,
        marginTop : 20,
        justifyContent:'center',
        alignItems : 'center'
    }
})

export  {ProfileInfo};