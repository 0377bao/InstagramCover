import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import StoryItem from './StoryItem';
import { useSelector } from 'react-redux';

export default function StoryHome({ author, list, openStory }) {
    const account = useSelector((state) => state.account.information);
    return (
        <View
            style={{
                flexDirection: 'row',
                marginTop: 5,
            }}
        >
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <StoryItem
                    isUser={true}
                    data={{
                        name: 'Tin của bạn',
                        image: account.avt,
                    }}
                    openStory={openStory}
                />
                {list.map((item, index) => (
                    <StoryItem isUrl={false} key={index} data={item} openStory={openStory} />
                ))}
            </ScrollView>
        </View>
    );
}
