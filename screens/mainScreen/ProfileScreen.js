import react from "react";
import {
    View,
    Text,
    StyleSheet,
} from "react-native";


export default ProfileScreen = () => {
    return (
        <View style={s.container}>
            <Text>ProfileScreen</Text>
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