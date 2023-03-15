//import
import React from 'react';
import {Text, View, Image, TextInput, ScrollView} from 'react-native';
import Laptop from './img/laptop.jpeg';

//Class Component
// class App extends React.Component {
//   render() {
//     return (
//       //JSX
//       <Text>Hello World</Text>
//     );
//   }
// }

//Function Component
const App = () => {
  return (
    <ScrollView>
      <Text>Hello World</Text>
      <View style={{width: 100, height: 100, backgroundColor: 'yellow'}} />
      <Image
        source={require('./img/laptop.jpeg')}
        style={{width: 200, height: 200}}
      />
      <Image source={Laptop} style={{width: 200, height: 200}} />
      <Image
        source={{uri: 'https://reactjs.org/logo-og.png'}}
        style={{width: 200, height: 200}}
      />
      <Image
        source={{uri: 'https://reactjs.org/logo-og.png'}}
        style={{width: 200, height: 200}}
      />
      <Image
        source={{uri: 'https://reactjs.org/logo-og.png'}}
        style={{width: 200, height: 200}}
      />
      <Image
        source={{uri: 'https://reactjs.org/logo-og.png'}}
        style={{width: 200, height: 200}}
      />
      <TextInput
        placeholder="Masukan nama anda"
        style={{
          borderColor: 'black',
          borderWidth: 1,
          borderRadius: 10,
          margin: 10,
          padding: 10,
        }}
      />
    </ScrollView>
  );
};

//Export
export default App;
