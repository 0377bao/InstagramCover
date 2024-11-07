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
                        image: 'https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-6/465790052_874791554817935_2691514773587584132_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Miy1lyj6oiQQ7kNvgG0BVAE&_nc_zt=23&_nc_ht=scontent.fsgn5-10.fna&_nc_gid=AYlv0Id4N_Rz9ennHGcqGNX&oh=00_AYAMIYECuZakS2uaUexXf8TLKiIl4q5q7X-f0VvjhuSneA&oe=67325EF0',
                    }}
                    openStory={openStory}
                />
                {list.map((item, index) => (
                    <StoryItem key={index} data={item} openStory={openStory} />
                ))}
            </ScrollView>
        </View>
    );
}
