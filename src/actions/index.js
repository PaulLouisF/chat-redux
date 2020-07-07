// TODO: add and export your own actions

export function setMessages() {
  // TODO: API call! For now, simulate a DB
  return fetch('https://wagon-chat.herokuapp.com/301/messages')
    .then(response => response.json())
    .then((data) => {
      return {
        type: 'SET_MESSAGES',
        payload: data.messages
      };
    });
}

export function createMessage(author, content) {
  const body = { author: author, content: content };
  console.log(body);
  const url = `https://wagon-chat.herokuapp.com/301/messages`;
  const promise = fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(r => r.json());

  return {
    type: 'MESSAGE_POSTED',
    payload: promise
  };
}
