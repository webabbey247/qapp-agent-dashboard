import React from 'react'
import styled from 'styled-components'
import { agentLogo, profileHeaderImg } from "../../assets";


export const SiteContainerHeader = styled.div`
display: flex;
justify-content: space-between;
`;

export const SiteLogoWrapper = styled.figure`
margin: 0;
padding: 0;
height: auto;
`

export const SiteLogo = styled.img`
height: auto;
width: 90px;
`;

export const SiteProfileWrapper = styled.div``;

export const SiteProfileLogo = styled.img`
width: 50px;
height: 50px;
`;


const Header = () => {
  return (
    <>
        <SiteContainerHeader>
          <SiteLogoWrapper>
            <SiteLogo alt="Agent App" src={agentLogo} />
          </SiteLogoWrapper>
          <SiteProfileWrapper>
            <SiteProfileLogo src={profileHeaderImg} />
          </SiteProfileWrapper>
        </SiteContainerHeader>
    </>
  )
}

export default Header