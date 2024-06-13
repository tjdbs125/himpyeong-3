const questions = [
    {
        question: "다음 문제에 대한 알맞은 답을 고르시오",
        questionnumber : 1,
        answers: [
            { text: "1", correct: false},
            { text: "2", correct: false},
            { text: "3", correct: true},  //true들어간게 정답임
            { text: "4", correct: false},
            { text: "5", correct: false},
        ],
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEip3LTB1ihhchdTuZDHjpfd6yjq_WbMW33Zs8P2Tkx6o5SqzSiCJSFxwS5rC312H91vhiYhL7bPGWNtU2OSwYBLxQ3x5FasEU2X5j6rb_wqgVasUuB-I2zCLM4z0qbyTnnOGCd_XpfKIkwbktTWwYOX0yKRg1K9Q-2zFRHWKI64gbzGa95zkiPULKQRb3SW/s320/KakaoTalk_20240531_151643160_08.jpg", //문제 이미지니까 여기만 바꿔
        explanationImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjlRvdUSBI3rz0eSAYobjdVRRhnEJK7RKAj6V3f6oy1Iyx3VsAXUAqfmfqWWexojrSLWO46kSaeVziTwEMvATnqs-TUYkuSEuA_itG_ep8VB5b3GHJqBsHv01iNp19sPDZu37hf9HjMnh6vjfKIGYc_fKJ14uUf_ANXGC-zc00eBLjEODf94YFsdkJLIb3W/s320/KakaoTalk_20240614_003055399.jpg",
        selectedAnswer: null
    },
    {
        question: "다음 문제에 대한 알맞은 답을 고르시오",
        questionnumber : 2,
        answers: [
            { text: "1", correct: false},
            { text: "2", correct: true},
            { text: "3", correct: false},
            { text: "4", correct: false},
            { text: "5", correct: false},
        ],
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiVXggK3vVzW2cgkwyg4Ad3WP8m_OkXleQ5A7IONQeReGjO1ZOJlrch9Zgp3Oy-7CkXn7Xqr4MrcqdUXUiXmnhffR3BYiPm2G4ApWuRLY-WBsqidla7EC8_oMV0lJDRJ8eYNTYAV6mHCexWQQAvadIIt1-ebjosG4glIa4aGnsyb1noqTLsatAV8nUnko5l/s320/KakaoTalk_20240531_151643160_09.jpg",
        explanationImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg7-KVxB_hypSDsjBUqaTjSRf4rEp2lYN4QDi0wRk3FNBtJEaoV32Od8Q2DkkOccLVvbxWyYqpL7ovlRq0TUSVld1oiCxCtPxIC7Zy0IbgeMA8lcn6V_3tDeWsGpjN1m-dzMX5etqzfXut6pHRAfnm3VfPvua8vUFZYAwCZd4HFJvmgU5xIfwvq8b_dRVa9/s320/KakaoTalk_20240614_003055399_01.jpg",
        selectedAnswer: null
    },
    {
        question: "다음 문제에 대한 알맞은 답을 고르시오",
        questionnumber : 3,
        answers: [
            { text: "1", correct: false},
            { text: "2", correct: false},
            { text: "3", correct: true},
            { text: "4", correct: false},
            { text: "5", correct: false},
        ],
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjZ1wxK0xJ8VN6Aufk_hPXJ46wd0ns2LAgnw1qIyye5elmp4k-Uo5j3bGrvg4pwunAgdjXdAPDib2sn5W6SzFNXr40lsPIzxrGKaAmazHlpftnknXNzS828wvsQGjcQrXlZN1WyQSV_suSELmZM0D5UWZmkkWIdaDxaKuNpbcnXm1EUHsWrz2yIcL7JjynE/s320/KakaoTalk_20240531_151643160_10.jpg",
        explanationImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjq_LnGgMeNR_hqPbq9JZy2yeNuMY-KJi6eOssI1vwwy7H0uMLXg8qRiAKm58NIdS7dghX3RgOAzTRy7olacqSdwp6YlkkpfzAvpEb9s0x8ZIhjNa0G4xgFLL3rJZPFM3n9QEaUlkPyVb-Zc7oIClYGoWD0egKJbl5o7d5nAKF65nR3bJIkaKkGIX2UQSFa/s320/KakaoTalk_20240614_003055399_02.jpg",
        selectedAnswer: null
    },
    {
        question: "다음 문제에 대한 알맞은 답을 고르시오",
        questionnumber : 4,
        answers: [
            { text: "1", correct: true},
            { text: "2", correct: false},
            { text: "3", correct: false},
            { text: "4", correct: false},
            { text: "5", correct: false},
        ],
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEie-rKJFxed7O_IPAS1UpJVtVVm4F0yl1mYAOGHy0KYFqu3-M497002iV5x3vLXUKhk5mjZvWqASy7yZ7kCL8HrvOVhT_NFIIYFnU5_WPK-MnCdMHFiyeo52bGDOqhO3Fs_JGtEcI-MQBWvvgq20QsqJ4-FZ5CuExhjuT3GievIm-U-agpa_KD7z7s0fmwh/s320/KakaoTalk_20240531_151643160_11.jpg",
        explanationImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi6Qye1qZEAojNVDEFHO2gCO0cL7Vn4OqcSFI62j4tvhXf6_4Md6ZNcZ6ZxWPB9PGo6QPXKz-wBKVfoFwhKVTHo5-jxrdVWjYTaOjcFKIzUtf6-U1vgLN6xQJFfqQ2rF9POrxAQmI-UMLvkceq9zoRXZQjIgl1OJrMoJwn7PPbv6-0O4DiskYq_oqgLs2QU/s320/KakaoTalk_20240614_003055399_03.jpg",
        selectedAnswer: null
    },
    {
        question: "다음 문제에 대한 알맞은 답을 고르시오",
        questionnumber : 5,
        answers: [
            { text: "1", correct: false},
            { text: "2", correct: true},
            { text: "3", correct: false},
            { text: "4", correct: false},
            { text: "5", correct: false},
        ],
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhfHsCMv__9fHuY-gxAkkuQiIMEurKeLfADt_hdGBw8t5898ArJgVv73R6hM7lc9QuUvBoZ-vX-LoWo8Jj0U9yDOgePQ64g0aX6-Kz4P0zt6z3luGPwb8az_jqsTf5BrVJ9nT9RlZdpFmUNvL9grhJNNCqIgcZIncA_yY6jJR7BKbTQaLzA5pwilZCzfKof/s320/KakaoTalk_20240531_151643160_12.jpg",
        explanationImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjNOZQ81QDs_rwLsvxZjsZtNOrQpMO2r0iLJxWyGYazNMClzFNDAyx8XssrGwleGli-qoYl9s6bh59ITXAJdJinM_E-9yqAuKZbbqtQ2gnQQFFo-kEPFyu6IL9MTctdMrhLUiwVuCrinNsbPazOmQ58eCroefh4U1ORqWnsI_hvWA2N1Eu5wW-foYsP0hJX/s320/KakaoTalk_20240614_003055399_04.jpg",
        selectedAnswer: null
    },
    {
        question: "다음 문제에 대한 알맞은 답을 고르시오",
        questionnumber : 6,
        answers: [
            { text: "1", correct: false},
            { text: "2", correct: true},
            { text: "3", correct: false},
            { text: "4", correct: false},
            { text: "5", correct: false},
        ],
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg78XVcT5xc_7ExXWZBTV9qacE6fL0t1kiA9e9l-6-z0fl6EVTeQclQCaptVAXRnJ9xLGyp-wF7E0u6TCYJdzoKCS2eRl5NW8hI388hiEuVzsq9RArxZBL9YIiDlXlfhWZ9lvCIFTwD05Do8aYZdgqdUl9cOcqSfLPrU7s1lwUu7vj9mUpGNBhGO7g8Pa9U/s320/KakaoTalk_20240531_151643160_13.jpg",
        explanationImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjcX9ZEClUNg9gtMfBj7QwEXXCAwjm7rwQT2Ta5PjpFLMSkFc7_ktpzzuqDxS79QlRwZhWOf2IkZDaeuo1OViSdO0SzBwR5DPdaTBObruFdwYk-y5ePoxUY79czIzyreGW9qGHXjAVs9lQAVxtmgFVHtirsUjmfxzyqosQXIiAoidAIVR5OgQj09SO0FF_7/s320/KakaoTalk_20240614_003055399_05.jpg",
        selectedAnswer: null
    },
    {
        question: "다음 문제에 대한 알맞은 답을 고르시오",
        questionnumber : 7,
        answers: [
            { text: "1", correct: false},
            { text: "2", correct: false},
            { text: "3", correct: false},
            { text: "4", correct: true},
            { text: "5", correct: false},
        ],
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjWmkuPRO7_tZrLh9VXUOFYJWCX1PC0tuDlVxeN7qxYRZQpALE20BeMdCxXagFaa2TUd8ldDfiTpaCwM2Q3AXYlm9WeYLdHxNJhE_hYfCFvD5R-R_5771wUN5ZxtCHBDXqBARN2GZ2Y8NRRJmPL0gLiCIuOMcTQdeEgyAuJC1p8TyZ4SMGuS3skYqtJCQo3/s320/KakaoTalk_20240531_151643160_14.jpg",
        explanationImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh70eIWdQQ9KYRl93F-ccOwlOLkOsTRJBsYxnN_HJSef72NiZnGa47aJ4yxiqp4fJZIS-UKuHb5K2BZ8VL89fARDPjFf7ofGv1qoSb_zRwb5huBl-YRfErMvLAmGupOGVBdBLIvaev8wGrPdAZciZZSKR1SU-sXfJou-rFZCOsC02qI-x_OjwxdhDKL3Nhx/s320/KakaoTalk_20240614_003055399_06.jpg",
        selectedAnswer: null
    },
    {
        question: "다음 문제에 대한 알맞은 답을 고르시오",
        questionnumber : 8,
        answers: [
            { text: "1", correct: false},
            { text: "2", correct: false},
            { text: "3", correct: true},
            { text: "4", correct: false},
            { text: "5", correct: false},
        ],
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjRY8povjHcezPxbmsQXPLwvWQ74Z3GjN8GN4o0OntLnXyNZrr4zgkMQyr8qXf1teZLLz8Q9bn7QRLvuCkfRelZ0zpVyqOi3O9Eu2hHy57aCqlfLzYKdW5OX8d_xBPTCVF3ooOs6k_Mz7fkMMC6BySv0lLPNTcsF4CeP7o5JZ-mG9-JysrPu7YIjcNBwUJA/s320/KakaoTalk_20240531_151643160_15.jpg",
        explanationImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgJP7UJz7GLhuONALswUTgxtPvjit_IG7A3mD56-HblmXNi6kE2D_gYtDF_zkQVZfbgOEgS_0gJptzYjkOPS2pprQqGVsNNZMQhWgyl56HLdE-ud-pXFutosa4TpQSXyJRqmJF0HJtP9cABP8Pm6N7Qcztm6whC0EDva6XCAtOd1LpPf63RV9IfWMLiGytw/s320/KakaoTalk_20240614_003055399_07.jpg",
        selectedAnswer: null
    },
    {
        question: "다음 문제에 대한 알맞은 답을 고르시오",
        questionnumber : 9,
        answers: [
            { text: "1", correct: false},
            { text: "2", correct: false},
            { text: "3", correct: false},
            { text: "4", correct: true},
            { text: "5", correct: false},
        ],
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhbAcEE8RvH-UogwtuTHJzGszylgd5_I7_bNoTMNZiQI8775PyTG8bvRyxnU8995moi9oab-jFcvsKBNZtD_uLUPq1Dg7_mlO7JbprPzguQn-_fSDpB3MYkrWZeVwPvQMV45GbwNMEOgrkeFpw_Z-m3u-ShruqeAjzh9BeIhszy9xsfz_FvpOpOVzriCwao/s320/KakaoTalk_20240531_151643160_16.jpg",
        explanationImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi8WXoeM-mxhfylnpWTTDlzQqy8TCkp-JiloMXh338IzlN2oYGDOUVgdkbhlHJ-o2f7HPcF4jCCBaPOgyorwDWlmuwblueYGm2rGfdC21jJg4BwGYgBeVTpoJbeJv7imRX18NjsHa_HOlmigg_m-gjCwyntqkWUfi17Zn8Cu0EC_h18l2vUQ5I-gv3QOSvH/s320/KakaoTalk_20240614_003055399_08.jpg",
        selectedAnswer: null
    },
    {
        question: "다음 문제에 대한 알맞은 답을 고르시오",
        questionnumber : 10,
        answers: [
            { text: "1", correct: false},
            { text: "2", correct: false},
            { text: "3", correct: false},
            { text: "4", correct: true},
            { text: "5", correct: false},
        ],
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEieVQhiWP21HLlX7HfI8_cR88gHn5QzdcPtNZKg6UhWuSrZn5SBkTAWdh8_F5lgMlb0Ui1h6eO_4bpuK67wbcC4S_8j4XuIK9dn1-s1gUNg-mjVfWPl0e5gvorNt32FGoapvszdzpScKLWjj9g8GHxZL6OfQhSXKa8YWnzM_7BSYtMji2jPsl0UhIXBkqtO/s320/KakaoTalk_20240531_151643160_17.jpg",
        explanationImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgnroyxayFdvkuthVfg9MDi4ZxS8ZUSFyWGObTsawcwgUd4PtclecippNrI2krGZwxAXz9_vVj-W4vO8VAq-WQkn00xIZTTDifh96vUGmTtedqCConmBr3YVTPK2Rp5L65NOO4DUdL1kqH2mipfyqIxGs4R5rjXDmwpFd6nEbtVqSk7o9r1Zn22oAAOLYHY/s320/KakaoTalk_20240614_003055399_09.jpg",
        selectedAnswer: null
    }
];

