import { ReactNode } from 'react'
import { OptionType } from '@/components/MySelect/types'

export interface UserModel {
  address?: string
  dateOfBirth?: string
  email: string
  name?: string
  password?: string
  phone?: string
  role?: string
}

export enum Role {
  EMPLOYER = 'employer',
  FREELANCER = 'freelancer',
  AGENCY = 'agency'
}
export type TOnboardProcess = {
  children?: ReactNode
  currentStep?: string | null
  displayArrowNext?: boolean
  disabledArrowNext?: boolean
  displayArrowPrev?: boolean
  disabledArrowPrev?: boolean
  totalStep?: string
  goBack?: () => void
  goNext?: () => void
}

export enum EJobType {
  DEVELOPER = 'Developer',
  DESIGNER = 'Designer',
  QUALITY_CONTROLLER = 'Quality Controller'
}
enum EExperienceYear {
  FRESHER = 1,
  JUNIOR = 3,
  MID_SENIOR = 5,
  SENIOR = 10,
  EXPERT = 11
}
export type TExperienceLevel = {
  color: string | ''
  label: string | ''
  subLabel: string | ''
  value: string | EExperienceYear | ''
}

export type TSkill = {
  label: string
  value: string
}
export enum TIsonboard {
  FALSE = 'false',
  TRUE = 'true'
}
export interface IUserProfile {
  _id?: string
  code?: string
  fullname?: string
  companyName?: any
  email?: string
  emailVerify?: any
  emailVerifyCode?: any
  phoneVerify?: any
  isWhatsapp?: any
  passwordPrevious?: any
  passwordHash?: string
  userRole?: string
  merchantCode?: any
  verifyExpiredAt?: any
  createdAt?: Date
  updatedAt?: Date

  address?: string
  avatar?: string
  experienceLevel?: TExperienceLevel['label'] | string | number
  expertise?: string | ''
  isOnboard?: TIsonboard
  nationality?: string
  occupation?: string
  phone?: string | ''
  phoneCode?: string | ''
  portfolio?: string | ''
  portfolioResume?: File
  portfolioResumeFileName?: string
  professional: EJobType | ''
  role?: Role | ''
  hourlyRate?: string | ''
  monthlyRate?: string | ''
  skills?: TSkill[] | []
  describeYourself?: string
}
export interface IAgencyProfile {
  isOnboard?: TIsonboard
  logo?: string
  location?: number | string | OptionType | OptionType[]
  industry?: number | string | OptionType | OptionType[]
  size?: number | string | OptionType | OptionType[]
  describeYourself?: string
}

export type TProfileStep1 = {
  professional?: EJobType
}
export type TProfileStep2 = {
  experienceLevel?: TExperienceLevel['label'] | string | number
  isOnboard?: TIsonboard | ''
  portfolio?: string | ''
  portfolioResume?: File
  portfolioResumeFileName?: string
}
export type TProfileStep3 = {
  avatar?: string
  describeYourself?: string
  hourlyRate?: string | ''
  monthlyRate?: string | ''
  occupation?: string
  skills?: TSkill[] | []
}
export type TProfileStep4 = {
  professional?: EJobType
}
export type TProcessStep = {
  currentStep: string
  profileStore: IUserProfile
  totalStep: string
  handleSetData: (data?: TProfileStep1 | TProfileStep2 | TProfileStep3 | TProfileStep4) => void
  handleSetStep: (
    step: string,
    data?: TProfileStep1 | TProfileStep2 | TProfileStep3 | TProfileStep4
  ) => void
}
