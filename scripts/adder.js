/*const textA = document.getElementById("pContent"); 

//now that you have the element, you can find out info about it
console.log(textA.id);
console.log(textA.name);

//querySelector lets you select by any CSS selector (anyway you style the element) (class you use the '.', ID you use the '#')
const buttons = document.querySelector(".b");

console.log(buttons.id);

//querySelector selects only thr first thing that matches the selector
//querySelectorAll selects them all
const allButtons = document.querySelectorAll(".b");

console.log(allButtons[2].id);   //console.log(allButtons[2].textContent);  ..... this targets the text specificlly

//using querySelector, you can be very specific about which element you select
const para = document.querySelector("#addAt p"); //("#addAt p.children")
//once you have the element, you can get info about it - including its children
const spans = para.children;

console.log(spans);
//another way to do the thing above, using querySelectorAll....
const otherSpans = document.querySelectorAll("#addAt p span");*/



//add an event listener to the element that will add a list item to the end of the list
document.querySelector("#addEnd").addEventListener("click", addToEnd);

//type the function to add an elementto the end of the list so that anytime you click it always calls the function
function addToEnd(){
    //console.log("hello"); ..... the console.log here is just to check that it works, you should see "at the end of the list" and you should see 'type text here"
    //create a new HTML list item (this element will not yet be added to the page)
    const newListItem = document.createElement("li");

    //get the content of the text area, and add it as text to the new list item
    newListItem.textContent = document.querySelector("#pContent").value;

    //console.log(newListItem.textContent);.... to test you should see "type text here" on console

    
    //document.querySelector("#adder").appendChild(newListItem); ..... using this one when you click on the input box the text goes all the way and you cant see it anymore because the color is black.

    //add the new list item to the UL (with the ID adder)
    const adder = document.querySelector("#adder");

    //console.log(adder.children.length); ...to test when you click on add to end and check console you see the numbers
    //adder.appendChild(newListItem);

    //check to see if there are a certain number of children (more than 16)
    //and if there are, make the text white
    if(adder.children.length > 16){
        //add a class to the element to make it white
        newListItem.classList.add("bright");
    }

    adder.appendChild(newListItem);
}


    //add an event listener to the element with the ID removelast that will remove the last item in the list
    document.querySelector("#removeLast").addEventListener("click", removeItem);
    //add an event listener to the element that will remove the first list item in the list
    document.querySelector("#removeFirst").addEventListener("click", removeItem);

    function removeItem(){
        //get the adder element (the UL that holds the list items)
        const adder = document.querySelector("#adder");

        //check to see which button was actually clicked...
        //console.log(this.id);
        //two equals makes a comparison (asks a question)
        //declare the variable cRemove, which will be changed inside the if statement
        let cRemove;

        //also get the list of children to count them
        const listItems = adder.children;

        //check to make sure there actually are list items to remove...
        if(listItems.length > 0){ 
        if(this.id == "removeLast"){

            //set the child to remove variable to be the last child
            cRemove = listItems.length - 1;
        }else{
            cRemove = 0;
        }    
        //remove the child element based on which button was clicked
        adder.removeChild(listItems[cRemove]);

    }

}


/*  //This would be the regular, long method but the above is the short cut to targeting "removeFirst" and "removeLast"
    //add an event listener to the element with the ID removelast that will remove the last item in the list
    document.querySelector("#removeLast").addEventListener("click", removeItem);
    //add an event listener to the element that will remove the first list item in the list
    document.querySelector("#removeFirst").addEventListener("click", removeItem);

    function removeItem(){
        //get the adder element (the UL that holds the list items)
        const adder = document.querySelector("#adder");

        //check to see which button was actually clicked...
        //console.log(this.id);
        //two equals makes a comparison (asks a question)
        if(this.id == "removeLast"){

        }else{}
         
        const listItems = adder.children;

        //console.log(listItems.length); //when you click on the last on your webpage you should see the number of lI
        //console.log(listItems[3]);  it says undefined in the console because the counting starts from 0, so there is no 3 only 0,1,2

        //check the length first to make sure there is a list item to remove
        if(listItems.length > 0){ 


            //use the length of the list of children to remove the last child
            //have to do length-1 because arrays always start at 0
            const lastC = listItems.length - 1;

            //tell the UL to remove the last child specifically
            adder.removeChild(listItems[lastC]);

    }

}
*/