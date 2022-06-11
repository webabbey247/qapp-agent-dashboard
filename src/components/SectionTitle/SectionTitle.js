import React from 'react'
import styled from 'styled-components'
import { GeneralMdText, CustomRouterLink } from '../../GlobalCss'

export const SectionTitleContainer = styled.div`
display: flex;
justify-content: space-between;
`;

const SectionTitle = ({ title, typeUrl }) => {
    return (
        <>
            <SectionTitleContainer>
                <GeneralMdText fontSize="24px" lineHeight="24px" fontWeight="700" textTransform="Capitalize" margin="10px 0" color='#F7F7F7'>{title}</GeneralMdText>
                <CustomRouterLink color="#F7F7F7" fontSize="14px" lineHeight="20px" background="rgba(244, 244, 244, 0.2)" borderRadius="8px" padding="1rem 2rem" to={typeUrl} float="center" textAlign="center" width="20%">View All</CustomRouterLink>
            </SectionTitleContainer>
        </>
    )
}

export default SectionTitle