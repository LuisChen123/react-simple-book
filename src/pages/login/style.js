import styled from 'styled-components';

export const LoginWrapper = styled.div`
    width:100%;
    height:1000px;
    background:#eee;
    padding: 180px 0 0 0;
    .hidden{
        display:none;
    }
`
export const LoginBox = styled.div`
    width: 400px;
    height:400px;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0,0,0,.1);
    vertical-align: middle;
    padding: 50px 0 50px 0px;
.loginButton{
    margin: 0 auto;
    width: 80%; 
    padding: 9px 18px;
    font-size: 18px;
    border: none;
    border-radius: 25px;
    color: #fff;
    background: #3194d0;
    cursor: pointer;
    outline: none;
    display: block;
    clear: both;
    }
`
export const TitleBox = styled.div`
    display: flex;
    justify-content: center;
h2{
    font-size: 18px;
    padding: 10px;
    color: #969696;
    cursor: pointer;
}
b{
    padding: 6px;
}
.active{
    font-weight: 700;
    color: #ea6f5a;
    border-bottom: 2px solid #ea6f5a;
}
`
export const InputBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 0 auto;
    margin-top: 40px;
.phone{
    box-sizing: border-box;
    width: 100%;
    height: 50px;
    margin-bottom: 0;
    padding: 0 0 0 30px;
    border: 1px solid #c8c8c8;
    border-radius: 0 0 4px 4px;
    background-color: hsla(0,0%,71%,.1);
    vertical-align: middle;
}
.passWord{
    box-sizing: border-box;
    width: 100%;
    height: 50px;
    margin-bottom: 0;
    padding: 0 0 0 30px;
    border: 1px solid #c8c8c8;
    border-radius: 0 0 4px 4px;
    background-color: hsla(0,0%,71%,.1);
    vertical-align: middle;
}

`
export const Remember = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 20px 40px 20px 40px;
`