import React, { Component ,Fragment} from 'react'
import { connect } from 'react-redux';
import {
    WriterWrapper,
    WriterTop,
    WriterUl,
    FirstLine,
    SecLine,

}from '../style';
import { GlobalStyled } from '../../../static/inconfont/iconfont';

class Writer extends Component{
    render(){
        return(
            <Fragment>
                <GlobalStyled/>
                <WriterWrapper>
                <WriterTop>
                    <h3 className="leftTitle">推荐作者</h3>
                    <h3 className="rightTitle">换一换</h3>
                    <i className="iconfont">&#xe851;</i>
                </WriterTop>
                <WriterUl>
                    <li
                    className="writerList"
                    >
                    <img
                    className="avatar"
                    src="//upload.jianshu.io/users/upload_avatars/4263857/34d7b217-7338-48fe-81a1-98367fecdbee.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"
                    alt=""
                    />
                    <FirstLine>
                    <p className='addToFav'>+关注</p>
                    <h3 className='wirterName'>王小麦</h3>
                    </FirstLine>
                    <SecLine>
                    <p className='likes'>39.9k喜欢</p>
                    <p className="totalWords">写了138.6k字 · </p>
                    </SecLine>            
                    </li>
                </WriterUl>
                </WriterWrapper>
            </Fragment>
        )
    }
}



export default Writer