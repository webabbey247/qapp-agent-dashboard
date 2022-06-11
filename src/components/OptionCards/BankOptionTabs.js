import React from 'react'
import styled from "styled-components";
import { GeneralSmText } from "../../GlobalCss";

export const OptionNavTabContainer = styled.div`
background: #224250;
border: 0.3px solid rgba(244, 244, 244, 0.4);
border-radius: 8px;
padding: 1.5rem 1rem ;
display: flex;
justify-content: space-between;
flex-direction: row;
margin: 2.5rem 0 1.5rem;
`;


const BankOptionTabs = () => {
  return (
    <>
        <OptionNavTabContainer>
              <GeneralSmText color="#7E949F" fontSize="20px" lineHeight="24px" fontWeight="700" textTransform="Capitalize" textAlign="center">My Banks</GeneralSmText>
              <GeneralSmText color="#7E949F" fontSize="20px" lineHeight="24px" fontWeight="700" textTransform="Capitalize" textAlign="center">Approved</GeneralSmText>
              <GeneralSmText color="#7E949F" fontSize="20px" lineHeight="24px" fontWeight="700" textTransform="Capitalize" textAlign="center">Pending</GeneralSmText>
              <GeneralSmText color="#7E949F" fontSize="20px" lineHeight="24px" fontWeight="700" textTransform="Capitalize" textAlign="center">Inactive</GeneralSmText>
            </OptionNavTabContainer>
    </>
  )
}

export default BankOptionTabs