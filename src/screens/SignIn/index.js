import {StyleSheet, Text, View, Button} from 'react-native';
import React, {useState, useEffect} from 'react';

const SignIn = () => {
  //   let welcome = 'Welcome';
  useEffect(() => {
    console.log('component did mount');
  }, []);

  useEffect(() => {
    console.log('component did update');
  }, [welcome]);

  const [welcome, setWelcome] = useState('Welcome');
  const [users, setUsers] = useState([]);

  const handleSubmit = () => {
    // welcome = 'Selamat Datang';
    setWelcome('Selamat Datang');
    // setUsers(['John']);
  };
  console.log(users[0]);

  return (
    <View>
      <Text style={styles.title}>{welcome}</Text>
      <Text style={styles.title}>{users[0]}</Text>
      <Button title="SignIn" color="#841584" onPress={handleSubmit} />
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: '700',
    margin: 10,
    textAlign: 'center',
  },
});
