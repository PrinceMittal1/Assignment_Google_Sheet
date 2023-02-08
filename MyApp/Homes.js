import {View, Text, SafeAreaView, StyleSheet, Pressable, PermissionsAndroid,Alert} from "react-native"
import { List } from "./List"
import Grid from "./Gird.js";
import { useState } from "react";
import RNFetchBlob from 'rn-fetch-blob';
import Filedata from "./Filedata";
import {useSelector} from "react-redux";


export default function Home(){

    const Newdata  =  useSelector((storedata)=>{return storedata})
    const [Fileto, setFileto] = useState(false);


    const requestStoragePermission = async () => {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            {
              title: 'Downloader App Storage Permission',
              message:
                'Downloader App needs access to your Storage ' +
                'so you can download .',
              buttonNeutral: 'Ask Me Later',
              buttonNegative: 'Cancel',
              buttonPositive: 'OK',
            },
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
             convertToExcel();
             setFileto(true)
          } 
          else {
            console.log('Storage permission denied');
          }
        } catch (err) {
          console.warn(err);
        }
    };

    const convertToExcel = async (data) => {
        console.log("in excel ");
        const rows = data.map(row => row.join(',')).join('\n');
        console.log(rows);
        const filePath = `${RNFetchBlob.fs.dirs.DownloadDir}/data${Math.floor(Math.random() * 16) + 5}.csv`;
        await RNFetchBlob.fs.writeFile(filePath, rows, 'utf8');
        if(filePath){
         Alert.alert(`File Path ${filePath}`)
        }
        console.log(`Excel sheet generated at ${filePath}`);
    
    };
    const convertToExce= () =>{
        const toreturn  = [];
        for (let i=1; i<List.length; i++){
            let tempArray = [];
            for(let j=1; j<=5; j++){
                let tmp = Newdata[i][j]["Content"]
                tempArray.push(tmp);
            }
            toreturn.push(tempArray);
        }
        convertToExcel(toreturn)
    }
      return(
        <SafeAreaView>
  
          <View style={styles.Navbarstyle}>
  
            <View style={{...styles.WelcomeTag}}>
              <Text style={{fontSize:15, color:"black"}}>Welcome to Google Sheet</Text>
            </View>
  
            <View style={{...styles.Downloadtag}}>
              <Pressable onPress={() => {Fileto?convertToExce():requestStoragePermission()}}>
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

