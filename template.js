let myLeads=[];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if(leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    render(myLeads);
}

//tab-btn
tabBtn.addEventListener("click", function() {
    // chrome api-tab current
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myLeads.push(tabs[0].url);
        localStorage.setItem("myLeads",JSON.stringify(myLeads));
        render(myLeads);
    });
});

// render func'ını ve parametre
function render(leads) {
    
    let listItems  = "";
    for (let i=0; i < leads.length; i++)  {
        
        listItems += ` 
        <li>
        <a target='_blank' href='${leads[i]}'>
         ${leads[i]}
         </a>
        </li> `;
       
    }
    ulEl.innerHTML = listItems;
};

inputBtn.addEventListener("click", function () {
    // inputa girilen veriyi almak ve yazdırmak için,
   myLeads.push(inputEl.value);
   inputEl.value = "";


    localStorage.setItem("myLeads", JSON.stringify(myLeads));
   render(myLeads);

});


// delete button
deleteBtn.addEventListener("dblclick", function (){
    localStorage.clear();
    myLeads = [];
    render(myLeads);
})




















