import {View,Text,StyleSheet, TextInput} from "react-native";
import {useState} from "react";
import {useEffect} from "react";
import { List } from "./List";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import ChangingData from "./ChangingdataActions";


export default function InputBoxSheet({content}){

    const Newdata  =  useSelector((storedata)=>{return storedata})
    const dispatch = useDispatch();

    const Content = content.Content;
    const [state, setstate] = useState(Content);
    const [focused, setFocused] = useState(false);

    const SavingDataToAsyncAndReduxStore = async() =>{

        console.log(state);
        ChangingData({
            message: state, 
            data : content
        } ,dispatch);
        try{
            await AsyncStorage.setItem("Sheetdata",JSON.stringify(Newdata));
        }
        catch(e){
            console.log("ERROR IN INPUT BOX IS "+e);
        }
    }

    useEffect(()=>{
        let timerId;
            timerId = setTimeout(() => {    
                SavingDataToAsyncAndReduxStore();
             }, 2000);
        return () => {
          clearTimeout(timerId);
        };
    },[state])
    
    return (<View style={focused ? styles.focusedFor_Text_Input : styles.notfocusedFor_Text_Input }>
      <TextInput 
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        value={state}
        style={{color:"black", padding:0}}
        onChangeText={(t) => setstate(t)}
        />
    </View>)

}

const styles = StyleSheet.create({
    focused : {
        width:7,
        height:7,
        backgroundColor:"blue",
        position:"absolute",
        bottom:0,
        right:-5,
        bottom:-4,
        elevation: 1,
    },
    focusedFor_Text_Input:{
        borderWidth:1,
        borderColor:"blue",
        padding:0,
    },
    notfocusedFor_Text_Input:{
        borderWidth:1,
        borderColor:"black",
        padding:0
    }
})




