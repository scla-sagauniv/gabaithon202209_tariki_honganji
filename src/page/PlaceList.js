import React from "react";
import { Button } from "../components/Button";
import { Navbar } from "../components/Navbar";
import StickyHeadTable from "../components/StickyHeadTable";

const PlaceList = () => {
  return (
    <>
      <Navbar />
      <StickyHeadTable />
      <div style={{marginLeft: "auto", width: "160px", marginTop: "32px"}}>
        <Button name='back' path='/' />
      </div>
    </>
  );
};

export default PlaceList;
