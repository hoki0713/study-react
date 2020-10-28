import React from 'react';

const userInput = (props) => {
  const style = {
    inputStyle: {
      width: '50%',
    }
  }

  return (
    <input style={style.inputStyle} type="text" onChange={props.changeName} value={props.username} />
  )
}

export default userInput;