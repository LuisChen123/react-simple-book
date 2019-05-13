import styled from 'styled-components'
import logoPic from '../../static/logo.png'
export const HeaderWrapper = styled.div` 
   height:58px;
   min-width: 768px;
   max-width: 1440px;
   margin:0 auto;
   background-color: #fff;
   border-bottom: 1px solid #f0f0f0;
 `
export const Logo = styled.a.attrs({href: '/'})`
top:0;
left:0;
display:inline-block;
width:100px;
height:100%;
background:url(${logoPic});
background-size:contain;
float:left;
`
export const InnerContainer = styled.div`
width: 960px;
min-width:960px;
height:58px;
margin:0 auto;
background-color: #fff;
`
export const NavList = styled.ul`
box-sizing: border-box;
padding: 19px 10px;
height: 58px;
`
export const SearchWrapper = styled.div`
position: relative;
.zoom{
   position: absolute;
    right: 10px;
    top: 6px; 
    bottom:5px;
    width: 30px;
    line-height: 30px;
    border-radius: 30px;
    text-align: center;
    &.focused{
      color:#777;  
      
    }
}
`
export const SearhBar = styled.input.attrs({placeholder: 'Search'})`
box-sizing:border-box;
width:160px;
border:none;
outline:none;
border-radius:19px;
background:#eee;
padding:0 20px;
font-size:14px;
height: 40px;
color:#666; 
&::placeholder{
    color:#999;
}
&.focused{
   color:#777;  
   width:200px;  
 }
 &.slide-enter{
   width:160px;
   transition:all .2s ease-out;
 }
 &.slide-enter-active{
   width:200px;
}
&.slide-exit{
    width:200px;
}
&.slide-exit-active{
   transition:all .2s ease-out;
   width:160px;
}
`
export const SearchInfo = styled.div`
position:absolute;
left:0;
top:56px;
width:240px;
padding:0 20px;
box-shadow: 0 0 8px rgba(0,0,0,.2);
background:#fff;
`
export const SearchInfoTitle = styled.div`
margin-top:20px;
margin-bottom:15px;
line-height:20px;
font-size:14px;
color:#969696;
`
export const SearchInfoTitleSwitch = styled.span`
float:right;
font-size:13px;
cursor:pointer;
.spin{
   display:block;
   float:left;
   font-size:12px;
   margin-right:2px;
   transition: all .2s ease-in;
   transform:rotate(0deg);
   transform-origin:center center; 
}
`
export const SearchInfoList = styled.div`
overflow:hidden;
`

export const SearchInfoItem = styled.a`
display:block;
float:left;
line-height:20px;
padding:0 5px;
margin-right:10px;
margin-bottom:15px;
font-size:12px;
border:1px solid #ddd;
color: #787878;
border-radius:3px;
`
export const NavItem = styled.li`
padding: 0 10px;
&.left{
  float:left
}
&.right{
  float:right
}
&.searchTop{
   margin-top: -10px;
}
&.loginGrey{
   color:#969696
}
&.register{
   width: 80px;
   height: 38px;
   line-height: 37px;
   border: 1px solid rgba(236,97,73,.7);
   border-radius: 37px;
   font-size: 15px;
   color: #ea6f5a;
   text-align: center;
   margin-top: -10px;
   background-color: transparent;
   box-sizing: border-box;
}
&.writing{
   width: 74px;
   height: 40px;
   line-height: 40px;;
   border-radius: 20px;
   font-size: 15px;
   color: #fff;
   background-color: #ea6f5a;
   text-align: center;
   margin-top: -10px;
   margin-left: 14px;
}
`


