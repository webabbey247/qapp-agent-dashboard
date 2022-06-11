import React from "react";
import AuthLayout from "../../components/Layout/AuthLayout";
import { OnboardBankForm } from "../../components/Forms";
import { agentLogo } from "../../assets";
import { CustomDiv, GeneralMdText, GeneralSmText } from "../../GlobalCss";
import { AuthSection, AuthLogoContainer, AuthLogo, AuthContainer, AuthTopContainer, AuthBottomContainer } from "../../assets/styles/AuthCss";


const OnboardBank = () => {
    return (
        <>
            <AuthLayout>
                <AuthSection>
                    <AuthLogoContainer>
                        <AuthLogo src={agentLogo} alt="Agent Logo" />
                    </AuthLogoContainer>
                    <AuthContainer>
                        <AuthTopContainer>
                            <CustomDiv display="flex" flexDirection="column">
                                <GeneralMdText fontWeight="700" fontSize="28px" lineHeight="36px" color="#F7F7F7" textTransform="capitalize" textAlign="left">Add New Bank</GeneralMdText>
                                <GeneralSmText fontWeight="400" fontSize="13px" lineHeight="19px" color="#F7F7F7" textTransform="unset" opacity="0.6" textAlign="left">Account Information</GeneralSmText>
                            </CustomDiv>
                        </AuthTopContainer>
                        <AuthBottomContainer>
                                  <OnboardBankForm />
                        </AuthBottomContainer>
                    </AuthContainer>
                </AuthSection>
            </AuthLayout>
        </>
    );
};

export default OnboardBank;
 