import React , {useState , useEffect} from 'react';
import { Text , View , StyleSheet } from 'react-native';
import { DivarChat, ChatHeader } from '../../components';
import {Caption} from 'react-native-paper'
import {MyBtn} from '../../components/static';
import {useTheme} from '@react-navigation/native';

const Chat = (props)=>{
    const [logged , setLogged] = useState(false);
    const {colors} = useTheme();
    useEffect(()=>{
        setLogged(true);
    } ,[])

    const GoToLogin = ()=>{
        alert("login");
    }
    const GetSetting = ()=>{
        alert("setting");
    }
    return(
        <View style={{flex : 1}}>
           <ChatHeader showS={logged} func={GetSetting} text="چت دیوار"/>
           {logged ? (<DivarChat/>) : (
               <View style={{flex :1 , alignItems:'center' , justifyContent:'center'}}>
                   <Text style={{fontFamily:'iranSans' , fontWeight : 'bold' , fontSize : 18 , marginBottom : 20 , color:colors.text}}>ارتباط آسان و سریع با فروشنده با چت دیوار</Text>
                   <Caption style={{fontSize:15 , fontFamily :'iranSans' , textAlign : 'center' , marginBottom:20, color:colors.text}}>
                       برای شروع مکالمه جدید و یا دسترسی به مکالمات قبلی ،
                       لازم است ابتدا وارد حساب خود شوید
                   </Caption>
                   <MyBtn func={GoToLogin} text="ورود"/>
                </View>
           )}
        </View>
    )
}

// const styles = StyleSheet.create({
    
// })

export default Chat;