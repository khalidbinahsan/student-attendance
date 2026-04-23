export default function AllStudents({student, onDelete, onEdit, onMakePresent, onMakeAbsent}) {
  return (
    <div className="space-y-3 mb-3">
      <div className="border-2 border-gray-200 p-3 rounded-xl relative">
        { student.isPresent === true ? (
            <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide mb-3 bg-blue-100 text-blue-700 absolute top-2 right-2">
            Present
          </span>
        ) : student.isPresent === false ? (
            <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide mb-3 bg-red-100 text-red-700 absolute top-2 right-2">
              Absent
            </span>
        ) : (
          null
        )}
        
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
          <button onClick={onMakePresent} className="border px-2 py-1 rounded bg-blue-50 hover:bg-blue-100 cursor-pointer">
            Send to Present List
          </button>
          <button onClick={onMakeAbsent} className="border px-2 py-1 rounded bg-orange-50 hover:bg-orange-100 cursor-pointer">
            Send to Absent List
          </button>
        </div>
      </div>
    </div>
  );
}
