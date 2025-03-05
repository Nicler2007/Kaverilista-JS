
let friends = [];
        
        function addFriend() {
            let input = document.getElementById("nameInput");
            let name = input.value.trim();
            
            if (name !== "") {
                friends.push(name);
                input.value = "";
                updateList();
            }
        }
        
        function removeFriend(index) {
            friends.splice(index, 1);
            updateList();
        }
        
        function sortFriends() {
            friends.sort();
            updateList();
        }
        
        function updateList() {
            let list = document.getElementById("friend-list");
            list.innerHTML = "";
            friends.forEach((friend, index) => {
                let li = document.createElement("li");
                li.textContent = friend;
                let removeBtn = document.createElement("button");
                removeBtn.textContent = "Poista";
                removeBtn.classList.add("remove-btn");
                removeBtn.onclick = () => removeFriend(index);
                li.appendChild(removeBtn);
                list.appendChild(li);
            });
        }