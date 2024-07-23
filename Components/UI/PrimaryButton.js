import {View, Text, Pressable, StyleSheet, Platform} from 'react-native';
import Colors from '../../Constants/colors';
const PrimaryButton = ({children, onPress}) => {
  
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={onPress}
        android_ripple={{color: Colors.lightGray}} 
        style={styles.buttonInnerContainer}>
        <Text style={styles.buttoText}>{children}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create ({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden'
  },
  buttonInnerContainer: {
    backgroundColor: Colors.purple,    
    paddingVertical: 8,
    paddingHorizontal: 16,
    ...Platform.select({
      android: {
        elevation: 10
      },
      ios: {
        shadowColor: Colors.yellow,
        shadowOffset: {
          width: 0, 
          height: 2,
        },
        shadowRadius: 3
      }
    })
  },
  buttoText: {
    color: Colors.yellow,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  pressed: {
    opacity: 0.75
  }
})

export default PrimaryButton;
