import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { HeartIcon, HeartRedIcon } from '../icons/icons'

export default function PostCommentItem({ data }) {
    const [liked, setLiked] = useState(false);
    const formatTimeDifference = (createdAt) => {
        const createdDate = new Date(createdAt);
        const now = new Date();
        const diffInMs = now - createdDate;

        const diffInSeconds = Math.floor(diffInMs / 1000);
        const diffInMinutes = Math.floor(diffInSeconds / 60);
        const diffInHours = Math.floor(diffInMinutes / 60);
        const diffInDays = Math.floor(diffInHours / 24);


        if (diffInDays > 0) return `${diffInDays} ngày trước`;
        if (diffInHours > 0) return `${diffInHours} giờ trước`;
        if (diffInMinutes > 0) return `${diffInMinutes} phút trước`;
        if (diffInSeconds < 0) return 'Vừa xong';
        return `${diffInSeconds} giây trước`;
    };

    return (
        <View style={{ padding: 10, flexDirection: 'row', marginTop: 10 }}>
            <Image style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                marginRight: 10,
                borderColor: "#888",
                borderWidth: 1,
                borderStyle: "solid",
            }} source={{ uri: data.author.avt }} />
            <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row', marginBottom: 5 }}>
                    <Text style={{
                        fontWeight: 'bold',
                        marginRight: 5,
                    }}>{data.author.username}</Text>
                    <Text>{formatTimeDifference(data.createdAt)}</Text>
                </View>
                <Text style={{ marginBottom: 5 }}>{data.content}</Text>
                <TouchableOpacity>
                    <Text style={{ color: '#555' }}>Trả lời</Text>
                </TouchableOpacity>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => {
                    setLiked(!liked);
                    if (liked) {
                        data.like -= 1;
                    } else {
                        data.like += 1;
                    }
                }}>
                    {liked ? <HeartRedIcon /> : <HeartIcon />}
                </TouchableOpacity>
                {data.like !== 0 && <Text>{data.like}</Text>}
            </View>
        </View>
    )
}