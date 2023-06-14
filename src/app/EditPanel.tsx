import { useState } from 'react';
import { NullableVehicle } from "./types";

interface VehicleProps {
  data: NullableVehicle;
  handleUpdate: Function;
  handleCancel: Function;
}

const EditPanel: React.FC<VehicleProps> = ({ data, handleUpdate, handleCancel }) => {
  const [ vehicleData, setVehicleData ] = useState<NullableVehicle>(data)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setVehicleData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  return (
    <div className="">
      <label className="block mb-4">
        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
          Make
        </span>
        <input
          value={vehicleData?.make}
          onChange={handleChange}
          type="text"
          name="make"
          className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
          placeholder="Make"
        />
      </label>

      <label className="block mb-4">
        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
          Model
        </span>
        <input
          value={vehicleData?.model}
          onChange={handleChange}
          type="text"
          name="model"
          className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
          placeholder="Model"
        />
      </label>

      <label className="block mb-4">
        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
          Year
        </span>
        <input
          value={vehicleData?.year}
          onChange={handleChange}
          type="number"
          name="year"
          className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
          placeholder="Year"
        />
      </label>

      <label className="block mb-4">
        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
          Vin
        </span>
        <input
          defaultValue={vehicleData?.vin}
          disabled
          type="text"
          name="vin"
          className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-slate-700"
          placeholder="Vin"
        />
      </label>

      <div className="grid grid-cols-2 gap-4">
        <div
          onClick={() => handleUpdate(vehicleData)}
          className="bg-teal-300 text-white cursor-pointer py-1 text-center rounded-full">
          Update
        </div>
        <div
          onClick={() => handleCancel()}
          className="bg-gray-200 cursor-pointer py-1 text-center rounded-full">
          Cancel
        </div>
      </div>
    </div>
  )
}

export default EditPanel