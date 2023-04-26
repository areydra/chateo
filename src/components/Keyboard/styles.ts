import { StyleSheet } from 'react-native';
import colors from '../../themes/colors';

const styles = StyleSheet.create({
    containerKeyboard: {
        paddingBottom: 24,
        backgroundColor: colors.neutral.offWhite,
    },
    containerLineKeyboard: {
        flexDirection: 'row',
    },
    containerTextKeyboard: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 54,
    },
    textKeyboard: {
        color: colors.neutral.active,
        textAlign: 'center',
    },
    image: {
        width: 32,
        height: 32,
        resizeMode: 'contain',
    },
});

export default styles;