// src/components/Hero.jsx
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";

// const Hero = () => {
//   return (
//     <section className="bg-white py-16 px-4 md:px-12 flex flex-col md:flex-row items-center justify-between gap-10">
//       {/* Left Text Section */}
//       <div className="max-w-xl space-y-6 text-center md:text-left">
//         <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
//           Empowering Citizens <br /> for a Transparent Community
//         </h1>
//         <div className="border-t-2 border-gray-200 w-24 my-4 mx-auto md:mx-0"></div>
//         <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
//           <Link
//             to="/report"
//             className="px-6 py-3 bg-gray-900 text-white rounded shadow hover:bg-gray-700 transition"
//           >
//             REPORT A PROJECT
//           </Link>
//           <Link
//             to="/vote"
//             className="px-6 py-3 border border-gray-900 text-gray-900 rounded shadow hover:bg-gray-100 transition"
//           >
//             VOTE NOW
//           </Link>
//         </div>
//       </div>

//       {/* Animated Nigeria Map */}
//       <motion.svg
//         viewBox="480 420 40 40"
//         xmlns="http://www.w3.org/2000/svg"
//         className="w-64 h-64 md:w-80 md:h-80 fill-blue-600"
//         initial={{ y: 0, scale: 1 }}
//         animate={{
//           y: [0, -10, 0],
//           scale: [1, 1.05, 1]
//         }}
//         transition={{
//           repeat: Infinity,
//           duration: 3,
//           ease: "easeInOut"
//         }}
//       >
       
//       <motion.path
//       id="AB"
//   title="Abia State"
//           d="M118.9,8.5C127.7,14.5,142.5,17.3,149.3,25.6C156.3,34.1,156.9,47.6,163.3,59.2C169.7,70.9,182.9,80.4,184.6,92.8
//           C186.2,105.1,176.1,119.2,167.6,130.7C159,142.1,152.1,150.8,143.8,161.4C135.5,172.1,125.6,184.6,113.4,187.2
//           C101.2,189.8,86.7,182.3,75.6,174.2C64.5,166.1,56.9,157.3,51.2,145.4C45.5,133.6,41.7,118.7,44.3,106.2
//           C46.8,93.7,55.8,83.4,65.3,73.5C74.9,63.7,84.9,54.2,93.1,44.2C101.2,34.2,110.2,24.3,118.9,8.5Z"
//         />
//       </motion.svg>
//     </section>
//   );
// };

// export default Hero;
// src/components/Hero.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import map1 from "../../../public/communityimg/abiastate.png"

const Hero = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-12 flex flex-col md:flex-row items-center justify-between gap-10">
      {/* Left Text */}
      <div className="max-w-xl space-y-6 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
          Empowering Citizens <br /> for a Transparent Community
        </h1>
        <div className="border-t-2 border-gray-200 w-24 my-4 mx-auto md:mx-0"></div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <Link
            to="/report"
            className="px-6 py-3 bg-gray-900 text-white rounded shadow hover:bg-gray-700 transition"
          >
            REPORT A PROJECT
          </Link>
          <Link
            to="/vote"
            className="px-6 py-3 border border-gray-900 text-gray-900 rounded shadow hover:bg-gray-100 transition"
          >
            VOTE NOW
          </Link>
        </div>
      </div>

      {/* Abia State SVG Map */}
      <motion.div
        
        
        className="w-100 h-100 md:w-80 md:h-80 fill-blue-600"
        initial={{ y: 0, scale: 1 }}
        animate={{
          y: [0, -10, 0],
          scale: [1, 1.05, 1]
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
          ease: "easeInOut"
        }}
      >
        <img src={map1} alt="" />
      </motion.div>
    </section>
  );
};

export default Hero;
