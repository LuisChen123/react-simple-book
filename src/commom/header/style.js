import styled from 'styled-components'
import logoPic from '../../static/logo.png'

// export const HeaderWrapper = styled.div
// `

// height:56px;
// border-bottom:1px soild #f0f0f0;
// `

// export const Logo = styled.a.attrs({
//     href:'/'
// })
// `
// top:0;
// left:0;
// display:inline-block;
// width:100px;
// height:56px;
// background:url(${logoPic});
// background-size:contain;
// float:left;
// `

// export const Nav = styled.div
// `
// width:960px;
// height:100%;
// margin: 0 auto;
// padding-right:70px;
// box-sizing:border-box;
// `
// export const NavItem = styled.div
// `
// line-height:56px;
// padding:0 15px;
// font-size:17px;
// color:#333;

// &.left{
//     float:left
// }

// &.right{
//     float:right;
//     color:#969696;
// }
// &.active{
//     color:#ea6f5a;
// }
// `

// export const NavSearch = styled.input.attrs({
//     placeholder:'搜索'
// })
// `
// box-sizing:border-box;
// width:160px;
// height:38px;
// margin:9px;
// border:none;
// outline:none;
// border-radius:19px;
// background:#eee;
// padding:0 20px;
// font-size:14px;
// margin-left:20px;
// &::placeholder{
//     color:#999;
// }
// `

// export const Addition = styled.div
// `
// position:absolute;
// right:0;
// top:0;
// height:56px;
// `
// export const Button = styled.div
// `
// margin-top:9px;
// float:right;
// line-height:38px;
// border:1px soild #ec6149;
// border-radius:19px;
// margin-right:20px;
// padding:0 20px;
// `


export const HeaderWrapper = styled.div
   `
    height:58px;
    min-width: 768px;
    max-width: 1440px;
    margin:0 auto;
    background-color: #fff;
    border-bottom: 1px solid #f0f0f0;
 `
export const Logo = styled.a.attrs({
   href: '/'
})
   `
top:0;
left:0;
display:inline-block;
width:100px;
height:100%;
background:url(${logoPic});
background-size:contain;
float:left;
`
export const InnerContainer = styled.div
`
width: 960px;
min-width:960px;
height:58px;
margin:0 auto;
background-color: #fff;
`
export const NavList = styled.ul
`
box-sizing: border-box;
padding: 19px 10px;
height: 58px;
`

export const SearchWrapper = styled.div
`
position: relative;
.slide-enter{
   width:160px;
   transition:all .2s ease-out;
 }
 .slide-enter-active{
   width:200px;

    
}
.slide-exit{
   width:200px;
}
.slide-exit-active{
   transition:all .2s ease-out;
}
.iconfont{
   position: absolute;
    right: 10px;
    top: 6px; 
    width: 30px;
    line-height: 30px;
    border-radius: 30px;
    background-color: red;
    text-align: center;
    &.focused{
      color:#777;  
      background-color: green;
    }
}
`
export const SearhBar = styled.input.attrs({
   placeholder: 'Search'
})
`
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
   width:250px;  
 }

`
export const NavItem = styled.li
`
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
