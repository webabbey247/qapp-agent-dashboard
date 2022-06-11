import React from 'react';
import { ContentRow, ContentFullColumn, CustomDiv, DefaultButton, GeneralSmText } from '../../GlobalCss';
import {
    ContentForm,
    FormInput,
    FormLabel
} from '../../assets/styles/FormCss';

const ForgetPasswordForm = () => {

    return (
        <>
            <ContentForm>
                <ContentRow>
                    <ContentFullColumn>
                        <FormInput name='emailAddress' type="text" placeholder="Email Address" />
                        <GeneralSmText fontWeight="400" fontSize="13px" lineHeight="19px" color="#FC7620" textTransform="unset" opacity="0.8" textAlign="left" margin="-10px 0 20px">
                            Kindly provide your valid email address
                        </GeneralSmText>
                    </ContentFullColumn>


                    <ContentFullColumn>
                        <FormLabel>OTP</FormLabel>
                        <FormInput name='otp' type="text" placeholder="Card PIN/Secure Passcode" />
                        <GeneralSmText fontWeight="400" fontSize="13px" lineHeight="19px" color="#FC7620" textTransform="unset" opacity="0.8" textAlign="left" margin="-10px 0 20px">
                            Kindly provide OTP sent to your registered email adddress
                        </GeneralSmText>
                    </ContentFullColumn>

                    <ContentFullColumn>
                        <CustomDiv display="flex" flexDirection="row" justifyContent="center" width="100%">
                        <DefaultButton background="rgba(228, 111, 36, 0.6)" border="rgba(228, 111, 36, 0.6);">Verify OTP</DefaultButton>
                        </CustomDiv>
                    </ContentFullColumn>
                </ContentRow>
            </ContentForm>
        </>
    )
}
export default ForgetPasswordForm;