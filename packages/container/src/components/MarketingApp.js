import { mount } from "marketing/MarketingApp";
import React, { useRef, useEffect } from "react";

// Você pode usar o mesmo pattern para qualquer outro framework, desde que
// o framework exponha um elemento (DOM NODE) para ser feito o mount.
const MarketingApp = () => {
  const ref = useRef();

  useEffect(() => {
    mount(ref.current);
  });

  return <div ref={ref} id="marketing-container" />;
};

export default MarketingApp;
