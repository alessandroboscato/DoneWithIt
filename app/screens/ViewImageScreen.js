import { View, ImageBackground, StyleSheet} from 'react-native';

export default function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}/>
      <View style={styles.deleteIcon}/>
      <ImageBackground
      style={styles.image} 
      source={require('../assets/chair.jpg')}
      resizeMode="contain">
      </ImageBackground>
    </View>
    
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    width: 50,
    height: 50,
    backgroundColor: '#fc5c65',
    position: 'absolute',
    top: 40,
    left: 30
  },
  container: {
    backgroundColor: '#000',
    flex: 1
  },
  deleteIcon: {
    width: 50,
    height: 50,
    backgroundColor: '#4ecdc4',
    position: 'absolute',
    top: 40,
    right: 30
  },
  image: {
    width: '100%',
    height: '100%'
  },
})

