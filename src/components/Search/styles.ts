import { StyleSheet } from 'react-native';
import colors from '../../themes/colors';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: colors.neutral.offWhite,
        alignItems: 'center',
        borderRadius: 4,
        marginTop: 30,
    },
    textInputSearch: {
        flex: 1,
        height: 36,
        borderRadius: 4,
    },
    imageSearch: {
        width: 24,
        height: 24,
        resizeMode: 'contain',
        marginHorizontal: 8,
        marginVertical: 6,
    },
});

export default styles;
