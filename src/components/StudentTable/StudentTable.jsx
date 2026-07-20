import { Link } from "react-router-dom";
import {
  FaEye,
  FaEdit,
  FaTrash,
} from "react-icons/fa";
import "./StudentTable.css";

function StudentTable({ students, deleteStudent }) {

  if (students.length === 0) {
    return (
      <div className="no-student">
        <h2>No Students Registered</h2>
        <p>Click "Add Student" to register a new student.</p>
      </div>
    );
  }

  return (
    <div className="table-container">

      <table className="student-table">

        <thead>

          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Roll No</th>
            <th>Email</th>
            <th>Branch</th>
            <th>CGPA</th>
            <th>Year</th>
            <th>Actions</th>
          </tr>

        </thead>

        <tbody>

          {students.map((student, index) => (

            <tr key={student.id}>

              <td>{index + 1}</td>

              <td>{student.studentName}</td>

              <td>{student.rollNo}</td>

              <td>{student.email}</td>

              <td>{student.branch}</td>

              <td>{student.cgpa}</td>

              <td>{student.year}</td>

              <td>

                <div className="action-buttons">

                  <Link to={`/Students/${student.id}`}>
                    <button className="view-btn">
                      <FaEye /> View
                    </button>
                  </Link>

                  <Link to={`/EditStudent/${student.id}`}>
                    <button className="edit-btn">
                      <FaEdit /> Edit
                    </button>
                  </Link>

                  <button
                    className="delete-btn"
                    onClick={() => {
                      if (
                        window.confirm(
                          "Delete this student?"
                        )
                      ) {
                        deleteStudent(student.id);
                      }
                    }}
                  >
                    <FaTrash /> Delete
                  </button>

                </div>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default StudentTable;