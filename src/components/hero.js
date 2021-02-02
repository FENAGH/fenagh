import React from 'react'
import styled from '@emotion/styled'
import BackgroundImage from 'gatsby-background-image'

import { Constrain } from './globals'

const HeroWrapper = styled(BackgroundImage)`
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: calc(100vh - 10px);
  padding-top: 38px;
  text-align: center;
  color: #fff;
  width: 100%;
  background-color: #181818;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  &.hero-default{
    height: 175vw;
    min-height: 150vw;
    padding-top: 38px;
    padding-bottom: 38px;
  }
  &.hero-short{
    height: 100vw;
    min-height: 100vw;
  }
  &.hero-alignBottom{
    .hero-content{
      margin-top: auto;
      padding-bottom: 30px;
    }
  }
  &.hero-alignRight{
    .hero-content{
      margin-left: auto;
      text-align: right;
      .hero-title{
        margin-left: auto;
        text-align: right;
        max-width: 66%;
      }
    }
  }
  &.hero-alignLeft{
    .hero-content{
      text-align: left;
      .hero-title{
        margin-left: -.08em;
        text-align: left;
        max-width: 66%;
      }
    }
  }
  .hero-overlay{
    z-index: 2;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0,0,0,.65),transparent 25%,transparent);
  }
  .hero-content{
    z-index: 5;
    position: relative;
    width: 100%;
    .eyebrow-heading{
      background-color: #fff;
      color: #232323;
      font-family:'Bebas Neue', sans-serif;
      font-size: 14px;
      letter-spacing: 1.2px;
      line-height: 21px;
      display: inline-block;
      margin-bottom: 20px;
      text-transform: uppercase;
      padding: 0 13px 0 14px;
    }
    .hero-title{
      font-family:'Bebas Neue', sans-serif;
      color: #fff;
      font-size: 52px;
      line-height: 54px;
    }
  }
  @media (min-width: 768px){
    .hero-content{
      .hero-title{
        font-size: 126px;
        line-height: 116px;
        letter-spacing: -4px;
      }
    }
    &.hero-alignRight .hero-content{
      .hero-title{
        max-width: 60%;
      }
    }
    &.hero-alignLeft .hero-content{
      .hero-title{
        max-width: 60%;
      }
    }
  }
  @media (min-width: 1024px){
    &.hero-alignBottom{
      .hero-content{
        margin-top: auto;
        padding-bottom: 70px;
      }
    }
    &.hero-alignRight .hero-content{
      .hero-title{
        max-width: 55%;
      }
    }
    &.hero-alignLeft .hero-content{
      .hero-title{
        max-width: 55%;
      }
    }
    &.hero-default{
      height: 60.25vw;
      min-height: 52.25vw;
    }
    &.hero-short{
      height: 42.5vw;
      min-height: 42.5vw;
    }
    .hero-content .eyebrow-heading{
      font-size: 1rem;
      line-height: 28px;
      letter-spacing: 1.4px;
    }
  }
`

const Hero = ({sources, className, headline, section}) => {
  return (
    <HeroWrapper
      Tag="header"
      className={className}
      fluid={sources}
      backgroundColor={`#000`}
    >
      <div className="hero-content">
        <Constrain>
          {section && (
            <h4 className="eyebrow-heading">{section}</h4>
          )}
          <h1 className="hero-title">{headline}</h1>
        </Constrain>
      </div>
      <div className="hero-overlay" />
    </HeroWrapper>
  )
}

export default Hero