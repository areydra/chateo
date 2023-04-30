import { StyleSheet } from 'react-native';
import colors from '../../themes/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.neutral.white,
    },
    containerContent: {
        flex: 1,
        paddingHorizontal: 16,
        backgroundColor: colors.neutral.offWhite,
    },
    navbar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 8,
        paddingHorizontal: 16,
        paddingVertical: 14,
    },
    navbarImage: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    imageChatPlus: {
        width: 24,
        height: 24,
        marginRight: 8,
        resizeMode: 'contain',
    },
    imageSelect: {
        width: 24,
        height: 24,
        resizeMode: 'contain',
    },
    imageArrowBack: {
        width: 24,
        height: 24,
        marginRight: 8,
        resizeMode: 'contain',
    },
    containerFlashList: {
        paddingTop: 12
    },
    separatorFlashList: {
        height: 12,
    },
    imagePlusGrey: {
        width: 24,
        height: 24,
        resizeMode: 'contain',
    },
    imageSend: {
        width: 24,
        height: 24,
        resizeMode: 'contain',
    },
    textInputMessage: {
        flex: 1,
        paddingVertical: 6,
        paddingHorizontal: 8,
        borderRadius: 4,
        marginHorizontal: 12,
    },
});

export default styles;
