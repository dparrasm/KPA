import React, { useState, ReactNode, ReactElement } from 'react'
import Button from '../button/Button'
import './Form.css'

interface FormProps {
  initialValues?: { [key: string]: string }
  onSubmit: (values: { [key: string]: string }) => void
  children: ReactNode
}

interface FormElementProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  value: string
}

export default function Form({ initialValues, onSubmit, children }: FormProps) {
  const [values, setValues] = useState<{ [key: string]: string }>(
    initialValues || {}
  )

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setValues({ ...values, [name]: value })
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onSubmit(values)
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as ReactElement<FormElementProps>, {
            onChange: handleChange,
            value: values[child.props.name] || ''
          })
        }
        return child
      })}
      <Button text="Submit" color="#2f73e8" type="submit" />
    </form>
  )
}
