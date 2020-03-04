import React, {useState} from 'react'
import Form from './Form'
import Show from './Show'

const FormWrapper = props => {
    const [formState, setFormState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    })
    const onChangeHandler = (e) => {
        setFormState({
            ...formState,    // copy the current formState
            [e.target.name]: e.target.value
        })
    }
    return (
        <div class="col-5 mx-auto">
            <Form form={formState} onChangeHandler={onChangeHandler}/>
            <Show form={formState}/>
        </div>
    )
}
export default FormWrapper