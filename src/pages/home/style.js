import styled from 'styled-components';

export const HomeWrapper = styled.div`
overflow:hidden;
width:960px;
margin: 0 auto;
`
export const HomeLeft = styled.div`
float:left;
margin-left:15px;
padding-top:30px;
width:625px;
.banner-image{
 width:625px;
 heigth:270px;
}
`
export const HomeRight = styled.div`
width:240px
float:right;
position: relative;
`
export const TopicWrapper = styled.div`
padding: 20px 0 10px 0;
overflow:hidden;
margin-left:-18px;
border-bottom:1px solid #dcdcdc;
`
export const TopicItem = styled.div`
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

export const ListItem = styled.div`
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
export const ListInfo = styled.div`
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
export const RecommendUl = styled.ul`
width:280px;
`
export const link = styled.a.attrs({href: '/'})`
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
export const RecommendLi = styled.li`
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
export const QRcodeBox = styled.div`
overflow:hidden;
box-sizing: border-box;
margin: 20px 0 30px 0;
padding: 10px 11px;
width: 100%;
border: 1px solid #f0f0f0;
border-radius: 6px;
background-color: #fff;
cursor:pointer;
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
export const LargeQR = styled.div`
    border: 1px solid #dcdcdc;
    box-shadow: 0px 1px 10px #888888;
    width: 200px;
    margin: 0 auto;
    position: absolute;
    top: 161px;
    background: white;
    left: 23px;
.QR-Pic{
    height: 180px;
    width: 180px;
    display: block;
    margin: 0 auto;
    box-sizing: border-box;
    padding: 10px;
}
`
export const WriterWrapper = styled.div`
width:100%;
`
export const WriterTop = styled.div`
overflow:hidden;
.leftTitle{
    display:inline-block;
    float:left;
    font-size: 14px;
    color: #969696;
}
.iconfont{
    float:right;
    font-size: 14px;
    color: #969696;
    cursor:pointer;
}
.rightTitle{
    display:block;
    float:right;
    font-size: 14px;
    color: #969696;
    cursor:pointer;
}
`
export const WriterUl = styled.ul`
.writerList{
    overflow:hidden;
    margin: 10px 0px;
}
.avatar{
    float:left;
    width: 48px;
    height: 48px;
    border: 1px solid #ddd;
    border-radius: 50%;   
}
`
export const FirstLine = styled.div`
overflow:hidden;
width:79%;
height:30px;
padding-left: 10px;
box-sizing: border-box;
.addToFav
{
    float: right;
    margin-top: 5px;
    padding: 0;
    font-size: 13px;
    color: #42c02e;
   
}
.wirterName{
    float: left;
    padding-top: 5px;
    font-size: 14px;
    display: block;

    }
`
export const SecLine = styled.div`
overflow:hidden;
width:79%;
height:30px;
padding-left: 10px;
box-sizing: border-box;
.likes{
    float:right;
    margin-top: 2px;
    font-size: 12px;
    color: #969696;
}
.totalWords{
     float:left;
     margin-top: 2px;
     font-size: 12px;
     color: #969696;
}
`
export const SeeMore = styled.div`
width:100%;
box-sizing: border-box;
padding: 7px 7px 7px 12px;
background-color: #f7f7f7;
border: 1px solid #dcdcdc;
border-radius: 4px;
height:35px;
.all{
    font-size: 13px;
    color: #787878;
    text-align: center;
}
`
export const LoadMore = styled.div`
width:100%;
height:40px;
line-height:40px;
margin:30px 0;
background:#a5a5a5;
text-align:center;
border-radius:20px;
cursor:pointer;
`

export const BackTop = styled.div`
position:fixed;
right:0;
bottom:30px;
width:60px;
height:60px;
line-height:60px;
text-align:center;
border:1px solid #ccc;

`