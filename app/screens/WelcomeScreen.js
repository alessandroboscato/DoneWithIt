import { View, ImageBackground, StyleSheet, Image, Text} from 'react-native';

export default function WelcomeScreen() {
  return (
    <ImageBackground
    style={styles.container} 
    source={require('../assets/background.jpg')}
    resizeMode="cover">

    <View style={styles.logoContainer}>
      <Image
      source={require('../assets/logo-red.png')}
      style={styles.logo}/>
      <Text>Sell What You Don't Need</Text>
    </View>

    <View style={styles.loginButton}/>

    <View style={styles.registerButton}/>

    </ImageBackground>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  loginButton : {
    backgroundColor: '#fc5c65',
    width: "100%",
    height: 70
  },
  registerButton : {
    backgroundColor: '#4ECDC4',
    width: "100%",
    height: 70
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: 'absolute',
    top: 50,
    alignItems: 'center'
  }
});

