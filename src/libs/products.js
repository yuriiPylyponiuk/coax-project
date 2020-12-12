import API from "./index";

export async function getAllProduct(params) {
    const resp = await API.get('volumes', {params: {q: 'pride', projection:'lite', filter: 'paid-ebooks' ,maxResults: 40, startIndex: 0, ...params}})
    return resp.data.items
}