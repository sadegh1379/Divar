import React from 'react';
import { Text , View } from 'react-native';
import {useTheme} from '@react-navigation/native';

const Home = (props)=>{
    const {colors} = useTheme();
    return(
        <View>
            <Text style={{fontFamily : 'iranSans' , color:colors.text , fontSize : 20}}> صادق اکبری سیار سلام خوبی </Text>
        </View>
    )
}

export default Home;