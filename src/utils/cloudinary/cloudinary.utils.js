import {
    Cloudinary,
    createUploadWidget
} from "cloudinary-core";

const client = new Cloudinary({cloud_name: "dlpvg1cvn", secure: true});

export const uploadWidget = () => {
    window.client.openUploadWidget(
        { cloud_name: 'cloud_name',
            upload_preset: '<unsigned-preset>',
            tags: ['miniflix'],
            sources: ['local', 'url', 'facebook', 'image_search']
        },
        function(error, result) {
            console.log("This is the result of the last upload", result);
        });
}