"use client";

import React, { useState } from "react";
import Navigation from "@/components/Navigation";
import Home from "@/components/Home";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Leaders from "@/components/Leaders";
import Updates from "@/components/Updates";
import Contact from "@/components/Contact";

export default function Page() {
  const [positions, setPositions] = useState({
    home: 0,
    about: 0,
    leaders: 0,
    updates: 0,
    contact: 0,
  });
  const Components = [Home, About, Leaders, Updates, Contact];

  return (
    <main>
      <Navigation positions={positions} />
      {/* Navigatable contents start */}
      {Components.map((Component, index) => (
        <React.Fragment key={index}>
          <Component onSetPositions={setPositions} updates={[]} />
        </React.Fragment>
      ))}
      {/* Navigatable contents end*/}
      <Footer />
    </main>
  );
}
