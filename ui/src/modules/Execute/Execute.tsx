import React from "react";
import { CreateEmployeeContainer } from './Containers/CreateEmployeeContainer'

const ExecuteComponent: React.FC = () => {

  return (
    <h1>
      This is Execute page
      <CreateEmployeeContainer />
    </h1>
  )
}

export default ExecuteComponent