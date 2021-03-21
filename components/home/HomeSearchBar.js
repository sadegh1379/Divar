import React from 'react'
import { Text , TextInput, View , StyleSheet } from 'react-native';
import {TouchableRipple} from 'react-native-paper';
import {useTheme} from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';

const HomeSearchBar = (props)=>{
    const {colors} = useTheme();
    return(
        <View style={[styles.container , {backgroundColor : colors.backgroundHead}]}>
            <View style={{width:'100%'}}>
             <EvilIcons style={styles.searchIcon} name="search" size={30} color={colors.textIcon} />
             <TextInput  placeholder="جستوجو در همه  آگهی ها" style={[styles.myInput , {backgroundColor :colors.background}]}/>
             <View style={styles.locIcon}>
                <EvilIcons  name="location" size={30} color={colors.textIcon} />
                <Text style={[styles.text ,{ color:colors.text}]}>تهران</Text>
             </View>
             
            </View>
     </View>
    )
   
}

const styles = StyleSheet.create({
    container : {
        width : '100%',
        flexDirection:'row',
        alignItems:'center',
        padding : 8,
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
    },
    locIcon:{
        position:'absolute',
        left : 3,
        bottom : 2,
        flexDirection : 'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderRightWidth : 1,
        borderRightColor : '#eeeeee',
        paddingRight : 5
    },
    text : {
        fontFamily:'iranSans',
        fontWeight : 'bold'
    }
})

export {HomeSearchBar};