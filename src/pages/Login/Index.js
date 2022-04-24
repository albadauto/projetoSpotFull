import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Login() {
    return (
    <View style={styles.container}>
         <Text style={styles.titulo}>Login</Text>
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
    }
})