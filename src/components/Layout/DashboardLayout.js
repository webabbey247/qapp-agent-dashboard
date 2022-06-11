import React from "react";
import styled from 'styled-components';
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

export const SiteWrapper = styled.main`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  background: #1A3C4A;
  padding: 1rem 2rem;
`;

export const SiteContent = styled.div`
display: flex;
flex-direction: row;
`;

export const SiteLTRContent = styled.div`
flex: 0 0 80%;
max-width: 80%;
height: 100%;
padding: 2rem 0;
border-right: 0.3px solid rgba(244, 244, 244, 0.5);
`;

export const SiteRTLContentWrapper = styled.div`
width: min(100%, 63rem);
`;

export const SiteRTLContent = styled.div`
flex: 0 0 20%;
max-width: 20%;
height: 100%;
`;


const DashboardLayout = ({ children }) => {
  return (
    <>
      <SiteWrapper>
        <Header />
        <SiteContent>
          <SiteLTRContent>
            <SiteRTLContentWrapper>
              {children}
            </SiteRTLContentWrapper>
          </SiteLTRContent>
          <Sidebar />
        </SiteContent>
      </SiteWrapper>
    </>
  );
};

export default DashboardLayout;
