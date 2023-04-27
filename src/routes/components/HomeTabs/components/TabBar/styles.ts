import { StyleSheet } from 'react-native';
import colors from '../../../../../themes/colors';

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.neutral.white,
        flexDirection: 'row',
        paddingVertical: 18,
        paddingHorizontal: 14,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    containerButton: {
        flex: 1,
        alignItems: 'center',
    },
    textLabel: {
        textAlign: 'center',
    },
    dot: {
        width: 4,
        height: 4,
        borderRadius: 4,
        marginTop: 4,
        backgroundColor: colors.neutral.active,
    },
    image: {
        width: 24,
        height: 24,
        resizeMode: 'contain',
    },
});

export default styles;
