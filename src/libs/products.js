import API from "./index";

export async function getAllProduct(payload) {
    const resp = await API.get('volumes', {
        params: {
            q: 'pride', 
            projection:'lite', 
            filter: 'paid-ebooks' ,
            maxResults: 40, 
            startIndex: 0,
             ...payload
            }
        })
    return resp.data.items
}