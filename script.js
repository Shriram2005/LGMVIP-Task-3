
function enrollNew(event) {

    event.preventDefault();
    console.log('Enroll button clicked');

    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const website = document.querySelector('#website').value;
    let imgLink = document.querySelector('#imgLink').value;


    // check values are input or not 
    if (name == "" || email == "" || website == "") {
        alert("Enter all details!");
    }
    else {

        // get gender value 
        let gender = "";
        const gender_male = document.querySelector('#male').checked;
        const gender_female = document.querySelector('#female').checked;

        if (gender_male) {
            gender = "Male";
        } else if (gender_female) {
            gender = "Female";
        }

        // create skills array 
        const skills = [];
        const skill_html = document.querySelector('#html').checked;
        const skill_css = document.querySelector('#css').checked;
        const skill_java = document.querySelector('#java').checked;

        if (skill_html) {
            skills.push("HTML");
        }
        if (skill_css) {
            skills.push("CSS");
        }
        if (skill_java) {
            skills.push("JAVA");
        }

        // create final table row and add to table
        const table = document.querySelector('table');
        const newRegister = document.createElement('tr');
        newRegister.innerHTML = `<td class="table-details-div"><strong>${name}</strong> <br>${gender}<br>${email} <br> <a href="${website}" id="website">${website}</a> <br> <span id="skills">${skills.join(', ')}</span> </td> <td class="table-img-div"> <img src="${imgLink}" alt="profile-pic" id="profile-pic" class="profile-pic" onerror = 'src = "demo2.png"'> </td>`;

        table.appendChild(newRegister);
        // make remove btn visible 
        document.querySelector("#remove").style.display = "block";

        clearForm();
    }
}

function removeStudent(){
    let table = document.querySelector("table");

if(table.rows.length == 2){
    table.lastElementChild.remove();
    // hide remove btn 
    let removeBtn = document.querySelector("#remove");
    removeBtn.style.display = "none";
}
    else if(table.rows.length > 2 ){
    table.lastElementChild.remove();
    }
}


function clearForm() {
    console.log("Clear button clicked")
    document.querySelector('#name').value = '';
    document.querySelector('#email').value = '';
    document.querySelector('#website').value = '';
    document.querySelector('#imgLink').value = '';
    document.querySelector('#male').checked = false;
    document.querySelector('#female').checked = false;
    document.querySelector('#html').checked = false;
    document.querySelector('#css').checked = false;
    document.querySelector('#java').checked = false;
}

// call enrollNew function on 'enroll' button click
const enrollButton = document.querySelector('#enroll');
enrollButton.addEventListener('click', enrollNew);