

async function getData(){
    try {

        let data = await fetch('http://localhost:4000/api/forms')
        let forms = await data.json()

        let contentEl = document.getElementById('accordionExample')

        forms.allForms.forEach((form, idx) =>{
           contentEl.innerHTML += `
                <div class="accordion-item">
            <h2 class="accordion-header" id=${form.studentName}>
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target='#${form.studentName.slice(0,3)}${idx}' aria-expanded="true" aria-controls="collapseOne">
                        <h4><strong>Name: ${form.studentName}</strong>
                         <br>Student ID: ${form.studentId}</h4>
                </button>
            </h2>

            <div id=${form.studentName.slice(0,3)}${idx} class="accordion-collapse collapse ${idx == 0? 'show': ''}" aria-labelledby=${form.studentName}
                data-bs-parent="#accordionExample">
                <div class="accordion-body">
                
                    <div>
                        <h4>Current Programme</h4>
                        <p>${form.currentProgramme}</p>
                    </div>
                    

                    <div>
                        <h4>Current Semester</h4>
                        <p>${form.currentSemester}</p>
                    </div>
                    

                    <div>
                        <h4>Programme Requested </h4>
                        <p>${form.programmeRequested}</p>
                    </div>
                    

                    <div>
                        <h4>Reason</h4>
                        <p>${form.reason}</p>
                    </div>
                    

                    <div>
                        <h4>Level</h4>
                        <p>${form.level}</p>
                    </div>
                    

                    <div>
                        <h4>Contact Number</h4>
                        <p>${form.telephone}</p>
                    </div>
                    

                </div>
            </div>
        </div>
           `
        })

        console.log(forms.allForms[0])
    } catch (error) {
        console.log(error)
    }
}

document.addEventListener('load',getData())

