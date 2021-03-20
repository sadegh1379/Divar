import React from 'react'
import { Text , TextInput, View , StyleSheet } from 'react-native';
import {TouchableRipple} from 'react-native-paper';
import {useTheme} from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';

const AddSearchBar = (props)=>{
    const {colors} = useTheme();
    return(
        <View style={[styles.container , {backgroundColor : colors.backgroundHead}]}>
            <View style={{width:'90%'}}>
             <EvilIcons style={styles.searchIcon} name="search" size={30} color={colors.textIcon} />
             <TextInput placeholder="جستوجو در دسته ها" style={[styles.myInput , {backgroundColor :colors.background}]}/>
            </View>
            <TouchableRipple  rippleColor="rgba(0, 0, 0, .32)"  style={styles.icon}>
                <AntDesign style={{alignSelf:'center'}} name="arrowright" size={24} color={colors.textIcon} />
            </TouchableRipple>
     </View>
    )
   
}

const styles = StyleSheet.create({
    container : {
        width : '100%',
        flexDirection:'row',
        alignItems:'center',
        padding : 10,
    },
    myInput:{
        padding : 6,
        borderWidth : 1,
        borderColor : '#bdbdbd',
        borderRadius : 5,
        fontFamily : 'iranSans',
        fontWeight : 'bold',
        textAlign :'right',
        paddingRight : 40
    
    },
    icon : {
        width : '10%',
        justifyContent :'center',
        alignItems:'center',

    },
    searchIcon:{
        position:'absolute',
        right : 3,
        bottom : 3,
        opacity : 0.6
    }
})

export {AddSearchBar};