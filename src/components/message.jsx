import React from 'react';

const Message = (props) => {
  return (
    <div className="">
      <div className="red">{props.message.author} - {props.message.created_at}</div>
      <div>{props.message.content}</div>
    </div>
  );
}

export default Message;
