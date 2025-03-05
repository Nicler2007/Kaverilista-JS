
let friends = [];
        
function addFriend() {
    let input = document.getElementById("nameInput");
    let name = input.value.trim();
    
    if (name !== "" && friends.length < 10) {
        friends.push(name);
        input.value = "";
        updateList();
    }
    if (friends.length === 10) {
        alert("Olet syöttänyt 10 nimeä!");
    }
}

function updateList() {
    let list = document.getElementById("friend-list");
    list.innerHTML = "";
    friends.forEach(friend => {
        let li = document.createElement("li");
        li.textContent = friend;
        list.appendChild(li);
    });
}