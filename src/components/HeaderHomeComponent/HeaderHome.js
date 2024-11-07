import { View, Text } from 'react-native';
import React from 'react';
import { InstagramIcon } from '../../components/icons/icons';
import { themeLight } from '../../cssComponents/ColorTheme';
import MessHeader from './MessHeader';
import NotifyHeader from './NotifyHeader';
const theme = themeLight;

export default function HeaderHome() {
    return (
        <View
            name="headerHome"
            style={{
                paddingHorizontal: 16,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                height: 50,
                // borderBottomWidth: 1,
                // borderBottomColor: theme.border,
                // borderBottomStyle: 'solid',
            }}
        >
            <InstagramIcon color={theme.text} />
            <View
                style={{
                    flexDirection: 'row',
                }}
            >
                <NotifyHeader />
                <MessHeader numMess={7} />
            </View>
        </View>
    );
}
