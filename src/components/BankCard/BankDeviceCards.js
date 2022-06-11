import React from 'react'
import styled from 'styled-components'
import { GeneralSmText, CustomDiv, GeneralMdText, ContentRow, Content2Column2, CustomRouterLink } from '../../GlobalCss'

export const BankDeviceListContainer = styled.div`
padding: 2rem 0;
display: flex;
flex-direction: column;
`;

export const BankDeviceListChild = styled.div`
background: #224250;
border: 1px solid rgba(244, 244, 244, 0.4);
border-radius: 8px;
padding: 1rem;
width: 100%;
margin: 10px 0;
`;

const BankDeviceList = () => {
  return (
    <>
    
    <BankDeviceListContainer>
                    <BankDeviceListChild>
                        <ContentRow>
                        <Content2Column2>
                        <CustomDiv display="flex" flexDirection="column">
                            <GeneralMdText fontSize="20px" lineHeight="20px" color="#F4F4F4" textAlign="" textTransform="capitalize" fontWeight="700">POS Machine 1</GeneralMdText>
                            <GeneralSmText fontSize="16px" lineHeight="20px" color="#97ABB3" textAlign="" textTransform="capitalize" margin="5px 0 0">IMEI: 565661165316511JK46</GeneralSmText>
                        </CustomDiv>
                        </Content2Column2>
                        <Content2Column2>
                            <CustomRouterLink fontSize="14px" lineHeight="18px" fontWeight="600" color="#F4F4F4" to="/" background="transparent" border="0.5px solid #F4F4F4" padding=" 1rem 2rem">View</CustomRouterLink>
                        </Content2Column2>
                        </ContentRow>
                    </BankDeviceListChild>

                    <BankDeviceListChild>
                        <ContentRow>
                        <Content2Column2>
                        <CustomDiv display="flex" flexDirection="column">
                            <GeneralMdText fontSize="20px" lineHeight="20px" color="#F4F4F4" textAlign="" textTransform="capitalize" fontWeight="700">POS Machine 1</GeneralMdText>
                            <GeneralSmText fontSize="16px" lineHeight="20px" color="#97ABB3" textAlign="" textTransform="capitalize" margin="5px 0 0">IMEI: 565661165316511JK46</GeneralSmText>
                        </CustomDiv>
                        </Content2Column2>
                        <Content2Column2>
                            <CustomRouterLink fontSize="14px" lineHeight="18px" fontWeight="600" color="#F4F4F4" to="/" background="transparent" border="0.5px solid #F4F4F4" padding=" 1rem 2rem">View</CustomRouterLink>
                        </Content2Column2>
                        </ContentRow>
                    </BankDeviceListChild>

                    <BankDeviceListChild>
                        <ContentRow>
                        <Content2Column2>
                        <CustomDiv display="flex" flexDirection="column">
                            <GeneralMdText fontSize="20px" lineHeight="20px" color="#F4F4F4" textAlign="" textTransform="capitalize" fontWeight="700">POS Machine 1</GeneralMdText>
                            <GeneralSmText fontSize="16px" lineHeight="20px" color="#97ABB3" textAlign="" textTransform="capitalize" margin="5px 0 0">IMEI: 565661165316511JK46</GeneralSmText>
                        </CustomDiv>
                        </Content2Column2>
                        <Content2Column2>
                            <CustomRouterLink fontSize="14px" lineHeight="18px" fontWeight="600" color="#F4F4F4" to="/" background="transparent" border="0.5px solid #F4F4F4" padding=" 1rem 2rem">View</CustomRouterLink>
                        </Content2Column2>
                        </ContentRow>
                    </BankDeviceListChild>

                    <BankDeviceListChild>
                        <ContentRow>
                        <Content2Column2>
                        <CustomDiv display="flex" flexDirection="column">
                            <GeneralMdText fontSize="20px" lineHeight="20px" color="#F4F4F4" textAlign="" textTransform="capitalize" fontWeight="700">POS Machine 1</GeneralMdText>
                            <GeneralSmText fontSize="16px" lineHeight="20px" color="#97ABB3" textAlign="" textTransform="capitalize" margin="5px 0 0">IMEI: 565661165316511JK46</GeneralSmText>
                        </CustomDiv>
                        </Content2Column2>
                        <Content2Column2>
                            <CustomRouterLink fontSize="14px" lineHeight="18px" fontWeight="600" color="#F4F4F4" to="/" background="transparent" border="0.5px solid #F4F4F4" padding=" 1rem 2rem">View</CustomRouterLink>
                        </Content2Column2>
                        </ContentRow>
                    </BankDeviceListChild>
                  
                </BankDeviceListContainer>
    
    </>
  )
}

export default BankDeviceList