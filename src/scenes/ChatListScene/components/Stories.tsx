import React from 'react';
import { FlatList, Image, TouchableOpacity, View } from 'react-native';

import Text from '../../../components/Text';

import colors from '../../../themes/colors';
import CardAvatar from '../../../components/CardAvatar';
import styles from '../styles';

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

const Stories = () => {
    return (
        <View style={styles.containerStories}>
            <TouchableOpacity
                activeOpacity={0.8}
                style={styles.containerAddNewStory}
            >
                <View style={styles.innerContainerAddNewStory}>
                    <Image
                        source={require('../../../../assets/images/icons/plusLightGrey.png')}
                        style={styles.imageAddNewStory}
                    />
                </View>
                <Text
                    text='Your Story'
                    typography='metadata_2'
                    style={styles.textAddNewStory}
                />
            </TouchableOpacity>
            <FlatList
                horizontal
                data={DUMMY_CONTACTS}
                keyExtractor={item => item.id.toString()}
                renderItem={({item}) => item.isHasUnreadStory ? (
                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={styles.cardStory}
                    >
                        <CardAvatar
                            avatar={item.avatar}
                            initialName={item.initialName}
                            isHasUnreadStory={item.isHasUnreadStory}
                            description={item.name}
                            isOnline={false}
                        />
                    </TouchableOpacity>
                ) : (
                    <View/>
                )}
            />
        </View>
    );
};

export default Stories;
