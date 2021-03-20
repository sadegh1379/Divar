import React from 'react';
import { Text , View } from 'react-native';
import { AddSearchBar  , AddItems } from '../../components';

const Add = (props)=>{
    return(
        <View style={{flex : 1}}>
            <AddSearchBar/>
            <AddItems/>
        </View>
    )
}

export default Add;