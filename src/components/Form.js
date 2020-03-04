import React from 'react'

const Form = ({onChangeHandler}) => {
    return (
        <div>
            <div>
                <label>First Name </label>
                <input type="text" name="firstName" onChange={onChangeHandler}/>
            </div>
            <div>
                <label>Last Name </label>
                <input type="text" name="lastName" onChange={onChangeHandler}/>
            </div>
            <div>
                <label>Email </label>
                <input type="text" name="email" onChange={onChangeHandler}/>
            </div>
            <div>
                <label>Password </label>
                <input type="text" name="password" onChange={onChangeHandler}/>
            </div>
            <div>
                <label>Confirm Password </label>
                <input type="text" name="confirmPassword" onChange={onChangeHandler}/>
            </div>
        </div>
    )
}
export default Form