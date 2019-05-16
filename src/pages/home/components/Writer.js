import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import {
    WriterWrapper,
    WriterTop,
    WriterUl,
    FirstLine,
    SecLine,
    SeeMore

} from '../style';
import { GlobalStyled } from '../../../static/inconfont/iconfont';
import { actionsCreators } from '../store';
// import { CSSTransition } from 'react-transition-group';

class Writer extends Component {
    //ajax call的流程：
    //1.现在writer.js页面上触发，这个例子是在componentDidMount生命周期里调用自定义的getInfo()进行触发
    componentDidMount() {
        const { getInfo } = this.props;
        getInfo();
    }
    getWriterList() {
        const { list } = this.props
        const newlist = list.toJS();//用toJS（）方法转化拿到的list，否则无法使用
        return (
            newlist.map((item) => {
                return (
                    <li
                        className="writerList"
                        key={item.id}
                    >
                        <a href='/'>
                            <img
                                className="avatar"
                                src={item.avatar_source}
                                alt=""
                            />
                        </a>
                        <FirstLine>
                            <a href="/">
                                <p className='addToFav'>+关注</p>
                            </a>
                            <a href="/">
                                <h3 className='wirterName'>{item.nickname}</h3>
                            </a>
                        </FirstLine>
                        <SecLine>
                            <p className='likes'>{item.total_likes_count}喜欢</p>
                            <p className="totalWords">写了{item.total_wordage}字</p>
                        </SecLine>
                    </li>
                )
            })
        )
    }
    render() {
        const { page, totalPage, handlePageChange } = this.props
        return (
            <Fragment>
                <GlobalStyled />
                <WriterWrapper>
                    <WriterTop>
                        <h3 className="leftTitle">推荐作者</h3>
                        <h3 className="rightTitle"
                            onClick={() => handlePageChange(page, totalPage)}
                        >换一换</h3>
                        {/* <CSSTransition
                    in={handlePageChange}
                    timeout= {200}
                    > */}
                        <i className="iconfont"
                            onClick={() => handlePageChange(page, totalPage)}
                        >&#xe851;</i>
                        {/* </CSSTransition> */}
                    </WriterTop>
                    <WriterUl>
                        {this.getWriterList()}
                    </WriterUl>
                </WriterWrapper>
                <SeeMore>
                    <p className="all">查看全部></p>
                </SeeMore>
            </Fragment>
        )
    }
}
const mapStateToProp = (state) => {
    return {
        list: state.getIn(['home', 'list']),
        //6.通过 react-redux 提供的 connect方法，我们自定义的mapStateToProp（） 会自动接收 store里的数据更新，
        //也就是说，当store里的数据一旦发生变化，这个页面会自动获取最新的数据，我们在这里定义一个变量接收
        //home路径下的list的这个变量的值，并使用list这个变量把它储存起来，注意getIn方法是由react-redux提供的
        //一种简洁的链式路径，否则就必须很麻烦的写成     list: state.get('home').get('list')
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getInfo() {
            dispatch(actionsCreators.getWriterInfo());
            //2.getInfo（）会派发从actionsCreators里的getWriterInfo（）方法进行ajax call
            //  ===》进入actionsCreators里，定义getWriterInfo（）如何ajax call
        }
    }
}
//6.1 通过connect方法，我们把这个页面上的触发器和store联系了起来，同时，只要store的数据发生变化
//这里也能拿到同步数据
export default connect(mapStateToProp, mapDispatchToProps)(Writer)