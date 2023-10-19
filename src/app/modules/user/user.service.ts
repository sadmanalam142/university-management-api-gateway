import { Request } from "express";
import { fileUploadHelper } from "../../../helpers/fileUploadHelper";
import { IUploadFile } from "../../../interfaces/file";

const createStudent = async (req: Request) => {
    const file = req.file as IUploadFile
    const uploadedImage = await fileUploadHelper.uploadToCloudinary(file)

    if(uploadedImage){
        req.body.profileImage = uploadedImage.secure_url
    }
};

export const UserService = {
    createStudent
};
