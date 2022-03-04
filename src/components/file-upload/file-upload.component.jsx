import React, {useState} from 'react';
import FormInput from "../form-input/form-input.component";
import {ButtonsContainer} from "../sign-in-form/sign-in-form.styles";
import Button from "../button/button.component";

const MAX_FILE_SIZE_BYTES = 500000;

const defaultFormFields = {
    file: ''
};

const FileUpload = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { file } = formFields;

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value });
    };

    const handleSubmit = (event) => {
        try {
            console.log('This will be submitted to s3 eventually');
        } catch (error) {
            console.log('Error occurred try again');
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <FormInput
                    type='file'
                    required
                    onChange={handleChange}
                    name='file'
                    value={file}
                />
                <ButtonsContainer>
                    <Button type='submit'>Submit</Button>
                </ButtonsContainer>
            </form>
        </div>
    );
};

export default FileUpload;