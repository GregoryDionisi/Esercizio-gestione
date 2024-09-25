let people=[]

function aggiungiPersona(){
    let name = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;
    let email = document.getElementById("email").value;
    let birthdate = document.getElementById("birthdate").value;
    let telephone = document.getElementById("telephone").value;
    let country = document.getElementById("country").value;
    let province = document.getElementById("province").value;

if (name === "" || surname === "" || email === "" || birthdate === "" || telephone === "" || country === "" || province === ""){
    alert("Per favore compila tutti i campi");
    return;
}     

let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    if(!emailRegex.test(email)){
        alert("Inserisci una email valida");
        return;
    }

let person = {
    name:name,
    surname:surname,
    email:email,
    birthdate:birthdate,
    telephone:telephone,
    country:country,
    province:province
}

people.push(person); 

aggiornaTabella(person);

document.getElementById("name").value = ""; 
document.getElementById("surname").value = "";
document.getElementById("email").value = "";
document.getElementById("birthdate").value = "";
document.getElementById("telephone").value = "";
document.getElementById("country").value = "";
document.getElementById("province").value = "";
}


function aggiornaTabella() {
    let tabella = document.getElementById("dati");
    tabella.innerHTML = ""; 

    people.forEach((person) => {
        let personRow = document.createElement("tr");

        personRow.innerHTML = `
        <td>${person.name}</td>
        <td>${person.surname}</td>
        <td>${person.email}</td>
        <td>${person.birthdate}</td>
        <td>${person.telephone}</td>
        <td>${person.country}</td>
        <td>${person.province}</td>
    `;
        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Rimuovi";
        
        deleteButton.onclick = function() {
            let index = people.indexOf(person);
            if (index > -1) {
                people.splice(index, 1);
                personRow.parentNode.removeChild(personRow);
                aggiornaTabella(person) 
            }
        };

        let action = document.createElement("td");
        action.appendChild(deleteButton);
        personRow.appendChild(action);

        tabella.appendChild(personRow);
    });
}

function inviaModulo(){
    if(people.length === 0){ 
        alert("Per favore, aggiungi almeno una persona")
        return false;
    }
    return true;
}