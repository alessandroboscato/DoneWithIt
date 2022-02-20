import { View, ImageBackground, StyleSheet} from 'react-native';

export default function ViewImageScreen() {
  return (
    <ImageBackground
    style={{flex: 1, justifyContent: 'flex-end'}} 
    source={require('../assets/chair.jpg')}
    resizeMode="cover">

    <View style={{
      backgroundColor: '#fc5c65',
      width: "100%",
      height: 70}}/>

      <View style={{
      backgroundColor: '#4ECDC4',
      width: "100%",
      height: 70}}/>

    </ImageBackground>
    
  );
}