const imageContainer = document.getElementById("image-container");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");


let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}


function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    
    if (confirm("답을 선택하시겠습니까? \n(한번 고른 답은 바꿀 수 없습니다)")) {
    // 현재 질문에 사용자가 선택한 답 기록
    questions[currentQuestionIndex].selectedAnswer = selectedBtn.innerHTML;

    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}
}

function showScore() {
    resetState();
    questionElement.innerHTML = `${questions.length} 문제 중 ${score} 문제를 맞추셨습니다.`;

    const incorrectQuestions = questions.filter(q => {
        const correctAnswer = q.answers.find(a => a.correct).text;
        return q.selectedAnswer !== null && q.selectedAnswer !== correctAnswer;
    });
    
    const noteElement = document.querySelector(".note");
    if (noteElement) {
        noteElement.style.display = "none";
    }

    if (incorrectQuestions.length > 0) {
        const incorrectList = document.createElement("ul");
        let headerAdded = false;  // '틀린 문제' 헤더가 추가되었는지 확인하는 변수

        incorrectQuestions.forEach((q, index) => {
            const listItem = document.createElement("li");
            listItem.classList.add("incorrect-question"); // 클래스 추가

            if (!headerAdded) {
                const incorrectHeader = document.createElement("p");
                incorrectHeader.classList.add("incorrect-header"); // 클래스 추가
                incorrectHeader.innerHTML = "틀린 문제";
                questionElement.appendChild(incorrectHeader);
                headerAdded = true;  // 헤더가 추가되었음을 표시
            }

            listItem.innerHTML = `
                ${q.questionnumber}. ${q.question} <br> 
                <span class="answer-text">당신의 답: ${q.selectedAnswer}</span> <br> 
                <span class="answer-text">정답: ${q.answers.find(a => a.correct).text}</span>
            `;
            incorrectList.appendChild(listItem);
        });
        questionElement.appendChild(incorrectList);
    } else {
        questionElement.innerHTML += "<br> 모든 문제를 맞추셨습니다!";
    }

    nextButton.innerHTML = "다시 풀기";
    nextButton.style.display = "block";

    // 해설 보기 버튼 추가
    const explanationButton = document.createElement("button");
    explanationButton.innerHTML = "해설 보기";
    explanationButton.style.display = "block";
    explanationButton.style.marginTop = "20px";
    explanationButton.addEventListener("click", showExplanationButtons);
    questionElement.appendChild(explanationButton);
}



