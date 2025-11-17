import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";

import EmployeePage from "./pages/EmployeePage";
import AddEmployeePage from "./pages/AddEmployeePage";
import ViewEmployee from "./pages/ViewEmployee";
import UpdateEmployee from "./pages/UpdateEmployee";

const App = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<EmployeePage />} />
        <Route path="/add-employee" element={<AddEmployeePage />} />
        <Route path="/employee/:id" element={<ViewEmployee />} />
        <Route path="/employee/edit/:id" element={<UpdateEmployee />} />
      </Routes>
    </MainLayout>
  );
};

export default App;
