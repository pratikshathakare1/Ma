function addSubject() {
    const table = document.getElementById('subjects-table');
    const row = table.insertRow();
    row.innerHTML = `
        <td><input type="text" class="subject-code"></td>
        <td><input type="text" class="subject-name"></td>
        <td><input type="number" class="subject-marks"></td>
        <td><button onclick="removeSubject(this)">Remove</button></td>
    `;
}

function removeSubject(button) {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

function generateMarksheet() {
    const studentName = document.getElementById('student-name').value;
    const motherName = document.getElementById('mother-name').value;
    const collegeName = document.getElementById('college-name').value;
    
    const subjectCodes = document.querySelectorAll('.subject-code');
    const subjectNames = document.querySelectorAll('.subject-name');
    const subjectMarks = document.querySelectorAll('.subject-marks');
    
    let totalMarks = 0;
    let subjects = [];
    
    for (let i = 0; i < subjectCodes.length; i++) {
        const code = subjectCodes[i].value;
        const name = subjectNames[i].value;
        const marks = parseInt(subjectMarks[i].value);
        
        subjects.push({ code, name, marks });
        totalMarks += marks;
    }
    
    const percentage = (totalMarks / (subjectCodes.length * 100)) * 100;
    const status = percentage >= 40 ? 'Pass' : 'Fail';
    
    let marksheetHTML = `
        <div class="marksheet-container">
            <h2>Marksheet</h2>
            <p><strong>Student Name:</strong> ${studentName}</p>
            <p><strong>Mother's Name:</strong> ${motherName}</p>
            <p><strong>College Name:</strong> ${collegeName}</p>
            <table class="marksheet-table">
                <tr>
                    <th>Subject Code</th>
                    <th>Subject Name</th>
                    <th>Marks</th>
                </tr>
    `;
    
    subjects.forEach(subject => {
        marksheetHTML += `
            <tr>
                <td>${subject.code}</td>
                <td>${subject.name}</td>
                <td>${subject.marks}</td>
            </tr>
        `;
    });
    
    marksheetHTML += `
            <tr>
                <td colspan="2"><strong>Total Marks</strong></td>
                <td>${totalMarks}</td>
            </tr>
            <tr>
                <td colspan="2"><strong>Percentage</strong></td>
                <td>${percentage.toFixed(2)}%</td>
            </tr>
            <tr>
                <td colspan="2"><strong>Status</strong></td>
                <td>${status}</td>
            </tr>
        </table>
        </div>
    `;
    
    document.getElementById('marksheet').innerHTML = marksheetHTML;
}
