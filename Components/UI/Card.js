import {View, StyleSheet, Dimensions} from 'react-native'
import Colors from '../../Constants/colors'
const Card = ({children}) => {
  
    return (
        <View style={styles.card}>{children}</View>
    )
}


const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    card: {
      marginTop: deviceWidth < 450 ? 18 : 34,
      marginHorizontal: 20,
      padding: deviceWidth < 450 ? 16 : 22,
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
    }
})

export default Card;