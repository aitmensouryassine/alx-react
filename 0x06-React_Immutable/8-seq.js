import { Seq } from 'immutable';

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export default function printBestStudents(object) {
  console.log(
    Seq(object)
      .filter((student) => student.score >= 70)
      .map((student) => ({
        ...student,
        firstName: capitalize(student.firstName),
        lastName: capitalize(student.lastName),
      }))
      .toJSON(),
  );
}
