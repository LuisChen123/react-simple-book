import React, { Component , Fragment} from 'react'
import { connect } from 'react-redux';
import { RecommendUl, 
         RecommendLi, 
         QRcodeBox,
        } from '../style';
import { actionsCreators } from '../store';

class Recommend extends Component {
    render() {
        return (
            <Fragment>
            <RecommendUl>
                <a href="/">
                    <RecommendLi>
                        <img
                            className="pic"
                            src="//upload.jianshu.io/admin_banners/web_images/4658/ef2cf6b3478da3cb7482f228212ecb59603fd408.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
                            alt=""
                        />
                    </RecommendLi>
                </a>
                <a href="/">
                    <RecommendLi>
                        <img
                            className="pic"
                            src="//upload.jianshu.io/admin_banners/web_images/4658/ef2cf6b3478da3cb7482f228212ecb59603fd408.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
                            alt=""
                        />
                    </RecommendLi>
                </a>
                <a href="/">
                    <RecommendLi>
                        <img
                            className="pic"
                            src="//upload.jianshu.io/admin_banners/web_images/4658/ef2cf6b3478da3cb7482f228212ecb59603fd408.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
                            alt=""
                        />
                    </RecommendLi>
                </a>
                <a href="/">
                    <RecommendLi>
                        <img
                            className="pic"
                            src="//upload.jianshu.io/admin_banners/web_images/4658/ef2cf6b3478da3cb7482f228212ecb59603fd408.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
                            alt=""
                        />
                    </RecommendLi>
                </a>
            </RecommendUl>

            <QRcodeBox 
            onMouseEnter={this.props.handleOnMouseEnter}
            onMouseLeave={this.props.handleOnMouseLeave}
            >
                <img
                className="QrCodePic"
                src="//upload.jianshu.io/admin_banners/web_images/4658/ef2cf6b3478da3cb7482f228212ecb59603fd408.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
                alt=""
                >
                </img>
                <h3 className="QrTitle">下载简书手机APP ></h3>
                <p className="QrDesc">随时随地发现和创造内容</p>
            </QRcodeBox>
            </Fragment>
        )
    }
}

const mapState = (state) =>({
    
})

const mapDispatch = (dispatch) =>{
    return{
        handleOnMouseEnter(){
            dispatch(actionsCreators.mouseEnter())
        }
    }
 
}



export default connect(mapState,mapDispatch)(Recommend)