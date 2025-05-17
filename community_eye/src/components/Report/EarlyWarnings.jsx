import { useState } from "react";

const EarlyWarningForm = () => {
  const [warningType, setWarningType] = useState("");
  const [location, setLocation] = useState({ lat: null, lng: null });
  const [description, setDescription] = useState("");
  const [imageFile, setImageFile] = useState(null);

  const handleGetLocation = () => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setLocation({
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
      });
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newWarning = {
      category: "early-warning",
      warningType,
      location,
      description,
      imageFile,
      createdAt: new Date(),
    };

    console.log("Submit early warning:", newWarning);
    // replace with your firebase or API post
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-4 bg-white rounded-md shadow-md space-y-4"
    >
      <h2 className="text-xl font-semibold text-center">
        Submit Early Warning
      </h2>

      <select
        className="w-full border rounded px-3 py-2"
        value={warningType}
        onChange={(e) => setWarningType(e.target.value)}
      >
        <option value="">Select Warning Type</option>
        <option value="Pothole">Pothole</option>
        <option value="Collapsed Building">Building Collapse Risk</option>
        <option value="Fire Outbreak">Fire Outbreak</option>
        <option value="Power Line Hazard">Power Line Hazard</option>
        <option value="Unsafe Bridge">Unsafe Bridge</option>
      </select>

      <textarea
        placeholder="Describe the issue"
        className="w-full border rounded px-3 py-2"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button
        type="button"
        onClick={handleGetLocation}
        className="border border-dashed p-4 rounded text-center"
      >
        📍{" "}
        {location.lat
          ? `Lat: ${location.lat}, Lng: ${location.lng}`
          : "Share Location"}
      </button>

      <label className="block font-medium mt-4">Upload Image</label>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImageFile(e.target.files[0])}
        className="block w-full border border-dashed p-2 rounded"
      />

      <button
        type="submit"
        className="w-full bg-red-600 text-white py-2 rounded"
      >
        Submit Warning
      </button>
    </form>
  );
};

export default EarlyWarningForm;
