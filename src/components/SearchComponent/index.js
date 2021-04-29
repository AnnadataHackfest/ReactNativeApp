import React from 'react';
import { View, Header, Item, Input, Icon, Button, Text } from 'native-base';

export default SearchComponent = () => {
  return (
    <View>
        <Item>
          <Icon name="ios-search" />
          <Input placeholder="Search" />
          <Icon name="ios-people" />
        </Item>
        <Button transparent>
          <Text>Search</Text>
        </Button>
    </View>
  );
}