import React, {useState} from 'react';
import "react-dropzone-uploader/dist/styles.css";
import Dropzone from "react-dropzone-uploader";
import FormInput from "../form-input/form-input.component";
import {ButtonsContainer} from "../sign-in-form/sign-in-form.styles";
import Button from "../button/button.component";

// const MAX_FILE_SIZE_BYTES = 500000;

const defaultFormFields = {
    file: ''
};

const FileUpload = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { file } = formFields;
    const axios = require("axios").default;

    const API_ENDPOINT = "https://f2ud39ek4d.execute-api.us-west-2.amazonaws.com/default/getPresignedUrl"

    const handleChange = ({ meta, remove }, status) => {
        console.log(status, meta);
    };

    const handleSubmit = async (files) => {
        const f = files[0];
        try {
            const response = await axios({
                method: "GET",
                url: API_ENDPOINT,
            });

            // PUT request: upload file to S3
            const result = await fetch(response.data.uploadURL, {
                method: "PUT",
                body: f["file"],
            });
        } catch (error) {
            console.log('Error occurred try again');
        }
    }

    return (
        <Dropzone
            onChangeStatus={handleChange}
            onSubmit={handleSubmit}
            maxFiles={1}
            multiple={false}
            canCancel={false}
            inputContent="Drop A File"
            styles={{
                dropzone: { width: 400, height: 200 },
                dropzoneActive: { borderColor: "green" },
            }}
        />
        // <div>
        //     <form onSubmit={handleSubmit}>
        //         <FormInput
        //             type='file'
        //             required
        //             onChange={handleChange}
        //             name='file'
        //             value={file}
        //         />
        //         <ButtonsContainer>
        //             <Button type='submit'>Submit</Button>
        //         </ButtonsContainer>
        //     </form>
        // </div>
    );
};

export default FileUpload;