import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableHighlight
} from 'react-native';
import AuthorBar from '../AuthorBar'

const Item = ({item, navigation, selectPhoto}) => {
    const handlePress = () => {
        selectPhoto(item.urls);
        navigation.navigate('Photo');
    };
    return (
        <View style={{marginBottom: 10}}>
            <AuthorBar author={item.user} />
            <TouchableHighlight
                underlayColor="white"
                onPress={handlePress}>
                <Image
                    resizeMode="contain"
                    style={styles.photo}
                    resizeMethod="resize"
                    source={{
                        uri: item.urls.thumb,
                    }}
                />
            </TouchableHighlight>
            <Text style={styles.description}>{item.description}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    photo: {
        width: '100%',
        height: 150,
        marginBottom: 10
    },
    description: {
        borderBottomWidth: 3,
        borderBottomColor: '#E8E8E8',
        paddingLeft: 10,
        paddingBottom: 5
    }
});

export default Item;