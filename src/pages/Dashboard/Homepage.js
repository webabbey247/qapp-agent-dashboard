import React from "react";
import styled from "styled-components";
import DashboardLayout from "../../components/Layout/DashboardLayout";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import TransactionList from "../../components/TransactionCards/TransactionList";
import BankCardGrid from "../../components/BankCard/BankCardGrid";
import { CustomDiv, GeneralLgText, GeneralSmText } from "../../GlobalCss";
import { FormInput, FormInputIcon} from "../../assets/styles/FormCss";
import { Search } from "react-feather";

export const HomepageSearchHeader =  styled.div`
margin: 0 0 3rem;
display: flex;
justify-content: space-between;
`


const Homepage = () => {
  return (
    <>
      <DashboardLayout>
        <HomepageSearchHeader>
          <CustomDiv display="flex" justifyContent="space-between" flexDirection="column" maxWidth="50%" flex="0 0 50%">
            <GeneralLgText fontSize="34px" color="#F7F7F7" lineHeight="34px" fontWeight="700" padding="" margin="" textAlign="left" textTransform="Capitalize">Good Morning</GeneralLgText>
            <GeneralSmText fontSize="20px" color="#F7F7F7" lineHeight="26px" margin="10px 0" opacity="0.8" fontWeight="400" textTransform="capitalize">Welcome, Michael</GeneralSmText>
          </CustomDiv>

          <CustomDiv display="flex" flexDirection="row" maxWidth="50%" flex="0 0 50%" position="relative">
          <FormInput name="confirmPassword" type="text" placeholder="Search"  />
          <FormInputIcon><Search height="25px" width="25x" color='#fff' /></FormInputIcon>
          </CustomDiv>

        </HomepageSearchHeader>

      <SectionTitle title="My Banks" typeUrl="/dashboard/banks" />
     <BankCardGrid />

        <SectionTitle title="Transaction History" typeUrl="/dashboard/transactions" />
        <TransactionList />
      </DashboardLayout>
    </>
  );
};

export default Homepage;
