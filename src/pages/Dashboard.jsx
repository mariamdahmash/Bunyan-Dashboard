import { Routes, Route } from "react-router-dom";
import Footer from "../components/Dashborad/Footer/Footer";
import Navbar from "../components/Dashborad/Navbar/Navbar";
import Sidebar from "../components/Dashborad/Sidebar/Sidebar";
import Status from "./StatusPage"
import Users from "./Users"
import Projects from "./Projects"
import Developer from "./Developer";
import TableDashbord from "../components/UI/TableDashbord/TableDashbord";
import FormDashbord from "../components/UI/FormDashbord/FormDashbord";

function Dashboard() {
  return (
    <>
      <Navbar adminName="mohamed" />
      <div className="d-flex">
          <Sidebar/>
          <main className="flex-grow-1">
              <Routes>
                <Route path="/" element={<Status/>}/>

                
                <Route path="/users" element={<Users/>}>
                  <Route index element={<TableDashbord func="Users"/>}/>
                  <Route path="add" element={<FormDashbord/>}/>
                </Route>
                
                 <Route path="/projects" element={<Projects />}>
                      <Route index element={<TableDashbord func="Projects"/>}/>
                      <Route path="add" element={<FormDashbord/>}/>
                 </Route>

                <Route path="/developer" element={<Developer/>}>
                      <Route index element={<TableDashbord func="Developer"/>}/>
                      <Route path="add" element={<FormDashbord/>}/>
                 </Route>
                
              </Routes>
          </main>
      </div>
  
      <Footer />
    </>
  );
}

export default Dashboard;
