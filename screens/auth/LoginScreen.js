import React, {useState} from "react";

import { 
    StyleSheet,
    View, 
    Text,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
    Platform,
    ScrollView,
    ImageBackground,
} from "react-native";

const initialState ={
    email: "",
    password: ""
}



export default function LoginScreen({navigation}) {
    const [state, setState] = useState(initialState)
    console.log(Platform.OS)
    console.log(state)
    
    const infoDataServ = () => {
        console.log(state)
        setState(initialState)
        Keyboard.dismiss()
      }
    
      return (
        <ImageBackground source={require('./../../assets/images/background.png')} style={styles.image}>

            <ScrollView style={styles.viewBoxScroll}>
        <TouchableWithoutFeedback
        onPress={Keyboard.dismiss}>

        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >

            <View style={styles.viewBox}>
                <Text style={styles.headerTitle}>Войти</Text>
                
                <TextInput
                style={styles.input}
                placeholder="Адрес электронной почты"
                value={state.email}
                onChangeText={(value) => setState((prevState) => ({...prevState, email: value}))}
                />

                <TextInput
                style={styles.input}
                placeholder="Пароль"
                secureTextEntry={true}
                value={state.password}
                onChangeText={(value) => setState((prevState) => ({...prevState, password: value}))}
                autoCorrect={false}
                />
                <Text></Text>

                <TouchableOpacity 
                    activeOpacity={0.8} 
                    style={styles.btn}
                    onPress={infoDataServ}                
                    >
                    <Text style={styles.btnTitle}>ВОЙТИ</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    activeOpacity={0.8} 
                    style={styles.btnGo}
                    onPress={()  => navigation.navigate("Register")} 
                    >
                    <Text  
                        style={styles.btnGoRegister}>
                            Нет аккаунта? Зарегистрироваться
                    </Text>
                </TouchableOpacity>

            </View>
            </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
         </ScrollView>
        </ImageBackground> 

    )
};


const styles = StyleSheet.create({
    viewBoxScroll:{
        flex: 1,
        flexDirection: "column-reverse"
    },
    image:{
        flex: 1,
        resizeMode: "cover",
        justifyContent: "flex-end",
        width: 375,
        height: 812,
    },
    viewBox:{
        flex: 1,
        position: "relative",
        width: 375,
        height: 489,
        left: 0,
        // top: 303,
        backgroundColor : "#FFFFFF",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        alignItems: "center",
    },

    headerTitle:{
        paddingTop: 30,
        paddingBottom: 17,
        fontFamily: "Roboto-Regular",
        fontSize: 30,
        lineHeight: 35,
        fontStyle: "normal",
        color: "#212121"
    },

    input:{
        borderWidth: 1,
        borderColor: "#E8E8E8",
        width: 343,
        height: 50,
        borderRadius: 8,
        fontFamily: "Roboto-Regular",
        backgroundColor: "#E8E8E8",
        marginTop: 16,
        paddingLeft: 16,
        fontSize: 14,
        lineHeight:19,
        fontStyle: "normal",
        color: "#BDBDBD"
    },

    btn:{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: 343,
        height: 51,
        backgroundColor: "#FF6C00",
        borderRadius: 100,
        marginTop: 43,
    },

    btnTitle:{
        fontSize: 14,
        lineHeight:19,
        fontStyle: "normal",
        color: "#ffffff",
        fontFamily: "Roboto-Regular",
    },
    
    btnGo:{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 16,
        width: 356,
        height: 19,
        
    },
    
    btnGoRegister:{
        fontSize: 16,
        lineHeight:19,
        fontStyle: "normal",
        color: "#1B4371",
        fontStyle: "normal",

    },
    container: {
        flex: 1,
        
      }
  });
