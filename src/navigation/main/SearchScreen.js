import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

export default class SearchScreen extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
          title: navigation.getParam('otherParam', 'A Nested Details Screen'),
        };
      };
      
    render() {
        const { navigation } = this.props;
        return (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
            <Text>
              itemId: {JSON.stringify(navigation.getParam('itemId', 'NO-ID'))}
            </Text>
            <Text>
              otherParam:
              {JSON.stringify(navigation.getParam('otherParam', 'default value'))}
            </Text>
            <Button
              title="Go to Details... again"
              onPress={() =>
                navigation.push('Search', {
                  itemId: Math.floor(Math.random() * 100),
                })
              }
            />
          </View>
        );
      }
}
