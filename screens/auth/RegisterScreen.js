import React, {useState} from "react";
import { 
    StyleSheet,
    View, 
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
    Platform,
    ScrollView,
    Button,
    ImageBackground,
} from "react-native";

const initialState ={
    login: "",
    email: "",
    password: ""
}


export default function RegisterScreen({navigation}) {
    const [state, setState] = useState(initialState)
    console.log(Platform.OS)
    console.log(state)

    const infoDataServ = () => {
        Keyboard.dismiss()
        console.log(state)
        setState(initialState)
      }

    return (

        <ImageBackground source={require('./../../assets/images/background.png')} style={styles.image}>
            <ScrollView 
                style={styles.viewBoxScroll} 
                automaticallyAdjustKeyboardInsets={true}>
        <TouchableWithoutFeedback
            onPress={Keyboard.dismiss}>

                <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.container}
            >


        <View style={styles.viewBox}>

            <View style={styles.viewBoxPhoto}>
            <Image 
                style={styles.viewBoxIcon}
                source={require('./../../assets/icons/add.png')} />
            </View>

            <Text style={styles.headerTitle}>Регистрация</Text>
            
            <TextInput
            style={styles.input}
            placeholder="Логин"
            value={state.login}
            onChangeText={(value) => setState((prevState) => ({...prevState, login: value}))}
            />

            <TextInput
            style={styles.input}
            placeholder="Адрес электронной почты"
            value={state.email}
            onChangeText={(value) => setState((prevState) => ({...prevState, email: value}))}
            />

            <TextInput
            style={styles.input}
            placeholder="Пароль"
            value={state.password}
            onChangeText={(value) => setState((prevState) => ({...prevState, password: value}))}
            secureTextEntry={true}
            autoCorrect={false}
            />

            <TouchableOpacity 
                activeOpacity={0.8} 
                style={styles.btn}
                onPress={infoDataServ}                
                >
                <Text style={styles.btnTitle}>Зарегистрироваться</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                activeOpacity={0.8} 
                style={styles.btnGo}
                onPress={ ()  => navigation.navigate("Login")}                
                >
                <Text 
                    style={styles.btnGoRegister}>
                        Уже есть аккаунт? Войти
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
    viewBoxPhoto:{
        width: 120,
        height: 120,
        backgroundColor: "#F6F6F6",
        marginTop: -60,
        borderRadius: 16,
    },

    viewBoxIcon:{
        // position: "absolute",
        marginLeft: 107,
        marginTop: 81,
    },  

    viewBox:{
        // position: "relative",
        width: 375,
        height: 489,
        left: 0,
        // marginTop: 203,
        backgroundColor : "#FFFFFF",
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        alignItems: "center",
    },

    headerTitle:{
        marginTop: 30,
        marginBottom: 17,
        fontFamily: "Roboto-Regular",
        fontSize: 30,
        lineHeight: 35,
        fontStyle: "normal",
        color: "#212121"
    },

    input:{
        borderWidth: 1,
        borderColor: "#E8E8E8",
        fontFamily: "Roboto-Regular",
        width: 343,
        height: 50,
        borderRadius: 8,
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
        fontFamily: "Roboto-Regular",
        fontStyle: "normal",
        color: "#ffffff",
        // fontFamily: "Roboto-Regular",
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
        fontFamily: "Roboto-Regular",
        fontStyle: "normal",
        color: "#1B4371",
        fontStyle: "normal",

    },


  });
