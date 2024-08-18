import { useState } from "react";
import ReactMapGL, { Marker} from "react-map-gl";
import AddLocationIcon from '@mui/icons-material/AddLocation';

function App() {
  const [viewport, setViewport] = useState({
    latitude: 47.040182,
    longitude: 17.071727,
    zoom: 4,
  });
  return (
    <div className="App">
    <ReactMapGL
    {...viewport}
      mapboxAccessToken={process.env.REACT_APP_MAPBOX}
      onViewportChange={(viewport) => setViewport(viewport)}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      >
      <Marker 
      longitude={48.858093} 
      latitude={2.294694} 
      offsetLeft={-20}
      offsetTop={-10} 
      >
        <AddLocationIcon style={{fontSize:viewport.zoom *10}}/>
      </Marker>
    </ReactMapGL>
    </div>
  );
}

export default App;
