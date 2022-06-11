import React from 'react'
import styled from 'styled-components'
import { CustomDiv, CustomRouterLink, GeneralMdText } from "../../GlobalCss";
import { ChevronLeft } from "react-feather";

export const CustomHeaderContainer = styled.div`
display: flex;
justify-content: flex-start;
flex-direction: row;
`;


const CustomHeader = ({title, typeUrl}) => {
    return (
        <>
            <CustomDiv margin="1rem 0 2rem">
                <CustomHeaderContainer>
                   <CustomRouterLink to={typeUrl}>
                   <ChevronLeft height="30px" width="30px" color='#F7F7F7' strokeWidth="3" />
                   </CustomRouterLink>
                    <GeneralMdText color="#f7f7f7" textTransform="capitalize" margin="0 1rem" fontWeight="700">{title}</GeneralMdText>
                </CustomHeaderContainer>
            </CustomDiv>
        </>
    )
}

export default CustomHeader