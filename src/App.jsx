import React, { useState } from "react";
import { StreamChat } from "stream-chat";
import { Chat } from "stream-chat-react";
import Cookies from "universal-cookie/es6";

import { ChannelListContainer, ChannelContainer, Auth, ChannelInner } from "./components";

import 'stream-chat-react/dist/css/index.css'
import "./App.css";

//TODO: Store this key in ENV file
const apiKey = "v5r44zjnwr2y";

const cookies = new Cookies();
const client = StreamChat.getInstance(apiKey);

const authToken = cookies.get("token");

if (authToken) {
  client.connectUser(
    {
      name: cookies.get("userName"),
      fullName: cookies.get("fullName"),
      id: cookies.get("userId"),
      phoneNumber: cookies.get("phoneNumber"),
      image: cookies.get("avatarURL"),
      hashedPassword: cookies.get("hashedPassword"),
    },
    authToken
  );
}
const App = () => {
  const [createType, setCreateType] = useState("");
  const [isCreating, setIsCreating] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  if (!authToken) return <Auth />;
  return (
    <div className="app__wrapper">
      <Chat client={client} theme="team dark">
        <ChannelListContainer
          isCreating={isCreating}
          setIsCreating={setIsCreating}
          setCreateType={setCreateType}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
        />
          <ChannelContainer
            isCreating={isCreating}
            setIsCreating={setIsCreating}
            setCreateType={setCreateType}
            isEditing={isEditing}
            setIsEditing={setIsEditing}
            createType={createType}
          />
      </Chat>
    </div>
  );
};

export default App;
