import { View, Text } from 'react-native';
import React from 'react';
import { MessIcon } from '../icons/icons';
import { themeLight } from '../../cssComponents/ColorTheme';
const theme = themeLight;

export default function MessHeader({ numMess = 0 }) {
    return (
        <View style={{ padding: 12 }}>
            {numMess !== 0 && (
                <View
                    style={{
                        position: 'absolute',
                        right: 4,
                        top: 4,
                        backgroundColor: 'rgb(255, 48, 64)',
                        zIndex: 1,
                        borderRadius: 9,
                        borderWidth: 1,
                        borderColor: theme.textReverse,
                        borderStyle: 'solid',
                    }}
                >
                    <Text
                        style={{
                            height: 18,
                            width: 18,
                            textAlign: 'center',
                            lineHeight: 18,
                            color: 'white',
                            fontSize: 11,
                            fontWeight: 'bold',
                        }}
                    >
                        {numMess}
                    </Text>
                </View>
            )}
            <MessIcon color={theme.text} />
        </View>
    );
}
