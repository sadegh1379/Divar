import React from 'react';
import { Text , View } from 'react-native';
import { GroupItems, TopHeader } from '../../components';

const Groupe = (props)=>{
    return(
        <View style={{flex : 1}}>
           <TopHeader text="دسته بندی آگهی ها"/>
           <GroupItems/>
        </View>
    )
}

export default Groupe;