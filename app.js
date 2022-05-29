mport React, { Component } from 'react';
    import { Picker, emojiIndex } from 'emoji-mart';
    import { Smile } from 'react-feather';
    import ReactTextareaAutocomplete from '@webscopeio/react-textarea-autocomplete';

    import {
      // [..]
      handleKeyPress,
    } from './methods';

    // [..]

    class App extends Component {
      constructor() {
        // [..]

        this.handleKeyPress = handleKeyPress.bind(this);
      }

      render() {
        // [..]

        return (
        <div className="App">
            // [..]
            <section className="chat-screen">
              // [..]
              <footer className="chat-footer">
                <form onSubmit={this.sendMessage} className="message-form">
                  <button
                    type="button"
                    className="toggle-emoji"
                    onClick={this.toggleEmojiPicker}
                  >
                    <Smile />
                  </button>
                  <ReactTextareaAutocomplete
                    className="message-input my-textarea"
                    name="newMessage"
                    value={newMessage}
                    loadingComponent={() => <span>Loading</span>}
                    onKeyPress={this.handleKeyPress}
                    onChange={this.handleInput}
                    placeholder="Send a message.."
                    trigger={{
                      ':': {
                        dataProvider: token =>
                          emojiIndex.search(token).map(o => ({
                            colons: o.colons,
                            native: o.native,
                          })),
                        component: ({ entity: { native, colons } }) => (
                          <div>{`${colons} ${native}`}</div>
                        ),
                        output: item => `${item.native}`,
                      },
                    }}
                  />
                </form>
              </footer>
            </section>
            // [..]
          </div>
        );
      }
    }

    export default App;