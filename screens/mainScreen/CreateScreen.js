import react, { useState } from "react";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import * as Location from 'expo-location';

import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
} from "react-native";
import { Camera, CameraType } from "expo-camera"

export default CreateScreen = ({navigation}) => {
const [type, setType] = useState(CameraType.back);
const [camera, setCamera] = useState(null)
const [photo, setPhoto] = useState(null)
// const [location, setLocation] = useState(null);


// Код с запросом для доступа к камере
// const [permission, requestPermission] = Camera.useCameraPermissions();
// if (!permission) {
//     // Camera permissions are still loading
//     return <View />;
//   }
  
//   if (!permission.granted) {
//     // Camera permissions are not granted yet
//     return (
//       <View style={s.container}>
//         <Text style={{ textAlign: 'center' }}>
//           We need your permission to show the camera
//         </Text>
//         <Button onPress={requestPermission} title="grant permission" />
//       </View>
//     );
//   }

const takePhoto = async () => {
    // console.log(camera.takePictureAsync())
    const photo = await camera.takePictureAsync();
    // const location = await Location.getCurrentPositionAsync();
    // console.log("location", location);
    setPhoto(photo.uri)
} 

const sendPhoto = () => {
    navigation.navigate("DefaultScreen", {photo})
}

function toggleCameraType() {
    setType((current) => (
      current === CameraType.back ? CameraType.front : CameraType.back
    ));
  } 

    return (
        <View style={s.container}>
            <Camera 
                ref={setCamera}
                style={s.camera}
                type={type}
                >
                    <View style={s.buttonContainer}>
                    <View style={s.takePhotoContainer}>
                        
                    {photo &&     
                        <View>
                            <View>
                        <TouchableOpacity 
                            style={s.btnSaveContainer}
                            onPress={sendPhoto}>
                            <MaterialCommunityIcons name="share-outline" size={54} color="blue" />
                        </TouchableOpacity>
                        </View>
                            <Image 
                                style={s.takePhotoImg}
                                source={{uri: photo}}
                            />
                        </View>}
                    </View>
                <TouchableOpacity 
                    style={s.snapContainer}
                    onPress={takePhoto}>
                        <Ionicons name="ios-camera-outline" size={45} color="#fff" />
                </TouchableOpacity>
                        <TouchableOpacity
                            style={s.button}
                            onPress={toggleCameraType}>
                            <Ionicons name="ios-camera-reverse-outline" size={40} color="#fff" />
                        </TouchableOpacity>
                        </View>
            </Camera>
            <View>
            
            </View>
        </View>
    );
}


const s = StyleSheet.create({
    container: {
        flex: 1,
    },
    camera:{
        flex: 1,
        justifyContent: 'flex-end',
    },
    snapContainer: {
        marginRight: 10,
        borderWidth: 3,
        borderColor: "#ff0000",
        width: 90,
        height: 50,
        borderRadius: 50,
        alignSelf: 'center',
        justifyContent: "center",
        alignItems: "center",
        marginTop: 35,
    },
    takePhotoContainer:{
        height:129,
        width: 75,
        marginBottom: 5,
    },
    takePhotoImg:{
        height: 75,
        width: 75,
    },
    button: {
        alignSelf: 'center',
        marginTop: 35,
    },
    buttonContainer: {
        marginRight: 10,
        flexDirection: 'row',
        backgroundColor: 'transparent', 
        justifyContent: 'space-around',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
})