// atom - state 
import { atom } from 'recoil'

export let AuthAtom = new atom({
   default: {
       isAuth: false,
       userInfo: null
   },
   // for every atom the key should be unique
   // it defines atom through app
   key: "AUTH_ATOM"
})