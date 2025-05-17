// AuthForms.jsx (React Component for Login & Signup)
// import { useState } from "react";
// import axios from "axios";

// const abiaLGAs = [
//   "Aba North", "Aba South", "Arochukwu", "Bende", "Ikwuano",
//   "Isiala Ngwa North", "Isiala Ngwa South", "Isuikwuato", "Obi Ngwa",
//   "Ohafia", "Osisioma", "Ugwunagbo", "Ukwa East", "Ukwa West",
//   "Umuahia North", "Umuahia South", "Umu Nneochi"
// ];

// export default function AuthForms() {
//   const [isLogin, setIsLogin] = useState(true);
//   const [form, setForm] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//     lga: ""
//   });
//   const [message, setMessage] = useState("");
//   const api = import.meta.env.VITE_API_URL;


//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const url = isLogin ? `${api}/api/auth/login` : `${api}/api/auth/signup`;

//     const payload = isLogin
//       ? { email: form.email, password: form.password }
//       : form;

//     try {
//       const res = await axios.post(url, payload);
//       setMessage(res.data.message || "Success!");
//       if (res.data.token) localStorage.setItem("token", res.data.token);
//     } catch (err) {
//       setMessage(err.response?.data?.message || "Something went wrong");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
//       <div className="bg-white shadow-md rounded-md w-full max-w-md p-8">
//         <h2 className="text-2xl font-bold mb-4 text-center">
//           {isLogin ? "Login to Community Eye" : "Create an Account"}
//         </h2>

//         {message && <p className="text-sm text-center text-blue-600 mb-4">{message}</p>}

//         <form onSubmit={handleSubmit} className="space-y-4">
//           {!isLogin && (
//             <>
//               <input
//                 type="text"
//                 name="firstName"
//                 placeholder="First Name"
//                 required
//                 className="input"
//                 onChange={handleChange}
//               />
//               <input
//                 type="text"
//                 name="lastName"
//                 placeholder="Last Name"
//                 required
//                 className="input"
//                 onChange={handleChange}
//               />
//             </>
//           )}

//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             required
//             className="input"
//             onChange={handleChange}
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             required
//             className="input"
//             onChange={handleChange}
//           />

//           {!isLogin && (
//             <select
//               name="lga"
//               required
//               className="input"
//               onChange={handleChange}
//             >
//               <option value="">Select LGA</option>
//               {abiaLGAs.map((lga) => (
//                 <option key={lga} value={lga}>{lga}</option>
//               ))}
//             </select>
//           )}

//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
//           >
//             {isLogin ? "Login" : "Sign Up"}
//           </button>
//         </form>

//         <p className="mt-4 text-sm text-center">
//           {isLogin ? "Don't have an account?" : "Already have an account?"} {" "}
//           <button
//             className="text-blue-600 hover:underline"
//             onClick={() => setIsLogin(!isLogin)}
//           >
//             {isLogin ? "Sign Up" : "Login"}
//           </button>
//         </p>
//       </div>
//     </div>
//   );
// }

// // Tailwind helper class
// // .input => @apply w-full px-3 py-2 border rounded text-sm;
// import { useState } from "react";
// import axios from "axios";

// const abiaLGAs = [
//   "Aba North", "Aba South", "Arochukwu", "Bende", "Ikwuano",
//   "Isiala Ngwa North", "Isiala Ngwa South", "Isuikwuato", "Obi Ngwa",
//   "Ohafia", "Osisioma", "Ugwunagbo", "Ukwa East", "Ukwa West",
//   "Umuahia North", "Umuahia South", "Umu Nneochi"
// ];

// export default function AuthForm() {
//   const [isLogin, setIsLogin] = useState(true);
//   const [form, setForm] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//     lga: ""
//   });
//   const [message, setMessage] = useState("");
//   const api = import.meta.env.VITE_API_URL;

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const url = isLogin ? `${api}/api/auth/login` : `${api}/api/auth/signup`;
//     const payload = isLogin
//       ? { email: form.email, password: form.password }
//       : form;

//     try {
//       const res = await axios.post(url, payload);
//       setMessage(res.data.message || "Success!");
//       if (res.data.token) localStorage.setItem("token", res.data.token);
//     } catch (err) {
//       setMessage(err.response?.data?.message || "Something went wrong");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
//       <div className="bg-white shadow-xl rounded-lg w-full max-w-md p-8">
//         <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">
//           {isLogin ? "Login to Community Eye" : "Create an Account"}
//         </h2>

