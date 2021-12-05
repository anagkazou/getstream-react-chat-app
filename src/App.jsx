import React from "react";
import { StreamChat } from "stream-chat";
import { Chat } from "stream-chat-react";
import Cookies from "universal-cookie/es6";

import { ChannelListContainer, ChannelContainer } from "./components";

import './App.css'

//TODO: Store this key in ENV file
const apiKey = "v5r44zjnwr2y";

const client = StreamChat.getInstance(apiKey)
const App = () => {
  return (
    <div className="app__wrapper">
      <Chat client ={client} theme ="team dark">
          <ChannelListContainer>
                <ChannelContainer/>
                
          </ChannelListContainer>
      </Chat>
    </div>
  );
};

export default App;
