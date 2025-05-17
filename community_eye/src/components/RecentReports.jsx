// src/components/RecentReports.jsx
// import { Link } from "react-router-dom";

// const mockReports = [
//   {
//     id: 1,
//     title: "Collapsed Bridge",
//     category: "Infrastructure",
//     lga: "Umuahia North",
//     ward: "Afugiri",
//     description: "A small bridge near the market has collapsed, cutting off access.",
//     time: "2 hours ago",
//   },
//   {
//     id: 2,
//     title: "Abandoned Health Centre",
//     category: "Health",
//     lga: "Aba South",
//     ward: "Eziukwu",
//     description: "Health facility roof removed since 2022 with no completion.",
//     time: "5 hours ago",
//   },
//   {
//     id: 3,
//     title: "Uncompleted Classroom Block",
//     category: "Education",
//     lga: "Isiala Ngwa North",
//     ward: "Ovom",
//     description: "The school project started and stopped halfway.",
//     time: "1 day ago",
//   },
// ];

// const RecentReports = () => {
//   return (
//     <section className="bg-white py-12 px-4 md:px-12">
//       <div className="max-w-6xl mx-auto">
//         <div className="flex items-center justify-between mb-6">
//           <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Recent Reports</h2>
//           <Link to="/dashboard" className="text-blue-600 hover:underline">View All →</Link>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {mockReports.map((report) => (
//             <div key={report.id} className="bg-gray-50 border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition">
//               <h3 className="text-lg font-semibold text-gray-800">{report.title}</h3>
//               <p className="text-sm text-gray-500">{report.time}</p>
//               <p className="mt-2 text-sm text-gray-600">
//                 <strong>Category:</strong> {report.category}
//               </p>
//               <p className="text-sm text-gray-600">
//                 <strong>Location:</strong> {report.ward}, {report.lga}
//               </p>
//               <p className="mt-2 text-sm text-gray-700">{report.description}</p>
//               <Link
//                 to={`/report/${report.id}`}
//                 className="text-blue-500 text-sm font-medium mt-3 inline-block hover:underline"
//               >
//                 View Details →
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default RecentReports;
// src/components/RecentReports.jsx
import { useState } from "react";
import { Link } from "react-router-dom";

const allReports = [
    {
      id: 1,
      title: "Collapsed Bridge at Market Road",
      category: "Infrastructure",
      lga: "Umuahia North",
      ward: "Afugiri",
      description: "A major bridge has collapsed, cutting off access to traders.",
      time: "2 hours ago",
    },
    {
      id: 2,
      title: "Abandoned Health Post",
      category: "Health",
      lga: "Aba South",
      ward: "Eziukwu",
      description: "The health post has remained incomplete for over a year.",
      time: "5 hours ago",
    },
    {
      id: 3,
      title: "Unfinished Classroom Roof",
      category: "Education",
      lga: "Isiala Ngwa North",
      ward: "Ovom",
      description: "School building lacks roofing, children are learning under trees.",
      time: "1 day ago",
    },
    {
      id: 4,
      title: "Damaged Community Road",
      category: "Infrastructure",
      lga: "Ohafia",
      ward: "Isiama",
      description: "The main road to the health center is washed out.",
      time: "3 days ago",
    },
    {
      id: 5,
      title: "Non-functional Borehole",
      category: "Water",
      lga: "Aba North",
      ward: "Umuocha",
      description: "The borehole project was never completed and has rusted.",
      time: "4 days ago",
    },
    {
      id: 6,
      title: "School Fence Project Abandoned",
      category: "Education",
      lga: "Osisioma Ngwa",
      ward: "Umuokom",
      description: "No work done since the signboard was mounted.",
      time: "6 days ago",
    },
    {
      id: 7,
      title: "Health Centre Missing Staff",
      category: "Health",
      lga: "Isiala Ngwa South",
      ward: "Omoba",
      description: "No medical staff present in the facility since February.",
      time: "1 week ago",
    },
    {
      id: 8,
      title: "Overgrown Culvert Project",
      category: "Infrastructure",
      lga: "Bende",
      ward: "Alayi",
      description: "Weeds have taken over the uncompleted culvert site.",
      time: "1 week ago",
    },
    {
      id: 9,
      title: "Damaged Borehole Tap",
      category: "Water",
      lga: "Umuahia South",
      ward: "Ubakala",
      description: "Borehole functional but has no tap head.",
      time: "8 days ago",
    },
    {
      id: 10,
      title: "Empty Classroom With No Seats",
      category: "Education",
      lga: "Ukwa East",
      ward: "Ohambele",
      description: "A newly built classroom lacks chairs or desks for students.",
      time: "9 days ago",
    },
    {
      id: 11,
      title: "Lack of Medication in Clinic",
      category: "Health",
      lga: "Umu Nneochi",
      ward: "Isuochi",
      description: "Patients are being referred elsewhere due to no drugs.",
      time: "1 week ago",
    },
    {
      id: 12,
      title: "Road Erosion Endangering Homes",
      category: "Infrastructure",
      lga: "Ukwa West",
      ward: "Asa",
      description: "Heavy erosion is threatening nearby family homes.",
      time: "1 week ago",
    },
    {
      id: 13,
      title: "Discontinued Water Tank Project",
      category: "Water",
      lga: "Obi Ngwa",
      ward: "Ntigha",
      description: "The water tank scaffold stands with no tank installed.",
      time: "2 weeks ago",
    },
    {
      id: 14,
      title: "Neglected Primary School Block",
      category: "Education",
      lga: "Arochukwu",
      ward: "Ututu",
      description: "Windows are missing, and children study under harsh weather.",
      time: "2 weeks ago",
    },
    {
      id: 15,
      title: "Rusted Equipment at Clinic",
      category: "Health",
      lga: "Ugwunagbo",
      ward: "Obegu",
      description: "Hospital beds and tools are rusted and unusable.",
      time: "3 weeks ago",
    },
    {
      id: 16,
      title: "Project Signboard Without Project",
      category: "Infrastructure",
      lga: "Aba North",
      ward: "Eziama",
      description: "Only signboard is installed, no visible work done.",
      time: "3 weeks ago",
    },
    {
      id: 17,
      title: "Unsafe Water Source",
      category: "Water",
      lga: "Ohafia",
      ward: "Elu",
      description: "People still fetch from unsafe open well.",
      time: "1 month ago",
    },
    {
      id: 18,
      title: "Construction Materials Abandoned",
      category: "Education",
      lga: "Bende",
      ward: "Uzuakoli",
      description: "Blocks and cement dumped since 2023.",
      time: "1 month ago",
    },
    {
      id: 19,
      title: "Lack of Toilets in School",
      category: "Health",
      lga: "Isiala Ngwa South",
      ward: "Amaudo",
      description: "Students defecate in nearby bushes.",
      time: "1 month ago",
    },
    {
      id: 20,
      title: "Flooded Road Needs Urgent Fix",
      category: "Infrastructure",
      lga: "Umuahia North",
      ward: "Ossah",
      description: "Flooding blocks road after every rainfall.",
      time: "2 months ago",
    },
    {
        id: 21,
        title: "Flooded Road Needs Urgent Fix",
        category: "Infrastructure",
        lga: "Umuahia North",
        ward: "Ossah",
        description: "Flooding blocks road after every rainfall.",
        time: "2 months ago",
      },
  ];
  

