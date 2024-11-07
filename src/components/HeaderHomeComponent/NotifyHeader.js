import { View, Text } from 'react-native';
import React from 'react';
import { HeartIcon } from '../icons/icons';
import { themeLight } from '../../cssComponents/ColorTheme';
const theme = themeLight;

export default function NotifyHeader() {
    return (
        <View style={{ padding: 12 }}>
            <HeartIcon color={theme.text} />
        </View>
    );
}
