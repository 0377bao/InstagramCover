import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import ReelItem from './ReelItem';


const ReelsComponent = ({ route }) => {
    const routeName = route.name;
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleChangeIndexValue = ({ index }) => {
        setCurrentIndex(index);
    };
    videoData = [
        {
            video: require('../../../assets/videos/video1.mp4'),
            postProfile: require('../../../assets/images/post1.jpg'),
            title: 'Ram_Charan',
            description: 'Feel the buity of nature',
            likes: '245k',
            isLike: false,
        },
        {
            video: require('../../../assets/videos/video2.mp4'),
            postProfile: require('../../../assets/images/post2.jpg'),
            title: 'The_Groot',
            description: "It's a tea time",
            likes: '656k',
            isLike: false,
        },
        {
            video: require('../../../assets/videos/video3.mp4'),
            postProfile: require('../../../assets/images/post3.jpg'),
            title: 'loverland',
            description: 'Feel the buity of nature',
            likes: '243k',
            isLike: false,
        },
        {
            video: require('../../../assets/videos/video4.mp4'),
            postProfile: require('../../../assets/images/post4.jpg'),
            title: 'mr. bean',
            description: 'How cute it is !!',
            likes: '876k',
            isLike: false,
        },
    ];
    return (
        <SwiperFlatList
            vertical={true}
            onChangeIndex={handleChangeIndexValue}
            data={videoData}
            renderItem={({ item, index }) => (
                <ReelItem item={item} index={index} currentIndex={currentIndex} routeName={routeName} />
            )}
            keyExtractor={(item, index) => index}
        />
    );
};

export default ReelsComponent;