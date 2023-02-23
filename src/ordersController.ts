import { Body, Controller, Get, Path, Post, Delete, PUT, Query, Response, Route, Tags } from "tsoa";
import { InvalidParametersError, NotFoundError } from "./server";
import * as db from "./ordersManager";

@Route('orders')
export class OrdersController extends Controller {

    @Get()
    public getAll() {
        return db.getAll();
    }

    @Get('{orderId}')
    @Response<NotFoundError>(404, 'Could not find')
    public getOrder(
        @Path()
        orderId: db.orderId) {
    }

    // @Post()
    // public addOrder(@Body() requestBody: {
    // }) {
    //     return db.addOrder();
    // }

    // @Delete('{orderId}')
    // @Response<NotFoundError>(404, 'Could not find')
    // public deleteOrder() {
    //     return db.deleteOrder();
    // }
    
}