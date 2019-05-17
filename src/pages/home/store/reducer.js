import { fromJS } from 'immutable';
import * as constants from './constants'

const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommentList: [],
    mouseIn: false,
    list: [],
    Page: 1,
    totalPage: 1,
    articlePage: 1,
    showScroll: false,
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.MOUSE_ENTER:
            return state.set('mouseIn', true)

        case constants.MOUSE_LEAVE:
            return state.set('mouseIn', false)

        case constants.MY_GET_WRITER_INFO:
            return state.merge({
                list: action.data,
                totalPage: action.totalPage
            });

        case constants.CHANGE_PAGE:
            return state.set('Page', action.data)

        case constants.ADD_RECOMMENTLIST:
            return state.set('recommentList',action.recommentList)

        case constants.CHANGE_HOME_DATA:
            return state.merge({
                topicList: fromJS(action.topicList),
                articleList: fromJS(action.articleList),
                recommendList: fromJS(action.recommendList)
            })

        case constants.ADD_HOME_LIST:
            return state.merge({
                'articleList': state.get('articleList').concat(action.list),
                'articlePage': action.nextPage
            })

        case constants.TOGGLE_SCROOL_TOP:
            return state.set("showScroll", action.show)
        default: return state;
    }
}

//4.通过actionCreator.JS派发给store，store拿到后给了reducer.JS进行数据的更新（注意，reducer并没有
//改造数据的权利，它只是帮store搞清楚哪些数据需要更改，怎么更改，然后又store进行最后的数据更新。这里，我们
//通过switch case语句，判断接收到的type形式，发现actionCreator.JS发给我们一个action，它的type是INFO，
//然后我们在通过store提供的 state.set方法更新了已经定义过得list数组，赋予它一个新的值，这个值就是通过
//actionCreator.JS里传来的 info 里的  data:fromJS(data) 用这个数据更新了我们的state里的数据，因为
//state里到的数据发生了改变，react-redux会自动派发这个改变的新的值给props，让我们回到writer.js页面
//=====》writer.js