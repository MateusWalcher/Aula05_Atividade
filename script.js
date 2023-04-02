function showTodos(){
    let list = document.getElementById('list')
    list.innerHTML = ''
    for(let i = 0; i < dados.length; i++){
        list.innerHTML += `<div class="show-todos"><li><pre>ID:${dados[i]['id']}  
        Title: ${dados[i]['title']}  
        Completed: ${dados[i]['completed']}
        
        UserId:${dados[i]['userId']}    Username:${dadosUser[dados[i]['userId'] -1]['name']}  <button onclick="showUserDetails(${dados[i]['userId']-1})" id="btn-show-Todos">Detalhes usuário</button></pre></li></div>`
    }
    
}   

function showUserDetails(id){
    let list = document.getElementById('list')
    list.innerHTML = ''
    list.innerHTML += `<li><pre>ID:${dadosUser[id]['id']}
        Name: ${dadosUser[id]['name']}
        Username: ${dadosUser[id]['username']}
        Email: ${dadosUser[id]['email']}
        Address
            Street: ${dadosUser[id]['address']['street']}
            Suite: ${dadosUser[id]['address']['suite']}
            City: ${dadosUser[id]['address']['city']}
            Zipcode: ${dadosUser[id]['address']['zipcode']}
            Geo
                Lat: ${dadosUser[id]['address']['geo']['lat']}
                Lng: ${dadosUser[id]['address']['geo']['lng']}
            
        Phone: ${dadosUser[id]['phone']}
        Website: ${dadosUser[id]['website']}
        Company
            Name: ${dadosUser[id]['company']['name']}
            CatchPhrase: ${dadosUser[id]['company']['catchPhrase']}
            Bs: ${dadosUser[id]['company']['bs']}
        </pre></li>`
}

function showTodoUser(id){
    let list = document.getElementById('list')
    for(let i = 0; i < dados.length; i++){
        if(id == dados[i]['userId']){
            list.innerHTML += `<div class="content-body-todos"><li><pre>ID:${dados[i]['id']}  
            Title: ${dados[i]['title']}  
            Completed: ${dados[i]['completed']}
            Username:${dadosUser[dados[i]['userId'] -1]['name']}</pre></li></div>`
        }
    }
    
}


function showUser(){
    let list = document.getElementById('list')
    list.innerHTML = ''
    for(let i = 0; i < dadosUser.length; i++){
        list.innerHTML += `<li><pre>ID:${dadosUser[i]['id']}
        Name: ${dadosUser[i]['name']}
        Username: ${dadosUser[i]['username']}
        Email: ${dadosUser[i]['email']}
        Address
            Street: ${dadosUser[i]['address']['street']}
            Suite: ${dadosUser[i]['address']['suite']}
            City: ${dadosUser[i]['address']['city']}
            Zipcode: ${dadosUser[i]['address']['zipcode']}
            Geo
                Lat: ${dadosUser[i]['address']['geo']['lat']}
                Lng: ${dadosUser[i]['address']['geo']['lng']}
            
        Phone: ${dadosUser[i]['phone']}
        Website: ${dadosUser[i]['website']}
        Company
            Name: ${dadosUser[i]['company']['name']}
            CatchPhrase: ${dadosUser[i]['company']['catchPhrase']}
            Bs: ${dadosUser[i]['company']['bs']}
        </pre></li>`
        showTodoUser(dadosUser[i]['id'])
    }
}

function validadeExistUserID(input){
    let values = [];
    for(let i = 0; i < dadosUser.length; i++){
        values.push(dadosUser[i]['id'])
    }
    return values.includes(input+1)
}

function showUserID(){
    let input = document.getElementById('userID').value - 1
    let list = document.getElementById('list')
    list.innerHTML = ''

    if(input == -1){
        alert('Digite algo para pesquisar')
    }else if(!validadeExistUserID(input)){
        alert('Usuário não existe')
    }else{
        list.innerHTML = `<li><pre>ID:${dadosUser[input]['id']}
        Name: ${dadosUser[input]['name']}
        Username: ${dadosUser[input]['username']}
        Email: ${dadosUser[input]['email']}
        Address
        Street: ${dadosUser[input]['address']['street']}
        Suite: ${dadosUser[input]['address']['suite']}
        City: ${dadosUser[input]['address']['city']}
        Zipcode: ${dadosUser[input]['address']['zipcode']}
        Geo
            Lat: ${dadosUser[input]['address']['geo']['lat']}
            Lng: ${dadosUser[input]['address']['geo']['lng']}
        
        Phone: ${dadosUser[input]['phone']}
        Website: ${dadosUser[input]['website']}
        Company
        Name: ${dadosUser[input]['company']['name']}
        CatchPhrase: ${dadosUser[input]['company']['catchPhrase']}
        Bs: ${dadosUser[input]['company']['bs']}
        </pre></li>`
    }

    document.getElementById('userID').value = ''
}
    
