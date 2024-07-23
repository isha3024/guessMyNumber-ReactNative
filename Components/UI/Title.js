import { Text, StyleSheet } from 'react-native'
import Colors from '../../Constants/colors'

const Title = ({children}) => {
    return (
        <Text style={styles.title}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        color: Colors.lightGray,
        fontFamily: 'Montserrat-BoldItalic',
        textAlign: 'center',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderColor: Colors.lightGray,
        borderWidth: 2,
        maxWidth: '80%',
        width: 300
    }
})

export default Title;