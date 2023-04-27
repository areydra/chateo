import { StyleSheet } from 'react-native';
import colors from '../../themes/colors';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    containerFirst: {
        width: 56,
        height: 56,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 12,
        borderRadius: 16,
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
    defaultImage: {
        backgroundColor: colors.brand.light,
        width: 52,
        height: 52,
        borderWidth: 2,
        borderRadius: 16,
        borderColor: colors.neutral.white,
        justifyContent: 'center',
    },
    textDefaultImage: {
        fontSize: 14,
        lineHeight: 24,
        textAlign: 'center',
    },
    textTime: {
        marginBottom: 10,
    },
    online: {
        backgroundColor: colors.accent.success,
        width: 16,
        height: 16,
        borderRadius: 16,                                
        borderWidth: 2,
        borderColor: colors.neutral.white,
        position: 'absolute',
        top: 0,
        right: 0,
    },
});

export default styles;