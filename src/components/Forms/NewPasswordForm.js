import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'react-feather';
import { ContentRow, ContentFullColumn, CustomDiv, DefaultButton } from '../../GlobalCss';
import {
    ContentForm,
    FormInput,
    FormInputIcon
} from '../../assets/styles/FormCss';

const NewPasswordForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
        return (
            <>
                <ContentForm>
                    <ContentRow>
                        <ContentFullColumn>
                            <FormInput name="password" type={showPassword ? "text" : "password"} placeholder="New Password" maxLength={8} />
                            <FormInputIcon onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ?  <Eye fontSize="10px" color='#97ABB3' /> :   <EyeOff fontSize="10px" color='#97ABB3' />}
                                </FormInputIcon>
                            
                        </ContentFullColumn>

                        <ContentFullColumn>
                            <FormInput name="confirmPassword" type={showConfirmPassword ? "text" : "password"} placeholder="Confirm Password" maxLength={8} />
                            <FormInputIcon onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                            {showConfirmPassword ?  <Eye fontSize="20px" color='#97ABB3' /> :   <EyeOff fontSize="20px" color='#97ABB3' />}
                                </FormInputIcon>
                           
                        </ContentFullColumn>


                        <ContentFullColumn>
                            <CustomDiv display="flex" flexDirection="row" justifyContent="center" width="100%">
                            <DefaultButton background="rgba(228, 111, 36, 0.6)" border="rgba(228, 111, 36, 0.6);">Reset Password</DefaultButton>
                            </CustomDiv>
                        </ContentFullColumn>
                    </ContentRow>
                </ContentForm>
            </>
        )
    }
    export default NewPasswordForm;