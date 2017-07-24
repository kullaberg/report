    navigator.geolocation.getCurrentPosition((position) => {
      const userPosition =
        `Latitude ${position.coords.latitude
        } Longitude ${position.coords.longitude} Altitude ${
        position.coords.altitude}`;
      document.getElementById('coordinates')
        .innerText = userPosition;
    }, () => {
      document.getElementById('coordinates')
        .innerText = 'Error locating your device';
    }, {
      enableHighAccuracy: true,
    });
