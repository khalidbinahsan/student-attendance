export default function AbsentStudents({student, onMakeAbsent}) {
  return (
    <div className="space-y-3 mb-3">
      <div className="border-2 border-gray-200 p-3 rounded-xl flex items-center justify-between">
        <span className="font-semibold text-sm">{student.name}</span>
        <button onClick={onMakeAbsent} className="cursor-pointer border px-4 py-1 rounded-lg text-sm bg-blue-50 hover:bg-blue-100">
          Make Present
        </button>
      </div>
    </div>
  );
}
