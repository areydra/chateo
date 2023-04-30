import { StyleSheet } from 'react-native';
import colors from '../../themes/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.neutral.white,
    },
    containerContent: {
        flex: 1,
        marginHorizontal: 24,
    },
    navbar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 8,
        marginHorizontal: 24,
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
    search: {
        marginTop: 30,
    },
    separator: {
        backgroundColor: colors.neutral.line,
        height: 1,
        marginTop: 12,
        marginBottom: 16,
    },
    footer: {
        backgroundColor: colors.neutral.line,
        height: 1,
        marginTop: 12,
    },
    contactList: {
        marginTop: 16,
    },
    containerStories: {
        borderBottomWidth: 1,
        borderBottomColor: colors.neutral.line,
        paddingTop: 20,
        paddingBottom: 16,
        paddingHorizontal: 24,
        flexDirection: 'row',
    },
    containerAddNewStory: {
        maxWidth: 56,
        marginRight: 16,
    },
    innerContainerAddNewStory: {
        width: 56,
        height: 56,
        borderRadius: 18,
        borderWidth: 2,
        borderColor: colors.neutral.disabled,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.neutral.offWhite,
        marginRight: 16,
    },
    imageAddNewStory: {
        width: 24,
        height: 24,
        resizeMode: 'contain',
    },
    textAddNewStory: {
        textAlign: 'center',
        marginTop: 4,
    },
    cardStory: {
        marginRight: 16,
    },
});

export default styles;
