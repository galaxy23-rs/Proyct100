import React, { Component } from 'react';
import { Text, View,Image,StyleSheet } from 'react-native';

export default class CasualScreen extends Component {
    render() {
             return (
                <View >
                     
                     <Text style={styles.titleText}>                     A continuacion te explicaremos un poco sobre este estilo y te enseñaremos fotos para que te inspires:</Text>
                     
                  
                 
                     <Text style={styles.topicText}>                                                     La ropa casual es la ropa informal: es decir, aquella que se 
                                                          utiliza en contextos que no exigen el respeto de un código de vestimenta formal.
                      A la hora de escoger ropa casual para vestirse, por lo tanto, una persona no se ata a criterios
                       rígidos de elegancia ni se preocupa por lograr un aspecto de seriedad. </Text>
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