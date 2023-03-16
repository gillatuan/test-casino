import { Button } from 'antd'

import Image from 'next/image'
import { memo } from 'react'
import { isEqual } from 'lodash'

import { TMyButton } from 'src/components/MyButton/types'

const MyButton = (props: TMyButton) => {
  const {
    className = 'w-full app-button',
    disabled = false,
    iconLeft,
    iconRight,
    label,
    labelStyle,
    type,
    handleClick
  } = props

  return (
    <Button className={className} disabled={disabled} type={type} onClick={handleClick}>
      {iconLeft && <Image className='mr-[10px]' src={iconLeft} alt='icon left' />}
      {label && <span className={labelStyle}>{label}</span>}
      {iconRight && <Image className='ml-[19px]' src={iconRight} alt='icon right' />}
    </Button>
  )
}

const checkEqual = (prevProps: TMyButton, nextProps: TMyButton) => {
  if (isEqual(prevProps.disabled, nextProps.disabled)) {
    return true
  }
  return false
}

export const MyButtonMemoize = memo(MyButton, checkEqual)
