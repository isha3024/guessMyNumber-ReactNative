import {useState, useEffect} from 'react';
import {View, FlatList, StyleSheet, Alert, useWindowDimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

//Custom imports
import NumberContainer from '../Components/Game/NumberContainer';
import Title from '../Components/UI/Title';
import Colors from '../Constants/colors';
import PrimaryButton from '../Components/UI/PrimaryButton';
import Card from '../Components/UI/Card';
import InstructionText from '../Components/UI/InstructionText';
import GuessLogItem from '../Components/Game/GuessLogItem';

const generateRandomBetween = (min, max, exclude) => {
  const rndNum = Math.floor(Math.random() * (max - min + 1) + min);
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

let minBoundary = 1,
  maxBoundary = 100;
const GameScreen = ({userNumber, onGameOver}) => {
  const initalGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initalGuess);
  const [guessRounds, setGuessRounds] = useState([initalGuess]);
  const guessRoundsListLength = guessRounds.length; 

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, userNumber, onGameOver]);
  useEffect(() => {
    (minBoundary = 1), (maxBoundary = 100);
  }, []);

  const nextGuesshandler = direction => {
    //direction => 'lower' ?? 'higher
    if (
      (direction === 'lower' && currentGuess < userNumber) ||
      (direction === 'greater' && currentGuess > userNumber)
    ) {
      Alert.alert('Dont lie!!', 'You know that this is wrong...', [
        {text: 'Sorry', style: 'cancel'},
      ]);
    }
    if (direction === 'lower') {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess,
    );
    setCurrentGuess(newRndNumber);
    setGuessRounds(prevGuessRounds => [newRndNumber, ...prevGuessRounds]);
  };

  let content = (
    <>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText>Higher or Lower?</InstructionText>
        <View style={styles.buttonView}>
          <View style={styles.button}>
            <PrimaryButton onPress={nextGuesshandler.bind(this, 'lower')}>
              <Icon name="minus" size={20} color={Colors.yellow} />
            </PrimaryButton>
          </View>
          <View style={styles.button}>
            <PrimaryButton onPress={nextGuesshandler.bind(this, 'greater')}>
              <Icon name="plus" size={20} color={Colors.yellow} />
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </>);

    const {width} = useWindowDimensions();
    if(width > 500) {
      content = (
        <>
          <InstructionText>Higher or Lower?</InstructionText>
          <View style={styles.buttonViewWide}>
            <View style={styles.button}>
              <PrimaryButton onPress={nextGuesshandler.bind(this, 'lower')}>
                <Icon name="minus" size={20} color={Colors.yellow} />
              </PrimaryButton>
            </View>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View style={styles.button}>
              <PrimaryButton onPress={nextGuesshandler.bind(this, 'greater')}>
                <Icon name="plus" size={20} color={Colors.yellow} />
              </PrimaryButton>
            </View>
          </View>
        </>
      );
    }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Game</Title>
      {content}
      <View style={styles.listContainer}>
        <FlatList
          style={styles.flatList}
          data={guessRounds}
          renderItem={itemData => (
            <GuessLogItem
              roundNumber={guessRoundsListLength - itemData.index}
              guess={itemData.item}
            />
          )}
          keyExtractor={item => item}
          contentContainerStyle={styles.contentContainer}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 24,
    paddingBottom: 5,
    flex: 1,
    alignItems: 'center'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.blue,
    textAlign: 'center',
    paddingVertical: 12,
    borderColor: Colors.blue,
    borderWidth: 2,
  },
  buttonView: {
    flexDirection: 'row',
  },
  buttonViewWide: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  button: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
    paddingTop: 16
  }
});

export default GameScreen;
