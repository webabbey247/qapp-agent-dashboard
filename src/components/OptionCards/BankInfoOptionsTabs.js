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


const BankInfoOptionsTabs = ({setTransactions, transactions}) => {
    return (
        <>
            <OptionNavTabContainer>
                <GeneralSmText onClick={() => setTransactions(true)} color={transactions ? "#F7F7F7" : "#7E949F"} fontSize="20px" lineHeight="24px" fontWeight="700" textTransform="Capitalize" textAlign="left">Transaction History</GeneralSmText>
                <GeneralSmText onClick={() => setTransactions(false)} color={transactions ? "#7E949F" : "#F7F7F7"} fontSize="20px" lineHeight="24px" fontWeight="700" textTransform="Capitalize" textAlign="right">Registered Devices</GeneralSmText>
            </OptionNavTabContainer>
        </>
    )
}

export default BankInfoOptionsTabs