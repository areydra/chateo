import { StyleSheet } from 'react-native';
import colors from '../../themes/colors';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    containerFirst: {
        marginRight: 12,
    },
    containerMiddle: {
        flex: 1,
    },
    containerLatest: {
        alignItems: 'flex-end',
    },
    totalUnreadMessages: {
        backgroundColor: colors.brand.background,
        borderRadius: 50,
        width: 24,
        height: 24,
        justifyContent: 'center',
    },
    textTotalUnreadMessages: {
        textAlign: 'center',
    },
    textTime: {
        marginBottom: 10,
    },
});

export default styles;