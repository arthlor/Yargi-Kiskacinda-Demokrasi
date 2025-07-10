import React, { useMemo } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import type { CityCoords, Person } from '../types';

interface DataMapProps {
  cityCoords: CityCoords;
  setCityFilter: (value: string) => void;
  filteredPersons: Person[];
}

const DataMap: React.FC<DataMapProps> = React.memo(({ cityCoords, setCityFilter, filteredPersons }) => {
  const cityData = useMemo(() => {
    return filteredPersons.reduce((acc, { şehir }) => {
      acc[şehir] = (acc[şehir] || 0) + 1;
      return acc;
    }, {} as { [key: string]: number });
  }, [filteredPersons]);

  return (
    <MapContainer center={[39, 35]} zoom={5.5} scrollWheelZoom={false} className="h-[600px] rounded-lg border border-border-color bg-secondary-bg">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
      />
      {Object.entries(cityData).map(([city, count]) => {
        if (!cityCoords[city]) return null;
        
        const customIcon = new L.DivIcon({
          className: 'custom-map-marker',
          html: `<div class="bg-highlight text-white w-8 h-8 flex justify-center items-center rounded-full border-2 border-white font-bold text-base animate-pulse">${count}</div>`,
          iconSize: [30, 30],
          iconAnchor: [15, 15],
        });

        return (
          <Marker 
            key={city} 
            position={cityCoords[city]} 
            icon={customIcon}
            eventHandlers={{
              click: () => {
                setCityFilter(city);
              },
            }}
          >
            <Popup>
              <b className="text-highlight">{city}</b><br />Toplam Vaka: {count}
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
});

export default DataMap; 