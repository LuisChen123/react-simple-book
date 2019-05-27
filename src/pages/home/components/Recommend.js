import React, { PureComponent, Fragment } from 'react'
import { connect } from 'react-redux';
import {
    RecommendUl,
    RecommendLi,
    LargeQR,
    QRcodeBox,
} from '../style';
import { actionsCreators } from '../store';
import { GlobalStyled } from '../../../static/inconfont/iconfont';

class Recommend extends PureComponent {
    showBigQR() {
        const {mouseIn} = this.props;
        if (mouseIn) {
            return (
                <LargeQR>
                    <img
                        className="QR-Pic"
                        src="//upload.jianshu.io/admin_banners/web_images/4658/ef2cf6b3478da3cb7482f228212ecb59603fd408.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
                        alt=""
                    >
                    </img>
                </LargeQR>
            )
        }
    }
    componentDidMount(){
    }
    check(){
        const {list} = this.props;
        console.log(list)
        if(list){
            console.log(list)
            return(
                <RecommendUl>
                {
                    list.map((item)=>{
                        return (
                            <a href="/" key={item.get('id')}>
                            <RecommendLi>
                                <img
                                    className="pic"
                                    src={item.get('imgUrl')}
                                    alt=""
                                />
                            </RecommendLi>
                        </a>
                        )
                    })
                }  
            </RecommendUl>
            )
        }else{
            console.log(list)
            return null
        }
    }

    render() {
        const {handleOnMouseEnter , handleOnMouseLeave,list,check} = this.props
        console.log(list)
    
        return (
            <Fragment>
                <GlobalStyled/>
               {check}
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
    mouseIn: state.getIn(['home', 'mouseIn']),
    list:state.getIn(['home','recommendList'])
})

const mapDispatch = (dispatch) => {
    return {
        handleOnMouseEnter() {
            dispatch(actionsCreators.mouseEnter())
        },
        handleOnMouseLeave() {
            dispatch(actionsCreators.mouseLeave())
        },
        getRecommendList(){
            dispatch(actionsCreators.recommentList())
        }
    }

}
export default connect(mapState, mapDispatch)(Recommend)