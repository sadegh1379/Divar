import React from 'react';
import { TouchableOpacity , StyleSheet ,Text } from 'react-native';

const MyBtn = ({text , func})=>{

    return(
        <TouchableOpacity style={styles.press} onPress={()=>func()}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    press:{
        padding  : 10,
        backgroundColor:'#d50000',
        width : 140,
        justifyContent:'center',
        alignItems:'center',
        borderRadius : 4,
    },
    text:{
        fontFamily : 'iranSans',
        fontSize : 16,
        fontWeight :'bold',
        color : '#fff',
    }
})

export {MyBtn}