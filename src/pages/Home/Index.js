import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Bem vindo(a) ao Spotfull</Text>
      <TextInput style={styles.searchInput} placeholder="Pesquise por uma música"/>

      <View style={styles.musicAll}>
          <TouchableOpacity style={styles.musicCard}>
              <AntDesign name='caretright' color="#24CD1C" size={20}/>
              <Text style={styles.buttomText}>Guns n' Roses - Sweet Child O Mine</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.musicCard}>
          <AntDesign name='caretright' color="#24CD1C" size={20}/>
              <Text style={styles.buttomText}>AC/DC - Back In Black</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.musicCard}>
          <AntDesign name='caretright' color="#24CD1C" size={20}/>
              <Text style={styles.buttomText}>Atirei o Pau no Gato - Seila</Text>
          </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        backgroundColor:"#222"
    },
    titulo:{
        alignSelf:"center",
        fontWeight:"bold",
        color:"white",
        fontSize:30
    },
    searchInput:{
        backgroundColor:"white",
        margin:20,
        padding:13,
        borderRadius:10,
        fontSize:15,

    },
    buttomText:{
        color:"white",
        display:"flex",
        marginLeft:5,
    },
   
    musicCard:{
        backgroundColor:"#333",
        margin:15,
        padding:15,
        borderRadius:10,
        flexDirection:"row",
    }
})