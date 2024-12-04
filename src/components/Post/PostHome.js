import { View, Text, Share, FlatList, ActivityIndicator, RefreshControl } from 'react-native';
import React, { useState, useEffect } from 'react';
import PostItem from './PostItem';
import PostComment from './PostComment';
import axios from 'axios';

// const ListData = [
//     {
//         avt: require('../../../assets/images/post9.jpg'),
//         contents:
//             require('../../../assets/images/post9.jpg'),
//         name: 'Real madrid',
//         isStick: true,
//         like: 123000,
//         liked: false,
//         comment: 30,
//         share: 10,
//         cap: 'Hello everyone',
//         time: '1 giờ trước',
//         isSeen: false,
//     },
//     {
//         avt: require('../../../assets/images/post10.jpg'),
//         contents:
//             require('../../../assets/images/post10.jpg'),
//         name: 'Nhật Ký Yêu Thương',
//         isStick: false,
//         like: 73000,
//         liked: true,
//         comment: 22,
//         share: 5,
//         cap: 'Động lực để cố gắng mỗi ngày',
//         time: '2 giờ trước',
//         isSeen: true,
//     },
//     {
//         avt: require('../../../assets/images/post11.jpg'),
//         contents:
//             require('../../../assets/images/post11.jpg'),
//         name: 'Cafe MAN',
//         isStick: true,
//         like: 5000,
//         liked: false,
//         comment: 40,
//         share: 2,
//         cap: 'Tốt hơn chính mình',
//         time: '4 giờ trước',
//         isSeen: false,
//     },
// ];

export default function PostHome({ openComment, closeComment, headerComponent }) {
    const [listData, setListData] = useState([]); // Dữ liệu từ API
    const [loading, setLoading] = useState(false);
    const [indexLoad, setIndexLoad] = useState(1);
    const [refreshing, setRefreshing] = useState(false);

    // Hàm gọi API để lấy dữ liệu
    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await axios.get(`http://10.0.2.2:3001/api/post/find-post?page=1&authorId=6746cce7f2e4901625aa7f07`,
                {
                    headers: {
                        Accept: 'application/json',
                        'content-Type': 'application/json',
                    },
                },
            );
            setListData(response.data.data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [indexLoad]);

    handelLoadMore = () => {
        setIndexLoad(indexLoad + 1);
    }
    const onRefresh = () => {
        setRefreshing(true);
        fetchData();
        setRefreshing(false);
    };

    return (
        <View style={{ paddingBottom: 30 }}>
            {/* {ListData.map((item, index) => (
                <PostItem openComment={openComment} closeComment={closeComment} key={index} data={item} />
            ))} */}

            <FlatList
                ListHeaderComponent={headerComponent}
                style
                data={listData}
                renderItem={({ item, index }) => <PostItem openComment={openComment} closeComment={closeComment} key={index} data={item} />}
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={{ paddingBottom: 70 }}
                onEndReached={handelLoadMore}
                ListFooterComponent={loading && <ActivityIndicator size="large" color="#0000ff" />}
                ListFooterComponentStyle={{ justifyContent: 'center', alignItems: 'center', paddingVertical: 10 }}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
            />
        </View>
    );
}
