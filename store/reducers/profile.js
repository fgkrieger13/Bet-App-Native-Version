import PROFILE from '../../data/dummy-data';



const initialState = {
    user:  PROFILE,
    userProfile: PROFILE.filter(user => user.id === '1')
};

export default (state = initialState, action) => {
    return state;
}