let num = 1;
let hid = 0;
loadPole();
document.querySelector('.wrap button').addEventListener('click', function(){
    location.reload();
})
function loadPole(){

    let pole = document.querySelector('.pole');
    let blocks = '<div class="block"></div>';
    for (let a=0; a<8; a++){
        num++
        blocks += '<div class="block"></div>';
        pole.innerHTML = blocks;
    }
}



document.querySelector('.pole').addEventListener('click', function(event){
    console.log(event.target.textContent);
    if(event.target.className === 'block' && event.target.textContent ===''){
        if (hid%2 === 0) {
            event.target.innerHTML = 'X';
        } else {
            event.target.innerHTML = '0';
        }
        hid++;
        checkResult();
//        setTimeout(checkResult, 1000);
    }
})

function checkResult(){
    const allBlocks = document.querySelectorAll('.block');
    if (    (allBlocks[0].innerHTML === 'X' && allBlocks[1].innerHTML === 'X' && allBlocks[2].innerHTML === 'X') 
            ||(allBlocks[3].innerHTML === 'X' && allBlocks[4].innerHTML === 'X' && allBlocks[5].innerHTML === 'X')
            || (allBlocks[6].innerHTML === 'X' && allBlocks[7].innerHTML === 'X' && allBlocks[8].innerHTML === 'X')
            || (allBlocks[0].innerHTML === 'X' && allBlocks[3].innerHTML === 'X' && allBlocks[6].innerHTML === 'X')
            || (allBlocks[1].innerHTML === 'X' && allBlocks[4].innerHTML === 'X' && allBlocks[7].innerHTML === 'X')
            || (allBlocks[2].innerHTML === 'X' && allBlocks[5].innerHTML === 'X' && allBlocks[8].innerHTML === 'X')
            || (allBlocks[0].innerHTML === 'X' && allBlocks[4].innerHTML === 'X' && allBlocks[8].innerHTML === 'X')
            || (allBlocks[2].innerHTML === 'X' && allBlocks[4].innerHTML === 'X' && allBlocks[6].innerHTML === 'X')
       ) {
        alert ("X переміг");
    } else if (    (allBlocks[0].innerHTML === '0' && allBlocks[1].innerHTML === '0' && allBlocks[2].innerHTML === '0') 
            ||(allBlocks[3].innerHTML === '0' && allBlocks[4].innerHTML === '0' && allBlocks[5].innerHTML === '0')
            || (allBlocks[6].innerHTML === '0' && allBlocks[7].innerHTML === '0' && allBlocks[8].innerHTML === '0')
            || (allBlocks[0].innerHTML === '0' && allBlocks[3].innerHTML === '0' && allBlocks[6].innerHTML === '0')
            || (allBlocks[1].innerHTML === '0' && allBlocks[4].innerHTML === '0' && allBlocks[7].innerHTML === '0')
            || (allBlocks[2].innerHTML === '0' && allBlocks[5].innerHTML === '0' && allBlocks[8].innerHTML === '0')
            || (allBlocks[0].innerHTML === '0' && allBlocks[4].innerHTML === '0' && allBlocks[8].innerHTML === '0')
            || (allBlocks[2].innerHTML === '0' && allBlocks[4].innerHTML === '0' && allBlocks[6].innerHTML === '0')
       ) {
        alert ("0 переміг");
    }
}




