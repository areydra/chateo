import React from 'react';
import { Image, View, ViewStyle } from 'react-native';

import TextInput from '../../components/TextInput';

import styles from './styles';

interface ISearch {
    style?: ViewStyle;
};

const Search = ({ style }: ISearch) => (
    <View style={[styles.container, style]}>
        <Image
            source={require('../../../assets/images/icons/search.png')}
            style={styles.imageSearch}
        />
        <TextInput
            placeholder='Search'
            style={styles.textInputSearch}
        />
    </View>
);

export default Search;
