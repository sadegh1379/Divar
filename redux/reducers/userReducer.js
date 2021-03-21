import {GET_DATA , ADD_DATA} from '../types';

const initState = {
    user : [],
    addes : []

}

export const userReducer = (state = initState , action)=>{
    switch (action.type) {
        case GET_DATA:
            console.log("payload : " , action.payload);
            return{
                ...state,
                addes : [...state.addes , ...action.payload]
            }
        default:
            return state;
    }
}
