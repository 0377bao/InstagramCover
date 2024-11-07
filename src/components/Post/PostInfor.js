import { View, Text, Image } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { themeLight } from '../../cssComponents/ColorTheme';
import { EclipseIcon, StickIcon } from '../icons/icons';

const theme = themeLight;

export default function PostInfor({ isSeen = false, isUrl = true, image, name, isStick }) {
    return (
        <View
            style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}
        >
            <View
                style={{
                    flexDirection: 'row',
                    // justifyContent: 'space-between',
                    alignItems: 'center',
                    flex: 1,
                }}
            >
                <LinearGradient
                    colors={isSeen ? ['#888', '#999'] : ['#D300C5', '#FF2F40', '#FFC600']}
                    style={{
                        width: 50,
                        height: 50,
                        padding: isSeen ? 1 : 2,
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
                            borderWidth: isSeen ? 0 : 2,
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
                                source={{ url: image }}
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
                <Text style={{ marginLeft: 10, marginRight: 5, fontSize: 14, fontWeight: 'bold' }}>{name}</Text>
                {isStick && <StickIcon width={14} height={14} />}
            </View>
            <EclipseIcon color={theme.text} />
        </View>
    );
}
