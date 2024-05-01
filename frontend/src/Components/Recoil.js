import {atom} from 'recoil'

export const State = atom({
    key:'countState', // unique ID (with respect to other atoms/selectors)
    default: 0, // default value (aka initial value)
});

export const popUp = atom({
  key:'popUp', // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});


