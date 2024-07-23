import { Text, StyleSheet, Dimensions } from "react-native";

//custom imports
import Colors from "../../Constants/colors";
const InstructionText = ({children, style}) => {
    return <Text style={[style, styles.instructionText]}>{children}</Text>
}

const deviceWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    instructionText: {
        fontSize: deviceWidth < 450 ? 22 : 26,
        color: Colors.lightGray
    }
})

export default InstructionText;