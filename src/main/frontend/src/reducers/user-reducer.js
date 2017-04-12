import * as ActionTypes from '../actions/user-constants';

const DEFAULT_STATE = {
    announcements: [],
    favouriteAnnouncements: {
        data: [],
        loaded: false,
        pending: false
    },
    data: {
        phones: [],
        emails: []
    },
    loaded: false
};

export default (state = DEFAULT_STATE, action) => {

    if (action.type === ActionTypes.GET_USER_REQUEST) {
        return {...state, loaded: false};
    }

    if (action.type === ActionTypes.GET_USER_SUCCESS) {
        return {...state, data: action.response, loaded: true};
    }

    if (action.type === ActionTypes.GET_USER_FAILURE) {
        return {...state, loaded: false};
    }

    if (action.type === ActionTypes.GET_FAVOURITE_ANNOUNCEMENTS_REQUEST) {
        return {...state, favouriteAnnouncements: {loaded: false, pending: true}};
    }

    if (action.type === ActionTypes.GET_FAVOURITE_ANNOUNCEMENTS_SUCCESS) {
        return {...state,  favouriteAnnouncements: {data: action.response, loaded: true, pending: false}};
    }

    if (action.type === ActionTypes.GET_FAVOURITE_ANNOUNCEMENTS_FAILURE) {
        return {...state, favouriteAnnouncements:{loaded: false, pending: false}};
    }



    if (action.type === ActionTypes.ADD_FAVOURITE_ANNOUNCEMENT_REQUEST) {
        return {...state, favouriteAnnouncements: {pending: true}};
    }

    if (action.type === ActionTypes.ADD_FAVOURITE_ANNOUNCEMENT_SUCCESS) {
        return {...state,  favouriteAnnouncements: {...state.favouriteAnnouncements, pending: false}};
    }

    if (action.type === ActionTypes.ADD_FAVOURITE_ANNOUNCEMENT_FAILURE) {
        return {...state, favouriteAnnouncements:{pending: false}};
    }




    if (action.type === ActionTypes.DELETE_FAVOURITE_ANNOUNCEMENT_REQUEST) {
        return {...state, favouriteAnnouncements: {loaded: false, pending: true}};
    }

    if (action.type === ActionTypes.DELETE_FAVOURITE_ANNOUNCEMENT_SUCCESS) {
        return {...state,  likedAnnouncements: {data: state.user.likedAnnouncements.data.filter(obj => obj.id !== action.response.id), loaded: false, pending: false}};
    }

    if (action.type === ActionTypes.DELETE_FAVOURITE_ANNOUNCEMENT_FAILURE) {
        return {...state, likedAnnouncements:{loaded: false, pending: false}};
    }





    if (action.type === ActionTypes.UPDATE_USER_REQUEST) {
        return {...state, loaded: false};
    }

    if (action.type === ActionTypes.UPDATE_USER_SUCCESS) {
        return {...state, data: action.response, loaded: true};
    }

    if (action.type === ActionTypes.UPDATE_USER_FAILURE) {
        return {...state, loaded: false};
    }

    if (action.type === ActionTypes.GET_USER_ANNOUNCEMENTS_REQUEST) {
        return {...state, loaded: false};
    }

    if (action.type === ActionTypes.GET_USER_ANNOUNCEMENTS_SUCCESS) {
        return {...state, announcements: action.response, loaded: true};
    }

    if (action.type === ActionTypes.GET_USER_ANNOUNCEMENTS_FAILURE) {
        return {...state, loaded: false};
    }

    if (action.type === ActionTypes.DELETE_USER_ANNOUNCEMENTS_REQUEST) {
        return {...state, loaded: false};
    }

    if (action.type === ActionTypes.DELETE_USER_ANNOUNCEMENTS_SUCCESS) {
        return {...state, announcements: state.user.announcements.filter(obj => obj.id !== action.response.id), loaded: true};
    }

    if (action.type === ActionTypes.DELETE_USER_ANNOUNCEMENTS_FAILURE) {
        return {...state, loaded: false};
    }

    return state;
};
