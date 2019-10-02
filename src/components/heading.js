import { Heading } from 'rendition'
import styled, { css } from 'styled-components'
import React from 'react'
import { Divider } from './divider'
import { colors } from './theme/colors'

const SectionHeadingWrapper = styled.div`
  text-align: center;
  margin-top: 1rem;

  h1 {
    font-size: 25px;
    font-weight: 100;
    color: ${colors.text.dark};

    ${props =>
      props.inverse &&
      css`
        color: ${colors.white};
      `}
  }

  h4 {
    margin-top: 1rem;
    font-size: 12px;
    color: ${colors.text.light};

    ${props =>
      props.inverse &&
      css`
        color: ${colors.gray.light};
      `}
  }
`

export const SectionHeading = ({ title, subtitle, inverse }) => (
  <SectionHeadingWrapper inverse={inverse}>
    {title && <Heading.h1>{title}</Heading.h1>}
    {subtitle && <Heading.h4>{subtitle}</Heading.h4>}
    <Divider inverse={inverse} />
  </SectionHeadingWrapper>
)
