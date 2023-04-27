import React from 'react';
import { Image, View } from 'react-native';

import Text from '../../../../components/Text';

import colors from '../../../../themes/colors';
import styles from './styles';

const CardProfile = () => {
    return (
        <View style={styles.container}>
            <View style={styles.innerContainerLeft}>
                <View style={styles.containerImage}>
                    <Image
                        source={require('../../../../../assets/images/icons/defaultAvatarProfile.png')}
                        style={styles.imageProfile}
                    />
                </View>
                <View>
                    <Text
                        text='Areydra Desfikriandre'
                        typography='body_text_1'
                    />
                    <Text
                        text='+ 62 838 - 0710 - 6451'
                        typography='metadata_1'
                        color={colors.neutral.disabled}
                    />
                </View>
            </View>
            <Image
                source={require('../../../../../assets/images/icons/arrowForward.png')}
                style={styles.imageArrowForward}
            />
        </View>
    );
};

export default CardProfile;
