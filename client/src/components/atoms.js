import { atom } from 'recoil'

export const blogsAtom = atom({
    key: 'blogs',
    default: []
});

export const signupAtom = atom({
    key: 'signup',
    default: false
});

export const errorsAtom = atom({
    key: 'errors',
    default: []
});

