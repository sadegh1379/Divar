import React from 'react';
import { Text , View } from 'react-native';
import {TopHeader , ProfileInfo , ProfileItems} from '../../components';

const Profile = (props)=>{
    return(
        <View>
            <TopHeader text="دیوار من "/>
            <ProfileInfo />
            <ProfileItems/>
        </View>
    )
}

export default Profile;