const categories = ["All", "Infrastructure", "Health", "Education", "Water"];
const lgas = ["All",
  "Umuahia North", "Aba South", "Aba North", "Isiala Ngwa North",
  "Isiala Ngwa South", "Ohafia", "Umuahia South", "Ukwa East", "Ukwa West",
  "Obi Ngwa", "Osisioma Ngwa", "Arochukwu", "Umu Nneochi", "Bende", "Ugwunagbo"];

const RecentReports = () => {
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [lgaFilter, setLgaFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const perPage = 3;

  const filteredReports = allReports
    .filter((report) =>
      categoryFilter === "All" ? true : report.category === categoryFilter
    )
    .filter((report) => (lgaFilter === "All" ? true : report.lga === lgaFilter))
    .filter((report) => {
        const q = search.toLowerCase();
        return (
          report.title.toLowerCase().includes(q) ||
          report.ward.toLowerCase().includes(q) ||
          report.lga.toLowerCase().includes(q) ||
          report.category.toLowerCase().includes(q)
        );
      })
      
  const totalPages = Math.ceil(filteredReports.length / perPage);
  const paginatedReports = filteredReports.slice(
    (page - 1) * perPage,
    page * perPage
  );

  return (
    <section className="bg-white py-12 px-4 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Title & Filters */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Recent Reports
          </h2>
          <Link to="/dashboard" className="text-blue-600 hover:underline">
            View Full Map →
          </Link>
        </div>

        {/* Filter bar */}
        <div className="flex flex-wrap gap-3 mb-8">
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="border rounded-md px-3 py-2 bg-gray-100 text-sm"
          >
            {categories.map((cat, idx) => (
              <option key={idx} value={cat}>
                {cat}
              </option>
            ))}
          </select>

          <select
            value={lgaFilter}
            onChange={(e) => setLgaFilter(e.target.value)}
            className="border rounded-md px-3 py-2 bg-gray-100 text-sm"
          >
            {lgas.map((lga, idx) => (
              <option key={idx} value={lga}>
                {lga}
              </option>
            ))}
          </select>

          <input
            type="text"
            placeholder="Search reports..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border rounded-md px-3 py-2 text-sm w-full sm:w-auto"
          />
        </div>

        {/* Report Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {paginatedReports.map((report) => (
            <div
              key={report.id}
              className="bg-gray-50 border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-bold text-gray-800">
                  {report.title}
                </h3>
                <span className="text-sm text-gray-500">{report.time}</span>
              </div>
              <div className="text-sm text-gray-600 mb-2">
                <span className="inline-block bg-gray-200 px-2 py-0.5 rounded-full text-xs font-bold mr-2">
                  {report.category}
                </span>
                <span>{report.ward}, {report.lga}</span>
              </div>
              <p className="text-sm text-gray-700">{report.description}</p>
              <Link
                to={`/report/${report.id}`}
                className="text-blue-500 text-sm font-medium mt-3 inline-block hover:underline"
              >
                View Details →
              </Link>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-4 mt-10">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="px-4 py-2 rounded border text-sm disabled:opacity-40"
          >
            ← Previous
          </button>
          <span className="text-sm text-gray-600">
            Page {page} of {totalPages}
          </span>
          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="px-4 py-2 rounded border text-sm disabled:opacity-40"
          >
            Next →
          </button>
        </div>
      </div>
    </section>
  );
};

export default RecentReports;
