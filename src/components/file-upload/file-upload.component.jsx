import React, {useState} from 'react';
import "react-dropzone-uploader/dist/styles.css";
import Dropzone from "react-dropzone-uploader";
import FormInput from "../form-input/form-input.component";

const defaultFormFields = {
    title: '',
    date: '',
    duration: 0,
    video: null,
}

const FileUpload = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {title, date, duration, video} = formFields;
    const axios = require("axios").default;

    const API_ENDPOINT = "https://f2ud39ek4d.execute-api.us-west-2.amazonaws.com/default/getPresignedUrl" // needs to be set as env variable

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const handleFormChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value});
    };

    const getUploadParams = ({meta}) => {
        console.log('need to set these as part of the file object');
    }

    const handleLocalUploadChangeStatus = ({meta, file}, status) => {
        console.log(status, meta, file)
    }

    const handleSubmit = async (files) => {
        const f = files[0];
        try {
            const response = await axios({
                method: "GET",
                url: API_ENDPOINT,
            });

            const result = await fetch(response.data.uploadURL, {
                method: "PUT",
                body: f["file"],
            });
            resetFormFields();
        } catch (error) {
            console.log('Error occurred try again');
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
                // label='Date'
                type='date'
                required
                onChange={handleFormChange}
                name='date'
                value={date}
            />
            <FormInput
                // label='Duration'
                type='time'
                required
                onChange={handleFormChange}
                name='duration'
                value={duration}
                hidden={'hidden'}
            />
            <Dropzone
                getUploadParams={getUploadParams}
                onChangeStatus={handleLocalUploadChangeStatus}
                onSubmit={handleSubmit}
                maxFiles={1}
                multiple={false}
                canCancel={false}
                inputContent="Drag and drop your files here"
                styles={{
                    dropzone: {width: window.innerWidth*.8, height: 200},
                    dropzoneActive: {borderColor: "green"},
                }}
            />
        </form>
    );
};

export default FileUpload;