import React from 'react';
import { Text , View } from 'react-native';
import {useTheme} from '@react-navigation/native';
import {HomeSearchBar, Recently, TopFlatList} from '../../components';

const Home = (props)=>{
    const {colors} = useTheme();
    return(
        <View style={{flex : 1}}>
                <HomeSearchBar/>
                <TopFlatList/>
                <Recently/>
        </View>
    )
}

export default Home;