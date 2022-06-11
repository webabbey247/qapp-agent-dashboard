import React from 'react'
import styled from "styled-components"
import DashboardLayout from '../../components/Layout/DashboardLayout'
import CustomHeader from '../../components/CustomHeader/CustomHeader'
import { BankInfoOptionsTabs } from '../../components/OptionCards'
import { GeneralSmText, CustomDiv, GeneralMdText, ContentRow, Content4Column4 } from '../../GlobalCss'
import { bankOne } from '../../assets'
import TransactionList from '../../components/TransactionCards/TransactionList'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import BankDeviceList from '../../components/BankCard/BankDeviceCards'

export const BankInfoCardContainer = styled.div`
border: 1px solid rgba(244, 244, 244, 0.4);
border-radius: 8px;
padding: 1rem 2rem;
margin: 2rem 0;
display: flex;
justify-content: center;
align-content: center;
flex-direction: column;
`;
export const BankInfoCardImgWrapper = styled.figure`
height: auto;
margin: 0.5rem 0;
`;

export const BankInfoCardImg = styled.img`
width: 100px;
height: 100px;
margin: auto;
display: block;
`;

export const BankInfoContent = styled.div`
display: flex;
justify-content: space-between;
passing: 1rem 2rem;
margin: 1rem 0;
`;

const MyBankInfo = () => {
    const [transactions, setTransactions] = React.useState(true)
    return (
        <>
            <DashboardLayout>
                <CustomHeader title="Oceanic Bank" typeUrl="/dashboard/banks" />
                <BankInfoOptionsTabs setTransactions={setTransactions} transactions={transactions} />
                <BankInfoCardContainer>
                    <BankInfoCardImgWrapper>
                        <BankInfoCardImg src={bankOne} alt="Bank One" />
                    </BankInfoCardImgWrapper>
                    <BankInfoContent>
                        <ContentRow>
                            <Content4Column4>
                                <CustomDiv display="flex" flexDirection="column">
                                    <GeneralSmText fontSize="14px" fontWeight="400" textTransform="capitalize" color="#97ABB3" lineHeight="16px">Account Name</GeneralSmText>
                                    <GeneralMdText fontSize="24px" fontWeight="600" textTransform="capitalize" color="#F4F4F4" lineHeight="16px" margin="12px 0">John Doe</GeneralMdText>
                                </CustomDiv>
                            </Content4Column4>
                            <Content4Column4>
                                <CustomDiv display="flex" flexDirection="column">
                                    <GeneralSmText fontSize="14px" fontWeight="400" textTransform="capitalize" color="#97ABB3" lineHeight="16px">Account Number</GeneralSmText>
                                    <GeneralMdText fontSize="24px" fontWeight="600" textTransform="capitalize" color="#F4F4F4" lineHeight="16px" margin="12px 0">3001254683</GeneralMdText>
                                </CustomDiv>
                            </Content4Column4>
                            <Content4Column4>
                                <CustomDiv display="flex" flexDirection="column">
                                    <GeneralSmText fontSize="14px" fontWeight="400" textTransform="capitalize" color="#97ABB3" lineHeight="16px">Account Balance</GeneralSmText>
                                    <GeneralMdText fontSize="24px" fontWeight="600" textTransform="capitalize" color="#F4F4F4" lineHeight="16px" margin="12px 0">N32,000,000.00</GeneralMdText>
                                </CustomDiv>
                            </Content4Column4>
                            <Content4Column4>
                                <CustomDiv display="flex" flexDirection="column">
                                    <GeneralSmText fontSize="14px" fontWeight="400" textTransform="capitalize" color="#97ABB3" lineHeight="16px">Bank Verification Number (BVN)</GeneralSmText>
                                    <GeneralMdText fontSize="24px" fontWeight="600" textTransform="capitalize" color="#F4F4F4" lineHeight="16px" margin="12px 0">01254683441</GeneralMdText>
                                </CustomDiv>
                            </Content4Column4>
                        </ContentRow>
                    </BankInfoContent>

                </BankInfoCardContainer>
                {transactions ? (
                    <>
                        <SectionTitle title="Recent History" typeUrl="/dashboard/transaction/history" />
                        <TransactionList />
                    </>
                ) : (
                    <>
                        <SectionTitle title="Registered Devices" typeUrl="/dashboard/registered/devices" />
                        <BankDeviceList />
                    </>
                )}
            </DashboardLayout>
        </>
    )
}

export default MyBankInfo