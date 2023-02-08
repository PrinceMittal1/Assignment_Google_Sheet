import {View, Text, SafeAreaView, StyleSheet, Pressable} from "react-native"
import { List } from "./List"
import Grid from "./Gird.js";


export default function Home(){
    const samplejson2 = [
      { name: 'name01', age: '20', sex: 'M' },
      { name: 'name02', age: '22', sex: 'F' },
      { name: 'name03', age: '20', sex: 'M' },
    ];
      return(
        <SafeAreaView>
  
          <View style={styles.Navbarstyle}>
  
            <View style={{...styles.WelcomeTag}}>
              <Text style={{fontSize:15, color:"black"}}>Welcome to Google Sheet</Text>
            </View>
  
            <View style={{...styles.Downloadtag}}>
              <Pressable onPress={() => exportToExcel(samplejson2, 'downloadfilename', true )}>
                <View style={{...styles.DownloadButtonTag}}>
                  <Text style={{fontSize:18, color:"gray", fontWeight:"800"}}>DownLoad</Text>
                </View>
              </Pressable>
            </View>
  
          </View>
  
  
          <View>
               <Grid />
          </View>
  
        </SafeAreaView>
        )
  }


  const styles = StyleSheet.create({
    Navbarstyle:{
       flexDirection:"row",
       marginTop:20,
       alignItems:"center",
       marginBottom : 5
    },
    WelcomeTag:{
      flex:2, 
      alignItems:"flex-end"
    },
    Downloadtag:{
      flex:1, 
      alignItems:"flex-end"
    },
    DownloadButtonTag:{
      marginRight:10,
      borderWidth:2,
      borderRadius:15,
      padding : 5,
      borderColor : "gray"
    }
})

