    
// Helpers
const splitArray = (arr, n) => {
    const size = Math.ceil(arr.length / n);
    return Array.from({ length: n }, (v, i) =>
        arr.slice(i * size, i * size + size)
    );
}
    
// Fetch Users and replace HTML nodes
async function dynamicUsers() {
    const response = await fetch("https://randomuser.me/api/?results=30&nat=US");
    const rawData = await response.json();
    
    let users = [];
    if(rawData){
            
        users = splitArray(rawData.results, 3);
        
        //Loop rows and bring dynamic data into HTML nodes
        let rowKey = 0;
        for (const row of users) {          
            
            //get users cards
            let userKey = 0;
            let userCards = document.querySelectorAll(".user-gallery-row-" + rowKey + " .user-card");

            //loop thru cards and change image and text from users array
            for( const card of userCards){
                let image = card.querySelector(".user-card-image");
                let text = card.querySelector(".user-card-text");
            
                image.src = users[rowKey][userKey].picture.large;
                image.srcset = "";
                let userName = users[rowKey][userKey].name.first + " " + users[rowKey][userKey].name.last;
                image.alt = userName
                text.innerHTML = userName;
                
                userKey++;
            }
            
            //clone HTML row for seamless animation
            let thisGalleryRow = document.querySelector(".user-gallery-row-" + rowKey);
            let clone = thisGalleryRow.cloneNode(true);
            thisGalleryRow.parentNode.appendChild(clone);
            
            //finally, add scroll class to activate animation
            let theseGalleryRows = document.querySelectorAll(".user-gallery-row-" + rowKey);
            for( const gallRow of theseGalleryRows){
                gallRow.classList.add("scroll");
            }
                    
            rowKey++
        }
    }
}
    
// Trigger on document load ONLY
document.addEventListener("DOMContentLoaded", () => {
    dynamicUsers();      
});