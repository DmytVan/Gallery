import React, {useEffect} from 'react';
import {
    View,
    Text,
    FlatList
} from 'react-native';
import {connect} from 'react-redux';
import {photosFetchData, selectPhoto} from "../../Store/Photos/actions";
import Item from './Item';


function PhotosList(props) {
    const {fetchData, photos, hasErrored, isLoading, navigation, selectPhoto} = props;
    useEffect(() => {
        fetchData('https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0');
    }, [fetchData]);

    if (hasErrored) {
        return <Text>Error fetch data</Text>
    }

    if (isLoading) {
        return <Text>Loading...</Text>
    }

    return (
        <View>
            <FlatList data={photos}
                      renderItem={({item}) => <Item item={item} navigation={navigation} selectPhoto={selectPhoto}/>}
            />
        </View>
    )
}


const mapStateToProps = (state) => {
    return {
        photos: state.photosReducer.photos,
        hasErrored: state.photosReducer.hasErrored,
        isLoading: state.photosReducer.isLoading,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(photosFetchData(url)),
        selectPhoto: (urls) => dispatch(selectPhoto(urls))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotosList);
