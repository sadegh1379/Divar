import React from 'react'
import { Text , View , StyleSheet } from 'react-native';
import {useTheme} from '@react-navigation/native';

const TopHeader = (props)=>{
    const {colors} = useTheme();
    const {text} = props;
    return(
        <View style={[styles.container , {backgroundColor : colors.backgroundHead}]}>
            <Text style={[styles.text ,{color : colors.textHead} ]}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container :{
        width : '100%',
        padding : 10,

    },
    text:{
        fontSize : 20,
        fontWeight : 'bold',
        fontFamily:'iranSans',
    }
})

export  {TopHeader};