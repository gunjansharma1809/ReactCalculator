import { FC } from 'react';
import { Button, View } from 'react-native';

const App :FC= () =>{
  return <View>
    <Button onPress={()=>{
      console.log("button is pressed")
    }} title='This is button' color='red' ></Button>
    </View>
}

export default App