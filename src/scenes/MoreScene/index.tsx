import React from 'react';
import { FlatList, View } from 'react-native';

import Text from '../../components/Text';

import styles from './styles';
import CardProfile from './components/CardProfile';
import CardMoreMenu from '../../components/CardMoreMenu';

const MENU_LIST_USER = [
    {
        text: 'Account',
        imageSource: require('../../../assets/images/icons/defaultAvatarProfile.png'),
        onPress: () => {}
    },
    {
        text: 'Chats',
        imageSource: require('../../../assets/images/icons/chats.png'),
        onPress: () => {}
    },
];

const MENU_LIST_APP_SETTING = [
    {
        text: 'Appereance',
        imageSource: require('../../../assets/images/icons/appereance.png'),
        onPress: () => {}
    },
    {
        text: 'Notification',
        imageSource: require('../../../assets/images/icons/bell.png'),
        onPress: () => {}
    },
    {
        text: 'Privacy',
        imageSource: require('../../../assets/images/icons/shield.png'),
        onPress: () => {}
    },
    {
        text: 'Data Usage',
        imageSource: require('../../../assets/images/icons/folder.png'),
        onPress: () => {}
    },
];

const MENU_LIST_OTHER = [
    {
        text: 'Help',
        imageSource: require('../../../assets/images/icons/questionMark.png'),
        onPress: () => {}
    },
    {
        text: 'Invite Your Friends',
        imageSource: require('../../../assets/images/icons/inbox.png'),
        onPress: () => {}
    },
];

const MoreScene = () => {
    return (
        <View style={styles.container}>
            <View style={styles.navbar}>
                <Text
                    typography='subheading_1'
                    text='More'
                />
            </View>
            <CardProfile/>
            <View>
                <FlatList
                    keyExtractor={item => item.text}
                    data={MENU_LIST_USER}
                    renderItem={({item}) => (
                        <CardMoreMenu
                            imageSource={item.imageSource}
                            text={item.text}
                            onPress={item.onPress}
                        />    
                    )}
                    ItemSeparatorComponent={() => <View style={styles.separatorMenuList} />}
                    style={styles.menuListUser}
                />
            </View>
            <View>
                <FlatList
                    keyExtractor={item => item.text}
                    data={MENU_LIST_APP_SETTING}
                    renderItem={({item}) => (
                        <CardMoreMenu
                            imageSource={item.imageSource}
                            text={item.text}
                            onPress={item.onPress}
                        />    
                    )}
                    ItemSeparatorComponent={() => <View style={styles.separatorMenuList} />}
                    style={styles.menuListAppSetting}
                />
            </View>
            <View style={styles.separator}/>
            <View>
                <FlatList
                    keyExtractor={item => item.text}
                    data={MENU_LIST_OTHER}
                    renderItem={({item}) => (
                        <CardMoreMenu
                            imageSource={item.imageSource}
                            text={item.text}
                            onPress={item.onPress}
                        />    
                    )}
                    ItemSeparatorComponent={() => <View style={styles.separatorMenuList} />}
                />
            </View>
        </View>
    );
};

export default MoreScene;
