import React from "react";

import { CreateEmployeeForm } from "../Components/CreateEmployeeForm";

export const CreateEmployeeContainer: React.FC = () => {
  return (
    <div className="EmployeeContainer">
      <CreateEmployeeForm />
    </div>
  );
};
