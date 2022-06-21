import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";


import imagenTitulo from './assets/imagenTitulo.png'
import imagenCuadro from './assets/imagenCuadro.png'



export default function App() {
  return (
    <View style={styles.container}>
    <LinearGradient 
      style={styles.container}
      colors={["rgba(2, 28, 59, 1)", "rgba(19, 38, 135, 1)"]}
    >


      <View style={styles.containerImagenTitulo}>
          <Image 
            source={imagenTitulo}
            style={styles.imagenTitulo} 
            >
          </Image>
      </View>

      <View style={styles.containerTextoInicial}>
        
        <View>
          <Text style={styles.train}> TRAIN </Text> 
          <Text style={styles.anywhere}> ANYWHERE... </Text>   
        </View> 

        <View>
          <Text style={styles.improve}> IMPROVE </Text> 
          <Text style={styles.everywhere}> EVERYWHERE! </Text> 
        </View> 

      </View>

      <View style={styles.containerImagenCuadro}>
        <Image 
            source={imagenCuadro}
            style={styles.imagenCuadro} 
          >
        </Image>
      </View>
        

      <TouchableOpacity 
        style={styles.boton}
        >
        <Text style={styles.textoBoton}> START YOUR FREE TRAIL </Text>
      </TouchableOpacity>

      
      <Text style={styles.textoChico}>TAKE A CLOSER LOOK</Text>
     

      
      <Text style={styles.textoInfo}>
        Improve your conditioning and hockey skills with an NHL Veteran. Virtual Hockey Coach, Michael Del Zotto, challenges you to train like a pro.
      </Text>


      
     <Text style={styles.textoChico}>GRIND AND EARN</Text>
      

     <Text style={styles.textoInfo}>
     Earn points for log in streaks, completed workouts and other achievements. Use points to enter draws for signed NHL merch or redeem them for other great prizes from our sponsors.
      </Text>

      <TouchableOpacity 
        style={styles.boton2}
        >
        <Text style={styles.textoBoton}> START YOUR FREE TRAIL </Text>
      </TouchableOpacity>

      {/*  <StatusBar style="auto" /> */}
        </LinearGradient>
    </View>
  );
}






const styles = StyleSheet.create({

  textoInfo:{
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    width: 320,
    //position: 'relative'
    marginBottom: 25

  },


  textoChico:{
    color:'#00AEEF',
    fontSize: 20,
    marginBottom: 25
    },

  boton:{
    backgroundColor: '#00AEEF',
    padding: 10,
    borderRadius: 10,
    width: 320,
  
    marginBottom:40

  },
  boton2:{
    backgroundColor: '#BD0938',
    padding: 10,
    borderRadius: 10,
    width: 320,
  
    marginBottom:40

  },
  textoBoton:{
    color: '#fff',
    textAlign:'center',
    fontSize: 25
  },
  
  container: {
    flex: 1,
    //backgroundColor: '#021C3B',
    margin: 0,

    alignItems: 'center',
    justifyContent: 'center',
  },
  containerImagenTitulo: {
    margin:35,
    marginTop: 0,
    marginBottom: 0,
    justifyContent: 'flex-start',
    
  },
  
  imagenTitulo: {
    width: 350,
    height: 100,
    resizeMode: 'contain',
    
  },
  imagenCuadro:{
    width: 350,
    height: 200,
    borderRadius: 15
    
  },
  
  containerTextoInicial :{
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20
  },
  train:{
    fontSize: 25,
    color:  '#00AEEF',
    right: 70
  },
  anywhere: {
    fontSize: 25,
    color: '#fff',
    left: 10,
    position: 'absolute'
  },

  improve:{
    fontSize: 25,
    color:  '#00AEEF',
    right: 85
  },
  everywhere: {
    fontSize: 25,
    color: '#fff',
    left: 30,
    position: 'absolute'
    
  },
  containerImagenCuadro :{
    margin : 10,
    marginBottom: 20
  }

  
});
