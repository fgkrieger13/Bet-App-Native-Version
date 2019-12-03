import PROFILE from '../../data/dummy-profile';



const initialState = {
    user:  PROFILE,
    userProfile: PROFILE.filter(profile => profile.id === '1')
};

export default (state = initialState, action) => {
    return state;
}