import React from "react";
import {useForm} from "react-hook-form";
import PropTypes from "prop-types";

const FormField = ({
                       inputPlaceHolder,
                       inputName,
                       inputType,
                       inputClassName,
                       labelName,
                       labelClassName,
                       defaultValue,
                       register,
                       wrapperClass,
                       required,
                       value,
                       effect,
                       onSubmitAnimationEnd,
                       disabled
                   }) => {
    return (
        <div className={wrapperClass}>
            {
                labelName !== undefined && labelName.length > 0 &&
                <label
                    className={`${labelClassName} ${required && `after:content-['*'] after:text-red-600 after:ml-0.5`}`}
                    htmlFor={inputName}>
                    {labelName}
                </label>
            }
            {
                inputType !== undefined && (inputType === 'text' || inputType === 'password') &&
                <input
                    defaultValue={defaultValue ?? ''}
                    {...register(inputName, {required: required !== undefined ? required : false})}
                    className={inputClassName}
                    id={inputName}
                    type={inputType}
                    placeholder={inputPlaceHolder}/>
            }
            {

                inputType !== undefined && inputType === 'submit' &&
                <input
                    value={value}
                    className={`${inputClassName} ${effect && 'animate-scale'} ${disabled && 'disabled:opacity-75'}`}
                    id={inputName}
                    type={inputType}
                    disabled={disabled}
                    onAnimationEnd={onSubmitAnimationEnd}
                />
            }
        </div>
    )
}
export default FormField