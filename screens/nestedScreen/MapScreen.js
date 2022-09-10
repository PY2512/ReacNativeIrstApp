import react from "react";
import { 
    View,
    StyleSheet,
    Marker
 } from 'react-native';
import MapView from "react-native-maps";




export default MapScreen = () => {
    return (
        <View style={s.container}>
            <MapView 
                style={s.map}
                initialRegion={{longitude: "", latitude: "", latitudeDelta: "", longitudeDelta: ""}}
                >
                    {/* <Marker 
                        coordinate={{longitude: "", latitude: "",}}
                        title={'photoo'}/> */}
            </MapView>
        </View>
    );
}


const s = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        // alignItems: "center",
    },
    map: {
        flex: 1,
    },
});
