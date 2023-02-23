import { Donut } from "./donutsManager"

export type OrderItem = {
    donut: Donut;
    quantity: number 
}
export type OrderId = number;
export type UserId = string;
export type OrderItems = [ OrderItem ];
export type City = string;
export type State = string;
export type ZipCode = string;
export type Street = string;
export type Status = string;
export type Date = string;
export type Order = {
    _id: OrderId,
    userId: UserId,
    orderItems: OrderItems,
    city?: City,
    state?: State,
    zipCode?: ZipCode,
    street?: string,
    status?: string,
    date: string
}

class OrderIdManager {
    private static lastUsed = 0;
    public static newId(): number {
        return ++this.lastUsed;
    }
}

let allOrders: Order[] = [];

export function initialize(): void {
    allOrders = [];   
}

export function getAll(): Order[] {
    return allOrders;
}

// export function getOrder(orderId: OrderId) : Order {
//     return allOrders.find(o => o._id == orderId);
// }
