

async function getData(){
    try {

        let data = await fetch('http://localhost:4000/api/forms/complaint')
        let forms = await data.json()

        console.log(forms)

        let contentEl = document.getElementById('accordionExample')

        forms.complains.forEach((form, idx) =>{
            contentEl.innerHTML += `
                <div class="accordion-item ">
            <h2 class="accordion-header" id=${form._id}>
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target='#accord-${form.fullName.slice(0,3)}${idx}' aria-expanded="true" aria-controls="collapseOne">
                        <h4><strong> Case ID: ${form._id.slice(8,19)}</strong>
                </button>
            </h2>

            <div id=accord-${form.fullName.slice(0,3)}${idx} class="accordion-collapse collapse ${idx == 0 ? "show" : ''}" aria-labelledby=${form.studentName}
                data-bs-parent="#accordionExample">
                <div class="accordion-body bg-dark ">
                
                    <div class="bg-light mb-1 p-2 rounded ">
                        <h4 class="">Full name</h4>
                        <p class="m-2">${form.fullName}</p>
                    </div>
                    

                    <div class="bg-light mb-1 p-2 rounded col">
                        <h4>Registration Number</h4>
                        <p>${form.registrationNumber}</p>
                    </div>
                    

                    <div class="bg-light p-2 mb-1 rounded">
                        <h4>Programme</h4>
                        <p>${form.program}</p>
                    </div>

                    <div class="bg-light mb-1 p-2 rounded">
                        <h4>Level</h4>
                        <p>${form.level}</p>
                    </div>

                    <div class="bg-light mb-1 p-2 rounded">
                        <h4>Mobile Number</h4>
                        <p>${form.telephone}</p>
                    </div>

                    <div class="bg-light mb-1 p-2 rounded">
                        <h4>Department</h4>
                        <p>${form.department}</p>
                    </div>

                    <div class="bg-light mb-1 p-2 rounded">
                        <h4>Faculty</h4>
                        <p>${form.faculty}</p>
                    </div>

                    <div class="bg-light mb-1 p-2 rounded">
                        <h4>Code</h4>
                        <p>${form.code}</p>
                    </div>

                    <div class="bg-light mb-1 p-2 rounded">
                        <h4>Course</h4>
                        <p>${form.course}</p>
                    </div>

                    <div class="bg-light mb-1 p-2 rounded">
                        <h4>Lecturer</h4>
                        <p>${form.lecturer}</p>
                    </div>

                    <div class="bg-light mb-1 p-2 rounded">
                        <h4>Year</h4>
                        <p>${form.year}</p>
                    </div>

                    <div class="bg-light mb-1 p-2 rounded">
                        <h4>Semester</h4>
                        <p>${form.semester}</p>
                    </div>

                    <div class="bg-light mb-1 p-2 rounded">
                        <h4>Session</h4>
                        <p>${form.session}</p>
                    </div >

                    <div class="bg-light mb-1 rounded p-2 ${form.grade? '': 'd-none'} ">
                        <h4>Grade</h4>
                        <p>${form.grade}</p>
                    </div>

                    <div class="bg-light mb-1 p-2 rounded">
                        <h4 ">Complain</h4>
                        <p>${form.complaint}</p>
                    </div>
                    
                    <div class="bg-light mb-1 p-0 rounded">
                        <h4 class="badge bg-dark ms-2">Created</h4>
                        <p class="text-dark p-1">${form.createdAt.split('T')[0]} ${form.createdAt.split('T')[0]}</p>
                    </div>
                </div>
                
            </div>
        </div>
        `
        })

    } catch (error) {
        console.log(error)
    }

}

document.addEventListener('load',getData())
