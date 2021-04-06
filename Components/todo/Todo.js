import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import styles from './Todo.styles';


const Todo = (props) => {

    return (
        <Text style={styles.todoItem}>{props.text} </Text>
    )
}

export default Todo;
