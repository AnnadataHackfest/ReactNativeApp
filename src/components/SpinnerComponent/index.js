import React from 'react';
import { View, Content, Spinner } from 'native-base';

export default SpinnerComponent = () => {
  return (
    <View>
      <Content>
        <Spinner color='red' />
      </Content>
    </View>
  );
}