const shopButton = document.getElementById('phones');
const dropDownMenu = document.getElementById('dropdown');


shopButton.addEventListener('click',function(){
    dropDownMenu.classList.toggle('hidden');
    
});



const sneakerButton = document.getElementById('phones');
const sneaker = document.getElementById('sneakers')

sneakerButton.addEventListener('click',function(){
    sneaker.classList.toggle('kicks')
  
});




const cusButton = document.getElementById('cusmecs');
const DROP = document.getElementById('drop')

cusButton.addEventListener('click',function(){
 DROP.classList.toggle('hid');
});

const laptopButton = document.getElementById('tops');
const bottonDrop = document.getElementById('dropUp')

laptopButton.addEventListener('click',function(){
    bottonDrop.classList.toggle('hidd')
})

const clothesButton = document.getElementById('clothes')
const dropButton = document.getElementById('droped')

clothesButton.addEventListener('click',function(){
    dropButton.classList.toggle('hiid')
})


function goToPage1(){
    window.location.href ="shopItems.html";
    
}

