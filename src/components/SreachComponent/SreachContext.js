import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

const SreachContext = () => {
    const sreachData = [
        {
            id: 1,
            context: [
                {
                    id_context: 1,
                    image: require('../../../assets/images/post1.jpg')
                },
                {
                    id_context: 2,
                    image: require('../../../assets/images/post2.jpg')
                },
                {
                    id_context: 3,
                    image: require('../../../assets/images/post3.jpg')
                },
                {
                    id_context: 4,
                    image: require('../../../assets/images/post4.jpg')
                },
                {
                    id_context: 5,
                    image: require('../../../assets/images/post5.jpg')
                }
            ]
        },
        {
            id: 2,
            context: [
                {
                    id_context: 1,
                    image: require('../../../assets/images/post6.jpg')
                },
                {
                    id_context: 2,
                    image: require('../../../assets/images/post7.jpg')
                },
                {
                    id_context: 3,
                    image: require('../../../assets/images/post8.jpg')
                },
                {
                    id_context: 4,
                    image: require('../../../assets/images/post9.jpg')
                },
                {
                    id_context: 5,
                    image: require('../../../assets/images/post10.jpg')
                }
            ]
        },
        {
            id: 3,
            context: [
                {
                    id_context: 1,
                    image: require('../../../assets/images/post11.jpg')
                },
                {
                    id_context: 2,
                    image: require('../../../assets/images/post12.jpg')
                },
                {
                    id_context: 3,
                    image: require('../../../assets/images/post13.jpg')
                },
                {
                    id_context: 4,
                    image: require('../../../assets/images/post14.jpg')
                },
                {
                    id_context: 5,
                    image: require('../../../assets/images/post15.jpg')
                }
            ]
        }
    ]
    return (
        <View>
            {sreachData.map((item, index) => {
                return (
                    <>
                        {item.id % 2 == 1 ? (
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                            }}>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        flexWrap: 'wrap',
                                        width: '66.5%',
                                        justifyContent: 'space-between',
                                    }}>
                                    {item.context.slice(0, 4).map((contextData, contextIndex) => {
                                        return (
                                            <TouchableOpacity
                                                key={contextIndex}
                                                style={{ paddingBottom: 2, width: '49.5%' }}>
                                                <Image
                                                    source={contextData.image}
                                                    style={{ width: '100%', height: 150 }}
                                                />
                                            </TouchableOpacity>
                                        );
                                    })}
                                </View>
                                <TouchableOpacity

                                    style={{ marginLeft: 2, width: '33%' }}>
                                    <Image
                                        source={item.context[4].image}
                                        style={{ width: '100%', height: 300 }}
                                    />
                                </TouchableOpacity>
                            </View>
                        ) : (
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                            }}>
                                <TouchableOpacity

                                    style={{ marginLeft: 2, width: '33%' }}>
                                    <Image
                                        source={item.context[0].image}
                                        style={{ width: '100%', height: 300 }}
                                    />
                                </TouchableOpacity>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        flexWrap: 'wrap',
                                        width: '66.5%',
                                        justifyContent: 'space-between',
                                    }}>
                                    {item.context.slice(1, 5).map((contextData, contextIndex) => {
                                        return (
                                            <TouchableOpacity
                                                key={contextIndex}
                                                style={{ paddingBottom: 2, width: '49.5%' }}>
                                                <Image
                                                    source={contextData.image}
                                                    style={{ width: '100%', height: 150 }}
                                                />
                                            </TouchableOpacity>
                                        );
                                    })}
                                </View>
                            </View>
                        )
                        }
                    </>
                );
            }
            )}
        </View>
    );
}
export default SreachContext;