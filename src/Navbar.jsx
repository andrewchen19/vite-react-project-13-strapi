import NavLinks from "./NavLinks";
import { useGlobalContext } from "./context";
import { PiHandTapBold } from "react-icons/pi";

const Navbar = () => {
  const { openSidebar, setPageId } = useGlobalContext();

  const submenuHandler = (e) => {
    // console.log(e.target);

    // logic -> if hover other elements in <nav>, hide submenu
    // classList return class attributes of the element
    // contains() is one of classList methods
    if (!e.target.classList.contains("nav-link")) {
      setPageId(null);
    }
  };

  return (
    // 當滑鼠游標進入該元素範圍時，觸發 event (在元素內部的子元素間移動時也會觸發)
    <nav onMouseOver={submenuHandler}>
      <div className="nav-center">
        <h3 className="logo">strapi</h3>
        <button type="button" className="toggle-btn" onClick={openSidebar}>
          <PiHandTapBold />
        </button>
        <NavLinks />
      </div>
    </nav>
  );
};

export default Navbar;
