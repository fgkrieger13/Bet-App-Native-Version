import PROFILE from '../../data/dummy-data';



const initialState = {
    user:  PROFILE,
    userProfile: PROFILE.filter(bet => bet.userId === '1')
};

export default (state = initialState, action) => {
    return state;
}