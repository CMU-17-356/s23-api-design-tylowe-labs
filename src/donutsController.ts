import { Body, Controller, Get, Path, Post, Query, Response, Route, Tags } from "tsoa";
import { InvalidParametersError } from "./server";
import * as db from "./donutsManager";

@Route('donuts')
export class DonutsController extends Controller {

    @Get()
    public getAll() {
        return db.getAll();
    }

    /**
     * Retrieves the transcript for a given Student ID
     * @param donutID 
     * @throws InvalidParametersError if the student ID does not correspond to any known transcript 
     */
    @Get('{donutID}')
    @Response<InvalidParametersError>(400, 'Invalid values specified')
    public getTranscript(
        @Path()
        donutID: db.DonutID) {
        
    }

    /**
     * Create a new student, optionally initializing their transcript
     * @param requestBody 
     * @returns the ID of the newly created student
     */
    @Post()
    public addDonut(@Body() requestBody: {
        name: string,
        price : number,
        description: string,
        image: string,
        status: string
    }) {
        //TODO make this be the handler for POST /transcripts
    }
    /**
     * Deletes a student's transcript 
     * @param donutID The ID of the student to delete
     * 
     */
    public deleteDonut(donutID: db.DonutID) {
        //TODO make this be the handler for DELETE /transcripts/:ID
    }

}