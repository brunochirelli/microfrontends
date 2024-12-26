import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { mount } from "marketing/MarketingApp";

// Você pode usar o mesmo pattern para qualquer outro framework, desde que
// o framework exponha um elemento (DOM NODE) para ser feito o mount.
const MarketingApp = () => {
  const ref = useRef();
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname } = history.location;

        if (pathname !== nextPathname) {
          history.push(nextPathname);
        }
      },
    });

    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref} id="marketing-container" />;
};

export default MarketingApp;
