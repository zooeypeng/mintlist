"use client"
import { useState, useEffect } from "react";
import ListItem from "./ListItem";
import fetchVehicle from "./fetchVehicle";
import { NullableVehicle } from "./types"


export default function Home() {
  const [ vehicle, setVehicle ] = useState<NullableVehicle>(null);

  const fetchData = async () => {
    try {
      const response = await fetchVehicle();
      setVehicle(response);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData()
  },[])

  return (
    <main className="grid grid-cols-3 gap-4 p-4">
      <ListItem data={vehicle} />
    </main>
  )
}
