class Place {
  constructor(title, imageUri, address, location) {
    this.id = new Date.toString() + Math.random().toString(); //could be a backend
    this.title = title;
    this.imageUri = imageUri;
    this.address = address;
    this.location = location; // { lat: 0.141241, lng: 127.12343 }
  }
}
