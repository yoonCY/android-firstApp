import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, ScrollView, Alert} from 'react-native';

import {WebView} from 'react-native-webview';

import {
  Container,
  Content,
  Icon,
  Thumbnail,
  Header,
  Left,
  Right,
  Body,
  Input,
} from 'native-base';
// import CardComponent from '../CardComponent';

import Counter from 'store/Counter';
import MemberStore from 'store/MemberStore';
import { observable, action } from 'mobx'
import {observer} from 'mobx-react';

const HeaderTitle = props => {
  return (
    <View>
      <Text>test!! {props.title}</Text>
    </View>
  );
};

@observer
class HomeScreen extends React.Component {

  @observable counter = Counter.counter

  static navigationOptions = ({navigation}) => {
    const params = navigation.state.params || {};

    return {
      headerTitle: () => <HeaderTitle title="test" />,
      headerStyle: {
        backgroundColor: '#355eca',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerLeft: () => (
        <Button
          onPress={() => navigation.navigate('MyModal')}
          title="Info"
          color="#fff"
        />
      ),
    };
  };

  constructor(props) {
    super(props);
    
    Counter.increment();
      
  }

  render() {

    const MemberInfo = MemberStore.getLoginInfo();
    console.log(MemberInfo);
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <View style={{flex: 2, alignItems: 'center', justifyContent: 'center'}}>
          <Text>{Counter.counter} - tisHome Screen</Text>
          <Button
            title="Go to Details"
            onPress={() => {
              this.props.navigation.navigate('Search', {
                itemId: 86,
                otherParam: 'anything you want here',
              });
            }}
          />
        </View>
        <View style={{flex: 2, alignItems: 'center', justifyContent: 'center'}}>
          <WebView
            source={{uri: 'https://github.com/facebook/react-native'}}
            style={{marginTop: 20, width: 500, height: 200}}
          />
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default HomeScreen;
