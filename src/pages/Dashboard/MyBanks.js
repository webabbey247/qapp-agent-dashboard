import React from 'react'
import DashboardLayout from '../../components/Layout/DashboardLayout'
import CustomHeader from '../../components/CustomHeader/CustomHeader'
import { BankOptionTabs } from '../../components/OptionCards'
import { BankListCards } from '../../components/BankCard/BankListCards'
import { CustomDiv, DefaultButton } from '../../GlobalCss'

const MyBanks = () => {
  return (
    <>
    <DashboardLayout>
        <CustomHeader title="My Banks" typeUrl="/dashboard" />
        <BankOptionTabs />
        <BankListCards typeUrl="/dashboard/banks/oceanic-bank" />
        <CustomDiv>
          <DefaultButton background="rgba(228,111,36,0.6)" border="rgba(228,111,36,0.6);">Add New Bank</DefaultButton>
        </CustomDiv>
    </DashboardLayout>
    </>
  )
}

export default MyBanks