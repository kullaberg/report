window.test = true;
//
navigator.geolocation.getCurrentPosition((position) => {
  let lat = position.coords.latitude;
  let long = position.coords.longitude;
  let alt = position.coords.altitude;
  const userPosition =
    `Latitude: ${lat
        }<br> Longitude: ${long} <br> Altitude: ${
        alt}`;
  const mapLink = `https://www.google.com/maps/?q=${lat}%2C${long}`;
  document.getElementById('coordinates')
    .innerHTML =
    `<a target="_blank" href=${mapLink}>${userPosition}</a>`;
  document.getElementById('sendButton')
    .innerHTML =
    `<a class="btn-large white-text blue waves-light" href="mailto:carlos@2activedesign.com?subject = Report&amp;body = <p><a href=${mapLink}>${userPosition}</a> </p><p>Before sending the email, replace this sentence with your report and attach 3 pictures taken with your phone from the front, side and at a distance.">Send</a>`;
}, () => {
  document.getElementById('coordinates')
    .innerText = 'Error locating your device';
  if (window.test) {
    lat = 56.301339399999996;
    long = 12.452367899999999;
    alt = null;
    const userPosition =
      `Latitude: ${lat
        }<br> Longitude: ${long} <br> Altitude: ${
        alt}`;
    const mapLink = `https://www.google.com/maps/?q=${lat}%2C${long}`;
    document.getElementById('coordinates')
      .innerHTML =
      `<a target="_blank" href=${mapLink}>${userPosition}</a>`;
    document.getElementById('sendButton')
      .innerHTML =
      `<a class="btn-large white-text blue waves-light" href="mailto:carlos@2activedesign.com?subject=Report&body=<p><a href=${mapLink}>${userPosition}</a></p><p>Before sending the email, replace this sentence with your report and attach 3 pictures taken with your phone from the front, side and at a distance.</p>">Send</a>`;
  }
}, {
  enableHighAccuracy: true,
});
