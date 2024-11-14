import { View, Text, Share } from 'react-native';
import React, { useState } from 'react';
import PostItem from './PostItem';
import PostComment from './PostComment';

const ListData = [
    {
        avt: require('../../../assets/images/post9.jpg'),
        contents:
            require('../../../assets/images/post9.jpg'),
        name: 'Real madrid',
        isStick: true,
        like: 123000,
        liked: false,
        comment: 30,
        share: 10,
        cap: 'Hello everyone',
        time: '1 giờ trước',
        isSeen: false,
    },
    {
        avt: require('../../../assets/images/post10.jpg'),
        contents:
            require('../../../assets/images/post10.jpg'),
        name: 'Nhật Ký Yêu Thương',
        isStick: false,
        like: 73000,
        liked: true,
        comment: 22,
        share: 5,
        cap: 'Động lực để cố gắng mỗi ngày',
        time: '2 giờ trước',
        isSeen: true,
    },
    {
        avt: require('../../../assets/images/post11.jpg'),
        contents:
            require('../../../assets/images/post11.jpg'),
        name: 'Cafe MAN',
        isStick: true,
        like: 5000,
        liked: false,
        comment: 40,
        share: 2,
        cap: 'Tốt hơn chính mình',
        time: '4 giờ trước',
        isSeen: false,
    },
];

export default function PostHome({ openComment, closeComment }) {
    return (
        <View style={{ paddingBottom: 30 }}>
            {ListData.map((item, index) => (
                <PostItem openComment={openComment} closeComment={closeComment} key={index} data={item} />
            ))}
        </View>
    );
}
