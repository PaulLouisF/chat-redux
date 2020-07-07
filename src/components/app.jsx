import React from 'react';
import MessageList from '../containers/message_list';


const App = () => {
  return (
    <div className="messaging-wrapper">
      <div className="logo-container">
      </div>
      <div className="channels-container">General</div>

      <MessageList />


    </div>
  );
};

export default App;



//       <div className="channel-container">
//         <div className="message">
//           <MessageList />
//         </div>
//         <div className="send-message">
//           <MessageForm />
//         </div>
//       </div>

//     </div>
//   );
// };
