function save(item){
    let list = readItems();
    list.push(item);
    let val = JSON.stringify(list);
    localStorage.setItem("services",val);
}

function readItems(){
    let data = localStorage.getItem("services");
    if(!data){//NOT data
        return[];//creating the array
    }else{
        let list = JSON.parse(data);
        return list;//returning the array
    }
    
}
