import React from 'react'

const Form = ({form, onChangeHandler}) => {
    let firstNameErr, lastNameErr, emailErr, passwordErr, ConfirmPwErr
    if (form.firstName.length != 0 && form.firstName.length < 2) {
        firstNameErr = <p>First name must be at least 2 characters.</p>
    }
    if (form.lastName.length != 0 && form.lastName.length < 2) {
        lastNameErr = <p>Last name must be at least 2 characters.</p>
    }
    if (form.email.length != 0 && form.email.length < 5) {
        emailErr = <p>Email must be at least 5 characters.</p>
    }
    if (form.password.length != 0 && form.password.length < 8) {
        passwordErr = <p>Password must be at least 8 characters.</p>
    }
    if (form.password != form.confirmPassword) {
        ConfirmPwErr = <p>Password must match</p>
    }
    return (
        <div className="card-body">
            <div>
                <label>First Name </label>
                <input type="text" name="firstName" onChange={onChangeHandler}/>
                {firstNameErr}
            </div>
            <div>
                <label>Last Name </label>
                <input type="text" name="lastName" onChange={onChangeHandler}/>
                {lastNameErr}
            </div>
            <div>
                <label>Email </label>
                <input type="text" name="email" onChange={onChangeHandler}/>
                {emailErr}
            </div>
            <div>
                <label>Password </label>
                <input type="text" name="password" onChange={onChangeHandler}/>
                {passwordErr}
            </div>
            <div>
                <label>Confirm Password </label>
                <input type="text" name="confirmPassword" onChange={onChangeHandler}/>
                {ConfirmPwErr}
            </div>
        </div>
    )
}
export default Form