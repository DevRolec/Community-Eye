// src/components/MapPreview.jsx
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import { Link } from "react-router-dom";
// import L from "leaflet";

// // Use a default marker
// const defaultIcon = new L.Icon({
//   iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
//   iconSize: [25, 41],
//   iconAnchor: [12, 41],
//   popupAnchor: [1, -34],
// });

// const dummyReports = [
//   {
//     id: 1,
//     title: "Abandoned Road Project",
//     lat: 5.532,
//     lng: 7.486,
//   },
//   {
//     id: 2,
//     title: "Blocked Drainage",
//     lat: 5.435,
//     lng: 7.524,
//   },
// ];

// const MapPreview = () => {
//   return (
//     <section className="bg-white py-12 px-4 md:px-12">
//       <div className="max-w-6xl mx-auto text-center">
//         <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
//           Explore Reports Around You
//         </h2>

//         <div className="w-full h-96 mb-6 rounded-lg overflow-hidden shadow-md">
//           <MapContainer center={[5.5, 7.5]} zoom={9} scrollWheelZoom={false} style={{ height: "100%", width: "100%" }}>
//             <TileLayer
//               attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
//               url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//             />
//             {dummyReports.map((report) => (
//               <Marker key={report.id} position={[report.lat, report.lng]} icon={defaultIcon}>
//                 <Popup>{report.title}</Popup>
//               </Marker>
//             ))}
//           </MapContainer>
//         </div>

//         <Link
//           to="/dashboard"
//           className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded shadow hover:bg-blue-700 transition"
//         >
//           View Full Map
//         </Link>
//       </div>
//     </section>
//   );
// };

// export default MapPreview;
// src/components/MapPreview.jsx
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Link } from "react-router-dom";
import L from "leaflet";

// Optional custom marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
});

const mockReports = [
  {
    id: 1,
    title: "Abandoned Road Project",
    position: [5.5346, 7.4865], // Umuahia
  },
  {
    id: 2,
    title: "Broken Health Centre",
    position: [5.1066, 7.3713], // Aba
  },
];

const MapPreview = () => {
  return (
    <section className="bg-white py-12 px-4 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Explore Community Reports</h2>
          <Link
            to="/dashboard"
            className="text-blue-600 font-medium hover:underline"
          >
            View Full Map →
          </Link>
        </div>

        <div className="w-full h-80 rounded overflow-hidden shadow-lg">
          <MapContainer
            center={[5.4200, 7.5000]} // Center of Abia State
            zoom={8}
            scrollWheelZoom={true}
            zoomControlOptions={{ position: 'topright' }}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {mockReports.map((report) => (
              <Marker key={report.id} position={report.position}>
                <Popup>{report.title}</Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </section>
  );
};

export default MapPreview;
