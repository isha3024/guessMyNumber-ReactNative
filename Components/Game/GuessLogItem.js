import React from 'react'
import { View, Text, StyleSheet, Platform } from 'react-native'

//custom imports
import Colors from '../../Constants/colors'

const GuessLogItem = ({roundNumber, guess}) => {
  return (
    <View style={styles.listitem}>
      <Text style={styles.itemText}># {roundNumber}</Text>
      <Text style={styles.itemText}>Opponent's Guess: {guess}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    listitem: {
        borderColor: Colors.blue,
        borderWidth: 1,
        borderRadius: 40,
        padding: 15,
        marginBottom: 8,
        backgroundColor: Colors.lightGray,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        ...Platform.select({
            android: {
                elevation: 5
            },
            ios: {
                shadowColor: 'black',
                shadowOffset: {
                    width: 0,
                    height: 0
                },
                shadowOpacity: 0.25,
                shadowRadius: 3
            }
        })
    },
    itemText: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 18,
        color: Colors.blue
    }
})

export default GuessLogItem;