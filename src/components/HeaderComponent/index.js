import React from 'react';
import { View, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import { Dimensions } from 'react-native'

export default HeaderComponent = () => {
  let deviceWidth = Dimensions.get('window').width;
  return (
    <View style={{ flex: 1, width: deviceWidth, padding: 0, marginStart: 0 }}>
      <Header>
        <Left>
          <Button transparent>
            <Icon name='arrow-back' />
          </Button>
        </Left>
        <Body>
          <Title>Annadata</Title>
        </Body>
        <Right>
          <Button transparent>
            <Icon name='menu' />
          </Button>
        </Right>
      </Header>
    </View>
  );
}