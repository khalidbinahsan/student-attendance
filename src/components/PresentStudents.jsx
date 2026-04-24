import PresentStudentCard from './PresentStudentCard'
function PresentStudents({allStudents, toggleList}) {
  const presentStudents = allStudents.filter(
    (student) => student.isPresent === true,
  );
  return (
    <div className="border-2 border-gray-300 rounded-2xl p-4 bg-white min-h-[500px]">
      <h2 className="text-center font-bold mb-4 italic">
        Present List ({presentStudents.length})
      </h2>
      {presentStudents.length === 0 ? (
        <p className="text-center">No student present</p>
      ) : (
        presentStudents.map((student) => (
          <PresentStudentCard
            key={student.id}
            student={student}
            onMakePresent={() => toggleList(student)}
          />
        ))
      )}
    </div>
  );
}
export default PresentStudents
