import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../pages/Home';
import Research from '../../pages/Research';
import Post from '../../pages/Post';
import Reel from '../../pages/Reel';
import Profile from '../../pages/Profile';
import {
    HomeIcon,
    HomeRegularIcon,
    PostRegularIcon,
    ReelIcon,
    ReelRegularIcon,
    ResearchIcon,
    ResearchRegularIcon,
} from '../icons/icons';
import { themeLight } from '../../cssComponents/ColorTheme';
import { Ionicons } from '@expo/vector-icons';
const Tab = createBottomTabNavigator();
const theme = themeLight;

export default function TabBar() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarStyle: {
                    height: 60,
                    borderTopWidth: 1,
                    borderTopColor: theme.border,
                    borderTopStyle: 'solid',
                    alignItems: 'center',
                    paddingTop: 10,
                },
                tabBarActiveTintColor: theme.text,
                tabBarInactiveTintColor: theme.text,
                tabBarIcon: ({ focused, color, size }) => {
                    let IconName;

                    // Kiểm tra tên route để xác định icon
                    if (route.name === 'Home') {
                        IconName = focused ? <HomeIcon color={color} /> : <HomeRegularIcon color={color} />; // Icon active và không active
                    } else if (route.name === 'Research') {
                        IconName = focused ? <ResearchIcon color={color} /> : <ResearchRegularIcon color={color} />; // Icon active và không active
                    } else if (route.name === 'Post') {
                        IconName = <PostRegularIcon color={color} />; // Icon active và không active
                    } else if (route.name === 'Reel') {
                        IconName = focused ? <ReelIcon color={color} /> : <ReelRegularIcon color={color} />; // Icon active và không active
                    } else if (route.name === 'Profile') {
                        IconName = focused ? (
                            <Ionicons name="people" size={32} color={color} />
                        ) : (
                            <Ionicons name="people-outline" size={32} color={color} />
                        );
                    }
                    // Trả về icon tương ứng với trạng thái
                    return IconName;
                },
            })}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarLabel: '',
                }}
            />
            <Tab.Screen
                name="Research"
                component={Research}
                options={{
                    headerShown: false,
                    tabBarLabel: '',
                }}
            />
            <Tab.Screen
                name="Post"
                component={Post}
                options={{
                    headerShown: false,
                    tabBarLabel: '',
                    tabBarStyle: { display: 'none' },
                }}
            />
            <Tab.Screen
                name="Reel"
                component={Reel}
                options={{
                    headerShown: false,
                    tabBarLabel: '',
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    headerShown: false,
                    tabBarLabel: '',
                }}
            />
        </Tab.Navigator>
    );
}
