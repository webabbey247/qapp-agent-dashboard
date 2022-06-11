import React from "react";
import AuthLayout from "../../components/Layout/AuthLayout";
import { ForgetPasswordForm } from "../../components/Forms";
import { agentLogo } from "../../assets";
import { CustomDiv, GeneralMdText, GeneralSmText } from "../../GlobalCss";
import { AuthSection, AuthLogoContainer, AuthLogo, AuthContainer, AuthTopContainer, AuthBottomContainer } from "../../assets/styles/AuthCss";


const ForgetPassword = () => {
    return (
        <>
            <AuthLayout>
                <AuthSection>
                    <AuthLogoContainer>
                        <AuthLogo src={agentLogo} alt="Agent App" />
                    </AuthLogoContainer>
                    <AuthContainer>
                        <AuthTopContainer>
                            <CustomDiv display="flex" flexDirection="column">
                                <GeneralMdText fontWeight="700" fontSize="28px" lineHeight="36px" color="#F7F7F7" textTransform="capitalize" textAlign="left">Forgot Password</GeneralMdText>
                                <GeneralSmText fontWeight="400" fontSize="13px" lineHeight="19px" color="#F7F7F7" textTransform="unset" opacity="0.6" textAlign="left">
                                Enter your registered email address.</GeneralSmText>
                            </CustomDiv>
                        </AuthTopContainer>
                        <AuthBottomContainer>
                            <ForgetPasswordForm />
                        </AuthBottomContainer>
                    </AuthContainer>
                </AuthSection>
            </AuthLayout>
        </>
    );
};

export default ForgetPassword;
