// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import RenderCards from './components/RenderCards';
import ChildComponent from './components/Dummy';
import './index.css';

const images = [
  "https://images.unsplash.com/photo-1562494400-5b335a653209?q=80&w=1362&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?q=80&w=1252&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1553882951-9c3dab4a50cb?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1520312501384-dbdb83a1cb11?q=80&w=1375&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];



const links = [
  "",
  "",
  "",
  "",
  ""
];

// make an array of child components
// pass this into the render cards component

const ChildComponents = Array.from({ length: images.length }, (_, index) => {
  return <ChildComponent name={`Child ${index + 1}`} />;
});


 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RenderCards numberOfCards={images.length} imagesArray={images} linksArray={links} ChildComponents={ChildComponents} />
    {/* <RenderCards numberOfCards={images.length} imagesArray={images} linksArray={links} ChildComponent={ChildComponent} />
    <RenderCards numberOfCards={images.length} imagesArray={images} linksArray={links} ChildComponent={ChildComponent} />
    <RenderCards numberOfCards={images.length} imagesArray={images} linksArray={links} ChildComponent={ChildComponent} /> */}
  </React.StrictMode>
);
