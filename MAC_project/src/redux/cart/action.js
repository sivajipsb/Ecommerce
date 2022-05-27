export const ADDCART ="ADDCART"
export const DELETECART ="DELETECART"

export const addcart =(payload)=>{
    return {
        type:ADDCART,
        payload:payload
    }
}
export const deletecart =(index)=>{
    return {
        type:DELETECART,
        payload:index
    }
}