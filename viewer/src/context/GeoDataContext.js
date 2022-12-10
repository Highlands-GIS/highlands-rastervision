import React, { createContext, useState } from "react";
// store the geojson data in the browser

export const GeoDataContext = createContext();

function GeoDataContextProvider({ children }) {

  const [geoData, setGeoData] = useState(null);

  return (
    <GeoDataContext.Provider
      value={{
        geoData,
        setGeoData,
      }}
    >
      {children}
    </GeoDataContext.Provider>
  );
}
export default GeoDataContextProvider;
