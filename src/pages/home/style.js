import styled from 'styled-components';

export const HomeWrapper = styled.div
`
overflow:hidden;
width:960px;
margin: 0 auto;
`
export const HomeLeft = styled.div
`
float:left;
margin-left:15px;
padding-top:30px;
width:625px;
.banner-image{
 width:625px;
 heigth:270px;
}

`
export const HomeRight = styled.div
`
width:240px
float:right;
`
export const TopicWrapper = styled.div
`
padding: 20px 0 10px 0;
overflow:hidden;
margin-left:-18px;
border-bottom:1px solid #dcdcdc;
`
export const TopicItem = styled.div
`
float:left;
height:56px;
line-height:72px;
padding-right:10px;
margin: 18px 0 45px  15px;
background:#f7f7f7;
font-size:14px;
color:#000;
border:1px solid #dcdcdc;
border-radius:4px;
.topic-pic{ 
    display:block;
    float;left;
    width:32px;
    height:32px;
    margin-bottom:10px;
}
`

export const ListItem = styled.div
`
overflow:hidden;
padding:20px 0;
border-bottom:1px solid #dcdcdc;
.pic{
    display:block;
    float:right;
    width:125px;
    height:100px;
    border-radius:10px; 
}
`
export const ListInfo = styled.div
`
width:500px;
float:left;
.title{
    line-height:27px;
    font-size:18px;
    font-weight:bold;
    color:#333;
}
.desc{
    margin: 0 0 8px;
    font-size: 13px;
    line-height: 24px;
    color: #999;
}
`
export const RecommendUl = styled.ul
`
width:280px;
`

export const link = styled.a.attrs({
    href: '/'
})
`
width: 280px;
height: 50px;
margin-bottom: 6px;
border-radius: 4px;
padding-top: 30px;
}
.pic{
    width: 280px;
    height: 50px;
`
export const RecommendLi = styled.li
`
width: 280px;
height: 50px;
margin-bottom: 6px;
border-radius: 4px;
padding-top: 30px;
}
.pic{
    width: 280px;
    height: 50px;
`

export const QRcodeBox = styled.div
`
overflow:hidden;
box-sizing: border-box;
margin: 20px 0 30px 0;
padding: 10px 11px;
width: 100%;
border: 1px solid #f0f0f0;
border-radius: 6px;
background-color: #fff;
.QrCodePic{
    float:left;
    width:60px;
    height:60px;
}
.QrTitle{
    font-size: 15px;
    color: #333;
    float:left;
    margin: 10px 7px;
}
.QrDesc{
    margin: 0 0 0 7px;
    font-size: 13px;
    color: #999;
    float:left;
}
`





