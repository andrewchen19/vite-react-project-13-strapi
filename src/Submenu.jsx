import { useGlobalContext } from "./context";
import sublinks from "./data";
import { useRef } from "react";

const Submenu = () => {
  const { pageId, setPageId } = useGlobalContext();
  //  return first element (沒找到 return undefined)
  const currentPage = sublinks.find((item) => item.pageId === pageId);
  //  console.log(currentPage);

  const submenuContainer = useRef(null);

  const submenuHandler = (event) => {
    // get DOM element (submenu)
    let submenu = submenuContainer.current;
    // get element position (參考點是 viewport)
    // 不會變動
    const { left, right, bottom } = submenu.getBoundingClientRect();
    // mouseEvent 的 property
    // get cursor position (參考點是 viewport)
    // 會因為滑鼠游標離開 element 的位置而有所變動
    const { clientX, clientY } = event;
    // 只有當滑鼠游標離開 element 的左邊、右邊、下面，才讓其消失
    if (clientX - left < 0 || clientX - right > 0 || clientY - bottom > 0) {
      return setPageId(null);
    }
  };

  return (
    // 當滑鼠游標離開該元素範圍時，觸發 event
    <div
      className={currentPage ? "submenu show-submenu" : "submenu"}
      onMouseLeave={submenuHandler}
      ref={submenuContainer}
    >
      {/* Optional Chaining 的寫法 */}
      {/* 這個語法可以確保在訪問深層嵌套屬性時，如果中間的屬性為 null 或 undefined，不會引起錯誤，而是直接返回 undefined */}
      <h5>{currentPage?.page}</h5>
      <div
        className="submenu-links"
        style={{
          gridTemplateColumns:
            currentPage?.links?.length > 3 ? "1fr 1fr" : "1fr",
        }}
      >
        {currentPage?.links?.map((link) => {
          const { id, label, icon, url } = link;

          return (
            <a key={id} href={url}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Submenu;
