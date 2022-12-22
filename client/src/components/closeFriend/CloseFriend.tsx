import { IUser } from "../../@types/types";
import "./closeFriend.css";

export default function CloseFriend({username, profilePicture}: IUser) {

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <li className="sidebarFriend">
      <img className="sidebarFriendImg" src={PF+ profilePicture} alt="" />
      <span className="sidebarFriendName">{username}</span>
    </li>
  );
}
