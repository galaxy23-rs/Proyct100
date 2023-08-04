import React, { Component } from 'react';
import { Text, View,StyleSheet,Image } from 'react-native';

export default class DarkScreen extends Component {
    render() {
        return (
            <View >
                 
                 <Text style={styles.titleText}>                     A continuacion te explicaremos un poco sobre este estilo y te enseñaremos fotos para que te inspires:</Text>
                 
              
             
                 <Text style={styles.topicText}>                                                    Los jóvenes Dark se reconocen y se identifican entre sí al establecer 
                 una diferenciación existencial con los demás, se han forjado un enfoque individual acerca de la existencia y la trascendencia del hombre, de la violencia del mundo, de la locura humana, estableciendo un culto a los sentimientos y a la sensibilidad. </Text>
                

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