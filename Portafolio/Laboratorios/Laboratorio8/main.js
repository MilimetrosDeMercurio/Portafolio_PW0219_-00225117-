let carnet_field =  document.querySelector("#carnet_field")
let schedule_dropdown =  document.querySelector("#schedule_field")
let late_switch =  document.querySelector("#late_switch")
let submit_btn =  document.querySelector("#submit_btn")

let table_body = document.querySelector("#table_body")
let carnet_regex= new RegExp('^[0-9]{8}$')

let student_list = []
let serial = 0

/*
    Función para agregar un hijo a la tabla
*/

let printArray = ()=>{

    table_body.innerHTML=""

    student_list.forEach((elemento=>{

        let new_row = document.createElement("tr")
        let datetime = new Date()
    
        let new_cell = document.createElement("td")
        let new_btn = document.createElement("button")


        let new_input = document.createElement("input")
        let delete_cell = document.createElement("td")

        new_row.classList.add("table-active")
        new_row.innerHTML=

        `<th scope='row'>${elemento.carnet}</th>
        <td>${elemento.horario}</td>
        <td>${elemento.hora}</td>
        <td>${elemento.tarde}</td>`

        //para boton 
        
        new_btn.className = "btn btn-succes"
        new_btn.innerText = "ELiminar"
        new_btn.value = elemento.id

        new_btn.disabled = true

        new_btn.addEventListener("click", event=>{
            let id_actual = event.target.value

            student_list.forEach((elemento,pos)=>{
                if(id_actual==elemento.id){
                    student_list.splice(pos,1)
                    printArray()
                }
            })
            
        })

        delete_cell.addEventListener("keyup",()=>{
            let carnetConfirmar = new_input.value

            if(carnet_regex.test(carnetConfirmar)){
                if(carnetConfirmar==elemento.carnet){
                    new_btn.disabled = false
                }
            }else{
                new_btn.disabled = true
            }
        })

            new_cell.appendChild(new_btn)
            new_row.appendChild(new_cell)
            
            delete_cell.appendChild(new_input)
            new_row.appendChild(delete_cell)

            table_body.appendChild(new_row)
            

            /*new_campo.addEventListener("keyup",()=>{
                if(new_campo.value == elemento.carnet){
                    new_btn.disabled = false;
                }else{
                    new_btn.disabled = true;
                }
            })*/
    }))
}

let addStudent = (carnet, schedule, late)=>{
    student_list.push({
        "id":serial,
        "carnet": carnet,
        "horario": schedule,
        "tarde": late
    })

    serial++
   
}

/*
    Función para parsear el valor booleano del late_switch
*/

let parseLateSwitch= (value)=>{
    if(value){
        return "Tardisimo"
    }
    return "A tiempo"
}

/*
    Listener para detectar el click en el boton
*/

submit_btn.addEventListener("click", ()=>{
    let carnet = carnet_field.value
    let schedule = schedule_dropdown.options[schedule_dropdown.selectedIndex].text
    let late = parseLateSwitch(late_switch.checked)

    if(carnet_regex.test(carnet)){
        addStudent(carnet, schedule, late)
        printArray()
    }else{
        alert("Formáto de carnet no válido")
    }
})

/*
    Listener para disparar el botón cuando se aprete enter
*/

carnet_field.addEventListener("keyup", (event)=>{
    let keyCode = event.keyCode
    let carnet = carnet_field.value

    if(keyCode == 13){
        submit_btn.click()
    }

    if(carnet_regex.test(carnet)){
    submit_btn.disabled = false; 
    }else{
        submit_btn.disabled = true; 
    }
})