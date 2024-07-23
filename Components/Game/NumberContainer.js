import { View, Text, StyleSheet, Dimensions } from "react-native";

//Custom imports
import Colors from "../../Constants/colors";

const NumberContainer = ({children}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    )
}

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.blue,
        padding: deviceWidth < 450 ? 12 : 24,
        margin: 20,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    numberText: {
        color: Colors.blue,
        fontSize: deviceWidth < 450 ? 28 : 34,
        fontWeight: 'bold'
    }
})


export default NumberContainer;