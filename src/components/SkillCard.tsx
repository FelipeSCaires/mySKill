import React from 'react'
import { TouchableOpacity, TouchableOpacityProps,  Text, StyleSheet} from 'react-native'

interface ISkillCardProps extends TouchableOpacityProps{
    skill: string

}

export function SkillCard({ skill, ...rest}:ISkillCardProps){
    return(
        <TouchableOpacity 
        activeOpacity={0.7}
         style={styles.buttonSkill}
         {...rest}
         >
        <Text style={styles.textSkill}>{skill}</Text>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    buttonSkill:{
        backgroundColor: '#1F1E25',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        padding: 15,
    },
    textSkill:{
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
    }
   
})