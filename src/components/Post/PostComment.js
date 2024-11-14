import { View, Text, TouchableWithoutFeedback, Dimensions, ScrollView, TextInput, Image } from 'react-native'
import React from 'react'
import PostCommentItem from './PostCommentItem';
import { themeLight } from '../../cssComponents/ColorTheme';

const data = [
    {
        name: "QuocBao",
        time: "9 tuần",
        comment: "Xịn quá",
        like: 0
    },
    {
        name: "TrongDat",
        time: "6 ngày",
        comment: "Trường mình đẹp quá",
        like: 166
    },
    {
        name: "IT",
        time: "8 tuần",
        comment: "Quá đẹp",
        like: 2
    },
    {
        name: "IT",
        time: "8 tuần",
        comment: "Quá đẹp",
        like: 2
    },
    {
        name: "IT",
        time: "8 tuần",
        comment: "Quá đẹp",
        like: 2
    },
    {
        name: "IT",
        time: "8 tuần",
        comment: "Quá đẹp",
        like: 2
    },
    {
        name: "IT",
        time: "8 tuần",
        comment: "Quá đẹp",
        like: 2
    },
    {
        name: "IT",
        time: "8 tuần",
        comment: "Quá đẹp",
        like: 2
    },
]

const theme = themeLight;

export default function PostComment({ closeComment }) {
    const screenHeight = Dimensions.get('window').height;
    return (
        <View style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Làm tối phần ngoài comment
            justifyContent: 'flex-end',
            zIndex: 10
        }}>
            <TouchableWithoutFeedback onPress={closeComment}>
                <View style={{ flex: 1 }}></View>
            </TouchableWithoutFeedback>
            <View style={[{
                backgroundColor: 'white',
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                paddingBottom: 80
            }, { height: screenHeight * 0.6 }]}>
                <View style={{
                    padding: 20, justifyContent: "center", alignItems: 'center',
                    borderBottomWidth: 1,
                    borderBlockColor: 'rgba(0, 0, 0, 0.03)',
                    borderStyle: 'solid',
                }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Bình luận</Text>
                </View>
                <View style={{ paddingBottom: 76 }}>
                    <ScrollView showsVerticalScrollIndicator={false}>{data.map((item, index) => <PostCommentItem key={index} data={item} />)}</ScrollView>
                </View>
            </View>
            <View style={{
                position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: 'white',
                padding: 20, flexDirection: 'row', alignItems: 'center',
                paddingBottom: 28,
                borderTopColor: theme.border,
                borderTopWidth: 1,
                borderTopStyle: "solid",
            }}>
                <Image style={{
                    width: 40,
                    height: 40,
                    borderRadius: 20,
                    marginRight: 10,
                    borderColor: "#888",
                    borderWidth: 1,
                    borderStyle: "solid",
                }
                } source={require('../../../assets/images/post1.jpg')} />
                <TextInput style={{
                    borderColor: '#999',
                    borderWidth: 1,
                    borderStyle: "solid",
                    flex: 1,
                    padding: 10,
                    borderRadius: 20
                }} placeholder='Nhập bình luận...' />
            </View>
        </View>
    )
}