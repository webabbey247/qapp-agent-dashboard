import React from 'react'
import styled from 'styled-components';
import { CustomRouterLink, GeneralMdText } from "../../GlobalCss";

export const SiteRTLContent = styled.div`
flex: 0 0 20%;
max-width: 20%;
// background: teal;
height: 100%;
padding: 2rem 0;

`;

export const SiteRTLContentNav = styled.div`
display: flex;
flex-direction: column;
`;


const Sidebar = () => {
  return (
    <>
    <SiteRTLContent>
          <SiteRTLContentNav>
            <GeneralMdText color="#F7F7F7" fontSize="24px" lineHeight="24px" textAlign="right" margin="1rem 0" padding="0" textTransform="uppercase" opacity="0.6" fontWeight="600">Qapp</GeneralMdText>
            <CustomRouterLink color="#F7F7F7" fontSize="16px" lineHeight="18px" textAlign="right" margin="0.7rem 0" padding="0" textTransform="capitalize" fontWeight="400" to="/">About US</CustomRouterLink>
            <CustomRouterLink color="#F7F7F7" fontSize="16px" lineHeight="18px" textAlign="right" margin="0.7rem 0" padding="0" textTransform="capitalize" fontWeight="400" to="/">Privacy Policy</CustomRouterLink>
            <CustomRouterLink color="#F7F7F7" fontSize="16px" lineHeight="18px" textAlign="right" margin="0.7rem 0" padding="0" textTransform="capitalize" fontWeight="400" to="/">Terms &amp; Conditions</CustomRouterLink>
          </SiteRTLContentNav>
        </SiteRTLContent>
    </>
  )
}

export default Sidebar