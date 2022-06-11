import React from 'react'
import styled from 'styled-components';
import { Content2Column2, ContentRow, CustomDiv, CustomRouterLink, GeneralMdText, GeneralSmText } from "../../GlobalCss";
import {
    bankOne,
    bankTwo,
    bankThree,
    bankFour
} from "../../assets"

export const BankCardListContainer = styled.div`
padding: 2rem 0;
display: flex;
flex-direction: column;
`;

export const BankCardListChild = styled.div`
background: #224250;
border: 0.3px solid rgba(244, 244, 244, 0.4);
border-radius: 8px;
padding: 1rem;
margin: 10px 0;
`;

export const BankCardListLTR = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start
`;

export const BankCardListImg = styled.img`
width: 50px;
height: 50px;
`;

export const BankListCards = ({typeUrl}) => {
    return (
        <>
            <BankCardListContainer>
                <BankCardListChild>
                    <ContentRow>
                        <Content2Column2>
                            <BankCardListLTR>
                                <BankCardListImg src={bankOne} alt="Bank One" />
                                <CustomDiv margin="0 2rem" display="flex" flexDirection="column">
                                    <GeneralMdText fontSize="24px" fontWeight="600" textTransform="capitalize" textAlign="left" lineHeight="20px" color="#F4F4F4">Oceanic</GeneralMdText>
                                    <GeneralSmText fontSize="20px" fontWeight="400" textTransform="capitalize" textAlign="left" lineHeight="20px" color="#97ABB3" margin="10px 0 0">10 Devices</GeneralSmText>
                                </CustomDiv>
                            </BankCardListLTR>
                        </Content2Column2>
                        <Content2Column2>
                            <CustomRouterLink fontWeight="600" background="#F7F7F7" padding="15px 35px" textAlign="right" to={typeUrl} float="right" borderRadius="4px" color="#09354A"> Details</CustomRouterLink>
                        </Content2Column2>
                    </ContentRow>
                </BankCardListChild>

                <BankCardListChild>
                    <ContentRow>
                        <Content2Column2>
                            <BankCardListLTR>
                                <BankCardListImg src={bankTwo} alt="Bank Two" />
                                <CustomDiv margin="0 2rem" display="flex" flexDirection="column">
                                    <GeneralMdText fontSize="24px" fontWeight="600" textTransform="capitalize" textAlign="left" lineHeight="20px" color="#F4F4F4">Diamond</GeneralMdText>
                                    <GeneralSmText fontSize="20px" fontWeight="400" textTransform="capitalize" textAlign="left" lineHeight="20px" color="#97ABB3" margin="10px 0 0">10 Devices</GeneralSmText>
                                </CustomDiv>
                            </BankCardListLTR>
                        </Content2Column2>
                        <Content2Column2>
                            <CustomRouterLink fontWeight="600" background="#F7F7F7" padding="15px 35px" textAlign="right" to={typeUrl} float="right" borderRadius="4px" color="#09354A"> Details</CustomRouterLink>
                        </Content2Column2>
                    </ContentRow>
                </BankCardListChild>

                <BankCardListChild>
                    <ContentRow>
                        <Content2Column2>
                            <BankCardListLTR>
                                <BankCardListImg src={bankThree} alt="Bank Three" />
                                <CustomDiv margin="0 2rem" display="flex" flexDirection="column">
                                    <GeneralMdText fontSize="24px" fontWeight="600" textTransform="capitalize" textAlign="left" lineHeight="20px" color="#F4F4F4">Skye</GeneralMdText>
                                    <GeneralSmText fontSize="20px" fontWeight="400" textTransform="capitalize" textAlign="left" lineHeight="20px" color="#97ABB3" margin="10px 0 0">10 Devices</GeneralSmText>
                                </CustomDiv>
                            </BankCardListLTR>
                        </Content2Column2>
                        <Content2Column2>
                            <CustomRouterLink fontWeight="600" background="#F7F7F7" padding="15px 35px" textAlign="right" to={typeUrl} float="right" borderRadius="4px" color="#09354A"> Details</CustomRouterLink>
                        </Content2Column2>
                    </ContentRow>
                </BankCardListChild>

                <BankCardListChild>
                    <ContentRow>
                        <Content2Column2>
                            <BankCardListLTR>
                                <BankCardListImg src={bankFour} alt="Bank Four" />
                                <CustomDiv margin="0 2rem" display="flex" flexDirection="column">
                                    <GeneralMdText fontSize="24px" fontWeight="600" textTransform="capitalize" textAlign="left" lineHeight="20px" color="#F4F4F4">Intercontinental</GeneralMdText>
                                    <GeneralSmText fontSize="20px" fontWeight="400" textTransform="capitalize" textAlign="left" lineHeight="20px" color="#97ABB3" margin="10px 0 0">10 Devices</GeneralSmText>
                                </CustomDiv>
                            </BankCardListLTR>
                        </Content2Column2>
                        <Content2Column2>
                            <CustomRouterLink fontWeight="600" background="#F7F7F7" padding="15px 35px" textAlign="right" to={typeUrl} float="right" borderRadius="4px" color="#09354A"> Details</CustomRouterLink>
                        </Content2Column2>
                    </ContentRow>
                </BankCardListChild>
            </BankCardListContainer>
        </>
    )
}
