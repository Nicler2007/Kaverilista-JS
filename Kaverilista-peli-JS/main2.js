    
    let friends = [];
    
    function addFriend() {
        let input = document.getElementById("nameInput");
        let name = input.value.trim();
        
        if (name === "") {
            alert("Et voi lisätä tyhjää nimeä!");
            return;
        }
        
        if (!/^[A-Za-zÅÄÖåäö]+$/.test(name)) {
            alert("Syötä vain kirjaimia sisältävä nimi! Yritä uudelleen.");
            return;
        }
        
        friends.push(name);
        input.value = "";
        showFriends();
    }
    
    function showFriends() {
        let list = document.getElementById("friend-list");
        list.innerHTML = "";
        
        for (let i = 0; i < friends.length; i++) {
            let li = document.createElement("li");
            li.textContent = friends[i];
            list.appendChild(li);
        }
    }