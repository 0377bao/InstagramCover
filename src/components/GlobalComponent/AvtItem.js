import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { PlusIconBlue } from '../icons/icons';
import { themeLight } from '../../cssComponents/ColorTheme';
import { LinearGradient } from 'expo-linear-gradient';
const theme = themeLight;

export default function AvtItem({ image, isSeen = false, idStory, isUser = false, isUrl }) {
    return (
        <View
            style={{
                alignItems: 'center',
                width: '100%',
            }}
        >
            <LinearGradient
                colors={isSeen ? ['#888', '#999'] : ['#D300C5', '#FF2F40', '#FFC600']}
                style={{
                    width: 86,
                    height: 86,
                    padding: isSeen ? 1 : 3,
                    borderRadius: 50,
                }}
                start={{ x: 1, y: 0 }}
                end={{ x: 0, y: 1 }}
            >
                <View
                    style={{
                        position: 'relative',
                        borderRadius: 50,
                        borderColor: theme.textReverse,
                        borderWidth: isSeen ? 0 : 3,
                        borderStyle: 'solid',
                    }}
                >
                    {isUrl ? (
                        <Image
                            style={{
                                width: '100%',
                                height: '100%',
                                borderRadius: 99,
                            }}
                            source={{ uri: image }}
                        />
                    ) : (
                        <Image
                            style={{
                                width: '100%',
                                height: '100%',
                                borderRadius: 99,
                            }}
                            source={image}
                        />
                    )}
                </View>
            </LinearGradient>
            {isUser && (
                <View
                    style={{
                        position: 'absolute',
                        right: 0,
                        bottom: 0,
                        borderWidth: 3,
                        borderStyle: 'solid',
                        borderColor: theme.textReverse,
                        borderRadius: 99,
                        backgroundColor: 'white',
                    }}
                >
                    <PlusIconBlue width={25} height={25} />
                </View>
            )}
        </View>
    );
}
