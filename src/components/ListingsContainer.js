import React, { useEffect, useState } from "react";
import ListingCard from "./ListingCard";

const url = 'http://localhost:6001/listings'

function ListingsContainer({ search }) {
  const [listings, setListings] = useState([])
  const [sort, setSort] = useState(true)

  useEffect(() => {
    fetch(url)
    .then(r => r.json())
    .then(setListings)
  }, [])

  function deleteListing(id){
    setListings(listings.filter((listing) => listing.id !== id))
  }

  function toggleSort(){
    setSort(!sort)
  }

  const displayListing = listings.filter((listing) => 
  listing.description.toLowerCase().includes(search.toLowerCase()))
  .sort((a, b) => {
    if (sort === true) { 
      return a.location.localeCompare(b.location)
    } else {
      return b.location.localeCompare(a.location)
    }
  })
  .map((listing) => 
    <ListingCard 
    key={listing.id}
    listing={listing}
    deleteListing={deleteListing}
    />)

  return (
    <main>
      <button onClick={toggleSort}>{ !sort ? "Sort location A-Z" : "Sort location Z-A" }</button>
      <ul className="cards">
        {displayListing}
      </ul>
    </main>
  );
}

export default ListingsContainer;
