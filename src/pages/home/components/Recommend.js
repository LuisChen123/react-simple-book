import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import {
    RecommendUl,
    RecommendLi,
    LargeQR,
    QRcodeBox,
} from '../style';
import { actionsCreators } from '../store';
import { GlobalStyled } from '../../../static/inconfont/iconfont';

class Recommend extends Component {
    showBigQR() {
        const {mouseIn} = this.props;
        if (mouseIn) {
            return (
                <LargeQR>
                    <img
                        className="QR-Pic"
                        src="https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png"
                        alt=""
                    >
                    </img>
                </LargeQR>
            )
        }

    }

    render() {
        const {handleOnMouseEnter , handleOnMouseLeave} = this.props
        return (
            <Fragment>
                <GlobalStyled/>
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
                {this.showBigQR()}
                
                <QRcodeBox
                    onMouseEnter={handleOnMouseEnter}
                    onMouseLeave={handleOnMouseLeave}
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

const mapState = (state) => ({
    mouseIn: state.getIn(['home', 'mouseIn'])
})

const mapDispatch = (dispatch) => {
    return {
        handleOnMouseEnter() {
            dispatch(actionsCreators.mouseEnter())
        },
        handleOnMouseLeave() {
            dispatch(actionsCreators.mouseLeave())
        }
    }

}



export default connect(mapState, mapDispatch)(Recommend)