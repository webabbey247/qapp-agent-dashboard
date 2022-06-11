import React from "react";
import styled from "styled-components";
import { CustomRouterLink, GeneralMdText, GeneralSmText } from "../../GlobalCss";
import { bankOne, bankThree, bankTwo, bankFour } from "../../assets";

export const BankCardGridContainer = styled.div`
padding: 2rem 0;
display: flex;
flex-direction: row;
`;

export const BankCardGridList = styled.div`
width: 208px;
height: 312px;
background: #224250;
border: 1px solid rgba(244, 244, 244, 0.4);
border-radius: 8px;
padding: 2rem 1rem;
display: flex;
flex-direction: column;
justify-content: center;
margin-left: 30px;
&:first-child {
  margin-left: 0;
}
`;

export const BankCardGridListImgWrapper = styled.figure`
height: auto;
`;

export const BankCardGridListImg = styled.img`
width: 80px;
height: 80px;
`;


const BankCardGrid = () => {
  return (
    <>
        <BankCardGridContainer>
        <BankCardGridList>
          <BankCardGridListImgWrapper>
            <BankCardGridListImg src={bankOne} alt="Bank One" />
          </BankCardGridListImgWrapper>
            <GeneralMdText fontSize="24px" lineHeight="20px" color="#F4F4F4" textTransform="capitalize" textAlign="center" margin="0">Intercontinental</GeneralMdText>
            <GeneralSmText fontSize="16px" lineHeight="20px" color="#97ABB3" textTransform="unset" textAlign="center" margin="10px 0">10 Devices</GeneralSmText>
            <CustomRouterLink color="#f4f4f4" fontSize="14px" lineHeight="20px" background="rgba(244, 244, 244, 0.2)" borderRadius="8px" padding="1rem 2rem" margin="10px 0" to="/" float="center" textAlign="center" width="100%">View All</CustomRouterLink>
        </BankCardGridList>

        <BankCardGridList>
          <BankCardGridListImgWrapper>
            <BankCardGridListImg src={bankTwo} alt="Bank Two" />
          </BankCardGridListImgWrapper>
            <GeneralMdText fontSize="24px" lineHeight="20px" color="#F4F4F4" textTransform="capitalize" textAlign="center" margin="0">Intercontinental</GeneralMdText>
            <GeneralSmText fontSize="16px" lineHeight="20px" color="#97ABB3" textTransform="unset" textAlign="center" margin="10px 0">10 Devices</GeneralSmText>
            <CustomRouterLink color="#f4f4f4" fontSize="14px" lineHeight="20px" background="rgba(244, 244, 244, 0.2)" borderRadius="8px" padding="1rem 2rem" margin="10px 0" to="/" float="center" textAlign="center" width="100%">View All</CustomRouterLink>
        </BankCardGridList>
        <BankCardGridList>
          <BankCardGridListImgWrapper>
            <BankCardGridListImg src={bankThree} alt="Bank Three" />
          </BankCardGridListImgWrapper>
            <GeneralMdText fontSize="24px" lineHeight="20px" color="#F4F4F4" textTransform="capitalize" textAlign="center" margin="0">Intercontinental</GeneralMdText>
            <GeneralSmText fontSize="16px" lineHeight="20px" color="#97ABB3" textTransform="unset" textAlign="center" margin="10px 0">10 Devices</GeneralSmText>
            <CustomRouterLink color="#f4f4f4" fontSize="14px" lineHeight="20px" background="rgba(244, 244, 244, 0.2)" borderRadius="8px" padding="1rem 2rem" margin="10px 0" to="/" float="center" textAlign="center" width="100%">View All</CustomRouterLink>
        </BankCardGridList>
        <BankCardGridList>
          <BankCardGridListImgWrapper>
            <BankCardGridListImg src={bankFour} alt="Bank Four" />
          </BankCardGridListImgWrapper>
            <GeneralMdText fontSize="24px" lineHeight="20px" color="#F4F4F4" textTransform="capitalize" textAlign="center" margin="0">Intercontinental</GeneralMdText>
            <GeneralSmText fontSize="16px" lineHeight="20px" color="#97ABB3" textTransform="unset" textAlign="center" margin="10px 0">10 Devices</GeneralSmText>
            <CustomRouterLink color="#f4f4f4" fontSize="14px" lineHeight="20px" background="rgba(244, 244, 244, 0.2)" borderRadius="8px" padding="1rem 2rem" margin="10px 0" to="/" float="center" textAlign="center" width="100%">View All</CustomRouterLink>
        </BankCardGridList>
        {/* <BankCardGridList>
          <BankCardGridListImgWrapper>
            <BankCardGridListImg src={bankOne} alt="Bank One" />
          </BankCardGridListImgWrapper>
            <GeneralMdText fontSize="24px" lineHeight="20px" color="#F4F4F4" textTransform="capitalize" textAlign="center" margin="0">Intercontinental</GeneralMdText>
            <GeneralSmText fontSize="16px" lineHeight="20px" color="#97ABB3" textTransform="unset" textAlign="center" margin="10px 0">10 Devices</GeneralSmText>
            <CustomRouterLink color="#f4f4f4" fontSize="14px" lineHeight="20px" background="rgba(244, 244, 244, 0.2)" borderRadius="8px" padding="1rem 2rem" margin="10px 0" to="/" float="center" textAlign="center" width="100%">View All</CustomRouterLink>
        </BankCardGridList> */}


      </BankCardGridContainer>
    
    </>
  )
}

export default BankCardGrid