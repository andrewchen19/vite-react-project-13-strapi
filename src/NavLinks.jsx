import { useGlobalContext } from "./context";
import sublinks from "./data";

const NavLinks = () => {
  const { setPageId } = useGlobalContext();

  return (
    <div className="nav-links">
      {sublinks.map((item) => {
        const { pageId, page } = item;
        return (
          <button
            type="button"
            className="nav-link"
            key={pageId}
            // 當滑鼠游標進入該元素範圍時，觸發 event
            onMouseEnter={() => setPageId(pageId)}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default NavLinks;
