import React, {useState} from 'react';
import "react-dropzone-uploader/dist/styles.css";
import FormInput from "../form-input/form-input.component";


const S3_BUCKET ='video-injest-bucket';
const REGION ='us-west-2';


// AWS.config.update({
//     accessKeyId: 'YOUR_ACCESS_KEY_HERE',
//     secretAccessKey: 'YOUR_SECRET_ACCESS_KEY_HERE'
// })
//
// const myBucket = new AWS.S3({
//     params: { Bucket: S3_BUCKET},
//     region: REGION,
// })

const defaultFormFields = {
    title: '',
    date: '',
    duration: '',
}

const FileUpload = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {title, date, duration} = formFields;
    // const axios = require("axios").default;
    //
    // const API_ENDPOINT = "https://f2ud39ek4d.execute-api.us-west-2.amazonaws.com/default/getPresignedUrl";

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const handleFormChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value});
    };

    const handleSubmit = async (files) => {
        const f = files[0];
        try {
            // const response = await axios({
            //     method: "GET",
            //     url: API_ENDPOINT,
            //     headers: {
            //         "Access-Control-Allow-Origin": "*"
            //     }
            // });
            // console.log("response: ", response)
            //
            // const result = await fetch(response.data.uploadURL, {
            //     method: "POST",
            //     body: f["file"],
            //
            // });
            // console.log('result: ', result);
            resetFormFields();
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
                // label='Date'
                type='date'
                required
                onChange={handleFormChange}
                name='date'
                value={date}
            />
            <FormInput
                // label='Duration'
                type='file'
                required
                onChange={handleFormChange}
                name='duration'
                value={duration}
            />
            <button onClick={handleSubmit}>UPLOAD VIDEO</button>
        </form>
    );
};

export default FileUpload;