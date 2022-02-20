import { View, ImageBackground, StyleSheet} from 'react-native';

export default function WelcomeScreen() {
  return (
    <ImageBackground
    style={styles.container} 
    source={require('../assets/background.jpg')}
    resizeMode="cover">

    <View style={styles.loginButton}/>

      <View style={styles.registerButton}/>

    </ImageBackground>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end'
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
});

