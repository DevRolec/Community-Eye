import { useState } from "react";

const WantedPersonForm = () => {
  const [fullName, setFullName] = useState("");
  const [crimeType, setCrimeType] = useState("");
  const [lastKnownLocation, setLastKnownLocation] = useState("");
  const [description, setDescription] = useState("");
  const [imageFile, setImageFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newReport = {
      category: "wanted-person",
      fullName,
      crimeType,
      lastKnownLocation,
      description,
      imageFile,
      createdAt: new Date(),
    };

    console.log("Submit wanted person report:", newReport);
    // Replace with your Firebase or backend logic
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-4 bg-white rounded-md shadow-md space-y-4"
    >
      <h2 className="text-xl font-semibold text-center">
        Report Wanted Person
      </h2>

      <input
        type="text"
        placeholder="Full Name"
        className="w-full border rounded px-3 py-2"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Crime Type (e.g., Theft, Assault)"
        className="w-full border rounded px-3 py-2"
        value={crimeType}
        onChange={(e) => setCrimeType(e.target.value)}
      />

      <input
        type="text"
        placeholder="Last Known Location"
        className="w-full border rounded px-3 py-2"
        value={lastKnownLocation}
        onChange={(e) => setLastKnownLocation(e.target.value)}
      />

      <textarea
        placeholder="Description or identifying details"
        className="w-full border rounded px-3 py-2"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <label className="block font-medium">Upload Image</label>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImageFile(e.target.files[0])}
        className="w-full border border-dashed p-2 rounded"
      />

      <button
        type="submit"
        className="w-full bg-red-700 text-white py-2 rounded"
      >
        Submit Report
      </button>
    </form>
  );
};

export default WantedPersonForm;
