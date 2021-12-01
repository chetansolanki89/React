import { BikeItem } from "./BikeItem";
import { Bikes } from "./services/bikes";
import "./BikesList.css";

export const BikesList = () => {
  return (
    <div>
      <h1>BikesColection</h1>
      <div className="blist">
        {Bikes.map((item) => (
          <BikeItem
            brand={item.brand}
            model={item.model}
            desc={item.desc}
            price={item.price}
            url={item.url}
          />
        ))}
      </div>
    </div>
  );
};
