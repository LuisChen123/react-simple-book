
import * as constants from './constants'
import {fromJS} from 'immutable'
import axios from 'axios';

const changeWriterList = (data) =>({
    type:constants.CHANGE_WRITER_LIST,
    data:fromJS(data),
    totalPage:Math.ceil(data.length / 5)
})

export const mouseEnter = () =>({
    type:constants.MOUSE_ENTER
})
export const mouseLeave = () =>({
    type:constants.MOUSE_LEAVE
})
export const changePage = (page) =>({
    type:constants.CHANGE_PAGE,
    page
})

export const getWriterInfo = () =>{
    return (dispatch) =>{
        axios.get('/api/headerList.json').then((res)=>{
            const writerInfo = res.data.user;
            console.log(writerInfo)
            dispatch(changeWriterList(writerInfo));
        }).catch((err)=>{
            console.log(err)
        })
    }
}
