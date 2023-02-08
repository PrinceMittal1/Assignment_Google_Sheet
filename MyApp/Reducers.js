var mydata = []


const MyReducer = (storedata=mydata,action) =>{

    switch(action.type){
        case "NEW" : {
            // console.log("reach to store ");
            return [...action.info]; 
        }
        case "CHANGING":{
            const temp = [...storedata];
            const Row = action.info.data.RowNumber
            const Column = action.info.data.ColumnNumber
            const tmp = temp[Row][Column]
            tmp["Content"] = action.info.message;
            // console.log("temp is " + tmp["ColumnNumber"]);
            return temp;
        }
        default :{
            return storedata;
        }
    }
}


export default MyReducer;