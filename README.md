# Geolocator Helper

The `geolocator-helper` library provides a simple React hook to access geolocation data and convert coordinates to an address. It integrates with the olakrutrim service for address conversion.
### External Service(completely free)
The useGeolocation hook relies on the olakrutrim service for address conversion. To use this service, visit:

Service URL: https://maps.olakrutrim.com/
Make sure you have a valid API key from olakrutrim to utilize the hook effectively.
## Installation

To install the `geolocator-helper` library, use npm or yarn:

```bash
npm install geolocator-helper
```
## Usage
Import the useGeolocation hook from the library and use it within your React component to access geolocation data:

```bash
import { useGeolocation } from 'geolocator-helper';

const MyComponent = () => {
    const { latitude, longitude, address, error } = useGeolocation('YOUR_API_KEY_HERE');
/*if you donot provide api key it will still give latitude and longitude for adress you will need api key*/
    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <p>Latitude: {latitude}</p>
            <p>Longitude: {longitude}</p>
            <p>Address: {address}</p>
        </div>
    );
};
```
### Note
The geolocator-helper library is specifically designed for use in React applications and is not suitable for backend environments like Node.js.

