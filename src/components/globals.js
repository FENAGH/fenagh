import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import { Box, Flex } from '@chakra-ui/react'
import styled from '@emotion/styled'

export const Content = styled.div`
  color: #303030;
  padding-bottom: 30px;
  font-size: 13px;
  line-height: 200%;
  .label{
    color: #a0a0a0;
  }
  b, strong {
    font-weight: bolder;
  }
  .external-link{
    color: #15640f;
    text-decoration: none;
    font-weight: bold;
  }
  p{
    margin-bottom: 1.9em;
  }
  p, h2, h3, h4, h5, ul, ol {
    max-width: 620px;
    margin-left: auto;
    margin-right: auto;
  }
  p.center{
    text-align: center;
  }
  p.has-link{
    margin-top: 2.9em;
  }
  p.has-dropcap:first-of-type::first-letter {
    float: left;
    margin-top: .04em;
    margin-right: 10px;
    font-size: 615%;
    line-height: 80%;
  }
  h1, h2, h3, h4, h5{
    font-family: 'Bebas neue', sans-serif;
    text-align: center;
  }
  h2{
    font-size: 1.4rem;
    margin-bottom: .9em;
    padding-top: .9em;
    line-height: 125%;
    color: #181818; 
  }
  > ul{
    list-style-type: disc;
    border-left: 20px solid transparent;
    margin-bottom: 1.6em;
    padding: 0;
    li{
      padding: .3em 0;
      &:first-child{
        padding-top: 0;
      }
      a{
        color: #63b3ed;
      }
    }
  }
  blockquote{
    line-height: 0;
    position: relative;
    max-width: 620px;
    margin: 0 auto 2.5em;
    padding: 48px 15px 0;
    text-align: center;
    color: #181818;
    &:before{
      content: '‘‘';
      opacity: .1;
      display: inline-block;
      margin-left: -14px;
      margin-top: -74px;     
      font: 300 160px/100% 'Times New Roman',serif;
      letter-spacing: -14px;
    }
    p{
      margin-bottom: .58462em;
      font: 700 18px/150% "Libre Baskerville", serif;
      letter-spacing: -.5px;
    }
    p:first-child{
      margin-top: -84px;
    }
  }
  .highlights{
    color: #15640f;
    font-size: 1.1rem;
    letter-spacing: 1px;
    margin-bottom: .3rem;
  }
  .signature{
    span{
      display: block;
      &:nth-child(2){
        font-weight: bold;
      }
    }
  }
  table {
    max-width: 620px;
    margin-left: -15px;
    margin-right: -15px;
    margin-left: auto;
    margin-right: auto;
  }
  .content-pull{
    max-width: 620px;
    margin-left: auto;
    margin-right: auto;
  }
  .content-media{
    line-height: 0;
    max-width: 620px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1.9em;
    &--fullWidth{
      max-width: none;
    }
  }
  .content-media-items{
    width: 100%;
  }
  .content-media-item{
    padding-top: .6em;
  }
  .content-caption{
    margin-top: 10px;
    margin-left: 10px;
    margin-right: 10px;
    color: #a5a5a5;
    text-align: center;
    font: 12px/180% "Libre Baskerville", "Times New Roman", serif;
    font-style: italic;
  }
  .content-fact{
    max-width: 620px;
    margin: 2.5em auto;
    padding: 39px 40px 34px;
    border: 4px solid #232323;
  }
  .page-meta{
    display: flex;
    flex-direction: column;
    margin-top: -50px;
    margin-bottom: 1.5rem;
    &__nav{
      order: 1;
      font: 14px/180% "Bebas neue", sans-serif;
      border-bottom: 1px solid #f5f5f5;
      &--list {
        display: flex;
        margin-left: auto;
        margin-right: auto;
        list-style: none;
        .list-item{
          padding: 0;
          display: inline-flex;
          align-items: center;
          flex: 0 0 auto;
          &:not(:last-child):after{
            content:"\\2044";
            color: #b9df3c;
          }
          > a {
            outline: 0;
            position: relative;
            display: block;
            padding: 6px 9px;
            color: #3f3f3f;
            transition: color .267s ease-out;
            .tag-name{
              hr {
                display: none;
              }
            }
          }
          &:hover {
            a{
              color: #b9df3c;
            }
          }
        }
        .list-item:first-child{
          margin-left: auto;
          border-left: 6px solid transparent;
        }
        .list-item:last-child{
          margin-right: auto;
          border-right: 6px solid transparent;
        }
      }
    }
  }
  /* :::::::::: Grid Items :::::::::: */
  .content-grid{
    padding-top: .9em;
    padding-bottom: 20px;
    .content-grid-item .content-grid-title{
      display: flex;
      align-items: center;
      margin-bottom: .4em;
      font-size: 1.4rem;
      .icon{
        margin-right: 10px;
      }
    }
  }
  @media (min-width: 415px){
    table {
      margin-left: auto;
      margin-right: auto;
    } 
  }
  @media (min-width: 768px){
    font-size: 16px;
    padding-bottom: 80px;
    h2{
      font-size: 1.6rem;
    }
    .highlights{
      font-size: 1.4rem;
      letter-spacing: 2px;
      margin-bottom: .5rem;
    }
    .content-fact{
      padding: 59px 60px 54px;
    }
    .content-pull{
      width: calc(50% - 60px);
      .content-media{
        margin-bottom: .9em;
      }
    }
    .content-media--double .content-media-item{
      width: calc(50% - 15px);
    }
    .content-media-items{
      display: flex; 
      justify-content: space-between;
    }
    .content-caption{
      margin-left: 30px;
      margin-right: 30px;
      font-size: 14px;
    }
    .content-pull--left{
      clear: left;
      float: left;
      margin-right: 20px;
    }
    .content-pull--right{
      clear: right;
      float: right;
      margin-left: 20px;
    }
    .content-pull--narrow{
      width: 280px;
    }
  }
  @media (min-width: 1024px){
    h2{
      font-size: 2.4rem;
    }
    blockquote{
      p{
        font-size: 25px;
      }
    }
    .content-grid{
      display: flex;
      flex-wrap: wrap;
      padding-left: 30px;
      padding-right: 30px;
      .content-grid-item{
        width: calc(50% - 50px);
        margin-right: 100px;
        .content-grid-title{
          font-size: 1.8rem;
          align-items: center;
          .icon{
            width: 60px;
            height: auto;
            margin-right: 0;
          }
        }
        .content-grid-content{
          padding-left: 60px;
        }
        &:nth-child(2n) {
          margin-right: 0;
        }
      }
    }
    .page-meta{
      float: left;
      width: calc((100% - 620px)/2 - 45px);
      padding-top: 2rem;
      margin-top: 0;
      margin-bottom: 0;
      &__nav{
        font: 16px/180% "Bebas neue", sans-serif;
        order: initial;
        margin-left: 0;
        margin-right: 0;
        margin-bottom: 24px;
        border-bottom: 0px solid transparent;
        &--list {
          display: inline-block;
          .list-item{
            margin-left: auto;
            display: block;
            &:first-child{
              border-left: 0;
            }
            &:last-child{
              border-right: 0;
            }
            &:after{
              content: "" !important;
            }
            > a {
              outline: 0;
              padding: 3px 0;
              .tag-name{
                display: inline-block;
                hr {
                  display: block;
                  position: relative;
                  top: -6px;
                  display: block;
                  width: 9px;
                  height: 1px;
                  margin: 0;
                  background: #b9df3c;
                  border: 0;
                  transition: width .267s ease-out;
                }
              }
              &:hover {
                hr{
                  width: 100%;
                }
              }
            }
          }
        }
      }
    }
  }
`

