import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { mount } from "dashboard/DashboardApp";

const DashboardApp = () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  }, []);

  return <div ref={ref} />;
};

export default DashboardApp;
