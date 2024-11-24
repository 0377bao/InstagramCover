import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ProfileContext } from '../components/ProfileComponent/ProfileContext';
import Entypo from 'react-native-vector-icons/Entypo';
import TabProfile from '../components/ProfileComponent/TabProfile';
export default function Profile() {
    let circuls = [];
    let numberofcircels = 8;

    for (let index = 0; index < numberofcircels; index++) {
        circuls.push(
            <View key={index}>
                {index === 0 ? (
                    <View
                        style={{
                            width: 60,
                            height: 60,
                            borderRadius: 100,
                            borderWidth: 1,
                            opacity: 0.7,
                            marginHorizontal: 5,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <Entypo name="plus" style={{ fontSize: 40, color: 'black' }} />
                    </View>
                ) : (
                    <View
                        style={{
                            width: 60,
                            height: 60,
                            borderRadius: 100,
                            backgroundColor: 'black',
                            opacity: 0.1,
                            marginHorizontal: 5,
                        }}></View>
                )}
            </View>,
        );
    }
    return (

        <SafeAreaView style={{ width: '100%', height: '100%', backgroundColor: 'white' }}>
            <View>
                <ProfileContext
                    name="Cuoc Ba"
                    accountName="dat_huong"
                    profileImage={require('../../assets/images/avt1.jpg')}
                    followers="3.6M"
                    following="35"
                    post="458"
                />
            </View>
            <View>
                <Text
                    style={{
                        padding: 10,
                        letterSpacing: 1,
                        fontSize: 14,
                    }}>
                    Story Highlights
                </Text>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={{
                        paddingVertical: 5,
                        paddingHorizontal: 10,
                    }}>
                    {circuls}
                </ScrollView>
            </View>
            <TabProfile />
        </SafeAreaView>
    );
}
