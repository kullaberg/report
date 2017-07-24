    navigator.geolocation.getCurrentPosition((position) => {
      const userPosition =
        `Latitude ${position.coords.latitude
        } Longitude ${position.coords.longitude} Altitude ${
        position.coords.altitude}`;
      const mapLink =
        `https://www.google.com/maps/?q=${position.coords
        .latitude}%2C${position.coords.longitude}`;
      document.getElementById('coordinates')
        .innerHTML =
        `<div class="col s12 m6">${userPosition}</div> <div class="col s12 m6>${mapLink}</div>`;
    }, () => {
      document.getElementById('coordinates')
        .innerText = 'Error locating your device';
    }, {
      enableHighAccuracy: true,
    });
