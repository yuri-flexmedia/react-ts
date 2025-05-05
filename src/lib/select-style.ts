import { StylesConfig } from "react-select";

export const SelectStyle: StylesConfig = {
    option: (base) => ({
        ...base,
        cursor: 'pointer'
    }),
    multiValue: (base) => ({
        ...base,
        backgroundColor: '#8FB143',
        color: 'white',
        borderRadius: '0.75rem'
    }),
    multiValueLabel: (base) => ({
        ...base,
        color: 'white'
    })
}