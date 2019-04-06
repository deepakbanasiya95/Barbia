import React from 'react';
import { StyleSheet, Text, View ,ImageBackground , Button} from 'react-native';

export default class shopList extends React.Component {
  render() {
    return (
      <ImageBackground source={require('../assets/login_img.jpeg')} style={styles.container}>
        <View style={styles.logo}>
          <Text style={styles.logo_text}>Barbia</Text>
        </View>
        <View style={styles.up_container}>  
          <View style={styles.username}>
            <Text style={styles.font} >Username</Text>
          </View>
          <View style={styles.password}>
            <Text style={styles.font}>Password</Text>
          </View>
        </View>
        <View style={styles.up_container}>  
          <View style={styles.btn}>
            <Text style={styles.btn_font} >Login</Text>
          </View>  
        </View> 
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: '#fff'
  },
  up_container:{
    flex: 3,
    marginTop: "10%" 
  },
  username: {
    backgroundColor: 'transparent',
    margin: "2%",
    height: 40,
    marginRight: "10%",
    marginLeft: "10%",
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 12,
    alignItems: "center",
    padding: 5
  },
  password: {
    backgroundColor: 'transparent',
    margin: "2%",
    height: 40,
    marginRight: "10%",
    marginLeft: "10%",
    borderWidth: 1, 
    borderColor: '#000', 
    borderRadius: 12,
    alignItems: "center",
    padding: 5
  },
  button_container:{
    flex: 5,
    justifyContent: "center",
    alignItems: "center"
  },
  btn:{
    backgroundColor: '#fff',
    margin: "2%",
    height: 40,
    marginRight: "10%",
    marginLeft: "10%",
    borderWidth: 1, 
    borderColor: '#000', 
    borderRadius: 12,
    alignItems: "center",
    padding: 5
  },
  logo:{
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "10%"
  },
  logo_text:{
    color: '#000',
    fontSize: 50,
    fontStyle: 'italic',
    textShadowColor: 'red',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius : 5
  },
  font:{
    color: '#fff',
    fontSize: 20,
  },
  btn_font:{
    fontSize: 20,
  }

});