// button onClick işleyicisine bir func yarattık.

/* 

function saveLead () {
    alert("say hi!")
};

*/


// Bu yöntemi birde eventHandlers ile addEventlistener() ile yapalım.

let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

localStorage.setItem("myLeads", "www.examplelead.com");

inputBtn.addEventListener("click", function () {
    // inputa girilen veriyi almak ve yazdırmak için,
   myLeads.push(inputEl.value);
   inputEl.value = "";
   renderLeads();

});

// render func'ını 
function renderLeads() {
    
let listItems  = "";
for (let i=0; i < myLeads.length; i++)  {
    // innerHTML'de textContent gibi çalışır ancak html öğelerini çalıştırmak için innerHTML kullanmamız gerekmektedir.
    listItems += ` 
    <li>
    <a target='_blank' href='${myLeads[i]}'>
     ${myLeads[i]}
     </a>
    </li> `;
   
}
ulEl.innerHTML = listItems;
};















// işi parçacıklara ayırmak

    // "li" oluşturuldu.
    // li textContent ile değiştirildi.
    // ulEl

    // const li =  document.createElement("li");

    // li.textContent = myLeads[i];

    // append(), html öğelerini iç içe eklemeye yarar.

    // yani <ul> <li> </li> </ul> şeklinde olur.
        
    // ulEl.append(li);

