import React, {useState} from 'react'

type Props = {
  theme: 'light' | 'dark'
  setTheme: React.Dispatch<React.SetStateAction<'light'|'dark'>>
}

const SwitchButton: React.FC<Props> = ({theme, setTheme}: Props ) => {
 const toggle = () => {
  const newTheme = theme === 'light' ? 'dark' : 'light'
  setTheme(newTheme)
  localStorage.setItem('theme', newTheme)
 }

 return (
  <button
   onClick={toggle}
   style={{
   padding: "10px 20px",
   borderRadius: "8px",
   border: "none",
   cursor: "pointer",
   background: theme === "light" ? "#222" : "#fff",
   color: theme === "light" ? "#fff" : "#222",
   }}
  >
  {theme === "light" ? "🌞 Light" : "🌙 Dark"}
  </button>
 );
}

export default SwitchButton