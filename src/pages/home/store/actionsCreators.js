
import * as constants from './constants'
import {fromJS} from 'immutable'
import axios from 'axios';

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

const addHomeList = (list,nextPage) =>({
    type: constants.ADD_HOME_LIST,
    list: fromJS(list),
    nextPage
})

export const getMoreList = (page) =>{
    return (dispatch) =>{
            axios.get('/api/homeList.json?page=' + page).then((res)=>{
                const result = res.data.data;
                dispatch(addHomeList(result,(page + 1)))
            }).catch((err)=>{
                console.log(err)
            })
    }
}

const addRecommentList =(result) =>({
    type:constants.ADD_RECOMMENTLIST,
    recommentList: fromJS(result.recommentList)
})

export const recommentList = () =>{
        return (dispatch) =>{
            axios.get('/api/home.json').then((res)=>{
                const result = res.data.data
                dispatch(addRecommentList(result))
            }).catch((err)=>{
                console.log(err)
            })
        }
}   


const changeHomeData = (result) =>({
    type:constants.CHANGE_HOME_DATA,
    articleList: result.articleList,
    recommendList:result.recommendList,
    topicList:result.topicList,
})

export const getHomeInfo = () =>{
    return (dispatch) =>{
        axios.get('/api/home.json').then((res)=>{      
            const result = res.data
            const action = changeHomeData(result)
            dispatch(action);
        }).catch((err)=>{
            console.log(err)
        })
    }
}

export const toggleTopShow = (show) =>({
    type:constants.TOGGLE_SCROOL_TOP,
    show
})


//3.1 我在这里定义了一个方法，主要是为了方便维护和管理，mygetWriterInfo =（data）里的data是
//ajax call拿回来的数据，直接注入进去，给type分配一个名字，这个名字已经在 constants里进行过了定义，
//然后我们在用immutable 提供的fromJS 方法改造拿回来的数据，使之成为一个immutable的数据，这里就不会报错
//下一步  ===》constant.js里改造
const mygetWriterInfo = (data) =>({
    type:constants.MY_GET_WRITER_INFO,
    data:fromJS(data),
    totalPage: Math.ceil(data.length /5)
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