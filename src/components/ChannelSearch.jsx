import { getSuggestedQuery } from "@testing-library/dom";
import React, { useState, useEffect } from "react";
import { useChatContext } from "stream-chat-react";

import { SearchIcon } from "../assets";
const ChannelSearch = () => {
    const [query, setQuery] = useState('')
    const [loading, setLoading] = useState(false)
    const getChannels = async (text) => {
        try {
            //TODO: fetch channels
        } catch (error) {
            setQuery('')
        }
    }
    const onSearch = (event) => {
        event.preventDefault();

        setLoading(true);
        getChannels(event.target.value)
    }
  return (
    <div className="channel-search__container">
      <div className="channelsearch__input__icon">
        <SearchIcon />
      </div>
      <input
        type="text"
        className="channel-search__input__text"
        placeholder="Search"
        onChange={onSearch}
        value={query}
      />
    </div>
  );
};

export default ChannelSearch;
