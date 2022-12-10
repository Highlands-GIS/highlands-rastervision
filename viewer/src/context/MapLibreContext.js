import React, { createContext, useState } from "react";

export const MapLibreContext = createContext();

function MapLibreContextProvider({ children }) {

  const [map, setMap] = useState(null);

  return (
    <MapLibreContext.Provider
      value={{
        map,
        setMap,
      }}
    >
      {children}
    </MapLibreContext.Provider>
  );
}
export default MapLibreContextProvider;
