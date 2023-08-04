import React, { Component } from 'react';
import { Text, View,StyleSheet,Image } from 'react-native';

export default class DeportivoScreen extends Component {
    render() {
        return (
                <View >
                     
                     <Text style={styles.titleText}>                     A continuacion te explicaremos un poco sobre este estilo y te enseñaremos fotos para que te inspires:</Text>
                     
                  
                 
                     <Text style={styles.topicText}>                                                   La ropa deportiva debe de ser capaz de reducir gran parte del impacto generado 
                     al realizar una actividad física, proporcionar comodidad, no hacer rozaduras y tener la capacidad de transpirar. </Text>
                       <Image source={require("../assets/ca.jpg")} style={styles.routeImage}></Image>
   
        </View>

        )

    }
}
const styles = StyleSheet.create({
    titleText: {
       color: "red",
       flex: 1,
    justifyContent:"strech",
     alignItems: "flex-start",
     fontSize: 25,
        
    },
    topicText: {
        color: "black",
        flex: 1,
     justifyContent:"center",
      alignItems: "center ",
      fontSize: 25,
         
     },
     routeImage:{
     flex: 1,
        resizeMode: 'cover',
     }
})