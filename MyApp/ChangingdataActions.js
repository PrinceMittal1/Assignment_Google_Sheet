
import { MyStore } from "../Store"


const ChangingData=(data, dispatch)=>{
    
    console.log(data);
    dispatch({
        type : "CHANGING",
        info : data,
    })
}

export default ChangingData;