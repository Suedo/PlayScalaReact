import React from "react";
import { ROUTES, RenderRoutes } from "../../routes";


const Body: React.FC = () => {
  return (
    <div>
      This is Body page
      <div>
        <RenderRoutes routes={ROUTES} />
      </div>
    </div>
  );
};

export default Body;
