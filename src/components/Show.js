import React from 'react'

const Show = ({form}) => {
    return (
        <div className="card-body">
            <p>Your Form Data</p>
            <p>First Name {form.firstName}</p>
            <p>Last Name {form.lastName}</p>
            <p>Email {form.email}</p>
            <p>Password {form.password}</p>
            <p>Confirm Password {form.confirmPassword}</p>
        </div>
    )
}
export default Show