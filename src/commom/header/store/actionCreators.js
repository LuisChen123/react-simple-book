import * as constants from './constants'
import {fromJS} from 'immutable';
import Axios from 'axios';


export const searchFocus = () => ({
    type: constants.SEARCH_FOUCUS
});

export const searchBlur = () => ({
    type: constants.SEARCH_BLUR
});

export const changeList = (data) => ({
    type: constants.CHANGE_LIST,
    data:fromJS(data)
})

export const getList = () => {
    return (dispatch) => {
        Axios.get('/api/headerList.json').then((res) =>{  
            const data = res.data;
            dispatch(changeList(data.data));
        }).catch((err)=>{
            console.log(err)
        })

    }
};
 

