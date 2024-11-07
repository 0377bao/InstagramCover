import { View, Text, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';
import AvtItem from '../GlobalComponent/AvtItem';
import { themeLight } from '../../cssComponents/ColorTheme';

const { width } = Dimensions.get('window');
const theme = themeLight;

export default function StoryItem({ data, isUser, openStory, isUrl = true }) {
    return (
        <TouchableOpacity
            onPress={openStory}
            style={{
                alignItems: 'center',
                width: width * 0.25,
            }}
        >
            <AvtItem isUser={isUser} image={data.image} isUrl={isUrl} />
            <Text style={[{ marginTop: 5, fontSize: 12, textAlign: 'center' }, isUser && { color: theme.textSupport }]}>
                {data.name}
            </Text>
        </TouchableOpacity>
    );
}
