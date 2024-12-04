import {
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import React, { useState } from "react";

import Ionicons from "react-native-vector-icons/Ionicons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
    const navigation = useNavigation();
    const [secureEntery, setSecureEntery] = useState(true);


    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.headingText}>Hey,</Text>
                <Text style={styles.headingText}>Welcome</Text>
                <Text style={styles.headingText}>Back</Text>
            </View>
            <View style={styles.formContainer}>
                <View style={styles.inputContainer}>
                    <Ionicons name={"mail-outline"} size={30} color={'#AEB5BB'} />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Enter your email"
                        placeholderTextColor={'#AEB5BB'}
                        keyboardType="email-address"
                    />
                </View>
                <View style={styles.inputContainer}>
                    <SimpleLineIcons name={"lock"} size={30} color={'#AEB5BB'} />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Enter your password"
                        placeholderTextColor={'#AEB5BB'}
                        secureTextEntry={secureEntery}
                    />
                    <TouchableOpacity
                        onPress={() => {
                            setSecureEntery((prev) => !prev);
                        }}
                    >
                        <SimpleLineIcons name={"eye"} size={20} color={'#AEB5BB'} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity>
                    <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.loginButtonWrapper}>
                    <Text style={styles.loginText}>Login</Text>
                </TouchableOpacity>
                <Text style={styles.continueText}>or continue with</Text>
                <TouchableOpacity style={styles.googleButtonContainer}>
                    <Image
                        source={require("../..assets/images/google.png")}
                        style={styles.googleImage}
                    />
                    <Text style={styles.googleText}>Google</Text>
                </TouchableOpacity>
                <View style={styles.footerContainer}>
                    <Text style={styles.accountText}>Don’t have an account?</Text>
                    <TouchableOpacity>
                        <Text style={styles.signupText}>Sign up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        padding: 20,
    },
    backButtonWrapper: {
        height: 40,
        width: 40,
        backgroundColor: '#AEB5BB',
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    textContainer: {
        marginVertical: 20,
    },
    headingText: {
        fontSize: 32,
        color: '#45484A',
        fontFamily: 'Poppins-SemiBold',
    },
    formContainer: {
        marginTop: 20,
    },
    inputContainer: {
        borderWidth: 1,
        borderColor: '#AEB5BB',
        borderRadius: 100,
        paddingHorizontal: 20,
        flexDirection: "row",
        alignItems: "center",
        padding: 2,
        marginVertical: 10,
    },
    textInput: {
        flex: 1,
        paddingHorizontal: 10,
        fontFamily: 'Poppins-Light',
    },
    forgotPasswordText: {
        textAlign: "right",
        color: '#45484A',
        fontFamily: 'Poppins-SemiBold',
        marginVertical: 10,
    },
    loginButtonWrapper: {
        backgroundColor: '#45484A',
        borderRadius: 100,
        marginTop: 20,
    },
    loginText: {
        color: '#FFFFFF',
        fontSize: 20,
        fontFamily: 'Poppins-SemiBold',
        textAlign: "center",
        padding: 10,
    },
    continueText: {
        textAlign: "center",
        marginVertical: 20,
        fontSize: 14,
        fontFamily: 'Poppins-Light',
        color: '#45484A',
    },
    googleButtonContainer: {
        flexDirection: "row",
        borderWidth: 2,
        borderColor: '#45484A',
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        gap: 10,
    },
    googleImage: {
        height: 20,
        width: 20,
    },
    googleText: {
        fontSize: 20,
        fontFamily: 'Poppins-SemiBold',
    },
    footerContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 20,
        gap: 5,
    },
    accountText: {
        color: '#45484A',
        fontFamily: 'Poppins-Light',
    },
    signupText: {
        color: '#45484A',
        fontFamily: 'Poppins-Bold',
    },
});