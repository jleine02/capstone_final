import axios from "axios";
import React, {Component} from 'react';

// export const client = async (endpoint, { body, ...customConfig } = {}) => {
//     // const user = JSON.parse(localStorage.getItem("user"));
//
//     const config = {
//         method: body ? "POST" : "GET",
//         ...customConfig,
//         headers: {
//             "Content-Type": "application/json",
//             Accept: "application/json",
//         },
//     };
//
//     if (body) {
//         config.body = JSON.stringify(body);
//     }
//
//     // if (customConfig.token) {
//     //     config.headers.authorization = `Bearer ${customConfig.token}`;
//     // }
//     //
//     // if (!customConfig.token && user?.token) {
//     //     config.headers.authorization = `Bearer ${user.token}`;
//     // }
//
//     const response = await fetch(endpoint, config);
//     const data = await response.json();
//
//     return data;
// };
//
// export const upload = async (resourceType, file) => {
//     const formData = new FormData();
//     formData.append("upload_preset", "test_upload");
//     formData.append("file", file);
//
//     // let toastId = null;
//     // const config = {
//     //     onUploadProgress: (p) => {
//     //         const progress = p.loaded / p.total;
//     //         if (toastId === null) {
//     //             toastId = toast("Upload in Progress", {
//     //                 progress,
//     //             });
//     //         } else {
//     //             toast.update(toastId, {
//     //                 progress,
//     //             });
//     //         }
//     //     },
//     // };
//
//     const { data } = await axios.post(
//         `${process.env.REACT_APP_CLOUDINARY_ENDPOINT}/${resourceType}/upload`,
//         formData
//     );
//
//     return data.url;
// };

class CldCustUploadLgRestApi extends Component {
    processFile = async (e) => {
        var file = e.target.files[0];

        // Set your cloud name and unsigned upload preset here:
        var YOUR_CLOUD_NAME = "dlpvg1cvn";
        var YOUR_UNSIGNED_UPLOAD_PRESET = "test_upload";

        var POST_URL =
            "https://api.cloudinary.com/v1_1/" + YOUR_CLOUD_NAME + "/auto/upload";

        var XUniqueUploadId = +new Date();

        processFile();

        function processFile(e) {
            var size = file.size;
            var sliceSize = 100000000;
            var start = 0;

            setTimeout(loop, 3);

            function loop() {
                var end = start + sliceSize;

                if (end > size) {
                    end = size;
                }
                var s = slice(file, start, end);
                send(s, start, end - 1, size);
                if (end < size) {
                    start += sliceSize;
                    setTimeout(loop, 3);
                }
            }
        }

        function send(piece, start, end, size) {
            console.log("start ", start);
            console.log("end", end);

            var formdata = new FormData();
            console.log(XUniqueUploadId);

            formdata.append("file", piece);
            formdata.append("cloud_name", YOUR_CLOUD_NAME);
            formdata.append("upload_preset", YOUR_UNSIGNED_UPLOAD_PRESET);
            formdata.append("public_id", "myChunkedFile2");

            var xhr = new XMLHttpRequest();
            xhr.open("POST", POST_URL, false);
            xhr.setRequestHeader("X-Unique-Upload-Id", XUniqueUploadId);
            xhr.setRequestHeader(
                "Content-Range",
                "bytes " + start + "-" + end + "/" + size
            );

            xhr.onload = function () {
                // do something to response
                console.log(this.responseText);
            };

            xhr.send(formdata);
        }

        function slice(file, start, end) {
            var slice = file.mozSlice
                ? file.mozSlice
                : file.webkitSlice
                    ? file.webkitSlice
                    : file.slice
                        ? file.slice
                        : noop;

            return slice.bind(file)(start, end);
        }

        function noop() {}
    };

    render() {
        return (
            <div>
                <h3>Upload:</h3>
                <p>
                    Note: Before choosing a file, set your cloud name and unsigned upload
                    preset in CldCustUploadLgRestApi.js:
                </p>
                <p>YOUR_CLOUD_NAME</p>
                <p>YOUR_UNSIGNED_UPLOAD_PRESET</p>
                <br />
                <h5>Test image/video upload</h5>
                <input type="file" onChange={this.processFile} />
            </div>
        );
    }
}

export default CldCustUploadLgRestApi;
