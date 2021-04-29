import * as React from 'react';
import { View, Text, Button } from 'react-native';
import CardComponent from '../../components/CardComponent/index';

function Home({ navigation }) {
  return (
    <>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 50 }}>      
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
      <Button
        title="Go to About"
        onPress={() => navigation.navigate('About')}
      />
      
    </View>
    <CardComponent />
    </>
  );
}

export default Home;