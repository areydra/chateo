import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { FlashList } from '@shopify/flash-list';

import Text from '../../components/Text';

import styles from './styles';
import Message from './components/Message';
import TimeSeparator from './components/TimeSeparator';
import TextInput from '../../components/TextInput';

const DUMMY_CHATS = [
    {
        id: 1,
        message: 'Good morning, did you sleep well?',
        time: '09.45',
        isChatFromFriend: false,
    },
    {
        id: 2,
        message: 'Good morning',
        time: '09.50',
        isChatFromFriend: true,
    },
    {
        id: 3,
        time: 'Sat, 17/10',
        isTheEndOfTheDay: true,
    },
    {
        id: 4,
        message: 'How are you?',
        time: '08.00',
        isChatFromFriend: false,
    },
];

const ChatScene = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.navbar}>
                <View style={styles.navbarImage}>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={navigation.goBack}
                    >
                        <Image
                            source={require('../../../assets/images/icons/arrowBack.png')}
                            style={styles.imageArrowBack}
                        />       
                    </TouchableOpacity>
                    <Text
                        typography='subheading_1'
                        text='Athalia Putri'
                    />
                </View>
                <View style={styles.navbarImage}>
                    <Image
                        source={require('../../../assets/images/icons/searchBlack.png')}
                        style={styles.imageChatPlus}
                    />
                    <Image
                        source={require('../../../assets/images/icons/hamburger.png')}
                        style={styles.imageSelect}
                    />
                </View>
            </View>
            <View style={styles.containerContent}>
                <FlashList
                    data={DUMMY_CHATS}
                    estimatedItemSize={20}
                    keyExtractor={(item) => item.id.toString()}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item}) => {
                        return item.isTheEndOfTheDay ? (
                            <TimeSeparator time={item.time}/>
                        ) : (
                            <Message
                                text={item.message as string}
                                time={item.time}
                                isChatFromFriend={item.isChatFromFriend as boolean}
                            />
                        );
                    }}
                    ItemSeparatorComponent={() => <View style={styles.separatorFlashList}/>}
                    contentContainerStyle={styles.containerFlashList}
                />
            </View>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 10,
                paddingHorizontal: 12,
            }}>
                <TouchableOpacity activeOpacity={0.8}>
                    <Image
                        source={require('../../../assets/images/icons/plusGrey.png')}
                        style={styles.imagePlusGrey}
                    />
                </TouchableOpacity>
                <TextInput
                    multiline
                    placeholder='Message'
                    style={styles.textInputMessage}
                />
                <TouchableOpacity activeOpacity={0.8}>
                    <Image
                        source={require('../../../assets/images/icons/send.png')}
                        style={styles.imageSend}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default ChatScene;
