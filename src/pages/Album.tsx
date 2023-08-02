import React, { useState, useEffect } from "react";
import ImageGallery from "../Components/ImageGallery";

function Album() {

  return (
    <div className="container" id="container">
      <ImageGallery></ImageGallery>
    </div>
  );
}

export default Album;