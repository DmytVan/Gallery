import React, {useCallback} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableHighlight,
    Linking
} from 'react-native';

function AuthorBar({author}) {
    const handlePress = useCallback(async () => {
        const supported = await Linking.canOpenURL(author.links.html);
        if (supported) {
            await Linking.openURL(author.links.html);
        }
    }, [author.links.html]);


    return (
        <TouchableHighlight
            underlayColor="white"
            onPress={() => {handlePress()}}>
            <View style={styles.flexContainer}>
                <Image resizeMode="contain"
                       style={styles.profileImage}
                       source={{
                           uri: author.profile_image.small
                       }}/>
                <Text style={{marginLeft: 10}}>{author.username}</Text>
            </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    profileImage: {
        width: 30,
        height: 30,
        borderRadius: 50
    },
    flexContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
        marginBottom: 5,
        paddingLeft: 5
    }
});

export default AuthorBar;

