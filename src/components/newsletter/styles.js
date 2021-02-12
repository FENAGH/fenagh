import styled from '@emotion/styled'

export const NewsletterWrapper = styled.section`
  margin: 0 auto;
  padding-top: 30px;
  padding-bottom: 40px;
  text-align: center;
  position: relative;
  width: 100%;
  max-width: 620px;
  @media (min-width: 768px){
    padding-top: 65px;
    padding-bottom: 75px;
  }
`

export const NewsletterHeader = styled.header`
  position: relative;
  margin-bottom: 10px;
  h2, h3{
    font-family: "Bebas neue", sans-serif;
  }
  > h3{
    user-select: none;
    padding-top: 14px;
    padding-bottom: 8px;
    font-weight: 400;
    font-size: 70px;
    line-height: 72px;
    color: #f7f7f7;
  }
  > h2{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    font-weight: 400;
    font-size: 34px;
    line-height: 36px;
  }
  @media (min-width: 768px){
    h3{
      padding-top: 16px;
      padding-bottom: 10px;
      font-size: 140px;
      line-height: 140px;
    }
    h2{
      font-size: 68px;
      line-height: 70px;
    }
  }
`

export const NewsletterContent = styled.div`
  max-width: 414px;
  margin: 0 auto;
  padding-bottom: 10px;
  color: #303030;
  text-align: center;
  margin: 0 auto;
  font-size: 14px;
  font-style: italic;
  > p{
    margin: 0 0 1.5em;
    padding: 0;
  }
  @media (min-width: 768px){
    width: 460px;
    max-width: none;
    font-size: 18px;
    line-height: 150%;
    padding-bottom: 25px;
  }
`

export const Form = styled.form`
  position:relative;
  display:flex;
  width:100%;
  max-width:460px;
  margin:0 auto;
  > input {
    flex-grow:1;
    min-width: 0;
    text-align: center;
    outline: 0;
    height: 38px;
    padding: 2px 10px 0;
    font-size: 14px;
    font-weight:600;
    border:0;
    border-radius: 0;
    border-bottom: 2px solid #eee;
    transition:border-color 0.267s ease, background-color 0.267s ease;
    &:hover{
      border-bottom-color: #15640f;
      &::placeholder{
        color: #15640f;
      }
    } 
    &::placeholder{
      opacity: 1;
      color: #606060;
      transition: color 0.267s ease;
    }
  }
  > button{
    font-family: "Bebas neue", sans-serif;
    user-select: none;
    cursor: pointer;
    transform: translateZ(0);
    display: inline-block;
    height: 38px;
    padding: 0 16px;
    font-size: 16px;
    line-height: 38px;
    letter-spacing: .5px;
    text-rendering: geometricPrecision;
    text-transform: uppercase;
    border: 0;
    background: #15640f;
    color: #fff;
  }
  @media (min-width: 768px){
    input{
      height: 44px;
      font-size: 16px;
    }
    button{
      height: 44px;
      padding-left: 20px;
      padding-right: 20px;
      font-size: 20px;
      letter-spacing: 2px;
      line-height: 44px;
    }
  }
`