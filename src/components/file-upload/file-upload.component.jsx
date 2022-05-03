import React, {useState} from 'react';
//
// import 'react-dropzone-uploader/dist/styles.css'
// import Dropzone from 'react-dropzone-uploader'

import FormInput from "../form-input/form-input.component";
// import {upload} from "../../utils/cloudinary/cloudinary.utils";

import {Cloudinary} from "@cloudinary/url-gen";
import {Transformation} from "@cloudinary/url-gen";
import {thumbnail, scale} from "@cloudinary/url-gen/actions/resize";
import axios from "axios";

const defaultFormFields = {
    title: '',
    date: '',
    isPublic: true,
    description: '',
    file: null
}

const FileUpload = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {title, date, isPublic, description, file} = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const handleFormChange = (event) => {
        const {name, value} = event.target;
        console.log("name", name);
        console.log("value", value);
        setFormFields({...formFields, [name]: value});
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('typeof file', typeof file);
        // const {file} = document.querySelector('input[type="file"]');
        const formData = new FormData();
        formData.append('file', file);
        formData.append("upload_preset", "test_upload");
        // formData.append('formFields', formFields)

        // Create and configure your Cloudinary instance.
        // const cld = new Cloudinary({
        //     cloud: {
        //         cloudName: 'dlpvg1cvn'
        //     }
        // });
        //
        // const myVideo = cld.video('test');

        try {
            const {response} = axios.post(`${process.env.REACT_APP_CLOUDINARY_ENDPOINT}/upload`, formData);

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
                id="video-upload"
                type="file"
                accept="video/*"
                name="name"
                value={file}
                onChange={handleFormChange}
            />
            <button>SUBMIT</button>
        </form>
    );
};

export default FileUpload;