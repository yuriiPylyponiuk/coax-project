import API from "./index";

export async function getAllProduct() {
    const resp = await (await fetch("https://fakestoreapi.com/products")).json()
    return resp
}