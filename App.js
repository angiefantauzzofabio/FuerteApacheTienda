import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, backgroundColor, Image } from 'react-native';

export default class App extends React.Component{
  render(){ 
    
    return (
    <View style={styles.container}>
      <View style={styles.containerText}>
      <Text style = {styles.text}>Tienda Sustentable</Text>
      </View>
      <View style={styles.label}>
      <Text style = {{color: '#000000',  fontSize: 17, textAlign: 'center',alignItems: 'center'}}>Por</Text>
      </View>

          <View style={styles.products}>
          </View>
            <View style={ {padding: 10, alignItems: 'stretch', flexDirection: "row", flex: 2,position: 'absolute', width: '30%',  height: '5%', top: 288, left: 9}}>
            <Text style = { {color: '#000000',  fontSize: 15, textAlign: 'center',alignItems: 'center'}}>Jabon de cafe</Text>
            </View>
            <View style={ {padding: 10, alignItems: 'stretch', flexDirection: "row", flex: 2, position: 'absolute', width: '20%',  height: '5%', top: 308, left: 38}}>
            <Text style = { {color: '#000000',  fontSize: 15, textAlign: 'center',alignItems: 'center'}}>$500</Text>
            </View>
          <View style={styles.products2}>
          </View>
            <View style={{padding: 10, alignItems: 'stretch', flexDirection: "row", flex: 2, position: 'absolute', width: '30%',  height: '5%',top: 288, left: 132}}>
            <Text style = { {color: '#000000',  fontSize: 15, textAlign: 'center',alignItems: 'center'}}>Jabon de cafe</Text>
            </View>
            <View style={ {padding: 10, alignItems: 'stretch', flexDirection: "row", flex: 2, position: 'absolute', width: '20%',  height: '5%', top: 308, left: 161}}>
            <Text style = { {color: '#000000',  fontSize: 15, textAlign: 'center',alignItems: 'center'}}>$500</Text>
            </View>
          <View style={styles.products3}>
          </View>
            <View style={{padding: 10, alignItems: 'stretch', flexDirection: "row", flex: 2, position: 'absolute', width: '30%',  height: '5%',top: 288, left: 254}}>
            <Text style = { {color: '#000000',  fontSize: 15, textAlign: 'center',alignItems: 'center'}}>Jabon de cafe</Text>
            </View>
            <View style={ {padding: 10, alignItems: 'stretch', flexDirection: "row", flex: 2, position: 'absolute', width: '20%',  height: '5%', top: 308, left: 283}}>
            <Text style = { {color: '#000000',  fontSize: 15, textAlign: 'center',alignItems: 'center'}}>$500</Text>
            </View>
          <View style={styles.products4}>
          </View>
            <View style={{padding: 10, alignItems: 'stretch', flexDirection: "row", flex: 2, position: 'absolute', width: '30%',  height: '5%',top: 430, left: 9}}>
            <Text style = { {color: '#000000',  fontSize: 15, textAlign: 'center',alignItems: 'center'}}>Jabon de cafe</Text>
            </View>
            <View style={ {padding: 10, alignItems: 'stretch', flexDirection: "row", flex: 2, position: 'absolute', width: '20%',  height: '5%', top: 450, left: 38}}>
            <Text style = { {color: '#000000',  fontSize: 15, textAlign: 'center',alignItems: 'center'}}>$500</Text>
            </View>
          <View style={styles.products5}>
          </View>
            <View style={{padding: 10, alignItems: 'stretch', flexDirection: "row", flex: 2, position: 'absolute', width: '30%',  height: '5%',top: 430, left: 132}}>
            <Text style = { {color: '#000000',  fontSize: 15, textAlign: 'center',alignItems: 'center'}}>Jabon de cafe</Text>
            </View>
            <View style={ {padding: 10, alignItems: 'stretch', flexDirection: "row", flex: 2, position: 'absolute', width: '20%',  height: '5%', top: 450, left: 161}}>
            <Text style = { {color: '#000000',  fontSize: 15, textAlign: 'center',alignItems: 'center'}}>$500</Text>
            </View>
          <View style={styles.products6}>
          </View>
            <View style={{padding: 10, alignItems: 'stretch', flexDirection: "row", flex: 2, position: 'absolute', width: '30%',  height: '5%',top: 430, left: 254}}>
            <Text style = { {color: '#000000',  fontSize: 15, textAlign: 'center',alignItems: 'center'}}>Jabon de cafe</Text>
            </View>
            <View style={ {padding: 10, alignItems: 'stretch', flexDirection: "row", flex: 2, position: 'absolute', width: '20%',  height: '5%', top: 450, left: 283}}>
            <Text style = { {color: '#000000',  fontSize: 15, textAlign: 'center',alignItems: 'center'}}>$500</Text>
            </View>
          <View style={styles.products7}>
          </View>
            <View style={{padding: 10, alignItems: 'stretch', flexDirection: "row", flex: 2, position: 'absolute', width: '30%',  height: '5%',top: 578, left: 9}}>
            <Text style = { {color: '#000000',  fontSize: 15, textAlign: 'center',alignItems: 'center'}}>Jabon de cafe</Text>
            </View>
            <View style={ {padding: 10, alignItems: 'stretch', flexDirection: "row", flex: 2, position: 'absolute', width: '20%',  height: '5%', top: 598, left: 38}}>
            <Text style = { {color: '#000000',  fontSize: 15, textAlign: 'center',alignItems: 'center'}}>$500</Text>
            </View>
          <View style={styles.products8}>
          </View>
            <View style={{padding: 10, alignItems: 'stretch', flexDirection: "row", flex: 2, position: 'absolute', width: '30%',  height: '5%',top: 578, left: 132}}>
            <Text style = { {color: '#000000',  fontSize: 15, textAlign: 'center',alignItems: 'center'}}>Jabon de cafe</Text>
            </View>
            <View style={ {padding: 10, alignItems: 'stretch', flexDirection: "row", flex: 2, position: 'absolute', width: '20%',  height: '5%', top: 598, left: 161}}>
            <Text style = { {color: '#000000',  fontSize: 15, textAlign: 'center',alignItems: 'center'}}>$500</Text>
            </View>
          <View style={styles.products9}>
          </View>
            <View style={{padding: 10, alignItems: 'stretch', flexDirection: "row", flex: 2, position: 'absolute', width: '30%',  height: '5%',top: 578, left: 254}}>
            <Text style = { {color: '#000000',  fontSize: 15, textAlign: 'center',alignItems: 'center'}}>Jabon de cafe</Text>
            </View>
            <View style={ {padding: 10, alignItems: 'stretch', flexDirection: "row", flex: 2, position: 'absolute', width: '20%',  height: '5%', top: 598, left: 283}}>
            <Text style = { {color: '#000000',  fontSize: 15, textAlign: 'center',alignItems: 'center'}}>$500</Text>
            </View>
      <StatusBar style="auto" />
    </View>
  );
}

}
 

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: '#ABD8C1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color: '#FAFAFA', 
    fontSize: 35, 
    textAlign: 'center',
    alignItems: 'center'
  },
  containerText:{
    padding: 59,
    backgroundColor: '#65B98F',
    alignItems: 'stretch',
    flexDirection: "row",
    flex: 3,
    position: 'absolute',
    width: '100%', 
    height: '25%',
    top: 0,
    left: 0
  },
  p:{
    padding: 10,
    alignItems: 'stretch',
    flexDirection: "row",
    flex: 2,
    position: 'absolute',
    width: '30%', 
    height: '5%',
    top: 288,
    left: 9
  },
  label:{
    backgroundColor: '#ABD8C1',
    padding: 10,
    alignItems: 'stretch',
    flexDirection: "row",
    flex: 2,
    position: 'absolute',
    width: '22%', 
    height: '7%',
    top: 134,
    left: 0,
    borderRadius:8
  },
  products:{
    padding: 45,
    width: '30%',
    backgroundColor: '#FAFAFA',
    alignItems: 'center',
    flexDirection: "row",
    flex: 2,
    position: 'absolute',
    top: 200,
    left: 9,
    borderRadius:5,
    justifyContent: "center",
  },
  products2:{
    padding: 45,
    width: '30%',
    backgroundColor: '#FAFAFA',
    alignItems: 'center',
    flexDirection: "row",
    flex: 2,
    position: 'absolute',
    top: 200,
    left: 132,
    borderRadius:5,
    justifyContent: "center",
  },
  products3:{
    padding: 45,
    width: '30%',
    backgroundColor: '#FAFAFA',
    alignItems: 'center',
    flexDirection: "row",
    flex: 2,
    position: 'absolute',
    top: 200,
    left: 254,
    borderRadius:5,
    justifyContent: "center",
  },
  products4:{
    padding: 45,
    width: '30%',
    backgroundColor: '#FAFAFA',
    alignItems: 'center',
    flexDirection: "row",
    flex: 2,
    position: 'absolute',
    top: 342,
    left: 9,
    borderRadius:5,
    justifyContent: "center",
  },
  products5:{
    padding: 45,
    width: '30%',
    backgroundColor: '#FAFAFA',
    alignItems: 'center',
    flexDirection: "row",
    flex: 2,
    position: 'absolute',
    top: 342,
    left: 132,
    borderRadius:5,
    justifyContent: "center",
  },
  products6:{
    padding: 45,
    width: '30%',
    backgroundColor: '#FAFAFA',
    alignItems: 'center',
    flexDirection: "row",
    flex: 2,
    position: 'absolute',
    top: 342,
    left: 254,
    borderRadius:5,
    justifyContent: "center",
  },
  products7:{
    padding: 45,
    width: '30%',
    backgroundColor: '#FAFAFA',
    alignItems: 'center',
    flexDirection: "row",
    flex: 2,
    position: 'absolute',
    top: 490,
    left: 9,
    borderRadius:5,
    justifyContent: "center",
  },
  products8:{
    padding: 45,
    width: '30%',
    backgroundColor: '#FAFAFA',
    alignItems: 'center',
    flexDirection: "row",
    flex: 2,
    position: 'absolute',
    top: 490,
    left: 132,
    borderRadius:5,
    justifyContent: "center",
  },
  products9:{
    padding: 45,
    width: '30%',
    backgroundColor: '#FAFAFA',
    alignItems: 'center',
    flexDirection: "row",
    flex: 2,
    position: 'absolute',
    top: 490,
    left: 254,
    borderRadius:5,
    justifyContent: "center",
  },

});
