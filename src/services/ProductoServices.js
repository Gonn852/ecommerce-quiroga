import instance from "../config/axios";

export function getProductos(){
    return instance.get("/items")
}