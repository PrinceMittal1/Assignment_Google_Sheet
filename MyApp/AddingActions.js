import { MyStore } from "../Store"


const AddingAllData= (data, dispatch) =>{
    dispatch ({
        type : "NEW",
        info : data,
    })
}

export default AddingAllData;