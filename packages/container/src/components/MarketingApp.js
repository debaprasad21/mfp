import { mount } from "marketing/MarketingApp";
import React, { useEffect, useRef } from "react";

export default () => {
  console.log("MarketingApp Loaded");
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  }, []);

  return <div ref={ref} />;
};
