import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import StoryItem from './StoryItem';

export default function StoryHome({ author, list, openStory }) {
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
                        image: require("../../../assets/images/post1.jpg"),
                    }}
                    isUrl={false}
                    openStory={openStory}
                />
                {list.map((item, index) => (
                    <StoryItem isUrl={false} key={index} data={item} openStory={openStory} />
                ))}
            </ScrollView>
        </View>
    );
}
