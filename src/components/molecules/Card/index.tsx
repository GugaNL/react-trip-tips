import Carousel from "react-bootstrap/Carousel";
import "./styles.css";
import { Link } from "react-router-dom";
//Interfaces
import { PlaceItem } from "../../../interfaces";
//Constants
import { PAGE_PLACE_DETAIL } from "../../constants";

type CardProps = {
  item: PlaceItem;
};

const Card = ({ item }: CardProps) => {
  return (
    <div className="col-md-4 col-lg-3 col-xl-3 col-12">
      <div className="card border-0 p-2 card-container">
        <Link to={`${PAGE_PLACE_DETAIL}/${item.id}`} state={item} className="router-link-card">
          <Carousel>
            {item.arrayImages &&
              item.arrayImages.length > 0 &&
              item.arrayImages.map((el, index) => (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100 rounded image-card"
                    src={el.src}
                    alt={el.alt}
                  />
                </Carousel.Item>
              ))}
          </Carousel>

          <div className="card-body text-start">
            <div className="d-flex justify-content-between">
              <p className="fw-bold m-0">{item.title}</p>
              <i className="bi bi-star">{item.rating}</i>
            </div>
            <p className="m-0 text-secondary">{item.dist}</p>
            <p className="m-0 text-secondary">{item.stay}</p>
            <p className="m-0">
              <span className="fw-semibold">R$ {item.price} por dia</span>
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Card;
