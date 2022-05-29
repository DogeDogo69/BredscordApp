import Chatkit from '@pusher/chatkit-client';
    import axios from 'axios';

    function handleKeyPress(event) {
      if (event.key === 'Enter') {
        event.preventDefault();
        this.sendMessage();
      }
    }

    // [..]

    function sendMessage() {
      const { newMessage, currentUser, currentRoom } = this.state;

      if (newMessage.trim() === '') return;

      currentUser.sendMessage({
        text: newMessage,
        roomId: `${currentRoom.id}`,
      });

      this.setState({
        newMessage: '',
      });
    }

    export { sendMessage, handleInput, connectToRoom, connectToChatkit, sendDM, toggleEmojiPicker, addEmoji, handleKeyPress };
