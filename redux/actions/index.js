import {ADD_DATA , GET_DATA} from '../types';
import { uid } from 'uid';


const data = [
    {
        id : uid(),
        title : 'ماشین 206',
        text : 'ماشین کاملا سالم و خوب کار میکنه ',
        total : '30000',
        phone : '09376770472',
        image : 'https://www.batteryontime.com/wp-content/uploads/2020/02/%D9%85%D8%A7%D8%B4%DB%8C%D9%86-%D9%BE%DA%98%D9%88-206.jpg'
    }
]


export const get_data = ()=>{
    return ((dispatch)=>{
            dispatch({type : GET_DATA , payload : data});
    })
}