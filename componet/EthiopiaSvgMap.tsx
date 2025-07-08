"use client";
import React, { useState } from 'react';
// import { Github, Globe, Package } from 'lucide-react';
import {EthiopiaSvgMap} from "ethiopia-svg-map"
import { Github, Globe, Package } from 'lucide-react';



export function EthiopinaMapTest() {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [defaultFillColor, setDefaultFillColor] = useState('#67AE6E');
  const [activeFillColor, setActiveFillColor] = useState('#90C67C');
  const [hoverFillColor, setHoverFillColor] = useState('#90C67C');
  const [strokeColor, setStrokeColor] = useState('#328E6E');
  const [activeStrokeColor, setActiveStrokeColor] = useState('#FFFFFF');
  const [strokeWidth, setStrokeWidth] = useState(0.7);
  const [activeStrokeWidth, setActiveStrokeWidth] = useState(1);
  const [hoverOpacity, setHoverOpacity] = useState(0.9);
  const [enableZoom, setEnableZoom] = useState(true);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [showValues, setShowValues] = useState(true);
  const [showRegionLabels, setShowRegionLabels] = useState(true);
  const [showLegend, setShowLegend] = useState(true);
  const [showRegionColors, setShowRegionColors] = useState(true);


  const resetSettings = () => {
    setDefaultFillColor('#67AE6E');
    setActiveFillColor('#90C67C');
    setHoverFillColor('#90C67C');
    setStrokeColor('#328E6E');
    setActiveStrokeColor('#FFFFFF');
    setStrokeWidth(0.7);
    setActiveStrokeWidth(1);
    setHoverOpacity(0.9);
    setEnableZoom(true);
    setZoomLevel(1);
    setShowValues(true);
    setShowRegionLabels(true);
    setShowLegend(true);
    setShowRegionColors(true);
  };
  const handleRegionClick = (regionId: string) => {
    console.log(`Clicked region: ${regionId}`);
  };

  const tooltipContent = (regionId: string) => `Region: ${regionId.toUpperCase()}`;
  const regionData: any = {
    tigray: {
      value: 5,
      color: '#347433',
      label: 'Tigray Region',
      universities: [
        'Mekelle University',
        'Mekelle Institute of Technology',
        'Aksum University',
        'Adigrat University',
        'Raya University'
      ]
    },
    amhara: {
      value: 8,
      color: '#FFC107',
      label: 'Amhara Region',
      universities: [
        'Bahir Dar University',
        'University of Gondar',
        'Debre Markos University',
        'Debre Tabor University',
        'Debre Berhan University',
        'Wollo University',
        'Woldia University',
        'Injibara University'
      ]
    },
    oromiya: {
      value: 12,
      color: '#FF6F3C',
      label: 'Oromia Region',
      universities: [
        'Jimma University',
        'Haramaya University',
        'Adama Science & Technology University',
        'Ambo University',
        'Wollega University',
        'Arsi University',
        'Madda Walabu University',
        'Bule Hora University',
        'Dambi Dollo University',
        'Mattu University',
        'Oda Bultum University',
        'Salale University'
      ]
    },
    somalia: {
      value: 2,
      color: '#FF33A1',
      label: 'Somali Region',
      universities: [
        'Jigjiga University',
        'Kebri Dehar University'
      ]
    },
    benishangul: {
      value: 1,
      color: '#E69DB8',
      label: 'Benishangul-Gumuz Region',
      universities: ['Assosa University']
    },
    sidama: {
      value: 2,
      color: '#E9F5BE',
      label: 'Sidama Region',
      universities: [
        'Hawassa University',
        'Dilla University'
      ]
    },
    gambella: {
      value: 1,
      color: '#81E7AF',
      label: 'Gambela Region',
      universities: ['Gambela University']
    },
    harar: {
      value: 0,
      color: '#03A791',
      label: 'Harari Region',
      universities: []
    },
    addis_ababa: {
      value: 6,
      color: '#33FF8C',
      label: 'Addis Ababa',
      universities: [
        'Addis Ababa University',
        'Addis Ababa Science & Technology University',
        'St. Paul’s Hospital Millennium Medical College',
        'Ethiopian Civil Service University',
        'Kotebe Metropolitan University',
        'Ethiopian Institute of Architecture, Building Construction and City Development'
      ]
    },
    dire: {
      value: 1,
      color: '#8C33FF',
      label: 'Dire Dawa',
      universities: ['Dire Dawa University']
    },
    afar: {
      value: 1,
      color: '#FFF3A1',
      label: 'Afar Region',
      universities: ['Samara University']
    },
    snnpr: {
      value: 6,
      color: '#FF8C33',
      label: 'SNNP Region',
      universities: [
        'Arba Minch University',
        'Wolaita Sodo University',
        'Wachamo University',
        'Wolkite University',
        'Jinka University',
        'Wachemo University'
      ]
    }
  };


  return (
     <>
    <div className="relative w-full text-center bg-gray-100 p-4">
      {/* Page Title and Description */}
      <h1 className="text-2xl font-bold mb-1">Ethiopian SVG Map Component</h1>
      <p className="text-gray-600 text-sm mb-1">
        A customizable React component for rendering an interactive SVG map of Ethiopian regions with hover, click, and zoom functionalities. Install via <code>npm install ethiopia-svg-map</code>.
      </p>

      {/* Controls Panel */}
      <div className="mb-2 p-1 bg-white rounded-md shadow-md flex flex-col gap-1">
        <h2 className="text-base font-semibold">Map Controls</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
          {/* Color Pickers */}
          <div>
            <label className="block text-xs font-medium">Default Fill</label>
            <input
              type="color"
              value={defaultFillColor}
              onChange={(e) => setDefaultFillColor(e.target.value)}
              className="w-full h-5 rounded"
            />
          </div>
          <div>
            <label className="block text-xs font-medium">Active Fill</label>
            <input
              type="color"
              value={activeFillColor}
              onChange={(e) => setActiveFillColor(e.target.value)}
              className="w-full h-5 rounded"
            />
          </div>
          <div>
            <label className="block text-xs font-medium">Hover Fill</label>
            <input
              type="color"
              value={hoverFillColor}
              onChange={(e) => setHoverFillColor(e.target.value)}
              className="w-full h-5 rounded"
            />
          </div>
          <div>
            <label className="block text-xs font-medium">Stroke</label>
            <input
              type="color"
              value={strokeColor}
              onChange={(e) => setStrokeColor(e.target.value)}
              className="w-full h-5 rounded"
            />
          </div>
          <div>
            <label className="block text-xs font-medium">Active Stroke</label>
            <input
              type="color"
              value={activeStrokeColor}
              onChange={(e) => setActiveStrokeColor(e.target.value)}
              className="w-full h-5 rounded"
            />
          </div>
          {/* Sliders */}
          <div>
            <label className="block text-xs font-medium">Stroke Width: {strokeWidth}</label>
            <input
              type="range"
              min="0.1"
              max="2"
              step="0.1"
              value={strokeWidth}
              onChange={(e) => setStrokeWidth(parseFloat(e.target.value))}
              className="w-full h-4"
            />
          </div>
          <div>
            <label className="block text-xs font-medium">Active Stroke: {activeStrokeWidth}</label>
            <input
              type="range"
              min="0.1"
              max="3"
              step="0.1"
              value={activeStrokeWidth}
              onChange={(e) => setActiveStrokeWidth(parseFloat(e.target.value))}
              className="w-full h-4"
            />
          </div>
          <div>
            <label className="block text-xs font-medium">Hover Opacity: {hoverOpacity}</label>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={hoverOpacity}
              onChange={(e) => setHoverOpacity(parseFloat(e.target.value))}
              className="w-full h-4"
            />
          </div>
          <div>
            <label className="block text-xs font-medium">Zoom Level: {zoomLevel}</label>
            <input
              type="range"
              min="0.5"
              max="2"
              step="0.1"
              value={zoomLevel}
              onChange={(e) => setZoomLevel(parseFloat(e.target.value))}
              className="w-full h-4"
            />
          </div>
          {/* Checkboxes */}
          <div className="flex items-center gap-1">
            <input
              type="checkbox"
              checked={enableZoom}
              onChange={(e) => setEnableZoom(e.target.checked)}
              className="h-3 w-3"
            />
            <label className="text-xs font-medium">Zoom</label>
          </div>
          <div className="flex items-center gap-1">
            <input
              type="checkbox"
              checked={showValues}
              onChange={(e) => setShowValues(e.target.checked)}
              className="h-3 w-3"
            />
            <label className="text-xs font-medium">Values</label>
          </div>
          <div className="flex items-center gap-1">
            <input
              type="checkbox"
              checked={showRegionLabels}
              onChange={(e) => setShowRegionLabels(e.target.checked)}
              className="h-3 w-3"
            />
            <label className="text-xs font-medium">Labels</label>
          </div>
          <div className="flex items-center gap-1">
            <input
              type="checkbox"
              checked={showLegend}
              onChange={(e) => setShowLegend(e.target.checked)}
              className="h-3 w-3"
            />
            <label className="text-xs font-medium">Legend</label>
          </div>
          <div className="flex items-center gap-1">
            <input
              type="checkbox"
              checked={showRegionColors}
              onChange={(e) => setShowRegionColors(e.target.checked)}
              className="h-3 w-3"
            />
            <label className="text-xs font-medium">Region Colors</label>
          </div>
        </div>
        {/* Reset Button */}
        <button
          onClick={resetSettings}
          className="mt-3 px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600"
        >
          Reset
        </button>
      </div>


 
      {/* Map Component */}
      <EthiopiaSvgMap
        regionData={showRegionColors ? regionData : {}}
        selectedRegion={selectedRegion}
        setSelectedRegion={setSelectedRegion}
        defaultFillColor={defaultFillColor}
        activeFillColor={activeFillColor}
        hoverFillColor={hoverFillColor}
        strokeColor={strokeColor}
        activeStrokeColor={activeStrokeColor}
        strokeWidth={strokeWidth}
        activeStrokeWidth={activeStrokeWidth}
        hoverOpacity={hoverOpacity}
        onRegionClick={handleRegionClick}
        className="flex items-center justify-center w-full h-auto bg-gray-100"
        showValues={showValues}
        showRegionLabels={showRegionLabels}
        tooltipContent={(regionId:any, data:any) => (
          <div className="absolute top-2 right-2 z-50 bg-white border border-gray-300 shadow-lg p-3 rounded-md w-64 text-xs leading-snug">
            <div className="font-semibold text-sm mb-1">{data?.label || regionId}</div>
            {data?.universities?.length > 0 ? (
              <ul className="list-disc flex flex-col items-start justify-start list-inside mb-2">
                {data?.universities.map((uni: any, index: any) => (
                  <li key={index}>{uni}</li>
                ))}
              </ul>
            ) : (
              <div className="mb-2">No universities listed.</div>
            )}
            <div className="text-right text-xs">Total: {data?.value || 0}</div>
          </div>
        )}
        enableZoom={enableZoom}
        zoomLevel={zoomLevel}
        showLegend={showLegend}
      />
      <strong className="text-sm text-center">Selected Region:</strong> {selectedRegion || 'None'}

    </div>
   <footer className="w-full mt-10  text-black  py-4 text-center text-sm">
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="flex items-center gap-4">
          <span className='font-semibold'>Download and try <code>ethiopia-svg-map</code>:</span>
          <a
            href="https://www.npmjs.com/package/ethiopia-svg-map"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-blue-300"
          >
            <Package size={16} color='red' />
            npm
          </a>
          <a
            href="https://github.com/Abenetwolde/ethiopian-svg-map-npm-library"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-blue-300"
          >
            <Github size={16} />
            GitHub
          </a>
        </div>
        <div className="flex items-center gap-2">
          <span>Made by</span>
          <a
            href="https://abnet-wolde-dev.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-blue-300"
          >
            <Globe size={16} color='green' />
            Portfolio
          </a>
        </div>
      </div>
    </footer>
   
    </>
  );
};

