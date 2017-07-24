    navigator.geolocation.getCurrentPosition((position) => {
      const userPosition =
        `Latitude ${position.coords.latitude
        }<br> Longitude ${position.coords.longitude} <br> Altitude ${
        position.coords.altitude}`;
      const mapLink =
        `https://www.google.com/maps/?q=${position.coords
        .latitude}%2C${position.coords.longitude}`;
      document.getElementById('coordinates')
        .innerHTML =
        `<div class="col s12 m6"><a href=${mapLink}>${userPosition}</a></div>`;
    }, () => {
      document.getElementById('coordinates')
        .innerText = 'Error locating your device';
    }, {
      enableHighAccuracy: true,
    });
