import react, {useState, useEffect} from "react";
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Image,
    SafeAreaView,
    TouchableOpacity,
    Button
} from "react-native";


export default DefaultPostsScreen = ({route, navigation}) => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        if(route.params){
            setPosts((prevState) => [...prevState, route.params])

        }
    }, [route.params])
    

    // console.log("route.params", route.params);
    return (
        <SafeAreaView  style={s.container}>
            <FlatList 
                data={posts} 
                keyExtractor={(item, indx) => indx.toString()}
                renderItem={({item}) => 
                    <View style={s.imgContainer}>
                        <Image 
                            source={{uri: item.photo}}
                            style={s.img}
                            />
        <Button title="go to map" onPress={()=> navigation.navigate('Map')}/>
        <Button title="go to comments" onPress={()=> navigation.navigate('Comments')}/>
                    </View>}
                />
        
        </SafeAreaView>

    );
}


const s = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        // alignItems: "center",
    },
    imgContainer:{
        marginBottom: 10,
    },
    img:{
        marginHorizontal: 10,
        height: 200,
        width: 350,
    }
})

