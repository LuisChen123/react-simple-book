import { fromJS } from 'immutable';
import * as constants from './constants'

const defaultState = fromJS({
    topicList: [{
        id: 1,
        title: '社会热点',
        imgUrl: '//upload-images.jianshu.io/upload_images/8107105-3f579c387c2dad9a.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
    }, {
        id: 2,
        title: '手绘',
        imgUrl: '//upload-images.jianshu.io/upload_images/8107105-3f579c387c2dad9a.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
    }],
    articleList:[{
        id:1,
        title:'你炒的牛肉够嫩?只要炒牛肉之前，多加这一步，就能又嫩又滑',
        desc:'牛肉是家常荤食当中，比较抢手的一种食材，虽然说价格上面可能有一点点的小贵，但是肉质确实比较细腻的，同时脂肪的含量非常的少，这也就意味着它在好吃的...',
        imgUrl: '//upload-images.jianshu.io/upload_images/8107105-3f579c387c2dad9a.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
    },
    {
        id:2,
        title:'你炒的牛肉够嫩?只要炒牛肉之前，多加这一步，就能又嫩又滑',
        desc:'牛肉是家常荤食当中，比较抢手的一种食材，虽然说价格上面可能有一点点的小贵，但是肉质确实比较细腻的，同时脂肪的含量非常的少，这也就意味着它在好吃的...',
        imgUrl: '//upload-images.jianshu.io/upload_images/8107105-3f579c387c2dad9a.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
    },
    {
        id:3,
        title:'你炒的牛肉够嫩?只要炒牛肉之前，多加这一步，就能又嫩又滑',
        desc:'牛肉是家常荤食当中，比较抢手的一种食材，虽然说价格上面可能有一点点的小贵，但是肉质确实比较细腻的，同时脂肪的含量非常的少，这也就意味着它在好吃的...',
        imgUrl: '//upload-images.jianshu.io/upload_images/8107105-3f579c387c2dad9a.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
    },
    {
        id:4,
        title:'你炒的牛肉够嫩?只要炒牛肉之前，多加这一步，就能又嫩又滑',
        desc:'牛肉是家常荤食当中，比较抢手的一种食材，虽然说价格上面可能有一点点的小贵，但是肉质确实比较细腻的，同时脂肪的含量非常的少，这也就意味着它在好吃的...',
        imgUrl: '//upload-images.jianshu.io/upload_images/8107105-3f579c387c2dad9a.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
    }
],
    mouseIn:false,
    list:[],
});

export default (state = defaultState, action) => {
    console.log(state,action)
    switch (action.type) {
        case constants.MOUSE_ENTER:
        return state.set('mouseIn' ,true)
        
        case constants.MOUSE_LEAVE:
        return state.set('mouseIn',false)
        
        case constants.INFO:
        return state.set("list",action.data);

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