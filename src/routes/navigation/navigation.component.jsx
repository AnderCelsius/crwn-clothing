import { Link, Outlet } from "react-router-dom";
import "./navigation.styles.scss";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { firebase } from "../../utils/firebase/firebase.component";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const {signOutUser} = firebase
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            <div>SHOP</div>
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>SIGN OUT</span>
          ) : (
            <Link className="nav-link" to="/auth">
              <div>SIGN IN</div>
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
