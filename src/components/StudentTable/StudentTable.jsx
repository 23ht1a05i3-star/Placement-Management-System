function StudentTable({ students }) {
  return (
    <div>
      <h2>Student Details</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Password</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Branch</th>
            <th>CGPA</th>
          </tr>
        </thead>

        <tbody>
          {students.length > 0 ? (
            students.map((student, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{student.studentName}</td>
                <td>{student.password}</td>
                <td>{student.email}</td>
                <td>{student.phone}</td>
                <td>{student.branch}</td>
                <td>{student.CGPA}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">No Student Data Available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default StudentTable;