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
                        image: 'https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/466419717_876187764678314_281004042329435226_n.jpg?stp=dst-jpg_p526x296&_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHwtfMXBlah_itoihlTtgYcHlK3KNlyitgeUrco2XKK2OlQB6l1yMJ7Pg3d3KZWDhaNzU84CPp5q7qHE7XIVDRb&_nc_ohc=KwPb19-9KDgQ7kNvgGO9Gi3&_nc_zt=23&_nc_ht=scontent.fsgn5-14.fna&_nc_gid=AgrFFUr2KnRtH0OmI1-q6v3&oh=00_AYCi7XN7tu7rDW1PlEjS01O0Ssx-qu7uOTKbhzUwNLVRuQ&oe=6739D839',
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
