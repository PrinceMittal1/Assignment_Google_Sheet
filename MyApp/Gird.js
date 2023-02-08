// import {useDispatch} from "react-redux";
import HorizontalRenderingFunction from "./HorizontalRender"
import { List } from "./List"
import {View, Text, FlatList} from "react-native"
import { useEffect , useState} from "react"
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useDispatch} from "react-redux";
import AddingAllData from "./AddingActions";
import { useSelector } from "react-redux";

export default function Grid(){
    const dispatch = useDispatch();

    const retrieveData = async () => {
        try {
          const value = await AsyncStorage.getItem("Sheetdata");
          if(value!==null){
            AddingAllData(JSON.parse(value),dispatch);
            console.log("adding data thorugh fetching async storage " + JSON.parse(value)[2][4]["ColumnNumber"] )
            return JSON.parse(value);
          }
          else{
            console.log("adding data thorugh Local list " + List )
            AddingAllData(List,dispatch);
          }
        } catch (e) {
        }
      };

    useEffect(() => {
        retrieveData();
      }, []);

    const Newdata  =  useSelector((storedata)=>{return storedata})
      

    return (
    <View>
        <FlatList 
        data={Newdata}
        renderItem={({item})=>{
            return (
                <FlatList
                horizontal={true}
                data={item} 
                renderItem={({item})=>{
                    return <View style={{}}>
                            <HorizontalRenderingFunction data={item} />
                        </View>
                 }}/>
            )
        }}
        />
    </View>
    )
}

