import "./style.css";

import UserAvatarComponent from "../userAvatar";

export default function NavbarComponent() {
  return (
    <div className="navbar-component-content">
      <h3>Bem vindo à sua lista de tarefas</h3>
      <UserAvatarComponent />
    </div>
  );
}
