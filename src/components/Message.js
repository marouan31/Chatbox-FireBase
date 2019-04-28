import React from 'react'

const Message = ({message, pseudo,isUser}) => {
  if(isUser(pseudo)){
  return (
    <p className="user-message">
      {message}
    </p>
  )
}else {
  return (
    <p className="not-user-message">
      <strong>{pseudo}</strong> : {message}
    </p>
  )
}

}

export default Message
