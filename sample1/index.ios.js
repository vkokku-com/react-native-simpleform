/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  WebView
} from 'react-native';
import {Container,Content,Header,Left,Right,Icon,Button,Body,Title,Form,Item,Label,Input} from 'native-base';

export default class sample1 extends Component {
  constructor(){
    super();
    this.state = {
      username:'',
      password:'',
      message:''
    };
    this.onPressLogin = this.onPressLogin.bind(this);
  }
  onPressLogin(){
    if(this.state.username !== '' && this.state.username !== ''){
      let s = 'Welcome'+' '+this.state.username+'!';
      this.setState({
        username:'',
        password:'',
        message: s
      });
    }
    else{
      alert('Please enter inputs and submit');
    }
  }

  render() {
    return(
      <Container>
        <Header>
          <Left>
              <Button transparent>
                  <Icon name='home' />
              </Button>
          </Left>
          <Body>
              <Title>Login</Title>
          </Body>
          <Right>
              <Button transparent>
                  <Icon name='menu' />
              </Button>
          </Right>
        </Header>
        <Content>
            <Form>
                <Item floatingLabel>
                    <Label>Username</Label>
                    <Input onChangeText={(text)=>this.setState({username:text})} value={this.state.username}/>
                </Item>
                <Item floatingLabel>
                    <Label>Password</Label>
                    <Input onChangeText={(text)=>this.setState({password:text})} secureTextEntry={true} value={this.state.password} />
                </Item>
                <Button onPress={this.onPressLogin} style={{marginTop:40,marginLeft:5,marginRight:5}} block info>
                    <Text style={{color:'#fff'}}>LOGIN</Text>
                </Button>
            </Form>
            <View style={{marginTop:30}}>
              <Text style={{textAlign:'center',fontSize:18}}>{this.state.message}</Text>
            </View>
        </Content>
      </Container>
    );
  }
}



AppRegistry.registerComponent('sample1', () => sample1);