export const TitleSection = styled.div`
  font-family: 'Bebas neue', sans-serif;
  text-align:center;
  .eyebrow{
    font-size:14px;
    color:#15640f;
    letter-spacing:0.2em;
    margin-bottom: .2rem;
  }
  .section-title{
    color:#000;
    font-size: 2.2rem;
    letter-spacing:1px;
    line-height:1.1;
    margin-bottom: 2rem;
  }
  @media (min-width: 1024px){
    .eyebrow{
      font-size:16px;
    }
    .section-title{
      font-size: 3.2rem;
      margin-bottom: 58px;
    }
  }
`

export const SectionWrapper = styled.section`
  position: relative;
  padding-bottom: 40px;
  .content-with-image{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    .image-block{
      width: 100%;
    }
  }
  /* @media (min-width: 1024px){
    padding-bottom: 90px;
  } */
  .center{
    text-align: center;
  }
`

const BackgroundWrapper = ({className, fluid, children}) => (
  <BackgroundImage 
    Tag="section"
    fluid={fluid} 
    className={className}
  >
    {children}
  </BackgroundImage>
)

export const SectionWrapperWithBackground = styled(BackgroundWrapper)`
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120vh;
  width: 100%;
  background-color: #181818;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  .center{
    text-align: center;
  }
  .image-holder{
    width: 100%;
    max-width: 520px;
  }
`

