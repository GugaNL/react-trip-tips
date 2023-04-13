import Card from "../../molecules/Card";
//Mocks
import { placesItems } from "../../constants";


export const MainContent = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        {placesItems &&
          placesItems.length > 0 &&
          placesItems.map((item, index: number) => <Card item={item} key={index} />)}
      </div>
    </div>
  );
};

export default MainContent;
