import react from "react";
import {
    View,
    Text,
    StyleSheet,
} from "react-native";


export default PostsScreen = () => {
    return (
        <View style={s.container}>
            <Text>PostsScreen</Text>
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

