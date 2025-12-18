import { useState } from "react"

export default function Header({ onSearch }) {
  const [value, setValue] = useState("")

  function handleChange(e) {
    const text = e.target.value
    setValue(text)
    onSearch(text)
  }

  return (
    <div className="header">
      <input
        type="text"
        placeholder="Search for movies or TV series"
        value={value}
        onChange={handleChange}
      />
    </div>
  )
}
