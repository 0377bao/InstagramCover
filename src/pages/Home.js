import { View, Text, Button, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Home({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Text>Home</Text>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('Notification');
                }}
                style={{
                    backgroundColor: 'red',
                    padding: 10,
                }}
            >
                <Text>Notification</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}
