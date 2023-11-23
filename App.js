import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import List from './components/List';


export default function App() {
  const [list, setList] = useState();
  const [listItems, setListItems] = useState([]);

  const handleAddList = () => {
    Keyboard.dismiss();
    setListItems([...listItems, list])
    setList(null);
  }

  const completeList = (index) => {
    let itemsCopy = [...listItems];
    itemsCopy.splice(index,1);
    setListItems(itemsCopy);
  }





  return (
    <View style={styles.container}>

      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Fiona's to-do list</Text>

    <View style={styles.items}>
      {
        listItems.map((item, index) => {
          return  (
            <TouchableOpacity key={index} onPress={() => completeList(index)}>
              <List text={item} />
            </TouchableOpacity>
          )
        })
      }
    {/* <List text={'List 1'} />
     <List text={'List 2'} /> */}
    </View>

    </View>

    <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"} 
      style={styles.writeListWrapper}
      >
        <TextInput style={styles.input} placeholder={'Write a To-do List'} value={list} onChangeText={text => setList(text)}/>
      
        <TouchableOpacity onPress={() => handleAddList()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
    </KeyboardAvoidingView>


    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#352F44',
  },

  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    color: '#FFF',
    fontFamily: 'ArialRoundedMTBold',
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 60,
    paddingLeft: 60,
  },

  
  items: {
    marginTop: 30,
    
  },

  writeListWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    

  },

  input: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    width: 290,
    backgroundColor: '#B9B4C7',
    borderRadius: 60,
    borderColor: '#5C5470',
    borderWidth: 1,
    fontFamily: 'ArialRoundedMTBold',
  },

  addWrapper: {
    width: 60,
    height: 40,
    backgroundColor: '#FAF0E6',
    borderRadius: 60,
    borderColor: '#5C5470',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  addText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
});
