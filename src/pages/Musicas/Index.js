import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Entypo, AntDesign } from '@expo/vector-icons';
import { ScrollView } from 'react-native';

export default function Musicas() {
  return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Minhas Musicas</Text>


        <TouchableOpacity style={styles.botaoPlay}>
          <Text style={styles.textoBotao}>Tocar Músicas</Text>
        </TouchableOpacity>

        <View>
          <TouchableOpacity style={styles.musics}>
            <Image style={styles.musicImage} />
            <Text style={styles.musicTitle}>O Baque Foi Grande - </Text>
            <Text style={styles.musicAuthor}>Wesley Safadão</Text>
            <AntDesign name='caretright' color="#24CD1C" size={20} style={styles.iconPlay} />


          </TouchableOpacity>
          <TouchableOpacity style={styles.musics}>
            <Image style={styles.musicImage} />
            <Text style={styles.musicTitle}>O Baque Foi Grande - </Text>
            <Text style={styles.musicAuthor}>Wesley Safadão</Text>
            <AntDesign name='caretright' color="#24CD1C" size={20} style={styles.iconPlay} />


          </TouchableOpacity>
          <TouchableOpacity style={styles.musics}>
            <Image style={styles.musicImage} />
            <Text style={styles.musicTitle}>O Baque Foi Grande - </Text>
            <Text style={styles.musicAuthor}>Wesley Safadão</Text>
            <AntDesign name='caretright' color="#24CD1C" size={20} style={styles.iconPlay} />


          </TouchableOpacity>

          <TouchableOpacity style={styles.musics}>
            <Image style={styles.musicImage} />
            <Text style={styles.musicTitle}>O Baque Foi Grande - </Text>
            <Text style={styles.musicAuthor}>Wesley Safadão</Text>
            <AntDesign name='caretright' color="#24CD1C" size={20} style={styles.iconPlay} />


          </TouchableOpacity>
          <TouchableOpacity style={styles.musics}>
            <Image style={styles.musicImage} />
            <Text style={styles.musicTitle}>O Baque Foi Grande - </Text>
            <Text style={styles.musicAuthor}>Wesley Safadão</Text>
            <AntDesign name='caretright' color="#24CD1C" size={20} style={styles.iconPlay} />


          </TouchableOpacity>
          <TouchableOpacity style={styles.musics}>
            <Image style={styles.musicImage} />
            <Text style={styles.musicTitle}>O Baque Foi Grande - </Text>
            <Text style={styles.musicAuthor}>Wesley Safadão</Text>
            <AntDesign name='caretright' color="#24CD1C" size={20} style={styles.iconPlay} />


          </TouchableOpacity>

        </View>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222",
    justifyContent: "center"
  },
  titulo: {
    alignSelf: "center",
    fontWeight: "bold",
    color: "white",
    fontSize: 30
  },
  botaoPlay: {
    alignSelf: "center",
    width: 220,
    height: 42,
    backgroundColor: "#24CD1C",
    borderRadius: 13,
    marginBottom: 20
  },
  textoBotao: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
    alignSelf: "center",
    marginTop: 10
  },
  musicImage: {
    padding: 30,
    backgroundColor: "red",
    maxWidth: 20,
    maxHeight: 10,
    margin: 10
  },
  musicTitle: {
    color: "white",
    alignSelf: "center"
  },
  musics: {
    flexDirection: "row",
    backgroundColor: "#111"
  },
  musicAuthor: {
    color: "white",
    alignSelf: "center"

  },

  iconPlay: {
    alignSelf: "center",
    marginLeft: 12
  }


})