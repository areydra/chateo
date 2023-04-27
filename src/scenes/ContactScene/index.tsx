import React from 'react';
import { FlatList, Image, View } from 'react-native';

import Text from '../../components/Text';
import CardUser from '../../components/CardUser';

import styles from './styles';
import Search from '../../components/Search';

const DUMMY_CONTACTS = [
    {
        id: 1,
        name: 'Athalia Putri',
        initialName: 'AP',
        status: 'Last seen yesterday',
        isOnline: false,
        isHasUnreadStory: false,
    },
    {
        id: 2,
        name: 'Areydra Desfikriandre',
        initialName: 'AD',
        status: 'Online',
        isOnline: true,
        isHasUnreadStory: true,
    }
];

const ContactScene = () => {
    return (
        <View style={styles.container}>
            <View style={styles.navbar}>
                <Text
                    typography='subheading_1'
                    text='Contacts'
                />
                <Image
                    source={require('../../../assets/images/icons/plus.png')}
                    style={styles.imagePlus}
                />
            </View>
            <Search style={styles.search}/>
            <View style={styles.contactList}>
                <FlatList
                    data={DUMMY_CONTACTS}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({item}) => (
                        <CardUser
                            title={item.name}
                            description={item.status}
                            initialName={item.initialName}
                            isOnline={item.isOnline}
                            isHasUnreadStory={item.isHasUnreadStory}
                            onPress={() => {}}
                        />                            
                    )}
                    ItemSeparatorComponent={() => <View style={styles.separator}/>}
                    ListFooterComponent={() => <View style={styles.footer}/>}
                />
            </View>
        </View>
    )
};

export default ContactScene;
