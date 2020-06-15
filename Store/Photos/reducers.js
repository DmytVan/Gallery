import  {PHOTOS_HAS_ERRORED,
         PHOTOS_IS_LOADING,
         PHOTOS_FETCH_DATA_SUCCESS,
         SELECT_PHOTO} from './actions';

const initialState = {
    photos: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case PHOTOS_HAS_ERRORED:
            return {...state, hasErrored : action.hasErrored};
        case PHOTOS_IS_LOADING:
            return {...state, isLoading : action.isLoading};
        case PHOTOS_FETCH_DATA_SUCCESS:
            return {...state, photos: action.photos};
        case SELECT_PHOTO:
            return {...state, selectedPhoto: action.urls};
        default:
            return state;
    }
};

export default reducer;