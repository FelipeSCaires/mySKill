import React from 'react'
import { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TextInput, FlatList, StatusBar } from 'react-native'
import { Button } from '../../components/Button'
import { SkillCard } from '../../components/SkillCard'

interface INewSkillData {
    id: string
    name: string
}

export const Home = () =>{

    const [newSkill, setNewSkill] = useState('')
    const [mySkills, setMySkills] = useState<INewSkillData[]>([])
    const [greeting, setGreeting] = useState('')

    function handleAddNewSkill(){
        const data = {
            id: String(new Date().getTime()),
            name: newSkill
        }
        setMySkills(oldState =>[...oldState, data])
    }

    function handleRemoveSkill(id: string){
        setMySkills(oldState => oldState.filter(
            skill => skill.id !== id
        ))
    }

    useEffect(()=> {
        const currentHour = new Date().getHours()
        if(currentHour < 12){
            setGreeting('Good morning')
        }
        else if(currentHour >= 12 && currentHour < 18 ){
            setGreeting('Good afternoon')
        }
        else{
            setGreeting('Good night')
        }
    }, [mySkills])
    
    return(
      
        <View style={styles.container}>
            <Text style={styles.title}>Welcome, Felipe</Text>
            <Text style={styles.greetings}> 
                {greeting}
            </Text>
            <TextInput  
                style={styles.input}
                placeholder='New skill'
                placeholderTextColor={'#555'}
                onChangeText={setNewSkill}
            />
            <Button
             onPress={handleAddNewSkill}
             title='Add'
             />
            <Text style={[styles.title, {marginTop: 20, marginBottom: 20}]}>My Skills</Text>
            <FlatList 
                data={mySkills}
                keyExtractor={item => item.id}
                renderItem={({ item }) =>(
                    <SkillCard  
                     skill={item.name}
                     onPress={()=>handleRemoveSkill(item.id)}
                     />
                    )}
            />
              
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#121214',
        paddingHorizontal: 20,
        paddingVertical: 70,
    },
    title:{
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
    },
    input:{
        backgroundColor: '#1f1e25',
        borderRadius: 7,
        color: '#fff',
        padding: 15,
        fontSize: 18,
        marginTop: 30,
    },
    greetings:{
        color: '#fff'
    }
})