const Link = ({to, className, children}) => <GatsbyLink to={to} className={className}>{children}</GatsbyLink>

export const StyledLink = styled(Link)`
  position: relative;
  display: inline-block;
  padding: 6px 21px 6px 22px;
  font-family: 'Bebas neue', sans-serif;
  font-size: 1.4rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-align: center;
  color: #232323;
  border: 3px solid #232323;
  transition: all .267s ease;
  &:hover{
    background: #15640f;
    color: #fff;
    border-color: #15640f;
  }
  
`

export const Constrain = styled.div`
  max-width: 1340px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
  @media (min-width: 768px){
    padding-left: 30px;
    padding-right: 30px;
  }
`

export const Table = styled.div`
  display: block;
  margin: 0 auto;
  width: 100%;
  max-width: 620px;
  background: #fff;
  border-radius: 4px;
  border-collapse: collapse;

  margin-bottom: 40px;

  @media (min-width: 580px){
    display: table;
  }
`

export const TableRow = styled.div`
  display: block;
  padding: 14px 0 7px;
  border-bottom: 1px solid #f5f5f5;
  @media (min-width: 580px){
    display: table-row;
    &:nth-child(odd){
      background-color: #f5f5f5;
    }
  }
`

export const TableHead = styled(TableRow)`
  color: #fff;
  font-family: 'Bebas Neue', sans-serif;
  padding: 0;
  height: 6px;
  background-color: #15640f !important;
  > div {
    display: none;
  }
  @media (min-width: 580px){
    > div {
      font-size: 20px;
      display: table-cell;
    }
  }
`

export const Cell = styled.div`
  font-size: 13px;
  display: block;
  padding: 6px 10px;
  &:before{
    margin-bottom: 3px;
    content: attr(data-title);
    font-family: 'Bebas Neue', sans-serif;
    font-size: 12px;
    letter-spacing: 1px;
    min-width: 98px;
    line-height: 10px;
    color: #d2d2d2;
    display: block;
  }
  &.place-holder{
    display: none;
  }
  @media (min-width: 580px){
    display: table-cell;
    &:before{
      display: none;
    }
    &.place-holder{
      display: block;
    }
  }
`

export const Container = ({children, fluid, ...otherProps}) => (
  <Box
    flexGrow="1"
    margin="0 auto"
    px={fluid ? "0" : {base: "15px", md: "30px"}}
    h="100%"
    w="auto"
    maxWidth={fluid ? "100%" : ["100%", "960px", "1216px", "1340px"]}
    pos="relative"
    {...otherProps}
  >
    {children}
  </Box>
)

export const FlexContainer = ({children, spaceBetween, isResponsive, ...otherProps}) => (
  <Flex
    align="center"
    pos="relative"
    justifyContent={spaceBetween ? "space-between" : "center"}
    flexDir={isResponsive ? {base: "column", md: "row"} : "row"}
    {...otherProps}
  >
    {children}
  </Flex>
)