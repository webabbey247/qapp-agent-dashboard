import React from 'react'
import styled from 'styled-components'
import { GeneralSmText, CustomDiv, GeneralMdText, ContentRow, Content2Column2 } from '../../GlobalCss'

export const TransactionListContainer = styled.div`
padding: 2rem 0;
display: flex;
flex-direction: column;
`;

export const TransactionListChild = styled.div`
background: #224250;
border: 1px solid rgba(244, 244, 244, 0.4);
border-radius: 8px;
padding: 1rem;
width: 100%;
margin: 10px 0;
`;

const TransactionList = () => {
  return (
    <>
    
    <TransactionListContainer>
                    <TransactionListChild>
                        <ContentRow>
                        <Content2Column2>
                        <CustomDiv display="flex" flexDirection="column">
                            <GeneralMdText fontSize="20px" lineHeight="20px" color="#F4F4F4" textAlign="" textTransform="capitalize" fontWeight="700">Deposit for Jane Doe</GeneralMdText>
                            <GeneralSmText fontSize="16px" lineHeight="20px" color="#97ABB3" textAlign="" textTransform="capitalize" margin="5px 0 0">Diamond Bank</GeneralSmText>
                        </CustomDiv>
                        </Content2Column2>
                        <Content2Column2>
                        <GeneralSmText fontSize="20px" lineHeight="20px" color="#F4F4F4" textAlign="right" textTransform="Capitalize" margin="10px 0">N25,300</GeneralSmText>
                        </Content2Column2>
                        </ContentRow>
                    </TransactionListChild>
                    <TransactionListChild>
                        <ContentRow>
                        <Content2Column2>
                        <CustomDiv display="flex" flexDirection="column">
                            <GeneralMdText fontSize="20px" lineHeight="20px" color="#F4F4F4" textAlign="" textTransform="capitalize" fontWeight="700">Deposit for Jane Doe</GeneralMdText>
                            <GeneralSmText fontSize="16px" lineHeight="20px" color="#97ABB3" textAlign="" textTransform="capitalize" margin="5px 0 0">Diamond Bank</GeneralSmText>
                        </CustomDiv>
                        </Content2Column2>
                        <Content2Column2>
                        <GeneralSmText fontSize="20px" lineHeight="20px" color="#F4F4F4" textAlign="right" textTransform="Capitalize" margin="10px 0">N25,300</GeneralSmText>
                        </Content2Column2>
                        </ContentRow>
                    </TransactionListChild>

                    <TransactionListChild>
                        <ContentRow>
                        <Content2Column2>
                        <CustomDiv display="flex" flexDirection="column">
                            <GeneralMdText fontSize="20px" lineHeight="20px" color="#F4F4F4" textAlign="" textTransform="capitalize" fontWeight="700">Deposit for Jane Doe</GeneralMdText>
                            <GeneralSmText fontSize="16px" lineHeight="20px" color="#97ABB3" textAlign="" textTransform="capitalize" margin="5px 0 0">Diamond Bank</GeneralSmText>
                        </CustomDiv>
                        </Content2Column2>
                        <Content2Column2>
                        <GeneralSmText fontSize="20px" lineHeight="20px" color="#F4F4F4" textAlign="right" textTransform="Capitalize" margin="10px 0">N25,300</GeneralSmText>
                        </Content2Column2>
                        </ContentRow>
                    </TransactionListChild>

                    <TransactionListChild>
                        <ContentRow>
                        <Content2Column2>
                        <CustomDiv display="flex" flexDirection="column">
                            <GeneralMdText fontSize="20px" lineHeight="20px" color="#F4F4F4" textAlign="" textTransform="capitalize" fontWeight="700">Deposit for Jane Doe</GeneralMdText>
                            <GeneralSmText fontSize="16px" lineHeight="20px" color="#97ABB3" textAlign="" textTransform="capitalize" margin="5px 0 0">Diamond Bank</GeneralSmText>
                        </CustomDiv>
                        </Content2Column2>
                        <Content2Column2>
                        <GeneralSmText fontSize="20px" lineHeight="20px" color="#F4F4F4" textAlign="right" textTransform="Capitalize" margin="10px 0">N25,300</GeneralSmText>
                        </Content2Column2>
                        </ContentRow>
                    </TransactionListChild>

                 
                </TransactionListContainer>
    
    </>
  )
}

export default TransactionList