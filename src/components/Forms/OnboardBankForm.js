import React from 'react';
import Select from 'react-select'
import makeAnimated from 'react-select/animated';
import { ContentRow, ContentFullColumn } from '../../GlobalCss';
import {
    ContentForm,
    FormLabel
} from '../../assets/styles/FormCss';

const OnboardBankForm = () => {
    const animatedComponents = makeAnimated();
    const options = [
        {  value: 'b2bea76c-33e8-4e37-8da4-aa4938632aa1', label: 'BankThree' },
        {  value: 'f4934971-0352-4bc2-8596-e6ea877cbdaa', label: 'BankOne' },
        {  value: 'bdc18af5-250e-4dcc-b489-a6d0413e2b85', label: 'BankTwo' }
    ]

    return (
        <>
            <ContentForm>
                <ContentRow>
                    <ContentFullColumn>
                        <FormLabel>Select Bank(s)</FormLabel>
                        <Select
                            closeMenuOnSelect={false}
                            components={animatedComponents}
                            defaultValue={[options[0]]}
                            isMulti
                            options={options}
                        />
                    </ContentFullColumn>


                </ContentRow>
            </ContentForm>
        </>
    )
}
export default OnboardBankForm;