# Geolocator Helper

The `geolocator-helper` library provides simple, lightweight React hooks to:
- Access **geolocation** data (latitude, longitude).
- Convert coordinates to **address** using the Ola Krutrim Maps API.
- Detect **online/offline network status** in real-time.

## 🌍 External Service (Completely Free)

The `useGeolocation` hook uses the **Ola Krutrim** service for address conversion.

- 🔗 Service URL: [https://maps.olakrutrim.com/](https://maps.olakrutrim.com/)

> Make sure you have a valid API key from Ola Krutrim to use the reverse geocoding feature.

---

## 📦 Installation

Install the package using npm:

```bash
npm install geolocator-helper
```

---

## 🔧 Usage

### 1. `useGeolocation` Hook
Use this hook to get the user's current latitude, longitude, and optionally address (if API key is provided):

```jsx
import { useGeolocation } from 'geolocator-helper';

const MyComponent = () => {
  const { latitude, longitude, address, error } = useGeolocation('YOUR_API_KEY_HERE');

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

✅ If you don’t provide an API key, the hook will still return latitude and longitude.  
🗺️ For address conversion, pass a valid Ola Krutrim API key.

---

### 2. `useNetworkStatus` Hook
Detect network status (online/offline) in real time:

```jsx
import { useNetworkStatus } from 'geolocator-helper';

const NetworkStatus = () => {
  const isOnline = useNetworkStatus();

  return (
    <div>
      <p>Status: {isOnline ? '🟢 Online' : '🔴 Offline'}</p>
    </div>
  );
};
```

This uses `navigator.onLine` and listens to browser online/offline events.

---

### Note
The `geolocator-helper` library is specifically designed for use in React applications and is not suitable for backend environments like Node.js.