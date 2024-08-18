import { useState } from "react";
import ReactMapGL, { Marker} from "react-map-gl";

function App() {
  return (
    <div className="App">
    <ReactMapGL
      mapboxAccessToken={process.env.REACT_APP_MAPBOX}
      initialViewState={{
        longitude: -122.4,
        latitude: 37.8,
        zoom: 14
      }}
      style={{width: "100vw", height: "100vh"}}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      >
      <Marker 
        longitude={-100} 
        latitude={40} 
        anchor="bottom"
        offsetLeft={-122.41}
        offsetTop={-10} 

      >

        <img alt="" src="./pin.png" />
      </Marker>
    </ReactMapGL>
    </div>
  );
}

export default App;
