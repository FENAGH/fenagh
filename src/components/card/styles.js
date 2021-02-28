import styled from '@emotion/styled'
import { css } from '@emotion/react'

export const CardWrapper = styled.article`
  width:100%;
  position:relative;
  margin-bottom:30px;
  padding-bottom: 10px;
  font-size:12px;
  line-height: 150%;
  .card-image{
    position:relative;
    width:100%;
    margin-bottom: 30px;
    transition: transform .267s ease-out;
  }
  .card-content{
    width: 100%;
    position: relative;
    &__title{
      font-family: 'Bebas neue', sans-serif;
      font-size: 32px;
      line-height: 125%; 
      font-weight: regular;
      margin-bottom: 6px;
    }
    &__title-intro{
      display: block;
      padding-bottom: 0;
      font-size: 1.2rem;
      line-height: 12px;
      letter-spacing: 2px;
    }
    &__description{
      margin-bottom: 20px;
      &--item{
        text-transform: capitalize;
        font-size: 14px;
        span{
          font-style: italic;
          margin-right: 5px;
          font-weight: bold;
        }
        &:first-child{
          margin-bottom: 10px;
        }
      }
    }
  }
  @media (min-width:768px){
    width: calc(33.333333333% - 20px);
    margin-right: 30px;
    .card-content{
      text-align: center;
    }
    &:nth-child(3n){
      margin-right: 0px;
    }
    &:hover{
      .card-image{
        transform: scale(1.0408);
        .bg-shadow{
          opacity: 1;
        }
      }
    }
  }
  ${props => props.featured && css`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;
    padding: 30px 0 40px;
    width: 100% !important;
    .card-image-wrapper{
      width:100%;
      margin-bottom:30px;
      position:relative
    }
    .card-image{
      box-shadow:0 40px 80px rgba(0,0,0,0.2);
      z-index: 2;
    }
    .card-image-secondary{
      width: calc(100% + 2rem);
      height: 280px;
      overflow: hidden;
      position: absolute;
      top: 66%;
      left: -1rem;
      &::before{
        content: ' ';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(rgba(255,255,255,0), rgba(255,255,255,0) 70%, #fff 100%);
        z-index: 1;
      }
    }
    .card-badge{
      position: absolute;
      left: 12px;
      top: 12px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 70px;
      height: 70px;
      background: rgba(0,0,0,0.1669);
      border-radius: 50%;
      z-index: 5;
    }
    .card-content{
      text-align: left;
      z-index: 2;
      padding-left: 18px;
      padding-right: 18px;
      &__title::after{
        content: ' ';
        background: #1d1d1d;
        display: block;
        width: 50px;
        height: 3px;
        margin: 6px 0 20px 0;
      }
      &__featured-text{
        font-size:14px;
        line-height:180%;
        margin-bottom: 20px;
      }
    }
    @media (min-width: 520px){
      .card-image-secondary{
        height: 320px;
      }
    }
    @media (min-width:768px){
      border-bottom: 0px solid transparent;
      flex-direction: row;
      margin-right: 0px;
      padding: 30px 0;
      .card-image-wrapper{
        width:50%;
      }
      .card-image-secondary{
        height: 100%;
        top: 30px;
        left: 100%;
        margin-left: -20%;
        &::before{
          display: none;
        }
      }
      .card-content{
        width: 60%;
        padding-left: 30px;
        padding-top: 0;
        padding-right: 0;
        &__title{
          font-size: 42px;
        }
        &__featured-text{
          font-size: 14px;
        }
      }
    }
    @media (min-width: 1024px){
      .card-content{
        width: 50%;
        padding-left: 9%;
        padding-right: 50px;
      }
    }
    &:hover{
      .card-image{
        transform: none;
        .bg-shadow{
          opacity: 1;
        }
      }
    }
  `}
`