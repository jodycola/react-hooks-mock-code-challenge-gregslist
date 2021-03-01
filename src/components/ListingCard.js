import React, { useState } from "react";

const url = 'http://localhost:6001/listings'

function ListingCard({ deleteListing, listing }) {
  const { id, location, image, description } = listing
  const [toggleFav, setToggleFav] = useState(false)

  function onFavorite(){
    setToggleFav(!toggleFav)
  }

  function onDelete(){
    fetch(url + "/" + id, {
      method: "DELETE",
    })
    .then(r => r.json())
    .then(deleteListing(id))
  }
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {toggleFav ? (
          <button onClick={onFavorite} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={onFavorite} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={onDelete} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
