import { ss } from '@/utils/storage'

const LOCAL_NAME = 'userStorage'

export interface UserInfo {
  avatar: string
  name: string
  description: string
}

export interface UserState {
  userInfo: UserInfo
}

export function defaultSetting(): UserState {
  return {
    userInfo: {
      avatar: 'https://img.alicdn.com/imgextra/i4/333145399/O1CN011ZFZkQ1pknAUUQJuj_!!333145399.jpg',
      name: '科技源代码',
      description: '查看<a href="https://fk.czfl.xyz" class="text-blue-500" target="_blank" >源码</a>',
    },
  }
}

export function getLocalState(): UserState {
  const localSetting: UserState | undefined = ss.get(LOCAL_NAME)
  return { ...defaultSetting(), ...localSetting }
}

export function setLocalState(setting: UserState): void {
  ss.set(LOCAL_NAME, setting)
}
