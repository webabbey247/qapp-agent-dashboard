import React, {useState} from 'react';
import { ContentRow, ContentFullColumn, CustomDiv, DefaultButton, GeneralSmText, CustomRouterLink } from '../../GlobalCss';
import {
    ContentForm,
    FormInput,
    DialingCodeInputWrapper,
    DialingCodeInput,
    CountryFlag,
    CountryCode,
    DialingCodeModalWrapper,
    DialingCodeModalList,
    DialingCodeModalListWrapper,
    DialingCodeModalListIcon,
    DialingCodeModalListName,
    FormInputIcon
} from '../../assets/styles/FormCss';
import { Eye, EyeOff } from 'react-feather';
const RegisterForm = () => {
    const [loading, setLoading] = useState(false);
    const [areaCode, setAreaCode] = useState([]);
    const [selectedAreaCode, setSelectedAreaCode] = useState("");
    const [modalVisbile, setModalVisible] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    React.useEffect(() => {
      setLoading(true)
        fetch("https://restcountries.com/v3/all")
          .then((response) => response.json())
          .then((data) => {
            const areaCodeData = data.map((item) => {
              return {
                code: item.cca2,
                name: item.name.common,
                flag: item.flags[1],
                dialCode: [item.idd.root, (item.idd.suffixes || [])[0]].join(""),
              };
            });
    
            setAreaCode(areaCodeData);
            if (areaCodeData.length > 0) {
              let defaultAreaData = areaCodeData.filter((a) => a.code === "NG");
              if (defaultAreaData.length > 0) {
                setSelectedAreaCode(defaultAreaData[0]);
              }
            }
          })
          .catch((err) => {
            console.error("Request failed", err);
          });
          setLoading(false)
      }, []);

    return (
        <>
        
            <ContentForm>
                <ContentRow>
                    <ContentFullColumn>
                        <FormInput name="firstName" type="text" placeholder="First Name"  />
                        
                    </ContentFullColumn>

                    <ContentFullColumn>
                        <FormInput name="lastName" type="text" placeholder="Last Name"  />
                        
                    </ContentFullColumn>


                    <ContentFullColumn>
                        <CustomDiv display="flex" justifyContent="flex-start" flexDirection="row" >
                            <CustomDiv maxWidth="20%" flex="0 0 20%" onClick={() => setModalVisible(!modalVisbile)}>
                            <DialingCodeInputWrapper>
              <DialingCodeInput onClick={() => setModalVisible(!modalVisbile)}>
                <CountryFlag
                  src={selectedAreaCode?.flag}
                  alt={selectedAreaCode?.dialCode}></CountryFlag>
                <CountryCode>
                  {/* <CgChevronDownR color='#ffffff' size='20px' /> */}
                </CountryCode>
              </DialingCodeInput>
              </DialingCodeInputWrapper>
              {modalVisbile ? (
              <DialingCodeModalWrapper>
                {areaCode.map((item, i) => (
                  <DialingCodeModalList id={item.id}>
                    <DialingCodeModalListWrapper
                      key={item.i}
                      onClick={() => {
                        setSelectedAreaCode(item);
                        setModalVisible(false);
                      }}
                    >
                      <DialingCodeModalListIcon
                        src={item.flag}
                        alt={item.dialCode}
                      ></DialingCodeModalListIcon>
                      <DialingCodeModalListName>
                        {item.dialCode}
                      </DialingCodeModalListName>
                    </DialingCodeModalListWrapper>
                  </DialingCodeModalList>
                ))}
              </DialingCodeModalWrapper>
            ) : (
              ""
            )}
                                {/* <FlagContainer style={{
                                    width: "100%",
                                    height: "56px",
                                    borderTopRightRadius: 0,
                                    borderBottomRightRadius: 0,

                                }}>
                                    <FlagImg src={dummyFlag} />
                                </FlagContainer> */}
                            </CustomDiv>

                            <CustomDiv maxWidth="80%" flex="0 0 80%">
                                <FormInput  name='mobileNumber' type="text" placeholder="Mobile Number" style={{
                                    borderTopLeftRadius: 0,
                                    borderBottomLeftRadius: 0,
                                }} />
                            </CustomDiv>

                        </CustomDiv>
                        
                    </ContentFullColumn>


                    <ContentFullColumn>
                        <FormInput name='emailAddress' type="text" placeholder="Email Address"  />
                       
                    </ContentFullColumn>

                    <ContentFullColumn>
                            <FormInput name="passcode" type={showPassword ? "text" : "password"} placeholder="Password" maxLength={8} />
                            <FormInputIcon onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ?  <Eye fontSize="10px" color='#97ABB3' /> :   <EyeOff fontSize="10px" color='#97ABB3' />}
                                </FormInputIcon>
                            
                        </ContentFullColumn>

                        <ContentFullColumn>
                            <FormInput name="passcode" type={showPassword ? "text" : "password"} placeholder="Password" maxLength={8} />
                            <FormInputIcon onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ?  <Eye fontSize="10px" color='#97ABB3' /> :   <EyeOff fontSize="10px" color='#97ABB3' />}
                                </FormInputIcon>
                            
                        </ContentFullColumn>

                    <ContentFullColumn>
                        <CustomDiv display="flex" flexDirection="row" justifyContent="center" width="100%">
                        <DefaultButton background="rgba(228, 111, 36, 0.6)" border="rgba(228, 111, 36, 0.6);">{loading ? "Loading" : "Register"}</DefaultButton>
                        </CustomDiv>
                    </ContentFullColumn>

                    <ContentFullColumn>
                    <CustomDiv display="flex" flexDirection="column" justifyContent="flex-end" width="100%">
                    <GeneralSmText fontWeight="400" fontSize="15px" lineHeight="25px" color="#F7F7F7" textTransform="unset" opacity="0.8" textAlign="center" margin="1rem 0">Already have an account? 
                    <CustomRouterLink to='/' fontWeight="400" fontSize="15px" lineHeight="25px" color="#FC7620" textDecoration="none" margin="0 0.3rem">Sign In</CustomRouterLink>
                    </GeneralSmText>  
                        </CustomDiv>
                    </ContentFullColumn>
                </ContentRow>
            </ContentForm>
        </>
    )
}
export default RegisterForm;