import React, { useState, useEffect } from 'react';
import { View, Image, TouchableOpacity, ActivityIndicator, ScrollView } from 'react-native';

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
    // Kiểm tra nếu là hình ảnh nội bộ
    const imageName = image.split('/').pop();  // Lấy tên hình ảnh từ đường dẫn
    if (imageMap[imageName]) {
        // Trả về require() nếu hình ảnh là một trong các hình ảnh nội bộ
        return imageMap[imageName];
    }
    // Nếu không phải, sử dụng URI cho hình ảnh bên ngoài
    return { uri: image };
};

const SreachContext = () => {
    const [sreachData, setSreachData] = useState([]); // Dữ liệu từ API
    const [loading, setLoading] = useState(false);
    const [indexLoad, setIndexLoad] = useState(0);

    // Hàm gọi API để lấy dữ liệu
    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await fetch('https://67180ab4b910c6a6e02aefed.mockapi.io/api/gk/data');
            const result = await response.json();
            setSreachData(result); // Lưu dữ liệu vào sreachData
            setLoading(false);
        } catch (error) {
            console.error("Error fetching data:", error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);



    return (
        <ScrollView

        >
            {loading ? (
                <ActivityIndicator size="large" color="#0000ff" />
            ) : (
                sreachData.map((item, index) => {
                    return (
                        <View key={index}>
                            {item.id % 2 === 1 ? (
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
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
                                                        source={handleImageSource(contextData.image)} // Xử lý ảnh
                                                        style={{ width: '100%', height: 150 }}
                                                    />
                                                </TouchableOpacity>
                                            );
                                        })}
                                    </View>
                                    <TouchableOpacity style={{ marginLeft: 2, width: '33%' }}>
                                        <Image
                                            source={handleImageSource(item.context[4]?.image)} // Xử lý ảnh
                                            style={{ width: '100%', height: 300 }}
                                        />
                                    </TouchableOpacity>
                                </View>
                            ) : (
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <TouchableOpacity style={{ marginLeft: 2, width: '33%' }}>
                                        <Image
                                            source={handleImageSource(item.context[0]?.image)} // Xử lý ảnh
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
                                                        source={handleImageSource(contextData.image)} // Xử lý ảnh
                                                        style={{ width: '100%', height: 150 }}
                                                    />
                                                </TouchableOpacity>
                                            );
                                        })}
                                    </View>
                                </View>
                            )}
                        </View>
                    );
                })
            )}
        </ScrollView>
    );
};

export default SreachContext;
