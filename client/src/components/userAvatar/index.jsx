import "./style.css";

import userAvatar from "../../assets/images/user-avatar.png";

export default function UserAvatarComponent() {
  return (
    <div className="user-avatar-content">
      <img src={userAvatar} alt="User avatar" />
    </div>
  );
}
