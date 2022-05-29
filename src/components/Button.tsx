import React from 'react'
import {TouchableOpacity,TouchableOpacityProps, Text, StyleSheet} from 'react-native'

interface ButtonProps extends TouchableOpacityProps{
    title: string
}

export function Button({title,...rest}:ButtonProps){
    return(
        <TouchableOpacity
            style={styles.button}
            activeOpacity={.7}
            {...rest}
            >
                <Text style={styles.buttonText}>{title}</Text>
            </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: '#A370F7',
        padding: 15,
        borderRadius: 7,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText:{
        fontSize: 17,
        color: '#fff',
        fontWeight: 'bold',
    },

})