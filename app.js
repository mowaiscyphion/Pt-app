let modalDiv = document.querySelector('.modal-div')
let subjectName = document.querySelector('#subject-name')
let totalMarks = document.querySelector('#total-marks')
let obtainMarks = document.querySelector('#obtain-marks')
let tbody = document.querySelector('tbody')
let totalSum = document.querySelector('.total-sum')

function openModal() {
    modalDiv.style.display = 'flex'
    console.log(modalDiv)
}

function addSubject(event) {
    event.preventDefault();
    const passPercentage = 40;
    if (subjectName.value.trim() !== '') {
        if (parseInt(totalMarks.value) >= 0 && parseInt(obtainMarks.value) >= 0) {
            if (parseInt(obtainMarks.value) <= parseInt(totalMarks.value)) {

                const percentage = (parseInt(obtainMarks.value) / parseInt(totalMarks.value)) * 100;
                const passFail = percentage >= passPercentage ? 'Pass' : 'Fail';

                tbody.innerHTML += `<tr>
                    <td data-label="Subject">${subjectName.value}</td>
                    <td data-label="Total Marks">${totalMarks.value}</td>
                    <td data-label="Obtain Marks">${obtainMarks.value}</td>
                    <td data-label="Percentage">${percentage.toFixed(2)}%</td>
                    <td data-label="Pass/Fail">${passFail}</td>
                 </tr>`;


                // Calculate the sums
                let totalMarksSum = 0;
                let obtainMarksSum = 0;

                document.querySelectorAll('tbody tr').forEach((row) => {
                    totalMarksSum += parseInt(row.querySelector('[data-label="Total Marks"]').textContent);
                    obtainMarksSum += parseInt(row.querySelector('[data-label="Obtain Marks"]').textContent);
                });

                totalSum.innerHTML = `Total Marks ${obtainMarksSum}/${totalMarksSum} (${((parseInt(obtainMarksSum) / parseInt(totalMarksSum)) * 100).toFixed(2)} %)`;

                subjectName.value = '';
                totalMarks.value = '';
                obtainMarks.value = '';
                modalDiv.style.display = 'none';
            } else {

                alert('Obtain marks should be less then total marks')
            }
        } else {
            alert('Marks should be greater then zero')
        }

    } else {
        alert('Please enter subject name')
    }

}