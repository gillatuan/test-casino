import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { IUserProfile, UserModel } from '@/types/user.type'
import user from './user.slice'
import profile from './profile.slice'

export interface StoreModel {
  user: UserModel
  profile: IUserProfile
}

export default configureStore({
  reducer: combineReducers({
    user: user,
    profile
  })
})
