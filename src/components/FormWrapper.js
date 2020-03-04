import React, {useState} from 'react'
import Form from './Form'
import Show from './Show'

const FormWrapper = props => {
    const [formState, setFormState] = useState({
        "firstName": "",
        "lastName": "",
        "email": "",
        "password": "",
        "confirmPassword": "",
    })
    const onChangeHandler = (e) => {
        setFormState({
            ...formState,    // copy the current formState
            [e.target.name]: e.target.value
        })
    }
    console.log(formState)

    return (
        <div>
            <Form onChangeHandler={onChangeHandler}/>
            <Show form={formState}/>
        </div>
    )
}
export default FormWrapper