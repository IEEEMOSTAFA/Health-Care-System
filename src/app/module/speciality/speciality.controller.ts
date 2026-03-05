import { response } from "express";
import { SpecialtyService } from "./speciality.route";
import { catchAsync } from "../../shared/catchAsync";
import { sendResponse } from "../../shared/sendResponse";





const createSpecialty = catchAsync(

    async(req: Request, res: Response) =>{
        console.log(req.body);
        console.log(req.file);

        const payload = {
            ...req.body,
            icon: req.file?.path
        };

        const result = await SpecialtyService.createSpecialty(payload);
        sendResponse(res, {
            httpStatusCode: 201,
            success: true,
            message: "Speciality created Successfully",
            data: result
        });
    }
)



export const SpecialtyController = {
    createSpecialty,
   
}