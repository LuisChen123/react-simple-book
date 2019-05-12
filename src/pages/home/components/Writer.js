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
import { CSSTransition } from 'react-transition-group';

class Writer extends Component {


    getWriterList() {
        const { page, list } = this.props
        const newList = list.toJS();
        const pageList = [];
        console.log(list)
        if (newList.length) {
            for (let i = (page - 1) * 5; i < page * 5; i++) {
                pageList.push(
                    <li
                        className="writerList"
                    >
                        <a href='/'>
                            <img
                                className="avatar"
                                src="//upload.jianshu.io/users/upload_avatars/4263857/34d7b217-7338-48fe-81a1-98367fecdbee.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"
                                alt=""
                            />
                        </a>
                        <FirstLine>
                            <a href="">
                                <p className='addToFav'>+关注</p>
                            </a>
                            <a>
                                <h3 className='wirterName'>newList[i].id</h3>
                            </a>
                        </FirstLine>
                        <SecLine>
                            <p className='likes'>39.9k喜欢</p>
                            <p className="totalWords">写了138.6k字 · </p>
                        </SecLine>
                    </li>
                )
            }
        }else{
            console.log("123")
        }
        
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
        page: state.getIn(['home', 'page']),
        totalPage: state.getIn(['home', 'totalPage']),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handlePageChange(page, totalPage) {
            dispatch(actionsCreators.getWriterInfo())
            if (page < totalPage) {
                dispatch(actionsCreators.changePage())
            }
            else {
                dispatch(actionsCreators.changePage(1))

            } 
        }
    }
}

export default connect(mapStateToProp, mapDispatchToProps)(Writer)