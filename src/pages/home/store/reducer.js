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
    page:1,
    totalPage:1,
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.MOUSE_ENTER:
        return state.set('mouseIn' ,true)
        
        case constants.MOUSE_LEAVE:
        return state.set('mouseIn',false)

        case constants.CHANGE_PAGE:
        return state.set('page', action.page)

        default: return state;   
    }
} 