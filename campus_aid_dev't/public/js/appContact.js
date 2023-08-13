

async function getData(){
    try {

        let data = await fetch('http://localhost:4000/api/forms/contacts ')
        let forms = await data.json()

        let contentEl = document.getElementById('accordionExample')

        forms.allContacts.forEach((form, idx) =>{
            contentEl.innerHTML += `
                <div class="accordion-item">
            <h2 class="accordion-header" id=${form._id}>
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target='#${form.fullName.slice(0,3)}${idx}' aria-expanded="true" aria-controls="collapseOne">
                        <h4><strong>Case ID: ${form._id.slice(8,19)}</strong>
                </button>
            </h2>

            <div id=${form.fullName.slice(0,3)}${idx} class="accordion-collapse collapse ${idx == 0 ? "show" : ''}" aria-labelledby=${form.studentName}
                data-bs-parent="#accordionExample">
                <div class="accordion-body">
                
                    <div>
                        <h4>Full name</h4>
                        <p>${form.fullName}</p>
                    </div>
                    

                    <div>
                        <h4>Email</h4>
                        <p>${form.email}</p>
                    </div>
                    

                    <div>
                        <h4>Message</h4>
                        <p>${form.message}</p>
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

