import React from 'react';
import {View, Text, ScrollView, TextInput, Image} from 'react-native';
import Laptop from '../img/laptop.jpeg';

const CoreComponents = () => {
  const hello = 'Hello World';
  return (
    <ScrollView>
      <Text>{hello}</Text>
      <View style={{width: 100, height: 100, backgroundColor: 'yellow'}} />
      <Image
        source={require('../img/laptop.jpeg')}
        style={{width: 200, height: 200}}
      />
      <Image source={Laptop} style={{width: 200, height: 200}} />
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

export default CoreComponents;
