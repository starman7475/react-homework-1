import React from "react";
import friends from "./friends.json";
import css from "./Friends.module.css";

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li class="item">
      <span className={isOnline ? css.statusOnline : css.statusOffline}></span>
      <img class="avatar" src={avatar} alt="User avatar" width="48" />
      <p class="name">{name}</p>
    </li>
  );
};
