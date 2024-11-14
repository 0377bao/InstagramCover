import { View, Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProfileContext from '../contexts/ProfileContext';
export default function Profile({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ProfileContext />
        </SafeAreaView>
    );
}
