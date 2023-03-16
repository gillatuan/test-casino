import { ReactElement, ReactNode } from 'react'

export type TMyButton = {
  className?: string
  disabled?: boolean
  labelStyle?: string
  iconLeft?: string
  iconRight?: string
  label?: string | ''
  type?: 'link' | 'text' | 'ghost' | 'default' | 'primary' | 'dashed'
  handleClick: () => void
}
