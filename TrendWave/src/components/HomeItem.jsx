// import ItemImage from "../images/1.jpg";

import { useDispatch, useSelector } from "react-redux";

const HomeItem = ({ item }) => {
  const dispatch = useDispatch();
  const bag = useSelector((store) => store.bag);
  const elementFound = bag.indexOf(item.id) >= 0;
  return (
    <>
      <div className="item-container">
        <img className="item-image" src={item.image} alt="item image" />
        {/* <img className="item-image" src={ItemImage} alt="item image" /> */}
        {/* importing image using react facility  */}
        <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
        </div>
        <div className="company-name">{item.company}</div>
        <div className="item-name">{item.item_name}</div>
        <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
        </div>

        {elementFound ? (
          <button
            type="button"
            class="btn btn-danger btn-add-bag"
            onClick={() => dispatch(bagAction.removeFromBag(item.id))}
          >
            Remove
          </button>
        ) : (
          <button
            type="button"
            class="btn btn-success btn-add-bag"
            onClick={() => dispatch(bagAction.addToBag(item.id))}
          >
            Add to Bag
          </button>
        )}
      </div>
    </>
  );
};
export default HomeItem;
