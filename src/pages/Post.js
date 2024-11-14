import { View, Text, TouchableOpacity, Dimensions, Image, ScrollView, FlatList, TextInput, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CloseIcon } from '../components/icons/icons';
import * as MediaLibrary from 'expo-media-library';
import axios from 'axios';

const widthWindow = Dimensions.get('window').width;

export default function Post({ navigation }) {

    const [loading, setLoading] = useState(false);
    const [imageChoose, setImageChoose] = useState(null);
    const [content, setContent] = useState("");
    const [photos, setPhotos] = useState([]);
    const [permission, setPermission] = useState(null);

    useEffect(() => {
        requestPermission();
    }, []);

    const handSubmitPost = async () => {
        try {
            setLoading(true);
            const res = await axios.post("http://172.16.0.77:3001/api/post/create-post", {
                content: content,
                authorId: "67364360c456d45ddcbe223e",
                image: imageChoose
            })
            const response = await res.json();
            console.log(response);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }

    }

    const requestPermission = async () => {
        const { status } = await MediaLibrary.requestPermissionsAsync();
        setPermission(status === 'granted');
        if (status === 'granted') {
            loadPhotos();
        } else {
            alert('Ứng dụng cần quyền truy cập ảnh để tiếp tục.');
        }
    };

    const loadPhotos = async () => {
        const album = await MediaLibrary.getAssetsAsync({
            first: 10, // Số lượng ảnh muốn lấy
            mediaType: 'photo',
        });
        setPhotos(album.assets);
    };

    const ItemImage = ({ image }) => {
        return (<TouchableOpacity onPress={() => {
            setImageChoose(image);
        }} style={{ padding: 2, width: widthWindow * 0.25, height: widthWindow * 0.25 }}>
            <Image source={{ uri: image }} style={{ width: '100%', height: '100%' }} />
        </TouchableOpacity>)
    }

    return (
        <SafeAreaView style={{ flex: 1, }}>
            {loading ? <ActivityIndicator /> :
                <>
                    <View style={{
                        flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 16, borderBottomColor: "rgba(0,0,0, 0.1)",
                        borderBottomStyle: "solid", borderBottomWidth: 1
                    }}>
                        <TouchableOpacity onPress={() => { navigation.goBack() }}><CloseIcon /></TouchableOpacity>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Bài viết mới</Text>
                        <TouchableOpacity onPress={handSubmitPost}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'blue' }}>Đăng</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ height: "45%", paddingHorizontal: 10 }}>
                        {imageChoose !== null && <Image style={{ width: '100%', height: '100%' }} source={{ uri: imageChoose }} />}
                    </View>
                    <View style={{ padding: 16 }}>
                        <Text>Viết chú thính hoặc thêm cuộn thăm dò ý kiến...</Text>
                        <TextInput
                            onChangeText={(text) => setContent(text)}
                            value={content}
                            style={{
                                padding: 5,
                                paddingHorizontal: 16,
                                borderStyle: "solid",
                                borderColor: "rgba(0,0,0, 0.1)",
                                borderWidth: 1,
                                marginTop: 10,
                                borderRadius: 10
                            }} placeholder='Nhập nội dung' />
                    </View>
                    <View style={{
                        flex: 1,
                    }}>
                        <Text style={{
                            borderBottomColor: "rgba(0,0,0, 0.1)",
                            borderBottomStyle: "solid", borderBottomWidth: 1,
                            borderTopColor: "rgba(0,0,0, 0.1)",
                            borderTopStyle: "solid", borderTopWidth: 1,
                            paddingHorizontal: 16,
                            paddingVertical: 10
                        }}>Gần đây</Text>
                        <View style={{ flexDirection: "row", flexWrap: 'wrap' }} >
                            <FlatList
                                data={photos}
                                keyExtractor={(item) => item.id}
                                numColumns={3}
                                renderItem={({ item }) => (
                                    <ItemImage image={item.uri} />
                                )}
                            />
                        </View>
                    </View>
                </>}
        </SafeAreaView>
    );
}
