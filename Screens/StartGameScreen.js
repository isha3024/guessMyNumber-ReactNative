import React, { useState } from 'react';
import {
  View, 
  TextInput, 
  StyleSheet, 
  Alert, 
  Platform, 
  useWindowDimensions,
  KeyboardAvoidingView
} from 'react-native';

//Custom imports
import PrimaryButton from '../Components/UI/PrimaryButton';
import Colors from '../Constants/colors';
import Title from '../Components/UI/Title';
import Card from '../Components/UI/Card';
import InstructionText from '../Components/UI/InstructionText';

const StartGameScreen = ({onPickNumber}) => {

  const { width, height } = useWindowDimensions();
  const [enteredNumber, setEnteredNumber] = useState('');

  const resetInputHandler = () => {
    setEnteredNumber('')
  }
  const numberInputHandler = (enteredText) => {
    setEnteredNumber(enteredText);
  }

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber);
    if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        'Invalid Number!', 
        'Number has to be a number between 1 and 99', 
        [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}]
      );
      return;
    }
    onPickNumber(chosenNumber);
  }

  const marginTopDistance = height < 430 ? 30 : 100;
  
  return (
    <KeyboardAvoidingView style={styles.screen}>
      <View style={[styles.rootContainer, {marginTop: marginTopDistance}]}>
        <Title>Guess My Number</Title>
        <Card style={styles.inputContainer}>
          <InstructionText style={styles.instructionText}>
            Enter a Number
          </InstructionText>
          <TextInput
            style={styles.numberInput}
            maxLength={2}
            keyboardType="numeric"
            onChangeText={numberInputHandler}
            value={enteredNumber}
          />
          <View style={styles.buttonView}>
            <View style={styles.button}>
              <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
            </View>
            <View style={styles.button}>
              <PrimaryButton onPress={confirmInputHandler}>
                Confirm
              </PrimaryButton>
            </View>
          </View>
        </Card>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  rootContainer: {
    flex: 1,
    alignItems: 'center'
  },
  inputContainer: {
    marginTop: 36,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.blue,
    borderRadius: 8,
    ...Platform.select({
      android: {
        elevation: 20
      },
      ios: {
        shadowColor: Colors.purple,
        shadowOffset: { 
          width: 0, 
          height: 2 
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      }
    }),
    alignItems: 'center',
    gap: 20
  },
  instructionText: {
    marginBottom: 5
  },
  numberInput: {
    height: 55,
    width: 50,
    textAlign: 'center',
    borderBottomColor: Colors.yellow,
    borderBottomWidth: 2,
    fontSize: 32,
    fontWeight: 'bold',
    color: Colors.yellow,
  },
  buttonView: {
    flexDirection: 'row',
  },
  button: {
    flex: 1
  }
});

export default StartGameScreen;
