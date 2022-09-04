import react from "react";
import {
    View,
    Text,
    StyleSheet,
} from "react-native";


export default CreateScreen = () => {
    return (
        <View style={s.container}>
            <Text>CreateScreen</Text>
        </View>
    );
}


const s = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
})