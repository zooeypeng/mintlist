import { Vehicle } from './interfaces'

export type VehicleType = Vehicle & {
  vin: string; // Vehicle ID
} | null;
