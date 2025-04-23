function portalKKM(){
    window.location.href = "https://www.moh.gov.my/";
}

function mySejahtera(){
    window.location.href = "https://mysejahtera.moh.gov.my/en/";
}

function nearbyHealthServices(){
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          const url = `https://www.google.com/maps/search/hospital/@${lat},${lng},14z`;

          window.open(url, "_blank");  
        }, () => {
          alert("Please allow location access.");
        });
      } else {
        alert("Geolocation is not supported by your browser.");
      }
}

