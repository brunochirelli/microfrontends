import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { mount } from "auth/AuthApp";

// Você pode usar o mesmo pattern para qualquer outro framework, desde que
// o framework exponha um elemento (DOM NODE) para ser feito o mount.
const AuthApp = () => {
  const ref = useRef();
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname } = history.location;

        if (pathname !== nextPathname) {
          history.push(nextPathname);
        }
      },
      onSignIn: () => {
        console.log("signin");
      },
    });

    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref} id="auth-container" />;
};

export default AuthApp;
