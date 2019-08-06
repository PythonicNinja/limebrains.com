import PropTypes from 'prop-types'
import React, { useEffect } from 'react'
import { Heading } from 'rendition'
import styled from 'styled-components'

import { Img } from './../img'
import { Link } from './../link'
import { Flex, Box } from './../flex'
import { gradients } from './../theme/colors';
import { LimeBrainsLogo } from './../theme/logos'
import { Button } from './../buttons';
import { Flip } from 'react-reveal';
import { BrowserView, MobileView } from 'react-device-detect'

import './header.css'

const HeaderWrapper = styled.header`
  max-height: 100px;
  position: sticky;
  top: 0;
  z-index: 1000;

  ul {
    li {
      display: inline-block;
      list-style: none;
      margin-right: 1rem;
    }
  }
`;

const NavButton = styled(Button)`
  font-weight: 100;
`


const Header = function ({siteTitle}) {

  useEffect(() => {
    setInterval(() => {
      var menu = document.getElementById('menuToggle');
      var closeIcon = document.getElementById("closeIcon");
      if(closeIcon){
        menu.addEventListener('click', handleMenuClick);
        function handleMenuClick(event) {
          if (event.target.nodeName === 'BUTTON') {
            closeIcon.checked = false;
          }
        }
    }
    }, 1000)
      
  })

  return (
    <HeaderWrapper>
    <Flex
      justify
      align
      style={{
        background: gradients.default
      }}
    >
      <Box pt={10} pb={10} pr={10}>
        <Link to="/">
          <Flip left>
            <Img src={LimeBrainsLogo} responsive width={80}/>
          </Flip>
        </Link>
      </Box>
      <Flex justify align alignSelf={'center'}>
        <Link to="/">
          <Heading.h2>
            {siteTitle}
          </Heading.h2>
        </Link>
      </Flex>
      <Flex
        flex={1}
        justify={'flex-end'}
        align={'flex-end'}
        alignSelf={'center'}
      >
      <BrowserView>
        <ul>
          <li>
            <Link to={'#about'}>
              <NavButton outline white text>
                ABOUT
              </NavButton>
            </Link>
          </li>
          <li>
            <Link to={'#clients'}>
              <NavButton outline white text>
                CLIENTS
              </NavButton>
            </Link>
          </li>
          <li>
            <a href='https://github.com/limebrains/' style={{ textDecoration: 'none' }}>
              <NavButton outline white text>
                GITHUB
              </NavButton>
            </a>
          </li>

          <li>
            <Link to={'#blog'}>
              <NavButton outline white text>
                BLOG
              </NavButton>
            </Link>
          </li>
          <li>
            <Link to={'#team'}>
              <NavButton outline white text>
                TEAM
              </NavButton>
            </Link>
          </li>
          <li>
            <Link to={'#contact'}>
              <NavButton outline white>
                CONTACT
              </NavButton>
            </Link>
          </li>
        </ul>
      </BrowserView>

      
      <MobileView>
        <nav role="navigation">
            <div id="menuToggle">
            <input id="closeIcon" type="checkbox" />
            
            <span></span>
            <span></span>
            <span></span>

            <ul id="menu">
                  <li>
                    <Link to={'#about'}>
                      <NavButton outline white text>
                        ABOUT
                      </NavButton>
                    </Link>
                  </li>
                  <li>
                    <Link to={'#clients'}>
                      <NavButton outline white text>
                        CLIENTS
                      </NavButton>
                    </Link>
                  </li>
                  <li>
                    <a href='https://github.com/limebrains/' style={{ textDecoration: 'none' }}>
                      <NavButton outline white text>
                        GITHUB
                      </NavButton>
                    </a>
                  </li>
                  <li>
                    <Link to={'#blog'}>
                      <NavButton outline white text>
                        BLOG
                      </NavButton>
                    </Link>
                  </li>
                  <li>
                    <Link to={'#team'}>
                      <NavButton outline white text>
                        TEAM
                      </NavButton>
                    </Link>
                  </li>
                  <li>
                    <Link to={'#contact'}>
                      <NavButton outline white>
                        CONTACT
                      </NavButton>
                    </Link>
                  </li>
                </ul>
          </div>
        </nav>
      </MobileView>
      </Flex>
    </Flex>
  </HeaderWrapper>
  ) 
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
