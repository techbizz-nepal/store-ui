import React from "react";
import {useForm} from "react-hook-form";
const FormField = ({inputPlaceHolder, inputName, inputType, inputClassName, labelName, labelClassName, defaultValue, register, wrapperClass}) => (
    <div className={wrapperClass}>
        <label className={labelClassName} htmlFor={inputName}>
            {labelName}
        </label>
        <input
            defaultValue={defaultValue ?? ''}
            {...register(inputName, {required: true})}
            className={inputClassName}
            id={inputName} type={inputType}
            placeholder={inputPlaceHolder}
        />
    </div>
)

export default FormField