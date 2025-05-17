import { useState } from "react";

const MissingPersonForm = () => {
  const [fullName, setFullName] = useState("");
  const [lastSeenLocation, setLastSeenLocation] = useState("");
  const [description, setDescription] = useState("");
  const [imageFile, setImageFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newReport = {
      category: "missing-person",
      fullName,
      lastSeenLocation,
      description,
      imageFile,
      createdAt: new Date(),
    };

    console.log("Submit missing person report:", newReport);
    // Replace with your Firebase or backend logic
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-4 bg-white rounded-md shadow-md space-y-4"
    >
      <h2 className="text-xl font-semibold text-center">
        Report Missing Person
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
        placeholder="Last Seen Location"
        className="w-full border rounded px-3 py-2"
        value={lastSeenLocation}
        onChange={(e) => setLastSeenLocation(e.target.value)}
      />

      <textarea
        placeholder="Additional Details (e.g., appearance, clothing)"
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
        className="w-full bg-yellow-600 text-white py-2 rounded"
      >
        Submit Report
      </button>
    </form>
  );
};

export default MissingPersonForm;
