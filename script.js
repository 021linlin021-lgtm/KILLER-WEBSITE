const agents = {

    "001": {
        name: "JIANG XU",
        chinese: "姜戌",
        english: "JIANG XU"
    },

    "002": {
        name: "JIANG YOU",
        chinese: "姜佑",
        english: "JIANG YOU"
    },

    "003": {
        name: "HE HUIYIN",
        chinese: "何绘萤",
        english: "HE HUIYING"
    }

};


// 测试数据库是否正常读取
console.log(agents["001"].name);



function enterArchive() {

    let code = document.getElementById("codeInput").value;

    let message = document.getElementById("message");


    // 没有输入

    if (code === "") {

        message.innerText = "PLEASE ENTER YOUR NUMBER";

        return;

    }



    // 验证动画

    message.innerText = "VERIFYING";


    setTimeout(function () {

        message.innerText = "VERIFYING.";

    }, 300);



    setTimeout(function () {

        message.innerText = "VERIFYING..";

    }, 600);



    setTimeout(function () {

        message.innerText = "VERIFYING...";

    }, 900);




    // 检查编号

    setTimeout(function () {


        if (agents[code]) {


            message.innerText = "MATCH FOUND";


        } else {


            message.innerText = "NO RECORD FOUND";


        }


    }, 1300);





    // 显示对应角色

    setTimeout(function () {


        if (agents[code]) {


            message.innerText =
                "WELCOME BACK, " + agents[code].name + ".";


        } else {


            message.innerText =
                "CREATING TEMPORARY VISITOR RECORD...";


        }


    }, 2000);





    // 最终通过

    setTimeout(function () {


        message.innerText = "ACCESS GRANTED";


    }, 3200);





    // 跳转数据库

    setTimeout(function () {


        window.location.href = "archive.html";


    }, 3800);


}
// =========================
// JIANG XU CHAT SYSTEM
// =========================


const chatInput = document.getElementById("message-input");

const sendButton = document.getElementById("send-button");

const chatLog = document.getElementById("chat-log");



if(sendButton){


sendButton.addEventListener("click", function(){


    const message = chatInput.value.trim();



    if(message === ""){
        return;
    }




    addChatMessage(
        "CLIENT : " + message
    );



    chatInput.value = "";





    setTimeout(function(){


        addChatMessage(
            "SYSTEM : Analyzing request..."
        );


    },500);






    setTimeout(function(){


        const keywords = [

            "任务",
            "委托",
            "目标",
            "处理",
            "合约",
            "contract",
            "target",
            "mission",
            "request"

        ];



        let accepted = false;



        for(let word of keywords){


            if(message.toLowerCase().includes(word)){


                accepted = true;


            }


        }




        addChatMessage(
            "SYSTEM : Analysis complete."
        );





        setTimeout(function(){



            if(accepted){


                addChatMessage(
                    "YAKSHA : Received. Understood."
                );


            }else{


                addChatMessage(
                    "YAKSHA : Please provide contract details."
                );


            }



        },500);




    },1500);



});


}




function addChatMessage(text){


    if(!chatLog){
        return;
    }


    const p = document.createElement("p");


    p.textContent = text;


    chatLog.appendChild(p);


}