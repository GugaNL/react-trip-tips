import "./styles.css";
import { subHeaderItems } from "../../constants";

export const SubHeader = () => {
  return (
    <div className="container-fluid position-relative d-flex flex-row flex-grow w-100 overflow-auto justify-content-between">
      {subHeaderItems &&
        subHeaderItems.length > 0 &&
        subHeaderItems.map((item, index) => (
          <a className="content-icon" href="#" key={index}>
            <i className={`${item.icon} p-2 fs-2`}></i>
            <span className="d-block">{item.text}</span>
          </a>
        ))}
    </div>
  );
};

export default SubHeader;
