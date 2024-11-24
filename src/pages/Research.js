import React, { useState } from 'react';
import {
    View,
    StatusBar,
    ScrollView,
    TouchableOpacity,
    Dimensions,
    Image,
    Text,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionic from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import SreachBox from '../components/SreachComponent/SreachBox';
import SreachContext from '../components/SreachComponent/SreachContext';
export default function Research() {
    const [image, setImage] = useState(null);
    const getData = data => {
        setImage(data);
    }
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ paddingBottom: 40 }}>

                <SreachBox />
                <SreachContext style={{ paddingBottom: 40 }} />

            </View>
        </SafeAreaView>
    );
}
