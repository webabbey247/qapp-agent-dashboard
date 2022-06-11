import React, { useState } from 'react';
import { Eye, EyeOff } from 'react-feather';
import { ContentRow, ContentFullColumn, CustomDiv, DefaultButton, CustomRouterLink, GeneralSmText } from '../../GlobalCss';
import {
    ContentForm,
    FormInput,
    FormInputIcon
} from '../../assets/styles/FormCss';

const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <>
            <ContentForm>
                <ContentRow>
                    <ContentFullColumn>
                        <FormInput name='emailaddress' type="text" placeholder="Email Address"  />
                        <GeneralSmText fontWeight="400" fontSize="13px" lineHeight="19px" color="#FC7620" textTransform="unset" opacity="0.8" textAlign="left" margin="-10px 0 20px">
                            Kindly provide your valid email address
                        </GeneralSmText>
                    </ContentFullColumn>

                   
                    <ContentFullColumn>
                            <FormInput name="passcode" type={showPassword ? "text" : "password"} placeholder="Password" maxLength={8} />
                            <FormInputIcon onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ?  <Eye fontSize="10px" color='#97ABB3' /> :   <EyeOff fontSize="10px" color='#97ABB3' />}
                                </FormInputIcon>
                                <GeneralSmText fontWeight="400" fontSize="13px" lineHeight="19px" color="#FC7620" textTransform="unset" opacity="0.8" textAlign="left" margin="-10px 0 20px">
                            Kindly provide your password
                        </GeneralSmText>
                        </ContentFullColumn>


                    <ContentFullColumn>
                        <CustomDiv display="flex" flexDirection="row" justifyContent="flex-end" width="100%">
                            <CustomRouterLink to='/auth/forget-password' fontWeight="400" fontSize="12.5px" lineHeight="16px" color='#f7f7f7' textDecoration="none" margin="0 0 1rem" textAlign="right">Forgot Password?</CustomRouterLink>
                        </CustomDiv>
                    </ContentFullColumn>
                    <ContentFullColumn>
                        <CustomDiv display="flex" flexDirection="row" justifyContent="center" width="100%">
                            <DefaultButton background="rgba(228, 111, 36, 0.6)" border="rgba(228, 111, 36, 0.6);">Login</DefaultButton>
                        </CustomDiv>
                    </ContentFullColumn>
                    <ContentFullColumn>
                        <CustomDiv display="flex" flexDirection="column" justifyContent="flex-end" width="100%">
                            <GeneralSmText fontWeight="400" fontSize="15px" lineHeight="25px" color="#F7F7F7" textTransform="unset" opacity="0.8" textAlign="center" margin="1rem 0">Not an agent yet?
                                <CustomRouterLink to='/auth/register' fontWeight="400" fontSize="15px" lineHeight="25px" color="#FC7620" textDecoration="none" margin="0 0.3rem">Sign Up</CustomRouterLink>
                            </GeneralSmText>
                        </CustomDiv>
                    </ContentFullColumn>
                </ContentRow>
            </ContentForm>
        </>
    )
}
export default LoginForm