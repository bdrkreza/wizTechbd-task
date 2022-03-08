import { Route, Routes } from "react-router-dom";
import { Layout, Listing, Profile } from "./components";
import Home from "./pages";
import Dashboard from "./pages/dashboard";
import "./scss/main.scss";


function App() {
  return (
    <div>
   <Layout>
   <Routes>
        <Route index element={<Home />} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route index element={<Profile />} />
          <Route path="listing" element={<Listing />} />
        </Route>
      </Routes>
   </Layout>
    </div>
  );
}

export default App;
