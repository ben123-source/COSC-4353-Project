import Signup from "./pages/Signup.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

it("should render profile information", () => {
    const center = { lat: 0, long: 0 };
    act(() => {
      render(
        <Signup
          full_name ="Hashirul Quadir"
          address1 = "xxxxxx"
          address2= "xxxxxx"
          city = "Houston"
          state = "tx"
          Zipcode = "77407"
          center={center}
        />,
        container
      );
    });
  
    expect(
      container.querySelector("[data-testid='email']").getAttribute("href")
    ).toEqual("mailto:test@example.com");
  
    expect(
      container.querySelector('[data-testid="site"]').getAttribute("href")
    ).toEqual("http://test.com");

  });