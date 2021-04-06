import React, { useState, useEffect } from 'react';
import { TextInput, View, TouchableOpacity, Text, Keyboard, Alert, ScrollView } from 'react-native';
import Todo from './Components/todo/Todo'
import styles from './App.styles';

function App() {

  const [data, setData] = useState();
  const [item, setItem] = useState([]);
  const [completeTask, setCompleteTask] = useState([]);

  const inputData = () => {
    Keyboard.dismiss();
    if (item.includes(data)) {
      return
    }
    setItem([...item, data]);
    setData(null);
  }

  const deleteTask = (value) => {
    let itemsCopy = [...item];
    const updatedTodos = itemsCopy.filter(item => item != value);
    setItem(updatedTodos);
  }

  const RedoTask = (value) => {
    setItem([...item, value]);
    let removeFromRedo = completeTask.filter(item => item != value);
    setCompleteTask(removeFromRedo);
  }

  const completedTask = (value) => {
    setCompleteTask([...completeTask, value]);
    const removedTodo = item.filter(item => item != value);
    setItem(removedTodo);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Today's Task</Text>
      <TextInput style={styles.input} maxLength={10} onChangeText={setData} value={data} placeholder="Enter Todo" />
      <TouchableOpacity onPress={() => inputData()} style={styles.btnContainer}>
        <Text style={styles.btnText}>Add into List</Text>
      </TouchableOpacity>
      <View style={styles.todoContainer}>
        <ScrollView>
          {
            item.map((todoItem, index) => {
              return (
                <View style={styles.todoItemBar} key={index}>
                  <View>
                    <Todo text={todoItem} />
                  </View>
                  <View style={styles.todobtnsContainer}>
                    <TouchableOpacity style={styles.todoBtns} onPress={() => completedTask(todoItem)}>
                      <Text style={styles.todoBtnText}>Completed</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.todoBtns} onPress={() => deleteTask(todoItem)}>
                      <Text style={styles.todoBtnText}>Deleted</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )
            })
          }
        </ScrollView>
      </View>
      <Text style={styles.title}>Completed Task</Text>
      <View style={styles.todoContainer}>
        <ScrollView>
          <View>
            {
              completeTask.map((todoItem, index) => {
                return (
                  <View style={styles.todoItemBar} key={index}>
                    <View>
                      <Todo text={todoItem} />
                    </View>
                    <View style={styles.todobtnsContainer}>
                      <TouchableOpacity style={styles.todoBtns} onPress={() => RedoTask(todoItem)}>
                        <Text style={styles.todoBtnText}>Redo</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                )
              }
              )
            }
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

export default App;


// let addition;
  // const [count, setCount] = useState(2);

  // useEffect(() => {

  //   setInterval(() => {
  //     console.log(count);
  //     //console.log(count);
  //   }, 2000);
  //   setCount(count + 4);
  // }, [])

  //setCount(count + 2);