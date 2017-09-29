import React, { Component } from 'react';
import { Image, View, StatusBar } from 'react-native';

import { Container,  Button, H3, Text, Header, Title, Body, Left, Right } from 'native-base';

import styles from './styles';

const launchscreenBg = require("../../../img/launchscreen-bg.png");
const launchscreenLogo = require("../../../img/logo-kitchen-sink.png");

class Home extends Component {
  render() {
    <Container>
      <StatusBar barStyle="light-content" />
      <Image source={launchScreenBg} style={styles.imageContainer}>
        <View>
          <Image source={launchScreenLogo} style={styles.logo} />
          <View>
            <H3>Hello Awesome App! </H3>
          </View>
          <View>
            <Button
              style={{ backgroundColor: "#6FAF98", alignSelf: "center" }}
              onPress={() => this.prop.navigation.navigate("DrawerOpen")}
            >
              <Text>Getting started!</Text>
            </Button>
          </View>
        </View>
      </Image>
    </Container>
  }
}

export default Home;
