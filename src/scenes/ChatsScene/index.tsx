import React from 'react';
import { FlatList, Image, View } from 'react-native';

import Text from '../../components/Text';
import CardUser from '../../components/CardUser';

import styles from './styles';
import Search from '../../components/Search';
import Stories from './components/Stories';

const DUMMY_CONTACTS = [
    {
        id: 1,
        name: 'Athalia Putri',
        initialName: 'AP',
        message: 'Good morning, did you sleep well?',
        isOnline: false,
        isHasUnreadStory: false,
        avatar: undefined,
        time: 'Today',
        totalUnreadMessage: '1',
    },
    {
        id: 2,
        name: 'Areydra Desfikriandre',
        initialName: 'AD',
        message: 'How is it going?',
        isOnline: true,
        isHasUnreadStory: true,
        avatar: 'https://cdn.myanimelist.net/images/characters/4/495795.jpg',
        time: '17/6',
        totalUnreadMessage: undefined,
    }
];

const ChatsScene = () => {
    return (
        <View style={styles.container}>
            <View style={styles.navbar}>
                <Text
                    typography='subheading_1'
                    text='Chats'
                />
                <View style={styles.navbarImage}>
                    <Image
                        source={require('../../../assets/images/icons/chatPlus.png')}
                        style={styles.imageChatPlus}
                    />
                    <Image
                        source={require('../../../assets/images/icons/select.png')}
                        style={styles.imageSelect}
                    />
                </View>
            </View>
            <Stories/>
            <View style={styles.containerContent}>
                <Search style={styles.search}/>
                <View style={styles.contactList}>
                    <FlatList
                        data={DUMMY_CONTACTS}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({item}) => (
                            <CardUser
                                title={item.name}
                                description={item.message}
                                initialName={item.initialName}
                                isOnline={item.isOnline}
                                isHasUnreadStory={item.isHasUnreadStory}
                                avatar={item.avatar}
                                onPress={() => {}}
                                time={item.time}
                                totalUnreadMessage={item.totalUnreadMessage}
                            />                            
                        )}
                        ItemSeparatorComponent={() => <View style={styles.separator}/>}
                        ListFooterComponent={() => <View style={styles.footer}/>}
                    />
                </View>
            </View>
        </View>
    );
};

export default ChatsScene;
