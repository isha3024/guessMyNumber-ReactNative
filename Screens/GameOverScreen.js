import {View, Text, Image, StyleSheet, useWindowDimensions} from 'react-native';

//custom imports
import Title from '../Components/UI/Title';
import Colors from '../Constants/colors';
import PrimaryButton from '../Components/UI/PrimaryButton';
const success = '../assets/images/success.png';

const GameOverScreen = ({roundsNumber, userNumber, onStartNewGame}) => {
  const {width, height} = useWindowDimensions();
  
  let imageSize = 300;
  if( width > 380 ) {
    imageSize = 150;
  }
  if( height < 400 ) {
    imageSize = 80;
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2 
  }

  return (
    <View style={styles.rootContainer}>
      <Title>Game Over!</Title>
      <View style={[styles.imageContainer, imageStyle]}>
        <Image source={require(success)} style={styles.imageStyle} />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.hightLight}>{roundsNumber}</Text> rounds to guess the number{' '}<Text style={styles.hightLight}>{userNumber}</Text>
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
};


const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    gap: 20
  },
  imageContainer: {
    // width: deviceWidth < 380 ? 150 : 300,
    // height: deviceWidth < 380 ? 150 : 300,
    // borderRadius: 150,
    borderWidth: 4,
    borderColor: Colors.blue,
    overflow: 'hidden'
  },
  imageStyle: {
    width: '100%',
    height: '100%',
  },
  summaryText: {
    fontFamily: 'Montserrat-SemiBoldItalic',
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 10
  },
  hightLight: {
    fontFamily: 'Montserrat-ExtraBoldItalic',
    color: Colors.blue
  }
});

export default GameOverScreen;
