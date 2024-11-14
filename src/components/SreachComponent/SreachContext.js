import React, { useState, useEffect } from 'react';
import { View, Image, TouchableOpacity, ActivityIndicator, ScrollView, FlatList } from 'react-native';

// Định nghĩa các hình ảnh nội bộ (local images)
const imageMap = {
    'post1.jpg': require('../../../assets/images/post1.jpg'),
    'post2.jpg': require('../../../assets/images/post2.jpg'),
    'post3.jpg': require('../../../assets/images/post3.jpg'),
    'post4.jpg': require('../../../assets/images/post4.jpg'),
    'post5.jpg': require('../../../assets/images/post5.jpg'),
    'post6.jpg': require('../../../assets/images/post6.jpg'),
    'post7.jpg': require('../../../assets/images/post7.jpg'),
    'post8.jpg': require('../../../assets/images/post8.jpg'),
    'post9.jpg': require('../../../assets/images/post9.jpg'),
    'post10.jpg': require('../../../assets/images/post10.jpg'),
    'post11.jpg': require('../../../assets/images/post11.jpg'),
    'post12.jpg': require('../../../assets/images/post12.jpg'),
    'post13.jpg': require('../../../assets/images/post13.jpg'),
    'post14.jpg': require('../../../assets/images/post14.jpg'),
    'post15.jpg': require('../../../assets/images/post15.jpg'),
};

// Hàm để xử lý đường dẫn hình ảnh
const handleImageSource = (image) => {
    const imageName = image.split('/').pop();
    if (imageMap[imageName]) {
        return imageMap[imageName];
    }
    return { uri: image };
};
const RenderItem = ({ data, loading, index }) => {

    return (
        <ScrollView>
            {(
                <View key={index}>
                    {data.id % 2 === 1 ? (
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    flexWrap: 'wrap',
                                    width: '66.5%',
                                    justifyContent: 'space-between',
                                }}>
                                {data.context.slice(0, 4).map((contextData, contextIndex) => {
                                    return (
                                        <TouchableOpacity
                                            key={contextIndex}
                                            style={{ paddingBottom: 2, width: '49.5%' }}>
                                            <Image
                                                source={handleImageSource(contextData.image)}
                                                style={{ width: '100%', height: 150 }}
                                            />
                                        </TouchableOpacity>
                                    );
                                })}
                            </View>
                            <TouchableOpacity style={{ marginLeft: 2, width: '33%' }}>
                                <Image
                                    source={handleImageSource(data.context[4]?.image)}
                                    style={{ width: '100%', height: 300 }}
                                />
                            </TouchableOpacity>
                        </View>
                    ) : (
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <TouchableOpacity style={{ marginLeft: 2, width: '33%' }}>
                                <Image
                                    source={handleImageSource(data.context[0]?.image)}
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
                                {data.context.slice(1, 5).map((contextData, contextIndex) => {
                                    return (
                                        <TouchableOpacity
                                            key={contextIndex}
                                            style={{ paddingBottom: 2, width: '49.5%' }}>
                                            <Image
                                                source={handleImageSource(contextData.image)}
                                                style={{ width: '100%', height: 150 }}
                                            />
                                        </TouchableOpacity>
                                    );
                                })}
                            </View>
                        </View>
                    )}
                </View>
            )}
        </ScrollView>
    );
}


const SreachContext = () => {
    const [sreachData, setSreachData] = useState([]); // Dữ liệu từ API
    const [loading, setLoading] = useState(false);
    const [indexLoad, setIndexLoad] = useState(1);

    // Hàm gọi API để lấy dữ liệu
    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await fetch(`https://67180ab4b910c6a6e02aefed.mockapi.io/api/gk/data?page=${indexLoad}&limit=3`);
            const result = await response.json();

            setSreachData(prev => [...prev, ...result]);
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


    return (
        <>

            {setSreachData.size != 0 &&
                <FlatList
                    data={sreachData}
                    renderItem={({ item, index }) => <RenderItem data={item} loading={loading} index={index} />}
                    keyExtractor={(item, index) => index.toString()}
                    onEndReached={handelLoadMore}
                    ListFooterComponent={loading && <ActivityIndicator size="large" color="#0000ff" />}
                    ListFooterComponentStyle={{ justifyContent: 'center', alignItems: 'center', paddingVertical: 10 }}
                />}

        </>
    );
};

export default SreachContext;
