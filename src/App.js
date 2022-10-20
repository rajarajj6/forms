// import './App.css';
// import Login from "./Login"
// import Signup from './Signup';
// import{Routes,Route} from "react-router-dom"

// function App() {
//   return (
//     <div>
//       <Routes>
//         <Route exact path="/" element={<Login/>} />
//         <Route exact path="/signup" element={<Signup/>} />
//       </Routes>
//     </div>
//   );
// }

// export default App;

import LoginForm from "./LoginForm";


function App() {
  return (
    <div>
      <LoginForm/>
    </div>
  );
}
export default App;