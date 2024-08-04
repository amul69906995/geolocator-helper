const convertToAddress = async (lat, lng, apiKey) => {
    try {
        const url = `https://api.olamaps.io/places/v1/reverse-geocode?latlng=${lat},${lng}&api_key=${apiKey}`;
        const response = await fetch(url);
        const data = await response.json();
       // console.log(data)
        if (data.status === 'ok') {
            return data?.results[0]?.formatted_address;
        }
        else {
            throw new Error(data?.message)
        }
    }
    catch (error) {
       // console.log(error);
        throw new Error(error.message)
    }
};
const getLocation = async (apiKey) => {
    let address, latitude, longitude, error;
    try {
        const { coords } = await new Promise((resolve, reject) => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(resolve, reject);
            } else {
                reject(new Error("Geolocation is not supported by your browser. Allow access to location."));
            }
        });
        latitude = coords.latitude;
        longitude = coords.longitude;
        address = await convertToAddress(coords.latitude, coords.longitude, apiKey);

       // console.log(coords.latitude, coords.longitude, null, address);

        //console.log("inside try", latitude, longitude, address, error);

    } catch (err) {
       // console.log("inside catch errrrr|||||", err);
        error = err.message || "Failed to get location.";
        address = null
       // console.log("inside catch", latitude, longitude, address, error);

    } finally {
        //console.log("inside finally", latitude, longitude, address, error);
        return {
            latitude, longitude, address, error
        }
    }
};


import { useState, useEffect } from 'react';

export const useGeolocation = (apiKey) => {
    const [location, setLocation] = useState({
        latitude: null,
        longitude: null,
        address: null,
        error: null,
    });

    useEffect(() => {
        const fetchLocation = async () => {
            const locationData = await getLocation(apiKey);
            setLocation(locationData);
        };

        fetchLocation();
    }, [apiKey]);

    return location;
};