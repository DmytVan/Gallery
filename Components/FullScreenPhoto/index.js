import React, {useState} from 'react';
import {
    StyleSheet,
    View,
    Image,
    TouchableHighlight,
    Text
} from 'react-native';
import {connect} from 'react-redux';

function FullScreenPhoto({urlsPhoto, navigation}) {
    const [showNavBar, handleShowNavBar] = useState(false);
    const [isPhotoLoad, handleLoad] = useState(false);
    navigation.setOptions({ headerShown: showNavBar });
    if (!urlsPhoto) {
        navigation.navigate('Gallery');
        return null;
    }

    return (
        <View>
            {isPhotoLoad ? (<Text>Loading...</Text>) : null}
            <TouchableHighlight
                underlayColor="white"
                onPress={()=> {handleShowNavBar(!showNavBar)}}>
            <Image resizeMode="contain"
                   style={styles.photo}
                   resizeMethod="resize"
                   onLoadStart={()=> {handleLoad(true)}}
                   onLoadEnd={()=> {handleLoad(false)}}
                   source={{
                       uri: urlsPhoto.full,
                   }}/>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    photo: {
        width: '100%',
        height: '100%'
    }
});

const mapStateToProps = (state) => {
    return {
        urlsPhoto: state.photosReducer.selectedPhoto
    };
};

export default connect(mapStateToProps)(FullScreenPhoto);