import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabBar from './src/components/GlobalComponent/TabBar';
import Notification from './src/pages/Notification';
import Research from './src/pages/Research';
import LoginScreen from './src/pages/login';
import { Provider } from 'react-redux';
import store from './src/app/store';
const Stack = createStackNavigator();

export default function App() {
    return (
        // <View style={styles.container}>
        //   <Text>Open up App.js to start working on your app!</Text>
        //   <StatusBar style="auto" />
        // </View>
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="Main" component={TabBar} options={{ headerShown: false }} />
                    <Stack.Screen name="Notification" component={Notification} options={{ headerShown: false }} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
        // <Research />
    );
}
