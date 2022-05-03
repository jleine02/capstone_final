import React, {useState} from 'react';

import FormInput from "../form-input/form-input.component";

const defaultFormFields = {
    title: '',
    date: ''
}

const FileUpload = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {title, date} = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const handleFormChange = (event) => {
        const {name, value} = event.target;
        console.log(name, value)
        setFormFields({...formFields, [name]: value});
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('file', event.target.files);
        formData.append('upload_preset', 'test_upload');

        try {
            const response = await fetch('https://api.cloudinary.com/v1_1/dlpvg1cvn/video/upload', {
                method: "post",
                body: formData
            });
            console.log("response:", response);
            const jsonResponse = await response.json();
            // resetFormFields();
        } catch (error) {
            console.log('Error occurred try again: ', error.text);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            {/*<FormInput*/}
            {/*    label='Title'*/}
            {/*    type='text'*/}
            {/*    required*/}
            {/*    onChange={handleFormChange}*/}
            {/*    name='title'*/}
            {/*    value={title}*/}
            {/*/>*/}
            {/*<FormInput*/}
            {/*    type='date'*/}
            {/*    required*/}
            {/*    onChange={handleFormChange}*/}
            {/*    name='date'*/}
            {/*    value={date}*/}
            {/*/>*/}
            <FormInput
                type='file'
                required
                name='file'
            />
            <button onClick={handleSubmit}>SUBMIT</button>
        </form>
    );
};

export default FileUpload;