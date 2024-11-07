import { View, Text, Button, TouchableOpacity, ScrollView } from 'react-native';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderHome from '../components/HeaderHomeComponent/HeaderHome';
import StoryHome from '../components/StoryHomeComponent/StoryHome';
import StoryComponent from '../components/StoryDetail/StoryComponent';
import PostItem from '../components/Post/PostItem';
import PostHome from '../components/Post/PostHome';

const listStoryFake = [
    {
        name: 'anhtu305',
        image: 'https://scontent.fsgn5-8.fna.fbcdn.net/v/t39.30808-6/466011843_874792278151196_2355680168781707535_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=tQDtBz2jqrkQ7kNvgF3d4Dr&_nc_zt=23&_nc_ht=scontent.fsgn5-8.fna&_nc_gid=AaJF5fkEMSW0DCBixdiomM6&oh=00_AYAFk9abMgWfjW89HG1pvMjtQMNd9ap77SYkyFGPjefY6A&oe=67323B1A',
    },
    {
        name: 'anhtu306',
        image: 'https://scontent.fsgn5-8.fna.fbcdn.net/v/t39.30808-6/466011843_874792278151196_2355680168781707535_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=tQDtBz2jqrkQ7kNvgF3d4Dr&_nc_zt=23&_nc_ht=scontent.fsgn5-8.fna&_nc_gid=AaJF5fkEMSW0DCBixdiomM6&oh=00_AYAFk9abMgWfjW89HG1pvMjtQMNd9ap77SYkyFGPjefY6A&oe=67323B1A',
    },
    {
        name: 'anhtu307',
        image: 'https://scontent.fsgn5-8.fna.fbcdn.net/v/t39.30808-6/466011843_874792278151196_2355680168781707535_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=tQDtBz2jqrkQ7kNvgF3d4Dr&_nc_zt=23&_nc_ht=scontent.fsgn5-8.fna&_nc_gid=AaJF5fkEMSW0DCBixdiomM6&oh=00_AYAFk9abMgWfjW89HG1pvMjtQMNd9ap77SYkyFGPjefY6A&oe=67323B1A',
    },
    {
        name: 'anhtu308',
        image: 'https://scontent.fsgn5-8.fna.fbcdn.net/v/t39.30808-6/466011843_874792278151196_2355680168781707535_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=tQDtBz2jqrkQ7kNvgF3d4Dr&_nc_zt=23&_nc_ht=scontent.fsgn5-8.fna&_nc_gid=AaJF5fkEMSW0DCBixdiomM6&oh=00_AYAFk9abMgWfjW89HG1pvMjtQMNd9ap77SYkyFGPjefY6A&oe=67323B1A',
    },
    {
        name: 'anhtu309',
        image: 'https://scontent.fsgn5-8.fna.fbcdn.net/v/t39.30808-6/466011843_874792278151196_2355680168781707535_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=tQDtBz2jqrkQ7kNvgF3d4Dr&_nc_zt=23&_nc_ht=scontent.fsgn5-8.fna&_nc_gid=AaJF5fkEMSW0DCBixdiomM6&oh=00_AYAFk9abMgWfjW89HG1pvMjtQMNd9ap77SYkyFGPjefY6A&oe=67323B1A',
    },
];

const stories = [
    {
        type: 'image',
        image: 'https://scontent.fsgn5-8.fna.fbcdn.net/v/t39.30808-6/466011843_874792278151196_2355680168781707535_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=tQDtBz2jqrkQ7kNvgF3d4Dr&_nc_zt=23&_nc_ht=scontent.fsgn5-8.fna&_nc_gid=AaJF5fkEMSW0DCBixdiomM6&oh=00_AYAFk9abMgWfjW89HG1pvMjtQMNd9ap77SYkyFGPjefY6A&oe=67323B1A',
        // image: 'https://z-p4-scontent-sin6-4.cdninstagram.com/v/t39.30808-6/462726276_9391347804215772_348476496840603671_n.jpg?se=7&stp=c0.63.1537.1921a_dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNTM3eDIwNDguc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=z-p4-scontent-sin6-4.cdninstagram.com&_nc_cat=1&_nc_ohc=dknA9ORQCXoQ7kNvgGfHQ-0&_nc_gid=d285367ce8424c4f80f624eed8712c64&edm=APNOSGoAAAAA&ccb=7-5&ig_cache_key=MzQ3NjQ2Njg0Mjc5NjQwNjU4MQ%3D%3D.3-ccb7-5&oh=00_AYDk1CeXV2j78hJr09-FMtEz9JBpA9vJBFb8miQRl6Gdfg&oe=670FDF9F&_nc_sid=ca40e6',
    },
    {
        type: 'image',
        image: 'https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-6/465790052_874791554817935_2691514773587584132_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Miy1lyj6oiQQ7kNvgG0BVAE&_nc_zt=23&_nc_ht=scontent.fsgn5-10.fna&_nc_gid=AYlv0Id4N_Rz9ennHGcqGNX&oh=00_AYAMIYECuZakS2uaUexXf8TLKiIl4q5q7X-f0VvjhuSneA&oe=67325EF0',
        // image: 'https://z-p4-scontent-sin6-2.cdninstagram.com/v/t51.2885-15/461972796_120212520634460390_7431521065066594127_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImFkc19pbWFnZSJ9&_nc_ht=z-p4-scontent-sin6-2.cdninstagram.com&_nc_cat=102&_nc_ohc=j1YggcNJJjgQ7kNvgG5-_Hb&_nc_gid=d285367ce8424c4f80f624eed8712c64&edm=APNOSGoBAAAA&ccb=7-5&oh=00_AYCFpZc4FU_keYPxnp7oEo_brnzXiFsRUtLXR6SzmAQ02A&oe=670FEA63&_nc_sid=ca40e6',
    },
];

export default function Home({ navigation }) {
    const [insideStory, setInsideStory] = useState(false);
    const [showTabBar, setShowTabBar] = useState(true);

    useEffect(() => {
        navigation.setOptions({ tabBarStyle: { display: showTabBar ? 'flex' : 'none' } });
    }, [showTabBar, navigation]);

    const openStory = () => {
        setInsideStory(true);
    };
    const closeStory = () => {
        setInsideStory(false);
    };

    return insideStory ? (
        <StoryComponent setShowTabBar={setShowTabBar} stories={stories} onFinishStory={closeStory} />
    ) : (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <View>
                <HeaderHome />
                <ScrollView showsVerticalScrollIndicator={false}>
                    <StoryHome openStory={openStory} list={listStoryFake} />
                    <PostHome />
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}
