import React, {useState} from 'react';
import {ImageBackground, SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
//Custom Imports
import StartGameScreen from './Screens/StartGameScreen';
import GameScreen from './Screens/GameScreen';
import GameOverScreen from './Screens/GameOverScreen';
import Colors from './Constants/colors';

const bgImage = './assets/images/dice.jpg';
const App = () => {

  
  const [userNumber, setUserNumber] = useState(null);
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0)

  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }
  const gameOverHandler = (numberOfRounds) => {
    setGameIsOver(true);
    setGuessRounds(numberOfRounds);
  }
  const startNewGameHandler = () => {
    setUserNumber(null);
    setGuessRounds(0)
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />
  
  if(userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />;
  }

  if(gameIsOver && userNumber) {
    screen = <GameOverScreen userNumber={userNumber} roundsNumber={guessRounds} onStartNewGame={startNewGameHandler} /> 
  }

  return (
    <>
    <StatusBar barStyle='light-content' />
    <ImageBackground source={require(bgImage)} style={styles.container} resizeMode='cover' imageStyle={styles.backgroundImage}>
       <LinearGradient
        colors={[Colors.blueGradient, Colors.lightGrayGrdient]}
        style={styles.gradient}
      >
      <SafeAreaView style={styles.safeArea}>{screen}</SafeAreaView>
      </LinearGradient>
    </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
  },
  backgroundImage: {
    opacity: 1
  },
  safeArea: {
    flex: 1
  }
});

export default App;
