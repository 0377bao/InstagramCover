import React, { useState, useRef } from 'react';
import { View, Text, Dimensions, TouchableOpacity, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import { Video } from 'expo-av';
import { useFocusEffect } from '@react-navigation/native';

const ReelItem = ({ item, index, currentIndex, routeName }) => {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    const videoRef = useRef(null);

    const [mute, setMute] = useState(false);

    const [like, setLike] = useState(item.isLike);
    useFocusEffect(
        React.useCallback(() => {
            // Khi component được focus (hiện lên)
            return () => {
                // Khi component bị blur (rời khỏi màn hình)
                if (videoRef.current) {
                    videoRef.current.pauseAsync(); // Tạm dừng video
                }
            };
        }, [])
    );
    return (
        <View
            style={{
                width: windowWidth,
                height: windowHeight,
                position: 'relative',
                justifyContent: 'center',
                alignItems: 'center',

            }}>
            <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => setMute(!mute)}
                style={{
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                }}>
                <Video
                    ref={videoRef}
                    source={item.video}
                    shouldPlay={currentIndex == index}
                    isLooping
                    resizeMode="cover"
                    isMuted={mute}
                    style={{
                        width: '100%',
                        height: '100%',
                        position: 'absolute',
                    }}
                    onError={(error) => console.log("Video Error: ", error)}
                />
            </TouchableOpacity>
            <Ionicons
                name="volume-mute"
                style={{
                    fontSize: 20,
                    zIndex: mute ? 1 : -1,
                    color: 'white',
                    position: 'absolute',
                    backgroundColor: 'rgba(52,52,52,0.6)',
                    borderRadius: 100,
                    padding: mute ? 20 : 0,
                }}
            />
            <View
                style={{
                    position: 'absolute',
                    width: windowWidth,
                    zIndex: 1,
                    bottom: 0, //edited
                    padding: 10,
                    paddingBottom: 50,
                }}>
                <View style={{}}>
                    <TouchableOpacity style={{ width: 150 }}>
                        <View
                            style={{ width: 100, flexDirection: 'row', alignItems: 'center' }}>
                            <View
                                style={{
                                    width: 32,
                                    height: 32,
                                    borderRadius: 100,
                                    backgroundColor: 'white',
                                    margin: 10,
                                }}>
                                <Image
                                    source={item.postProfile}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        resizeMode: 'cover',
                                        borderRadius: 100,
                                    }}
                                />
                            </View>
                            <Text style={{ color: 'white', fontSize: 16 }}>{item.title}</Text>
                        </View>
                    </TouchableOpacity>
                    <Text style={{ color: 'white', fontSize: 14, marginHorizontal: 10 }}>
                        {item.description}
                    </Text>
                    <View style={{ flexDirection: 'row', padding: 10 }}>
                        <Ionicons
                            name="musical-notes"
                            style={{ color: 'white', fontSize: 16 }}
                        />
                        <Text style={{ color: 'white' }}>Original Audio</Text>
                    </View>
                </View>
            </View>
            <View
                style={{
                    position: 'absolute',
                    bottom: 10, //edited
                    right: 0,
                    paddingBottom: 50
                }}>
                <TouchableOpacity onPress={() => setLike(!like)} style={{ padding: 10 }}>
                    <AntDesign
                        name={like ? 'heart' : 'hearto'}
                        style={{ color: like ? 'red' : 'white', fontSize: 25 }}
                    />
                    <Text style={{ color: 'white' }}>{item.likes}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ padding: 10 }}>
                    <Ionicons
                        name="chatbubble-ellipses-outline"
                        style={{ color: 'white', fontSize: 25 }}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={{ padding: 10 }}>
                    <Ionicons
                        name="paper-plane-outline"
                        style={{ color: 'white', fontSize: 25 }}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={{ padding: 10 }}>
                    <Feather
                        name="more-vertical"
                        style={{ color: 'white', fontSize: 25 }}
                    />
                </TouchableOpacity>
                <View
                    style={{
                        width: 30,
                        height: 30,
                        borderRadius: 10,
                        borderWidth: 2,
                        borderColor: 'white',
                        margin: 10,
                    }}>
                    <Image
                        source={item.postProfile}
                        style={{
                            width: '100%',
                            height: '100%',
                            borderRadius: 10,
                            resizeMode: 'cover',
                        }}
                    />
                </View>
            </View>
        </View>
    );
};

export default ReelItem;