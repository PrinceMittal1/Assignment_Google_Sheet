import {View, Text, Image, StyleSheet} from "react-native"
import {Dimensions} from 'react-native';
import InputBoxSheet from "./InputBoxOfStyleSheet"


const windowWidth = Dimensions.get('window')

function HorizontalRenderingFunction({data}){
    if(data.Type==="Image"){
        return <View style={{width:windowWidth.width/13, ...styles.All, ...styles.All_Border}}>
            <Text>y</Text>
        </View>
    }
    if(data.Type==="ColumnTitle"){
        return <View style={{...styles.ColumnBox, ...styles.All, ...styles.All_Border}}>
            <Text style={{fontSize: 20, color:"black"}}>{data.Content}</Text>
        </View>
    }
    if(data.Type==="RowTitle"){
        return <View style={{...styles.RowBox, ...styles.All, ...styles.All_Border}}>
            <Text style={{fontSize: 18, color:"black"}}>{data.Content}</Text>
        </View>
    }
    else{
        return <View style={{...styles.InputBox,  ...styles.All}}>
            <InputBoxSheet content={data} />
        </View>
    }
}

const styles = StyleSheet.create({
    All_Border:{
        borderWidth:1,
    },
    All:{
        height:windowWidth.height/27,
    },
    ColumnBox:{
        width:windowWidth.width*2.4/13,
        alignItems:"center",
        justifyContent:"center"
    }, 
    RowBox:{
        width:windowWidth.width/13,
        alignItems:"center"
    },
    InputBox:{
        width:windowWidth.width*2.4/13,
    }
})

export default HorizontalRenderingFunction;