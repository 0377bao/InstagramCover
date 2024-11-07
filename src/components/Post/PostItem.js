import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import AvtItem from '../GlobalComponent/AvtItem';
import PostInfor from './PostInfor';
import { CommentIcon, HeartIcon, HeartRedIcon, ReplyIcon, SaveIcon } from '../icons/icons';

export default function PostItem({ data }) {
    const [liked, setLiked] = useState(data.liked);

    return (
        <View name="wrapper" style={{ marginTop: 16 }}>
            <View>
                <View
                    style={{
                        paddingHorizontal: 10,
                    }}
                >
                    <PostInfor isSeen={data.isSeen} image={data.avt} name={data.name} isStick={data.isStick} />
                </View>
                <View style={{ width: '100%', marginTop: 10 }}>
                    <Image
                        style={{
                            width: '100%',
                            height: undefined,
                            aspectRatio: 1,
                            resizeMode: 'cover',
                        }}
                        source={{ uri: data.contents }}
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
                                        data.like -= 1;
                                    } else {
                                        data.like += 1;
                                    }
                                    setLiked(!liked);
                                }}
                                style={[styles.flexRow, styles.actionItem]}
                            >
                                {liked ? <HeartRedIcon /> : <HeartIcon />}
                                <Text style={{ marginLeft: 5, fontWeight: 'bold' }}>{data.like}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.flexRow, styles.actionItem]}>
                                <CommentIcon />
                                <Text style={{ marginLeft: 5, fontWeight: 'bold' }}>{data.comment}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.flexRow, styles.actionItem]}>
                                <ReplyIcon />
                                <Text style={{ marginLeft: 5, fontWeight: 'bold' }}>{data.share}</Text>
                            </TouchableOpacity>
                        </View>
                        <SaveIcon />
                    </View>
                    <View style={[styles.flexRow, { marginTop: 5 }]}>
                        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{data.name}</Text>
                        <Text style={{ marginLeft: 5 }}>{data.cap}</Text>
                    </View>
                    <Text style={{ marginTop: 5, fontSize: 13 }}>{data.time}</Text>
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
