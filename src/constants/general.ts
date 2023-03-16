import { TSelectOption } from 'src/components/MySelect/types'
import {
  IAgencyProfile,
  IUserProfile,
  TExperienceLevel,
  TIsonboard,
  TOnboardProcess
} from 'src/types/user.type'

export const Profile_Process_Step: TOnboardProcess = {
  currentStep: '1',
  displayArrowNext: false,
  displayArrowPrev: false,
  totalStep: '4'
}

export const Profile_Experiences: TExperienceLevel[] = [
  {
    color: 'blue-primary',
    value: 'Fresher',
    label: 'Fresher',
    subLabel: '<1 year'
  },
  {
    color: 'green-primary',
    value: 'Junior',
    label: 'Junior',
    subLabel: '1-3 years'
  },
  {
    color: 'yellow-primary',
    value: 'Mid-Senior',
    label: 'Mid-Senior',
    subLabel: '3-5 years'
  },
  {
    color: 'orange-primary',
    value: 'Senior',
    label: 'Senior',
    subLabel: '5-10 years'
  },
  {
    color: 'red-primary',
    value: 'Expert',
    label: 'Expert',
    subLabel: '>10 years'
  }
]

export const FILE_RESUME_SIZE_LIMIT = 10 * 1024 * 1024
export const AVATAR_SIZE_LIMIT = 1.5 * 1024 * 1024

const Default_Skills: IUserProfile['skills'] = [
  {
    label: 'Skill a',
    value: 'a'
  },
  {
    label: 'Skill B',
    value: 'b'
  }
]
export const Default_Profile_Data: IUserProfile = {
  isOnboard: TIsonboard.FALSE,
  professional: ''
}

export const Profile_List_Item = ['Find work opportunities', 'Work on jobs/projects', 'Get paid!']

export const Default_Profile_Agency_Data: IAgencyProfile = {}
export const List_Location: TSelectOption[] = [
  {
    label: 'Viet Nam',
    value: '1'
  },
  {
    label: 'Singapore',
    value: '2'
  }
]
export const List_Industry: TSelectOption[] = [
  {
    label: 'Outsource',
    value: '1'
  },
  {
    label: 'Product',
    value: '2'
  }
]
export const List_Size: TSelectOption[] = [
  {
    label: '< 10',
    value: '< 10'
  },
  {
    label: '< 50',
    value: '< 50'
  }
]

export const Default_Paging = {
  page: 1,
  recordPerPage: 10
}

export const List_Timezone: TSelectOption[] = [
  {
    label: 'Singapore Time (GMT+8)',
    value: 'sing'
  }
]
