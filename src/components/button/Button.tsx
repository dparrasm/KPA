import './Button.css'

interface ButtonProps {
  text: string
  color: string
  type: string
}

export default function Button({
  text,
  color,
  type
}: ButtonProps): JSX.Element {
  const buttonStyle = {
    backgroundColor: color,
    color: 'white'
  }

  return (
    <button className="button" style={buttonStyle} type={type}>
      {text}
    </button>
  )
}
