import React, { Component } from 'react';
import { Text, View,Image,StyleSheet} from 'react-native';

export default class AestheticScreen extends Component {
    render() {
        return (
            <View >
                 
                 <Text style={styles.titleText}>                     A continuacion te explicaremos un poco sobre este estilo y te enseñaremos fotos para que te inspires:</Text>
                 
              
             
                 <Text style={styles.topicText}>                                                  La moda aesthetic es amplia y, dentro de ella, podemos encontrar diferentes subestilos. Sin embargo, hay prendas que no pueden faltar si lo quieres incorporar a tu armario. Te desvelamos cuáles son para que puedas conseguir un look aesthetic:

</Text>
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