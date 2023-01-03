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

export const currentUserAtom = atom({
    key: 'currentUser',
    default: []
});

export const emailAtom = atom({
    key: 'email',
    default: ''
})

export const passwordAtom = atom({
    key: 'password',
    default: ''
})

export const filteredBlogsAtom = atom({
    key: 'filteredBlogs',
    default: ''
})

export const dropdownValueAtom = atom({
    key: 'value',
    default: 'All'
})
