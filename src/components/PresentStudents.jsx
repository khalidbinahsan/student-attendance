export default function PresentStudents({student, onMakePresent}) {
  return (
    <div className="space-y-3 mb-3">
      <div className="border-2 border-gray-200 p-3 rounded-xl flex items-center justify-between">
        <span className="font-semibold">{student.name}</span>
        <button onClick={onMakePresent} className="cursor-pointer border px-4 py-1 rounded-lg text-sm bg-orange-50 hover:bg-orange-100">
          Make Absent
        </button>
      </div>
    </div>
  );
}
