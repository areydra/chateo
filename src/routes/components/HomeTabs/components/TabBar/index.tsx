import * as React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { NavigationHelpers, ParamListBase, TabNavigationState } from '@react-navigation/native';
import { BottomTabDescriptorMap, BottomTabNavigationEventMap } from '@react-navigation/bottom-tabs/lib/typescript/src/types';

import Text from '../../../../../components/Text';

import styles from './styles';

interface ITabBar {
    state: TabNavigationState<ParamListBase>;
    descriptors: BottomTabDescriptorMap;
    navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
}

const TAB_BAR_ICON = [
    require('../../../../../../assets/images/tabBarMenu/contacts.png'),
    require('../../../../../../assets/images/tabBarMenu/chats.png'),
    require('../../../../../../assets/images/tabBarMenu/more.png'),
];

const TabBar = ({state, descriptors, navigation}: ITabBar) => (
    <View style={styles.container}>
        {state.routes.map((route, index) => {
            const { options } = descriptors[route.key];
            const label =
            options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.name;

            const isFocused = state.index === index;

            const onPress = () => {
                const event = navigation.emit({
                    type: 'tabPress',
                    target: route.key,
                    canPreventDefault: true,
                });

                if (!isFocused && !event.defaultPrevented) {
                    navigation.navigate({
                        name: route.name,
                        merge: true,
                        params: undefined,
                    });
                }
            };

            return (
                <TouchableOpacity
                    key={index}
                    style={styles.containerButton}
                    onPress={onPress}
                    activeOpacity={0.8}
                >
                    {isFocused ? (
                        <React.Fragment>
                            <Text
                                text={label as string}
                                typography='body_text_1'
                                style={styles.textLabel}
                            />
                            <View style={styles.dot}/>
                        </React.Fragment>
                    ) : (
                        <Image
                            source={TAB_BAR_ICON[index]}
                            style={styles.image}
                        />
                    )}
                </TouchableOpacity>
            );
        })}
    </View>
);

export default TabBar;
