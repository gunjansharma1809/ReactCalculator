import { FC } from 'react';
import {
  Pressable,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
  View,
} from 'react-native';


export default function App() {
  return (
    <View style={stylemyStyles.container}>
      <Pressable
        style={stylemyStyles.buttonStyle}
        onPress={() => console.log('black button pressed')}
      >
        <Text
          style={stylemyStyles.text}
        >
        0
        </Text>
      </Pressable>
      <Pressable
        style={stylemyStyles.buttonStyle}
        onPress={() => console.log('black button pressed')}
      >
        <Text
          style={stylemyStyles.text}
        >
        1
        </Text>
      </Pressable>
      <Pressable
        style={stylemyStyles.buttonStyle}
        onPress={() => console.log('black button pressed')}
      >
        <Text
          style={stylemyStyles.text}
        >
        2
        </Text>
      </Pressable>
      <Pressable
        style={stylemyStyles.buttonStyle}
        onPress={() => console.log('black button pressed')}
      >
        <Text
          style={stylemyStyles.text}
        >
        3
        </Text>
      </Pressable>
    </View>
  );
}

const stylemyStyles = StyleSheet.create({
  container:{padding: 50,flexDirection:'column'},
  text:{ 
    color: 'white', 
    fontSize: 50,
    alignItems: 'center',
    justifyContent:'center'
  },
  buttonStyle:{
    backgroundColor: 'black',
    width:70,
    height:80,
    borderRadius:40,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent:'center'
      }
   
})
