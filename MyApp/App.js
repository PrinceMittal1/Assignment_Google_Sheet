
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
import { Provider } from 'react-redux'
import { MyStore } from './store';


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
