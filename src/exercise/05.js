import * as React from 'react'
import '../box-styles.css'

function App() {
  return (
    <div>
      <Box size="small" style={{backgroundColor: 'lightBlue'}}>
        small lightblue box
      </Box>
      <Box size="medium" style={{backgroundColor: 'pink'}}>
        medium pink box
      </Box>
      <Box size="large" style={{backgroundColor: 'orange'}}>
        large orange box
      </Box>
    </div>
  )
}

function Box({size, style, ...rest}) {
  const sizeClassName = size ? `box--${size}` : ''
  return (
    <div
      className={`box ${sizeClassName}`}
      style={{fontStyle: 'italic', ...style}}
      {...rest}
    ></div>
  )
}

export default App
