import FormField from "../common/FormField";
import React from "react";

const SignupForm = ({
                          register,
                          errors,
                          handleSubmit,
                          onRegisterSubmit,
                          registerSubmitText,
                          effect,
                          setEffect,
                          disable
                      }) => {

    return (
        <div className={`gap-y-8`} id={`registerFormWrapper`}>

            <div className={`mb-6`} id={`heading`}>
                <h1>Register</h1>
            </div>

            <div id={`errorDiv`}>
                {Object.keys(errors).length > 0 &&
                    <>
                        {errors.email &&
                            <p className={`py-1 text-red-400`}>email field is required</p>
                        }
                        {errors.password &&
                            <p className={`py-1 text-red-400`}>password field is required</p>
                        }
                    </>
                }
            </div>

            <form className={`flex flex-col gap-y-4`}
                  onSubmit={handleSubmit(onRegisterSubmit)}>
                <div className={`flex gap-x-8`}>
                    <FormField
                        register={register}
                        wrapperClass={`mb-4 flex flex-col gap-y-3`}
                        labelName={`Email`}
                        labelClassName={``}
                        defaultValue={``}
                        inputType={`text`}
                        inputName={`email`}
                        inputPlaceHolder={`Email`}
                        required={true}
                    />
                    <FormField
                        register={register}
                        wrapperClass={`mb-4 flex flex-col gap-y-3`}
                        labelName={`Password`}
                        labelClassName={``}
                        defaultValue={``}
                        inputType={`password`}
                        inputName={`password`}
                        inputPlaceHolder={`Password`}
                        required={true}
                    />
                </div>
                <div className={`flex flex-col`}>
                    <FormField
                        register={register}
                        wrapperClass={`mb-4 flex flex-col gap-y-3`}
                        inputType={`submit`}
                        value={registerSubmitText}
                        effect={effect}
                        disabled={disable}
                        onSubmitAnimationEnd={() => setEffect(false)}
                        inputClassName={`border p-2 bg-action text-white font-bold rounded-lg py-4 cursor-pointer bg-white`}
                    />
                </div>
            </form>

        </div>
    )
}
export default SignupForm