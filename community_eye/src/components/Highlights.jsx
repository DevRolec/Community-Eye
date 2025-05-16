// src/components/Highlights.jsx
// import CountUp from "react-countup";

// const stats = [
//   {
//     label: "Reports Submitted",
//     value: 256,
//   },
//   {
//     label: "Votes Cast",
//     value: 482,
//   },
//   {
//     label: "Projects Flagged",
//     value: 120,
//   },
// ];

// const Highlights = () => {
//   return (
//     <section className="bg-gray-50 py-14 px-4 md:px-12">
//       <div className="max-w-6xl mx-auto text-center">
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
//           Highlights
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
//           {stats.map((stat, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-lg shadow-md p-6 transition-transform duration-300 hover:scale-105"
//             >
//               <p className="text-4xl font-bold text-blue-600">
//                 <CountUp end={stat.value} duration={2} />
//               </p>
//               <p className="mt-2 text-gray-600 text-lg font-medium">{stat.label}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Highlights;
// src/components/Highlights.jsx
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  { label: "Reports Submitted", value: 256 },
  { label: "Votes Cast", value: 482 },
  { label: "Projects Flagged", value: 120 },
];

const Highlights = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Animate only once
    threshold: 0.2,     // 20% of section must be visible
  });

  return (
    <section ref={ref} className="bg-gray-50 py-14 px-4 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
          Highlights
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 transition-transform duration-300 hover:scale-105"
            >
              <p className="text-4xl font-bold text-blue-600">
                {inView ? (
                  <CountUp end={stat.value} duration={5} />
                ) : (
                  0
                )}
              </p>
              <p className="mt-2 text-gray-600 text-lg font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
