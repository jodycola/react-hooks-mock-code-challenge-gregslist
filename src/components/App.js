import React, { useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import NewListings from "./NewListings"

function App() {
  const [search, setSearch] = useState("")

  return (
    <div className="app">
      <Header 
      search={search}
      setSearch={setSearch}
      />
      <NewListings />
      <ListingsContainer
      search={search}
       />
    </div>
  );
}

export default App;
