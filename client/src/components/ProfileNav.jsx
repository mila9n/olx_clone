import { Link, useLocation } from "react-router-dom";
import { ProfileNavStyle } from "./style/ProfileNav.style";

const ProfileNav = () => {
  let pathName = useLocation().pathname;

  return (
    <ProfileNavStyle>
      <Link
        to={"/profile"}
        className={pathName == "/profile" ? "selected" : null}
      >
        My Products
      </Link>
      <Link
        to={"/profile/likedProduct"}
        className={pathName == "/profile/likedProduct" ? "selected" : null}
      >
        Liked
      </Link>
    </ProfileNavStyle>
  );
};

export default ProfileNav;
