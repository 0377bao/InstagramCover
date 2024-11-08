import { View, Text, Share } from 'react-native';
import React from 'react';
import PostItem from './PostItem';

const ListData = [
    {
        avt: 'https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-6/465790052_874791554817935_2691514773587584132_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Miy1lyj6oiQQ7kNvgG0BVAE&_nc_zt=23&_nc_ht=scontent.fsgn5-10.fna&_nc_gid=AYlv0Id4N_Rz9ennHGcqGNX&oh=00_AYAMIYECuZakS2uaUexXf8TLKiIl4q5q7X-f0VvjhuSneA&oe=67325EF0',
        contents:
            'https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-6/465790052_874791554817935_2691514773587584132_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Miy1lyj6oiQQ7kNvgG0BVAE&_nc_zt=23&_nc_ht=scontent.fsgn5-10.fna&_nc_gid=AYlv0Id4N_Rz9ennHGcqGNX&oh=00_AYAMIYECuZakS2uaUexXf8TLKiIl4q5q7X-f0VvjhuSneA&oe=67325EF0',
        name: 'Real madrid',
        isStick: true,
        like: 123000,
        liked: false,
        comment: 30,
        share: 10,
        cap: 'Hello everyone',
        time: '1 giờ trước',
        isSeen: false,
    },
    {
        avt: 'https://scontent.fsgn5-15.fna.fbcdn.net/v/t39.30808-1/325788536_687356606464481_7451758350422742263_n.jpg?stp=cp0_dst-jpg_s40x40&_nc_cat=1&ccb=1-7&_nc_sid=f4b9fd&_nc_ohc=XDF5PjUGrvwQ7kNvgFQJyIb&_nc_zt=24&_nc_ht=scontent.fsgn5-15.fna&_nc_gid=Av7VIfa2uLt7YezfQZ4ykcx&oh=00_AYCeoSBd9G16jJw5PVLcfhTxEklmKgTJjCRoJIdn2UreYg&oe=67324605',
        contents:
            'https://scontent.fsgn5-12.fna.fbcdn.net/v/t39.30808-6/465985365_969080265247369_8903621359142738082_n.jpg?stp=dst-jpg_p526x296&_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=LUaU0le-D4kQ7kNvgFQkSUh&_nc_zt=23&_nc_ht=scontent.fsgn5-12.fna&_nc_gid=Av7VIfa2uLt7YezfQZ4ykcx&oh=00_AYBtKuSTUoOa7QxUdMtoiGX9YVcxRgZ2BQAustsh0lrXag&oe=673263D2',
        name: 'Nhật Ký Yêu Thương',
        isStick: false,
        like: 73000,
        liked: true,
        comment: 22,
        share: 5,
        cap: 'Động lực để cố gắng mỗi ngày',
        time: '2 giờ trước',
        isSeen: true,
    },
    {
        avt: 'https://scontent.fsgn5-15.fna.fbcdn.net/v/t39.30808-1/415425500_866927162109714_8969066789648092360_n.jpg?stp=cp0_dst-jpg_s40x40&_nc_cat=1&ccb=1-7&_nc_sid=f4b9fd&_nc_ohc=aJcO7bPffCYQ7kNvgHfVtfB&_nc_zt=24&_nc_ht=scontent.fsgn5-15.fna&_nc_gid=Az6JGEbhof4AjC6hK9uck4v&oh=00_AYA-P1K3HyUYoL_4kQq3rPIwemMl5jknrFrXykaFa9Jj2w&oe=67325EEC',
        contents:
            'https://scontent.fsgn5-15.fna.fbcdn.net/v/t39.30808-6/465733435_1095250932610668_7342483632776007014_n.jpg?stp=dst-jpg_s600x600&_nc_cat=1&ccb=1-7&_nc_sid=127cfc&_nc_ohc=4Mc3-ORx0TkQ7kNvgERbwdA&_nc_zt=23&_nc_ht=scontent.fsgn5-15.fna&_nc_gid=Az6JGEbhof4AjC6hK9uck4v&oh=00_AYBqAsOfgS6UZJGIGDTledWRCC0w5DHKQJLgY3CNodPMRw&oe=67326556',
        name: 'Cafe MAN',
        isStick: true,
        like: 5000,
        liked: false,
        comment: 40,
        share: 2,
        cap: 'Tốt hơn chính mình',
        time: '4 giờ trước',
        isSeen: false,
    },
];

export default function PostHome() {
    return (
        <View style={{ paddingBottom: 30 }}>
            {ListData.map((item, index) => (
                <PostItem key={index} data={item} />
            ))}
        </View>
    );
}
