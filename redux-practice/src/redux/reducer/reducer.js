const initialState = {
    count: 0,
    id:"",
    password:""
}

export default function reducer(state=initialState, action){
    console.log("action??",action);
    if(action.type === "INCREAMENT"){
        return {...state, count:state.count+action.payload.num}
    }else if(action.type === "LOGIN"){
        return {...state, id:action.payload.id, password:action.payload.password}
    }

    return {...state}
}