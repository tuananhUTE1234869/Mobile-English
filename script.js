
/*----------------------- Container Danh từ --------------------------------*/
const Click_DanhTu = document.querySelector(".list-item-danhtu")
const Back_DanhTu = document.querySelector(".back-DanhTu")

Click_DanhTu.addEventListener("click", function(){
    document.querySelector(".container-DanhTu").style.display="flex"
})
Back_DanhTu.addEventListener("click", function(){
    document.querySelector(".container-DanhTu").style.display="none"
})


/*----------------------- Container Động Từ --------------------------------*/
const Click_Dongtu = document.querySelector(".list-item-dongtu")
const Back_Dongtu = document.querySelector(".back-DongTu")

Click_Dongtu.addEventListener("click", function(){
    document.querySelector(".container-DongTu").style.display="flex";
})
Back_Dongtu.addEventListener("click", function(){
    document.querySelector(".container-DongTu").style.display="none";
})


/*----------------------- Container Tính Từ --------------------------------*/
const Click_Tinhtu = document.querySelector(".list-item-tinhtu")
const Back_Tinhtu = document.querySelector(".back-TinhTu")

Click_Tinhtu.addEventListener("click", function(){
    document.querySelector(".container-TinhTu").style.display="flex";
})
Back_Tinhtu.addEventListener("click", function(){
    document.querySelector(".container-TinhTu").style.display="none";
})

/* ``````````````````` cấu trúc ngữ pháp red book````````````````````````` */

/*view cấu trúc 1 -> sự hòa hợp S + V */
const HoaHop_S_V = document.querySelector(".list-item-cautruc1")
const Exit_view_cautruc_1 = document.querySelector(".view-cautruc-1-exit")

HoaHop_S_V.addEventListener("click", function(){
    document.querySelector(".view-cautruc-1").style.display="flex"
})
Exit_view_cautruc_1.addEventListener("click", function(){
    document.querySelector(".view-cautruc-1").style.display="none"
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

// submit continue

const continue_danhtu = document.querySelector(".container-DanhTu-random-reset")
let danhtu=0;
continue_danhtu.addEventListener("click", function(){
    danhtu= danhtu + 1;
    if (danhtu>2){
        danhtu=0;
    }
    document.querySelector(".container-DanhTu-content-box").style.top=danhtu*(-100)+"%";
})































