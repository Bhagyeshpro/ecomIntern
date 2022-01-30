import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

const Button = ({text, onPress}) => {
    return (
        <Pressable style={styles.root} onPress={onPress}>
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    )
}

export default Button

const styles = StyleSheet.create({
    root: {
         backgroundColor: '#eb9f26',
        marginVertical: 10,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#a15e1b',
    },
    text: {
        fontSize: 16,
    },
})
