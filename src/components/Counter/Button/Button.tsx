import React from 'react'
import styles from './Button.module.css'

type ButtonType = {
  title: string
  action: () => void
  disabled: boolean
}

const Button = (props: ButtonType) => {
  return (
    <button
      onClick={props.action}
      disabled={props.disabled}
      className={props.disabled === true ? `${styles.btnDisabled}` : ''}
    >
      {props.title}
    </button>
  )
}

export default Button;