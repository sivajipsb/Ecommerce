export const  SETPRODUCT="ADDPRODUCT"
export const SELECTPRODUCT="SELECETPRODUCT"
export const DELETEPRODUCT="DELETEPRODUCT"


export const setproduct=(payload)=>{
    return {
        type:SETPRODUCT,
        payload:payload
    }
}
export const selectproduct=(payload)=>{
    return {
        type:SELECTPRODUCT,
        payload:payload
    }
}




export const deleteproduct=()=>{
    return {
        type:DELETEPRODUCT
        
    }
}
