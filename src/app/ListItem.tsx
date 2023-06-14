import { VehicleType } from "./types"
import { useState } from "react"

interface ListItemProps {
  data: VehicleType | null;
}

const ListItem: React.FC<ListItemProps> = ({ data }) => {
  const [ isEditable, setIsEditable ] = useState(true)

  const handleEdit = () => {
    setIsEditable(!isEditable)
  } 

  return data ? (
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
        onClick={handleEdit}
        className={`${isEditable ? 'bg-teal-300' : 'bg-slate-400 cursor-not-allowed'} text-white py-1 text-center rounded-full mt-6`}>
        Edit
      </div>
    </div>
  ) : <div>loading...</div>;
}

export default ListItem