function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
        showImage();
    }else{
        showScore();
        imageContainer.innerHTML = "";
    }
}

function showImage(){
    const currentQuestion = questions[currentQuestionIndex];
    const imagePath = currentQuestion.image;

    if (imagePath) {
        const imageElement = document.createElement("img");
        imageElement.src = imagePath;
        imageElement.alt = "Question Image";
        imageContainer.innerHTML = "";
        imageContainer.appendChild(imageElement);
    }else{
        imageContainer.innerHTML = "";
    }
}
showImage();

function showExplanationButtons() {
    // 이미 해설 버튼들이 생성되었는지 확인
    let explanationContainer = document.getElementById("explanation-container");
    if (!explanationContainer) {
        explanationContainer = document.createElement("div");
        explanationContainer.id = "explanation-container";
        explanationContainer.classList.add("explanation-container")


        questions.forEach((question, index) => {
            const button = document.createElement("button");
            button.innerHTML = `${index + 1}번 문제 해설`;
            button.classList.add("btn", "explanation-btn"); // 스타일 추가
            if (question.selectedAnswer === question.answers.find(a => a.correct).text) {
                button.classList.add("correct");
            } else {
                button.classList.add("incorrect");
            }
            button.addEventListener("click", () => showExplanationImage(index));
            explanationContainer.appendChild(button);
        });

        questionElement.appendChild(explanationContainer);
    }
}

function showExplanationImage(index) {
    const currentQuestion = questions[index];
    const questionImage = currentQuestion.image;
    const explanationImage = currentQuestion.explanationImage;

    const imageWrapper = document.createElement("div");
    imageWrapper.classList.add("image-wrapper");

    if (questionImage) {
        const questionImgElement = document.createElement("img");
        questionImgElement.src = questionImage;
        questionImgElement.alt = `Question Image for Question ${index + 1}`;
        questionImgElement.classList.add("question-image");
        imageWrapper.appendChild(questionImgElement);
    }
    
    if (explanationImage) {
        const explanationImgElement = document.createElement("img");
        explanationImgElement.src = explanationImage;
        explanationImgElement.alt = `Explanation Image for Question ${index + 1}`;
        explanationImgElement.classList.add("explanation-image");
        imageWrapper.appendChild(explanationImgElement);
    }

    imageContainer.innerHTML = "";  // 기존 이미지 제거
    imageContainer.appendChild(imageWrapper);
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
        showImage();
    }
});


startQuiz();