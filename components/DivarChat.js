import React from 'react'
import { Text , View , ScrollView , StyleSheet , Image } from 'react-native';
import {useTheme} from '@react-navigation/native';
import { Entypo } from "@expo/vector-icons";
import {Caption} from 'react-native-paper'


const DivarChat = (props)=>{
    const {colors} = useTheme();
    return(
        <ScrollView style={styles.scrollView}>
            <View style={styles.topBox}>
                <View style={{width : '20%' ,flexDirection:'row' , justifyContent:'space-between' , alignItems:'center'}}>
                  <Entypo name="chevron-small-left" size={20} color={colors.textIcon} />
                  <Text style={{fontFamily:'iranSans'}}>20 بهمن </Text>
                </View>
                <View style={{width : '60%' , alignItems:'flex-end' , }}>
                  <Text style={styles.text}>پستچی دیوار</Text>
                  <Caption style={styles.text}>...آگهی شما منتشر شد</Caption>
                </View>
                <View style={{width : '20%' , justifyContent:'center' , alignItems:'center'}}>
                  <Image style={styles.divar} source={require('../assets/images/divar.png')}/>
                </View>
            </View>
            <View style={styles.topBox}>
                <View style={{width : '20%' ,flexDirection:'row' , justifyContent:'space-between' , alignItems:'center'}}>
                  <Entypo name="chevron-small-left" size={20} color={colors.textIcon} />
                  <Text style={{fontFamily:'iranSans'}}>20 بهمن </Text>
                </View>
                <View style={{width : '60%' , alignItems:'flex-end' , }}>
                  <Text style={styles.text}>پستچی دیوار</Text>
                  <Caption style={styles.text}>...آگهی شما منتشر شد</Caption>
                </View>
                <View style={{width : '20%' , justifyContent:'center' , alignItems:'center'}}>
                  <Image style={styles.divar} source={require('../assets/images/divar.png')}/>
                </View>
            </View>
            <View style={styles.topBox}>
                <View style={{width : '20%' ,flexDirection:'row' , justifyContent:'space-between' , alignItems:'center'}}>
                  <Entypo name="chevron-small-left" size={20} color={colors.textIcon} />
                  <Text style={{fontFamily:'iranSans'}}>20 بهمن </Text>
                </View>
                <View style={{width : '60%' , alignItems:'flex-end' , }}>
                  <Text style={styles.text}>پستچی دیوار</Text>
                  <Caption style={styles.text}>...آگهی شما منتشر شد</Caption>
                </View>
                <View style={{width : '20%' , justifyContent:'center' , alignItems:'center'}}>
                  <Image style={styles.divar} source={require('../assets/images/divar.png')}/>
                </View>
            </View>

            <View style={styles.topBox}>
                <View style={{width : '20%' ,flexDirection:'row' , justifyContent:'space-between' , alignItems:'center'}}>
                  <Entypo name="chevron-small-left" size={20} color={colors.textIcon} />
                  <Text style={{fontFamily:'iranSans'}}>20 بهمن </Text>
                </View>
                <View style={{width : '60%' , alignItems:'flex-end' , }}>
                  <Text style={styles.text}>پستچی دیوار</Text>
                  <Caption style={styles.text}>...آگهی شما منتشر شد</Caption>
                </View>
                <View style={{width : '20%' , justifyContent:'center' , alignItems:'center'}}>
                  <Image style={styles.divar} source={require('../assets/images/divar.png')}/>
                </View>
            </View>
            <View style={styles.topBox}>
                <View style={{width : '20%' ,flexDirection:'row' , justifyContent:'space-between' , alignItems:'center'}}>
                  <Entypo name="chevron-small-left" size={20} color={colors.textIcon} />
                  <Text style={{fontFamily:'iranSans'}}>20 بهمن </Text>
                </View>
                <View style={{width : '60%' , alignItems:'flex-end' , }}>
                  <Text style={styles.text}>پستچی دیوار</Text>
                  <Caption style={styles.text}>...آگهی شما منتشر شد</Caption>
                </View>
                <View style={{width : '20%' , justifyContent:'center' , alignItems:'center'}}>
                  <Image style={styles.divar} source={require('../assets/images/divar.png')}/>
                </View>
            </View>
            <View style={styles.topBox}>
                <View style={{width : '20%' ,flexDirection:'row' , justifyContent:'space-between' , alignItems:'center'}}>
                  <Entypo name="chevron-small-left" size={20} color={colors.textIcon} />
                  <Text style={{fontFamily:'iranSans'}}>20 بهمن </Text>
                </View>
                <View style={{width : '60%' , alignItems:'flex-end' , }}>
                  <Text style={styles.text}>پستچی دیوار</Text>
                  <Caption style={styles.text}>...آگهی شما منتشر شد</Caption>
                </View>
                <View style={{width : '20%' , justifyContent:'center' , alignItems:'center'}}>
                  <Image style={styles.divar} source={require('../assets/images/divar.png')}/>
                </View>
            </View>
            <View style={styles.topBox}>
                <View style={{width : '20%' ,flexDirection:'row' , justifyContent:'space-between' , alignItems:'center'}}>
                  <Entypo name="chevron-small-left" size={20} color={colors.textIcon} />
                  <Text style={{fontFamily:'iranSans'}}>20 بهمن </Text>
                </View>
                <View style={{width : '60%' , alignItems:'flex-end' , }}>
                  <Text style={styles.text}>پستچی دیوار</Text>
                  <Caption style={styles.text}>...آگهی شما منتشر شد</Caption>
                </View>
                <View style={{width : '20%' , justifyContent:'center' , alignItems:'center'}}>
                  <Image style={styles.divar} source={require('../assets/images/divar.png')}/>
                </View>
            </View>
            <View style={styles.topBox}>
                <View style={{width : '20%' ,flexDirection:'row' , justifyContent:'space-between' , alignItems:'center'}}>
                  <Entypo name="chevron-small-left" size={20} color={colors.textIcon} />
                  <Text style={{fontFamily:'iranSans'}}>20 بهمن </Text>
                </View>
                <View style={{width : '60%' , alignItems:'flex-end' , }}>
                  <Text style={styles.text}>پستچی دیوار</Text>
                  <Caption style={styles.text}>...آگهی شما منتشر شد</Caption>
                </View>
                <View style={{width : '20%' , justifyContent:'center' , alignItems:'center'}}>
                  <Image style={styles.divar} source={require('../assets/images/divar.png')}/>
                </View>
            </View>
            <View style={styles.topBox}>
                <View style={{width : '20%' ,flexDirection:'row' , justifyContent:'space-between' , alignItems:'center'}}>
                  <Entypo name="chevron-small-left" size={20} color={colors.textIcon} />
                  <Text style={{fontFamily:'iranSans'}}>20 بهمن </Text>
                </View>
                <View style={{width : '60%' , alignItems:'flex-end' , }}>
                  <Text style={styles.text}>پستچی دیوار</Text>
                  <Caption style={styles.text}>...آگهی شما منتشر شد</Caption>
                </View>
                <View style={{width : '20%' , justifyContent:'center' , alignItems:'center'}}>
                  <Image style={styles.divar} source={require('../assets/images/divar.png')}/>
                </View>
            </View>
            <View style={styles.topBox}>
                <View style={{width : '20%' ,flexDirection:'row' , justifyContent:'space-between' , alignItems:'center'}}>
                  <Entypo name="chevron-small-left" size={20} color={colors.textIcon} />
                  <Text style={{fontFamily:'iranSans'}}>20 بهمن </Text>
                </View>
                <View style={{width : '60%' , alignItems:'flex-end' , }}>
                  <Text style={styles.text}>پستچی دیوار</Text>
                  <Caption style={styles.text}>...آگهی شما منتشر شد</Caption>
                </View>
                <View style={{width : '20%' , justifyContent:'center' , alignItems:'center'}}>
                  <Image style={styles.divar} source={require('../assets/images/divar.png')}/>
                </View>
            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scrollView:{

    },
    topBox:{
        flexDirection : 'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding : 5,
    },
    divar:{
        width : 50,
        height : 50,
        margin:10
    },
    text:{
        fontFamily:'iranSans'
    }
})

export  {DivarChat};