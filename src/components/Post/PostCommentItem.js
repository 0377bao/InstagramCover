import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { HeartIcon, HeartRedIcon } from '../icons/icons'

export default function PostCommentItem({ data }) {

    const [liked, setLiked] = useState(false);

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
            }} source={require('../../../assets/images/post1.jpg')} />
            <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row', marginBottom: 5 }}>
                    <Text style={{
                        fontWeight: 'bold',
                        marginRight: 5,
                    }}>{data.name}</Text>
                    <Text>{data.time}</Text>
                </View>
                <Text style={{ marginBottom: 5 }}>{data.comment}</Text>
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