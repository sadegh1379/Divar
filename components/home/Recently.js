import React from 'react';
import { Text , View , StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native'; 

const Recently = ()=>{
    const {colors} = useTheme();
    return(
        <View style={styles.container}>
            <Text style={[styles.text , {color:colors.text , fontSize : 18 , fontWeight : 'bold'}]}>بازدید های اخیر</Text>
            <View style={{flexDirection :'row' , justifyContent:'flex-end' , marginTop : 20}}>
              <Text style={[styles.text , styles.box , {color: colors.text  , marginRight : 10}]}>خودرو</Text>
              <Text style={[styles.text , styles.box , {color: colors.text}]}>لوازم جانبی رایانه</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        padding : 10,
        justifyContent:'flex-start',
        borderBottomWidth : 1,
        borderBottomColor : '#eeeeee'
    },
    box  : {
        padding: 8,
        borderWidth : 1,
        borderColor : '#eeeeee',
        borderRadius :20,
        justifyContent:'center',
        alignItems : 'center',
        
    },
    text:{
        fontFamily :'iranSans'
    }
})

export {Recently};