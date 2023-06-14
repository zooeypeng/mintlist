import { useState } from "react";
import { NullableVehicle } from "./types";
import { UpdateVehicle } from "./interfaces";
import EditPanel from "./EditPanel";

interface ListItemProps {
  data: NullableVehicle;
}

const ListItem: React.FC<ListItemProps> = ({ data }) => {
  const [ isEditMode, setIsEditMode ] = useState(false)

  const handleEditMode = () => {
    setIsEditMode(!isEditMode)
  }

  const handleUpdate = (vehicleData: UpdateVehicle) => {
    const { make, model, year } = vehicleData
    alert(`Update Vehicle Data: ${make}, ${model} and ${year}, and call API again to list the lastest data.`)
  }

  return data ? (
    <>
      <div className="flex flex-col border rounded p-4">
        <div className="text-lg font-medium border-b mb-6">
          {data.make}
        </div>
        <div className="flex">
          <div className="flex-none w-12">YEAR:</div>
          <div className="flex-auto text-right">{data.year}</div>
        </div>
        <div className="flex">
          <div className="flex-none w-12">VIN:</div>
          <div className="flex-auto text-right">{data.vin}</div>
        </div>

        <div
          onClick={handleEditMode}
          className={`${isEditMode ? 'bg-slate-400 cursor-not-allowed' : 'bg-teal-300 cursor-pointer' } text-white py-1 text-center rounded-full mt-6`}>
          Edit
        </div>
      </div>

      {isEditMode && (
        <EditPanel
          data={data}
          handleUpdate={handleUpdate}
          handleCancel={() => setIsEditMode(false)}
        />
      )}
    </>
  ) : <div>loading...</div>;
}

export default ListItem