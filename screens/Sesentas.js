import React, { Component } from 'react';
import { Text, View,StyleSheet,Image } from 'react-native';

export default class 	SesentasScreen extends Component {
    render() {
        return (
            <View >
                 
                 <Text style={styles.titleText}>                     A continuacion te explicaremos un poco sobre este estilo y te enseñaremos fotos para que te inspires:</Text>
                 
              
             
                 <Text style={styles.topicText}>             La moda de los años 60 se caracteriza por un toque divertido e 
                 incluso un poco infantil donde las minifaldas, las botas blancas y los vestidos babydoll eran las prendas protagonistas. Iconos como Audrey Hepburn, Jackie Kennedy o Catherine Deneuve son algunos de los referentes del estilo de los años 60 </Text>
                

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














