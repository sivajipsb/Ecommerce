export const ADDCART ="ADDCART"
export const DELETECART ="DELETECART"
export const DELITEM="DELITEM"
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
    export const delItem=(data)=>{
        return{
            type:DELITEM,
            payload:data
        }
    
}
export const updateadd = (data) => {
    return {
        type:"UPDATEADD",
        payload:data
    }
}
export const update = (e,cart,value) => (dispatch) => {
    console.log(cart,"sivajicart")
    let x = cart.map((ex) => {
        if(ex.id == e.id){
            if(ex.quantity == 1 && value == -1){
                ex.quantity = ex.quantity;
            }
            else{
                ex.quantity = ex.quantity+value;
            }
        }
    })
    dispatch(updateadd(x))
}