const text = document.querySelector("#input");
function showEmoji(){
    let inputValue = text.value;
    displayResult(inputValue);
}
function displayResult(searchQuarry = ""){
    let filter = emojiList.filter((e)=>{
        if(e.description.indexOf(searchQuarry) != -1){
            return true;
        }
        if(e.tags.some((ele)=>ele.startsWith(searchQuarry))){
            return true;
        }
        if(e.aliases.some((ele)=>ele.startsWith(searchQuarry))){
            return true;
        }
    })
    //display the result in console
    console.log(filter);

    const display = document.querySelector("#output");
    display.innerHTML = "";

    filter.forEach((e)=> {
        //create elemets first
        let row = document.createElement("div");
        let emoji = document.createElement("div");
        let name = document.createElement("div");
        let aliases = document.createElement("div");

        // insert inside html
        emoji.innerHTML = e.emoji;
        aliases.innerHTML = e.aliases;
        name.innerHTML = e.description;

        // insert css class to child
        row.classList.add("card");
        emoji.classList.add("emoji");
        name.classList.add("name");
        aliases.classList.add("aliases");

        // console.log(emoji,name,aliases);

        row.appendChild(emoji);
        row.appendChild(aliases);
        row.appendChild(name);
        display.appendChild(row);
    });
}

window.onload = () => displayResult();
text.addEventListener('keyup',showEmoji);
