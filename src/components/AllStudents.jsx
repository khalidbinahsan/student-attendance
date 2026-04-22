export default function AllStudents({student, onDelete, onEdit}) {
  return (
    <div className="space-y-3 mb-3">
      <div className="border-2 border-gray-200 p-3 rounded-xl">
        <h3 className="font-semibold">{student.name}</h3>
        <div className="flex gap-3 text-xs mt-2">
          <button
          onClick={onEdit}
          className="border px-2 py-1 rounded hover:bg-gray-100 cursor-pointer">
            Edit
          </button>
          <button
          onClick={onDelete}
          className="border px-2 py-1 rounded hover:bg-gray-100 text-red-500 cursor-pointer">
            Remove
          </button>
          <button className="border px-2 py-1 rounded bg-blue-50 hover:bg-blue-100 cursor-pointer">
            Send to present List
          </button>
          <button className="border px-2 py-1 rounded bg-orange-50 hover:bg-orange-100 cursor-pointer">
            Send to Absent List
          </button>
        </div>
      </div>
    </div>
  );
}
