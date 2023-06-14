import { UpdateVehicle as Vehicle } from './interfaces'

export type NullableVehicle = Vehicle & {
  vin: string; // Vehicle ID
} | null;
