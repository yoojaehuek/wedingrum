import { atom } from "recoil";
import { recoilPersist } from 'recoil-persist';
import dayjs from 'dayjs';

const { persistAtom } = recoilPersist();

export const loginState = atom({
  key: 'loginState',
  default: false,
  effects_UNSTABLE: [persistAtom],
})

export const startDateState = atom({
  key: 'startDateState',
  default: '2023-11-17',
})


export const timeState = atom({
  key: 'timeState',
  default: '',
})

export const monthState = atom({
  key: 'monthState',
  default: '',
})

export const pointState = atom({
  key: 'pointState',
  default: '',
})

export const contactChoiceState = atom({
  key: 'contactChoiceState',
  default: '',
})

export const themeState = atom({
  key: 'themeState',
  default: '',
})
