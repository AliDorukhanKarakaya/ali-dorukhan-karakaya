import "./styles.css";
import "../node_modules/leaflet/dist/leaflet.css";



import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";       //zoom out group



function App() {

  const markers = [

    {
      geocode: [39.90296046272479, 32.75198071266645],  //bakanlık
      popUp: "T.C. Sağlık Bakanlığı"

    },
    {
      geocode: [39.80296046272479, 32.74198071266645],
      popUp: "Random Area"

    }

  ];
  const customIcon = new Icon({
    iconUrl: "https://www.svgrepo.com/show/376955/map-marker.svg",
    iconSize: [30, 30]

  })

  return (
    <MapContainer center={[39.90296046272479, 32.75198071266645]} zoom={7}>

      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <MarkerClusterGroup>

        {markers.map((marker) => (
          <Marker position={marker.geocode} icon={customIcon}>
            <Popup>{marker.popUp}</Popup>
          </Marker>
        ))
        }

      </MarkerClusterGroup>
        
        


    </MapContainer>

    
  );
}

export default App;


