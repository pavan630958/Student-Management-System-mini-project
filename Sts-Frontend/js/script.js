const apiUrl = "http://localhost:8080/students";

// Wait for DOM to load
document.addEventListener("DOMContentLoaded", function() {
    fetchStudents();
    document.getElementById("studentForm").addEventListener("submit", handleFormSubmit);
});

// Fetch all students
async function fetchStudents() {
    try {
        const response = await fetch(`${apiUrl}/getall`);
        const data = await response.json();
        const tbody = document.querySelector("#studentTable tbody");
        tbody.innerHTML = "";

        data.forEach(student => {
            tbody.innerHTML += `
                <tr>
                    <td>${student.id}</td>
                    <td>${student.rollNo}</td>
                    <td>${student.name}</td>
                    <td>${student.email}</td>
                    <td>${student.phoneNo}</td>
                    <td>${student.course}</td>
                    <td>${student.year}</td>
                    <td>
                        <button class="btn btn-sm btn-warning" onclick="editStudent(${student.id})">Edit</button>
                        <button class="btn btn-sm btn-danger" onclick="deleteStudent(${student.id})">Delete</button>
                    </td>
                </tr>
            `;
        });
    } catch (err) {
        alert("Error fetching students: " + err);
    }
}

// Handle add/update form submit
async function handleFormSubmit(e) {
    e.preventDefault();

    const id = document.getElementById("studentId").value;
    const student = {
        rollNo: document.getElementById("rollNo").value,
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phoneNo: document.getElementById("phoneNo").value,
        course: document.getElementById("course").value,
        year: parseInt(document.getElementById("year").value)
    };

    let url = `${apiUrl}/add`;
    let method = "POST";
    if (id) { // update if ID exists
        url = `${apiUrl}/update/${id}`;
        method = "PUT";
    }

    try {
        const res = await fetch(url, {
            method,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(student)
        });
        const message = await res.text();
        alert(message);
        resetForm();
        fetchStudents();
    } catch (err) {
        alert("Error saving student: " + err);
    }
}

// Edit student
async function editStudent(id) {
    try {
        const res = await fetch(`${apiUrl}/${id}`);
        const student = await res.json();

        document.getElementById("studentId").value = student.id;
        document.getElementById("rollNo").value = student.rollNo;
        document.getElementById("name").value = student.name;
        document.getElementById("email").value = student.email;
        document.getElementById("phoneNo").value = student.phoneNo;
        document.getElementById("course").value = student.course;
        document.getElementById("year").value = student.year;
    } catch (err) {
        alert("Error fetching student: " + err);
    }
}

// Delete student
async function deleteStudent(id) {
    if (confirm("Are you sure to delete this student?")) {
        try {
            const res = await fetch(`${apiUrl}/delete/${id}`, { method: "DELETE" });
            const message = await res.text();
            alert(message);
            fetchStudents();
        } catch (err) {
            alert("Error deleting student: " + err);
        }
    }
}

// Reset form
function resetForm() {
    document.getElementById("studentId").value = "";
    document.getElementById("studentForm").reset();
}
