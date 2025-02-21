
import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  const locations: { name: string; coordinates: [number, number]; country: string }[] = [
    { name: "Abidjan", coordinates: [-4.0082, 5.3596], country: "Côte d'Ivoire" },
    { name: "Yamoussoukro", coordinates: [-5.2769, 6.8276], country: "Côte d'Ivoire" },
    { name: "Bouaké", coordinates: [-5.0338, 7.6906], country: "Côte d'Ivoire" },
    { name: "San Pedro", coordinates: [-6.6363, 4.7485], country: "Côte d'Ivoire" },
    { name: "Bamako", coordinates: [-8.0029, 12.6392], country: "Mali" },
    { name: "Ouagadougou", coordinates: [-1.5197, 12.3714], country: "Burkina Faso" }
  ];

  useEffect(() => {
    if (!mapContainer.current) return;

    mapboxgl.accessToken = 'pk.eyJ1IjoibXdpbGZyaWVka29uZSIsImEiOiJjbTdlbGg2MW8wN3hmMmpxdXRjaThnemN3In0.ka1kBErO-4NTNc48nHYfJg';
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [-4.0082, 8.0000] as [number, number],
      zoom: 5
    });

    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    locations.forEach(location => {
      const marker = new mapboxgl.Marker({ color: "#0F5132" }) // Changé en vert foncé
        .setLngLat(location.coordinates)
        .setPopup(
          new mapboxgl.Popup({ offset: 25 })
            .setHTML(`
              <strong>${location.name}</strong><br>
              ${location.country}
            `)
        )
        .addTo(map.current!);
    });

    return () => {
      map.current?.remove();
    };
  }, []);

  return (
    <div ref={mapContainer} className="w-full h-full" />
  );
};

export default Map;
