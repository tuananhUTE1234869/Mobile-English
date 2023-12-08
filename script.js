
/*----------------------- Container Danh từ --------------------------------*/
const Click_DanhTu = document.querySelector(".list-item-danhtu")
const Back_DanhTu = document.querySelector(".back-DanhTu")

Click_DanhTu.addEventListener("click", function(){
    document.querySelector(".container-DanhTu").style.display="flex"
})
Back_DanhTu.addEventListener("click", function(){
    document.querySelector(".container-DanhTu").style.display="none"
})

/*-----------------------question - answer ----------------*/
// const Click_question1 = document.querySelector(".container-DanhTu-content-1-quetsion")
// const Click_answer1= document.querySelector(".container-DanhTu-content-1-answer")

// Click_question1.addEventListener("click", function(){
//     document.querySelector(".container-DanhTu-content-1-quetsion").style.display="none"
// })
// Click_answer1.addEventListener("click", function(){
//     document.querySelector(".container-DanhTu-content-1-quetsion").style.display="flex"
// })

const Click_question = [];
const Click_answer =[];

for (let i=1; i<7; i++){
    const answer = `.container-DanhTu-content-${i}-answer`;
    const question = `.container-DanhTu-content-${i}-quetsion`;
    const danhtu  = `.container-DanhTu-content-${i}-quetsion`;

    Click_question[i] = document.querySelector(question);
    Click_answer[i]= document.querySelector(answer);

    Click_question[i].addEventListener('click', function(){
        document.querySelector(danhtu).style.display='none';
    })
    Click_answer[i].addEventListener('click', function(){
        document.querySelector(danhtu).style.display='flex';
    })
}




