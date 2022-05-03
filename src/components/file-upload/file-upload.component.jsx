import React, {useState} from 'react';

import axios from 'axios';

import FormInput from "../form-input/form-input.component";

const defaultFormFields = {
    title: '',
    date: '',
    description: ''
}

const FileUpload = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {title, date, duration} = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const handleFormChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value});
    };

    const handleSubmit = async (files) => {
        console.log("here goes nothin lets upload this biotch to cloudinary!")
        const formData = new FormData();
        for (const file in files) {
            formData.append('file', file);
        }
        // formData.append(...formFields);
        formData.append('upload_preset', 'test_upload');
        console.log("here goes nothin lets upload this biotch to cloudinary!")
        try {
            const cloudinaryUploadEndpoint = 'https://api.cloudinary.com/v1_1/dlpvg1cvn/video/upload';
            const response = await fetch(cloudinaryUploadEndpoint, {
                method: "POST",
                body: formData
            });
            const jsonResponse = await response.json();
            console.log("SUCCESS!");
            console.log(jsonResponse);
            // resetFormFields();
        } catch (error) {
            console.log('Error occurred try again: ', error.text);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <FormInput
                label='Title'
                type='text'
                required
                onChange={handleFormChange}
                name='title'
                value={title}
            />
            <FormInput
                type='date'
                required
                onChange={handleFormChange}
                name='date'
                value={date}
            />
            <FormInput
                type='file'
                required
                onChange={handleFormChange}
                name='duration'
                value={duration}
            />
            <button onClick={handleSubmit}>SUBMIT</button>
        </form>
    );
};

export default FileUpload;