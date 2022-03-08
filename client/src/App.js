import { Route, Routes } from "react-router-dom";
import { Doctor, Layout, Listing, Profile } from "./components";
import Dashboard from "./components/user.component/dashboard";
import "./scss/main.scss";


function App() {
  return (
    <div>
   <Layout>
   <Routes>
      
        <Route path="dashboard" element={<Dashboard />}>
          <Route index element={<Profile />} />
          <Route path="doctor" element={<Doctor />} />
          <Route path="listing" element={<Listing />} />
        </Route>
      </Routes>
   </Layout>
    </div>
  );
}

export default App;
