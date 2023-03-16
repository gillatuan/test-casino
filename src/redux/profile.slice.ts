import { createSlice } from '@reduxjs/toolkit'
import { Default_Profile_Data } from '@/constants/general'
import { IUserProfile } from 'src/types/user.type'

const profileSlice = createSlice({
  name: 'profile',
  initialState: Default_Profile_Data as IUserProfile,
  reducers: {
    setProfileStore: (_state, action: { payload: IUserProfile }) => {
      return action.payload
    }
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
  }
})

export const { setProfileStore } = profileSlice.actions
// Other code such as selectors can use the imported `RootState` type

export default profileSlice.reducer
