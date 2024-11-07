import {
    View,
    Text,
    TouchableOpacity,
    SafeAreaView,
    Animated,
    Dimensions,
    Pressable,
    Image,
    TextInput,
} from 'react-native';
import React, { useEffect } from 'react';
import { useState, useRef } from 'react';
import { CloseIcon, EclipseIcon, HeartIcon, HeartRedIcon, ReplyIcon } from '../icons/icons';
import { LinearGradient } from 'expo-linear-gradient';

const { width: widthWindow } = Dimensions.get('window');

export default function StoryComponent({ onFinishStory, stories, setShowTabBar }) {
    const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
    const progressAnim = useRef(new Animated.Value(0)).current;
    const pausedProgress = useRef(0);
    const [isPaused, setIsPaused] = useState(false);
    const currentStory = stories[currentStoryIndex];
    const [isMuted, setIsMuted] = useState(false);
    const [wentBack, setWentBack] = useState(0);
    const [isLoved, setIsLoved] = useState(false);
    const bottomValue = useRef(new Animated.Value(0)).current;

    const handleFocus = () => {
        Animated.timing(bottomValue, {
            toValue: 336,
            duration: 350,
            useNativeDriver: false,
        }).start();
        handlePressIn();
    };

    const handleBlur = () => {
        Animated.timing(bottomValue, {
            toValue: 0,
            duration: 200,
            useNativeDriver: false,
        }).start();
        handlePressOut();
    };

    useEffect(() => {
        setShowTabBar(false);

        return () => setShowTabBar(true);
    }, []);

    const renderStoryContent = (story) => {
        switch (story.type) {
            case 'image': {
                return (
                    <Image
                        style={{
                            width: '100%',
                            height: '90%',
                            position: 'absolute',
                            resizeMode: 'cover',
                            borderRadius: 18,
                        }}
                        source={{ url: story.image }}
                    />
                );
            }
            case 'video': {
            }
            default: {
                return null;
            }
        }
    };

    const goToNextStory = () => {
        if (currentStoryIndex < stories.length - 1) {
            Animated.timing(progressAnim, {
                toValue: 1,
                duration: 1,
                useNativeDriver: false,
            }).start(() => {
                pausedProgress.current = 0;
                setCurrentStoryIndex(currentStoryIndex + 1);
                progressAnim.setValue(0);
            });
        } else {
            setWentBack(0);
            onFinishStory();
            setCurrentStoryIndex(0);
        }
    };

    const runProgressAnimation = () => {
        progressAnim.setValue(pausedProgress.current);
        Animated.timing(progressAnim, {
            toValue: 1,
            duration: (1 - pausedProgress.current) * 10000,
            useNativeDriver: false,
        }).start(({ finished }) => {
            if (finished) {
                goToNextStory();
            }
        });
    };

    const getProgressBarWidth = (storyIndex, currentIndex) => {
        if (storyIndex < currentIndex) {
            return '100%';
        }
        if (storyIndex === currentIndex) {
            return progressAnim.interpolate({
                inputRange: [0, 1],
                outputRange: ['0%', '100%'],
            });
        }
        return '0%';
    };

    const goToPreviousStory = () => {
        if (isPaused) {
            setIsPaused(false);
        }
        pausedProgress.current = 0;
        progressAnim.setValue(0);
        if (currentStoryIndex === 0) {
            setWentBack(wentBack + 1);
            runProgressAnimation();
        } else {
            setCurrentStoryIndex(currentStoryIndex - 1);
        }
    };

    const handlePressIn = () => {
        setIsPaused(true);
    };

    const handlePressOut = () => {
        setIsPaused(false);
    };

    const handleScreenTouch = (evt) => {
        const touchX = evt.nativeEvent.locationX;
        if (touchX < widthWindow / 2) {
            goToPreviousStory();
        } else {
            goToNextStory();
        }
    };

    const pausePlay = () => {
        if (isPaused) {
            setIsPaused(false);
        } else {
            setIsPaused(true);
        }
    };

    const lovedAndUnLoved = () => {
        if (isLoved) {
            setIsLoved(false);
        } else {
            setIsLoved(true);
        }
    };

    const muteAndUnMute = () => {
        if (isMuted) {
            setIsMuted(false);
        } else {
            setIsMuted(true);
        }
    };

    useEffect(() => {
        if (!isPaused) {
            runProgressAnimation();
        } else {
            progressAnim.stopAnimation((value) => {
                pausedProgress.current = value;
            });
        }
    }, [currentStoryIndex, isPaused]);

    return (
        <SafeAreaView
            name="safeArea"
            style={{
                flex: 1,
                backgroundColor: '#000',
            }}
        >
            <Pressable
                name="container"
                onPress={handleScreenTouch}
                onLongPress={handlePressIn}
                onPressOut={handlePressOut}
                style={({ pressed }) => [
                    {
                        opacity: pressed ? 0.9 : 1,
                        flex: 1,
                        backgroundColor: '#000',
                    },
                ]}
            >
                <View
                    name="container"
                    style={{
                        flex: 1,
                        backgroundColor: '#000',
                    }}
                >
                    {currentStory.type && renderStoryContent(currentStory)}
                    <SafeAreaView>
                        <View
                            name="progressBarContainer"
                            style={{
                                flexDirection: 'row',
                                paddingHorizontal: 10,
                                paddingTop: 10,
                                justifyContent: 'center',
                                height: 3,
                                backgroundColor: 'transparent',
                            }}
                        >
                            {stories.map((story, index) => (
                                <View
                                    key={index}
                                    name="progressBarBackground"
                                    style={{
                                        flex: 1,
                                        height: 3,
                                        backgroundColor: 'rgba(255, 255, 255, 0.5)',
                                        marginHorizontal: 2,
                                        borderRadius: 2,
                                    }}
                                >
                                    <Animated.View
                                        name="progressBar"
                                        style={[
                                            {
                                                height: 3,
                                                backgroundColor: 'white',
                                                borderRadius: 2,
                                            },
                                            {
                                                width: getProgressBarWidth(index, currentStoryIndex),
                                            },
                                        ]}
                                    />
                                </View>
                            ))}
                        </View>
                        <LinearGradient
                            colors={['rgba(38, 38, 38, 0) 20%', 'rgba(38, 38, 38, .3) 80%', 'rgba(38, 38, 38, 0) 100%']}
                            style={{
                                width: '100%',
                                height: 70,
                                position: 'absolute',
                                top: 0,
                                left: 0,
                            }}
                        />
                        <View
                            style={{
                                flexDirection: 'row',
                                position: 'absolute',
                                left: 15,
                                top: 10,
                                paddingTop: 10,
                                alignItems: 'center',
                            }}
                        >
                            <Image
                                style={{
                                    width: 40,
                                    height: 40,
                                    borderRadius: 50,
                                }}
                                source={{
                                    url: 'https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-6/465790052_874791554817935_2691514773587584132_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Miy1lyj6oiQQ7kNvgG0BVAE&_nc_zt=23&_nc_ht=scontent.fsgn5-10.fna&_nc_gid=AYlv0Id4N_Rz9ennHGcqGNX&oh=00_AYAMIYECuZakS2uaUexXf8TLKiIl4q5q7X-f0VvjhuSneA&oe=67325EF0',
                                }}
                            />
                            <Text
                                style={{
                                    fontSize: 14,
                                    color: 'white',
                                    marginLeft: 10,
                                    fontWeight: 'bold',
                                }}
                            >
                                ngoc.inaa
                            </Text>
                            <Text
                                style={{
                                    fontSize: 14,
                                    color: 'white',
                                    marginLeft: 10,
                                }}
                            >
                                13h
                            </Text>
                        </View>
                        <View
                            style={{
                                flexDirection: 'row',
                                position: 'absolute',
                                right: 15,
                                top: 10,
                                paddingTop: 10,
                                alignItems: 'center',
                            }}
                        >
                            <TouchableOpacity>
                                <EclipseIcon color={'white'} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={onFinishStory}>
                                <CloseIcon color={'white'} style={{ marginLeft: 20 }} />
                            </TouchableOpacity>
                        </View>
                    </SafeAreaView>
                </View>
                <Animated.View
                    style={{
                        flexDirection: 'row',
                        position: 'absolute',
                        bottom: bottomValue,
                        left: 15,
                        right: 15,
                        alignItems: 'center',
                    }}
                >
                    <TextInput
                        style={{
                            flex: 1,
                            color: 'white',
                            fontSize: 16,
                            borderColor: 'rgba(255, 255, 255, 0.5)',
                            borderWidth: 1,
                            borderStyle: 'solid',
                            marginRight: 15,
                            paddingHorizontal: 18,
                            paddingVertical: 12,
                            borderRadius: 20,
                        }}
                        placeholder="Gửi tin nhắn..."
                        placeholderTextColor="white"
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                    />
                    <TouchableOpacity
                        style={{
                            padding: 8,
                        }}
                        onPress={lovedAndUnLoved}
                    >
                        {isLoved ? <HeartRedIcon color={'rgb(255, 48, 64)'} /> : <HeartIcon color={'white'} />}
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            padding: 8,
                        }}
                    >
                        <ReplyIcon color={'white'} />
                    </TouchableOpacity>
                </Animated.View>
            </Pressable>
        </SafeAreaView>
    );
}
