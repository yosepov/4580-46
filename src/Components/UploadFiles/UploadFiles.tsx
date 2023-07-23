import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify'
import { storage } from '../../services/firebase/firebaseConfig';
import 'react-toastify/dist/ReactToastify.css';
import { Box, Button, Typography } from '@mui/material';
import { FileUploader } from 'react-drag-drop-files';


interface UploadFilesProps {
    fullStoragePath: string; // the path where we save the file
    uploadButtonTitle: string; // the title for the upload button string
    fileMetaData: string; // can be PDF, EXOC, MP4, EXE, JPEG.......
    fileTypes: string[]; // PDF & CSV, JPEG & PNG ["PNG", 'JPEG']
}

export const UploadFiles = ({
    fileMetaData,
    fileTypes,
    fullStoragePath,
    uploadButtonTitle
}: UploadFilesProps) => {

    const [dataAsFile, setDataAsFile] = useState<any>();
    const [hasFile, setHasFile] = useState("");
    const [fileName, setFileName] = useState("");
    const [uploadedFile, setUploadedFile] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleFirebaseUpload = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        setIsLoading(true);
        toast.info("Uploading....")

        if (!dataAsFile) {
            toast.error(`The file is not ${fileTypes && fileTypes.map(e => `${e}`)} type, the type is ${typeof dataAsFile}`);
            return;
        } else {
            const storageRef = ref(storage, `/${fullStoragePath}/${dataAsFile.name}`);
            const metaData = {
                contentType: fileMetaData || "image/jpeg"
            }
            let progress = "0";
            const toastProgress = toast.info(`Your file is ${progress}% uploaded`);

            const uploadTask = uploadBytesResumable(storageRef, dataAsFile, metaData);
            uploadTask.on("state_changed", (snapshot) => {
                progress = ((snapshot.bytesTransferred / snapshot.totalBytes) * 100).toString();
                progress = progress.substring(0, 3)
                toast.update(toastProgress, {
                    render: `File is ${progress}% done`,
                    type: "info"
                })

                switch (snapshot.state) {
                    case "paused":
                        toast.update(toastProgress, {
                            render: `Process is paused`,
                            type: 'warning',
                        });
                        break;
                    default:
                        toast.update(toastProgress, {
                            render: `File is ${progress}% done`,
                            type: 'info',
                        });
                        break;
                }

            },
                (err) => {
                    toast.update(toastProgress, {
                        render: err.message,
                        type: 'error',
                    });
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref)
                        .then(downloadUrl => {
                            setUploadedFile(true);
                            toast.update(toastProgress, {
                                render: `File is ${progress}% done`,
                                type: 'success',
                            });
                            setHasFile(downloadUrl)
                        })
                })
        }
    }

    const handleChange = (file: File) => {
        setFileName(file.name);
        setDataAsFile(() => file)
    }




    return <>
        <ToastContainer />
        {!uploadedFile && (
            <>
                <>
                    <Box>
                        <form>
                            <Typography>Upload</Typography>
                            <FileUploader
                                disabled={fileName}
                                handleChange={handleChange}
                                name="file"
                                hoverTitle="Drop here"
                                types={fileTypes}
                            />

                            {fileName && <Button onClick={() => {
                                setFileName("")
                                setHasFile("")
                            }}> Cancel</Button>}
                            <Button color="info">{fileName ? fileName : "No files selected yet"}</Button>
                            <Button onClick={e => handleFirebaseUpload(e)} color="info" disabled={!fileName || isLoading}>{uploadButtonTitle}</Button>
                        </form>
                        {hasFile && <a href={hasFile} download={'yourFile'}>Download </a>}
                    </Box>
                </>
            </>
        )}
    </>
}