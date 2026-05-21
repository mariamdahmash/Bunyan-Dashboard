import { Routes, Route } from "react-router-dom";
import { useState } from "react";
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

  const [drafts, setDrafts] = useState({
    users: false,
    projects: false,
    developers: false,
  });

  return (
    <>
      <Navbar adminName="Mariam" />
      <div className="d-flex">

          <Sidebar drafts={drafts}/>

          <main className="flex-grow-1">
              <Routes>
                <Route path="/" element={<Status/>}/>

                
                <Route path="/users" element={<Users setDrafts={setDrafts}/>}>
                  <Route index element={<TableDashbord func="Users"/>}/>
                  <Route path="add" element={<FormDashbord  type="users" />}/>
                </Route>
                
                 <Route path="/projects" element={<Projects setDrafts={setDrafts}/>}>
                      <Route index element={<TableDashbord func="Projects"/>}/>
                      <Route path="add" element={<FormDashbord type="projects"/>}/>
                 </Route>

                <Route path="/developer" element={<Developer setDrafts={setDrafts}/>}>
                      <Route index element={<TableDashbord func="Developer"/>}/>
                      <Route path="add" element={<FormDashbord type="developers"/>}/>
                 </Route>
                
              </Routes>

          </main>
      </div>
  
      <Footer />
    </>
  );
}

export default Dashboard;
