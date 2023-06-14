const vehicleRaw =
  "eyJtYWtlIjoiSG9uZGEiLCJtb2RlbCI6IkNpdmljIiwieWVhciI6MjAxOSwidmluIjoiYWJjMTIzIn0=";

export default function fetchVehicle() {
  return Promise.resolve(JSON.parse(atob(vehicleRaw)));
}
