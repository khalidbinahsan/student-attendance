export default function PresentStudents({student}) {
  return (
    <div className="space-y-3">
      <div className="border-2 border-gray-200 p-3 rounded-xl flex items-center justify-between">
        <span className="font-semibold">{student.name}</span>
        <button className="border px-4 py-1 rounded-lg text-sm hover:bg-red-50">
          Accidentally Added
        </button>
      </div>
    </div>
  );
}
