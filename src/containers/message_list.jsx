import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setMessages } from '../actions';

import Message from '../components/message';
import MessageForm from '../containers/message_form';

class MessageList extends Component {

  // componentWillMount() {
  //   this.props.setMessages();
  // }

  componentDidMount() {
    // this.refresher = window.setInterval(this.props.setMessages, 5000);
    this.props.setMessages();

  }

  // componentWillUnmount() {

  // }

  render() {
    return (
      <div className="channel-container">
        <div className="channel-title">Channel #General</div>
        <div className="channel-content">
          {this.props.messages.map((message) => {
            return <Message key={message.content} message={message} />
          })}
        </div>
        <MessageForm />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setMessages },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    messages: state.messages
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
