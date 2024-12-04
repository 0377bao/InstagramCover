import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import AvtItem from '../GlobalComponent/AvtItem';
import PostInfor from './PostInfor';
import { CommentIcon, HeartIcon, HeartRedIcon, ReplyIcon, SaveIcon } from '../icons/icons';
import { useSelector } from 'react-redux';
import axios from 'axios';

export default function PostItem({ data, openComment, closeComment }) {
    const [liked, setLiked] = useState(data.isLike);
    const [numberLike, setNumberLike] = useState(data.likes.length);
    const account = useSelector((state) => state.account.information);
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
        return `${diffInSeconds} giây trước`;
    };

    const handSubmitLike = async () => {
        try {
            const res = await axios.post("http://10.0.2.2:3001/api/post/like-post",
                {
                    authorId: account._id,
                    postId: data._id
                },);

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <View name="wrapper" style={{ marginTop: 16 }}>
            <View>
                <View
                    style={{
                        paddingHorizontal: 10,
                    }}
                >
                    <PostInfor isSeen={data.isSeen} image={data.author.avt} name={data.author.username} isStick={data.isStick} />
                </View>
                <View style={{ width: '100%', marginTop: 10 }}>
                    <Image
                        style={{
                            width: '100%',
                            height: undefined,
                            aspectRatio: 1,
                            resizeMode: 'cover',
                        }}
                        source={{ uri: data.image[0] }}
                    />
                </View>
                <View style={{ paddingHorizontal: 10 }}>
                    <View
                        style={[
                            styles.flexRow,
                            {
                                marginTop: 10,
                                justifyContent: 'space-between',
                            },
                        ]}
                    >
                        <View style={styles.flexRow}>
                            <TouchableOpacity
                                onPress={() => {
                                    if (liked) {
                                        setNumberLike((state) => state - 1);
                                    } else {
                                        setNumberLike((state) => state + 1);
                                    }
                                    setLiked(!liked);
                                    handSubmitLike();
                                }}
                                style={[styles.flexRow, styles.actionItem]}
                            >
                                {liked ? <HeartRedIcon /> : <HeartIcon />}
                                <Text style={{ marginLeft: 5, fontWeight: 'bold' }}>{numberLike}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.flexRow, styles.actionItem]} onPress={() => {
                                openComment(data.comments, data._id)
                            }}>
                                <CommentIcon />
                                <Text style={{ marginLeft: 5, fontWeight: 'bold' }}>{data.comments.length}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.flexRow, styles.actionItem]}>
                                <ReplyIcon />
                                <Text style={{ marginLeft: 5, fontWeight: 'bold' }}>10</Text>
                            </TouchableOpacity>
                        </View>
                        <SaveIcon />
                    </View>
                    <View style={[styles.flexRow, { marginTop: 5 }]}>
                        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{data.author.username}</Text>
                        <Text style={{ marginLeft: 5 }}>{data.content}</Text>
                    </View>
                    <Text style={{ marginTop: 5, fontSize: 13 }}>{formatTimeDifference(data.createdAt)}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    flexRow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    actionItem: {
        marginRight: 10,
    },
});