//         {message && <p className="text-center text-sm text-red-500 mb-4">{message}</p>}

//         <form onSubmit={handleSubmit} className="space-y-4">
//           {!isLogin && (
//             <>
//               <input
//                 type="text"
//                 name="firstName"
//                 placeholder="First Name"
//                 required
//                 className="input"
//                 onChange={handleChange}
//               />
//               <input
//                 type="text"
//                 name="lastName"
//                 placeholder="Last Name"
//                 required
//                 className="input"
//                 onChange={handleChange}
//               />
//             </>
//           )}

//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             required
//             className="input"
//             onChange={handleChange}
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             required
//             className="input"
//             onChange={handleChange}
//           />

//           {!isLogin && (
//             <select
//               name="lga"
//               required
//               className="input"
//               onChange={handleChange}
//             >
//               <option value="">Select LGA</option>
//               {abiaLGAs.map((lga) => (
//                 <option key={lga} value={lga}>{lga}</option>
//               ))}
//             </select>
//           )}

//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
//           >
//             {isLogin ? "Login" : "Sign Up"}
//           </button>
//         </form>

//         <p className="mt-4 text-sm text-center text-gray-600">
//           {isLogin ? "Don't have an account?" : "Already have an account?"} {" "}
//           <button
//             type="button"
//             className="text-blue-600 hover:underline"
//             onClick={() => setIsLogin(!isLogin)}
//           >
//             {isLogin ? "Sign Up" : "Login"}
//           </button>
//         </p>
//       </div>
//     </div>
//   );
// }
import { useState } from "react";
import axios from "axios";

const abiaLGAs = [
  "Aba North", "Aba South", "Arochukwu", "Bende", "Ikwuano",
  "Isiala Ngwa North", "Isiala Ngwa South", "Isuikwuato", "Obi Ngwa",
  "Ohafia", "Osisioma", "Ugwunagbo", "Ukwa East", "Ukwa West",
  "Umuahia North", "Umuahia South", "Umu Nneochi"
];

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    lga: ""
  });
  const [message, setMessage] = useState("");
  const api = import.meta.env.VITE_API_URL;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isLogin ? `${api}/api/auth/login` : `${api}/api/auth/signup`;
    const payload = isLogin
      ? { email: form.email, password: form.password }
      : form;

    try {
      const res = await axios.post(url, payload);
      setMessage(res.data.message || "Success!");
      if (res.data.token) localStorage.setItem("token", res.data.token);
    } catch (err) {
      setMessage(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center  px-4">
      <div className="bg-white shadow-2xl rounded-xl w-full max-w-sm p-8">
        <h2 className="text-xl font-semibold mb-4 text-center text-gray-800">
          {isLogin ? "Good to see you!" : "Welcome!"}
        </h2>

        {message && <p className="text-center text-sm text-red-500 mb-4">{message}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 placeholder-gray-400 transitio"
                onChange={handleChange}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 placeholder-gray-400 transitio"
                onChange={handleChange}
              />
            </>
          )}

          <input
            type="email"
            name="email"
            placeholder={isLogin ? "Email/Username" : "Email"}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 placeholder-gray-400 transitio"
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 placeholder-gray-400 transitio"
            onChange={handleChange}
          />

          {!isLogin && (
            <select
              name="lga"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 placeholder-gray-400 transitio"
              onChange={handleChange}
            >
              <option value="">Select LGA</option>
              {abiaLGAs.map((lga) => (
                <option key={lga} value={lga}>{lga}</option>
              ))}
            </select>
          )}

          <button
            type="submit"
            className="w-full bg-gray-900 text-white py-2 rounded hover:bg-gray-800 transition font-medium"
          >
            {isLogin ? "Log In" : "Sign Up"}
          </button>

          <div className="flex items-center justify-center gap-4 text-sm text-gray-600 mt-4">
            <span className="text-xs">or</span>
            <button className="hover:text-blue-500">{isLogin ? "Log in with Google" : "Sign up with Google"}</button>
          </div>
        </form>

        <p className="mt-6 text-sm text-center text-gray-600">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            type="button"
            className="text-blue-600 hover:underline font-medium"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Sign Up" : "Log In"}
          </button>
        </p>
      </div>
    </div>
  );
}

// Tailwind CSS helper:
// .input => @apply w-full px-4 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-400;
