import React from 'react'

const Wrapper = ({children}) => {
  const style = {
    border: '2px solid black',
    padding: '16px'
  };
  return (
    <div>
      <div style={style}>
        {children}
      </div>  
    </div>
  )
}

export default Wrapper