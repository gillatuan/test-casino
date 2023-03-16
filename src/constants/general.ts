import { ISearchFilter } from '@/types/search.type'
import { IUserProfile, TOnboardProcess, TIsonboard } from 'src/types/user.type'

export const Profile_Process_Step: TOnboardProcess = {
  currentStep: '1',
  displayArrowNext: false,
  displayArrowPrev: false,
  totalStep: '4'
}

export const FILE_RESUME_SIZE_LIMIT = 10 * 1024 * 1024
export const AVATAR_SIZE_LIMIT = 1.5 * 1024 * 1024

export const Default_Paging = {
  page: 1,
  recordPerPage: 10
}
export const Default_Search_Filter_Data: ISearchFilter = {
  ...Default_Paging
}

export const Default_Profile_Data: IUserProfile = {
  isOnboard: TIsonboard.FALSE,
  professional: ''
}
