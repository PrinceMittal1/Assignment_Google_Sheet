
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Home from './Homes';
import { MyStore } from './store';
import { Provider } from "react-redux";


function App(){
  return (
      <Provider store={MyStore}>
        <View style={{flex:1, backgroundColor:"white"}}>
      <Home />
      </View>
      </Provider>
  );
}

const styles = StyleSheet.create({
  
});

export default App;
