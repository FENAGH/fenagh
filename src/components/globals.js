import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import styled from '@emotion/styled'
import { Box, Flex } from '@chakra-ui/react'

export const Content = styled.div`
  color: #3f3f3f;
  padding-bottom: 30px;
  font-size: 13px;
  line-height: 200%;
  a{
    color: #15640f;
    text-decoration: none;
  }
  p{
    margin-bottom: 1.9em;
  }
  p, h2, h3, h4, h5,
  .content-condensed ul, 
  .content-condensed ol {
    max-width: 620px;
    margin-left: auto;
    margin-right: auto;
  }
  h1, h2, h3, h4, h5{
    font-family: 'Bebas neue', sans-serif;
  }
  h2{
    font-size: 1.4rem;
    margin-bottom: .9em;
    padding-top: .9em;
    line-height: 125%;
    letter-spacing: -.5px;
    text-align: left;
    color: #181818;
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
    .content-media-item{
      padding-top: .6em;
      .content-caption{
        margin-top: 9px;
        margin-left: 10px;
        margin-right: 10px;
        font: 12px/180% "Roboto",Arial,sans-serif;
        color: #a5a5a5;
        text-align: center;
      }
    }
  }
  .content-fact{
    max-width: 620px;
    margin: 2.5em auto;
    padding: 39px 40px 34px;
    border: 4px solid #232323;
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
    .content-fact{
      padding: 59px 60px 54px;
    }
    .content-pull{
      width: calc(50% - 60px);
      .content-media {
        margin-bottom: .9em;
        .content-caption{
          font-size: 13px;
          margin-left: auto;
          margin-right: auto;
        }
      }
    }
    .content-pull--left{
      clear: left;
      float: left;
      margin-right: 30px;
    }
  }
  @media (min-width: 1024px){
    h2{
      font-size: 1.8rem;
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
  @media (min-width: 1024px){
    padding-bottom: 90px;
  }
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