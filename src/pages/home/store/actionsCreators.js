
import * as constants from './constants'
import {fromJS} from 'immutable'
import axios from 'axios';

export const mouseEnter = () =>({
    type:constants.MOUSE_ENTER
})
export const mouseLeave = () =>({
    type:constants.MOUSE_LEAVE
})


//3.1 我在这里定义了一个方法，主要是为了方便维护和管理，mygetWriterInfo =（data）里的data是
//ajax call拿回来的数据，直接注入进去，给type分配一个名字，这个名字已经在 constants里进行过了定义，
//然后我们在用immutable 提供的fromJS 方法改造拿回来的数据，使之成为一个immutable的数据，这里就不会报错
//下一步  ===》constant.js里改造
const mygetWriterInfo = (data) =>({
    type:constants.INFO,
    data:fromJS(data)
})
export const getWriterInfo = () =>{
    return (dispatch) =>{
        axios.get('/api/headerList.json').then((res)=>{
            const writerInfo = res.data.user;
            console.log(writerInfo)
            dispatch(mygetWriterInfo(writerInfo));
        }).catch((err)=>{
            console.log(err)
        })
    }
}
//3.3因为在writer.js里我们调用了getWriterInfo（）方法，在这个我们定义如何ajax call传回的数据和如何使用
//这个就是用redux-thunk提供的中间件进行了改造，同时我在getWriterInfo（）里调用并把它派发出去自定义的mygetWriterInfo（），
//因为mygetWriterInfo已经帮我改造好了拿回来数据，也就是writerInfo，这个时候，它把这些改造好的数据通过dispatch方法传输给
//reducer
//下一步  reducer ===》