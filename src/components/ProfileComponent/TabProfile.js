import React from 'react';
import { View, Text, ScrollView, Image, Dimensions } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Ionic from 'react-native-vector-icons/Ionicons';
import { useSelector } from 'react-redux';

const TabProfile = () => {
    const Tab = createMaterialTopTabNavigator();
    const account = useSelector((state) => state.account.information);

    const widthWindow = Dimensions.get('window').width;

    let squares = [];


    for (let index = 0; index < account.posts.length; index++) {
        squares.push(
            <View key={index} style={{
                width: widthWindow * 0.33333333,
            }}>
                <View
                    style={{
                        width: "100%",
                        height: 150,
                        padding: 3,
                        backgroundColor: 'white',
                    }}>
                    <Image source={{ uri: account.posts[index].image[0] }} style={{ with: "100%", height: "100%" }} />
                </View>
            </View>,
        );
    }

    const Posts = () => {
        return (
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{
                    width: '100%',
                    height: '100%',
                }}>
                <View
                    style={{
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'white',
                        flexWrap: 'wrap',
                        flexDirection: 'row',
                        paddingVertical: 5,
                    }}>
                    {squares}
                </View>
            </ScrollView>
        );
    };
    const Video = () => {
        return (
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{
                    width: '100%',
                    height: '100%',
                }}>
                <View
                    style={{
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'white',
                        flexWrap: 'wrap',
                        flexDirection: 'row',
                        paddingVertical: 5,
                        justifyContent: 'space-between',
                    }}>
                    {squares}
                </View>
            </ScrollView>
        );
    };
    const Tags = () => {
        return (
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{
                    width: '100%',
                    height: '100%',
                }}>
                <View
                    style={{
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'white',
                        flexWrap: 'wrap',
                        flexDirection: 'row',
                        paddingVertical: 5,
                        justifyContent: 'space-between',
                    }}>
                    {squares}
                </View>
            </ScrollView>
        );
    };

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarShowLabel: false,
                tabBarIndicatorStyle: {
                    backgroundColor: 'black',
                    height: 1.5,
                },
                tabBarIcon: ({ focused, colour }) => {
                    let iconName;
                    if (route.name === 'Posts') {
                        iconName = focused ? 'apps' : 'apps';
                        colour = focused ? 'black' : 'gray';
                    } else if (route.name === 'Video') {
                        iconName = focused ? 'play-circle' : 'play-circle-outline';
                        colour = focused ? 'black' : 'gray';
                    } else if (route.name === 'Tags') {
                        iconName = focused ? 'person' : 'person-outline';
                        colour = focused ? 'black' : 'gray';
                    }


                    return <Ionic name={iconName} color={colour} size={22} />;
                },
            })}>
            <Tab.Screen name="Posts" component={Posts} />
            <Tab.Screen name="Video" component={Video} />
            <Tab.Screen name="Tags" component={Tags} />
        </Tab.Navigator>
    );
};

export default TabProfile;