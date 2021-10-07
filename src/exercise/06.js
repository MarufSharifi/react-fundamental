import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [value, setValue] = React.useState('')

  const inputRef = React.useRef(null)
  const handleSubmit = event => {
    event.preventDefault()
    console.dir(event.target)
    onSubmitUsername(value)
    // onSubmitUsername(inputRef.current.value)
    // onSubmitUsername(event.target.username.value)
  }

  function inputHandler(event) {
    setValue(event.target.value.toLowerCase())
    // event.target.value = event.target.value.toLowerCase()
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          value={value}
          ref={inputRef}
          id="username"
          type="text"
          onChange={inputHandler}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
