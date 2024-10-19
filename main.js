document.addEventListener('DOMContentLoaded', function(){
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');

    for (let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', function(botao){
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`)
            hideTabs();
            aba.classList.add('shows__list--is-active');
            removeActiveClass()
            botao.target.classList.add('shows__tabs__button--is-active')
        })
    }
    for(let i = 0; i < questions.length; i++){
        questions[i].addEventListener('click', openCloseAnswer);
    }
})

function openCloseAnswer(question){
    const classOpen = 'faq__questions__item--is-open';
    const paiDaQuestion = question.target.parentNode;

    paiDaQuestion.classList.toggle('faq__questions__item--is-open');
}

function removeActiveClass(){
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++){
        buttons[i].classList.remove('shows__tabs__button--is-active')
    }
}
function hideTabs(){
    const tabsContainer = document.querySelectorAll('[data-tab-id]');
    for (let i = 0; i < tabsContainer.length; i++ ){
        tabsContainer[i].classList.remove('shows__list--is-active');
    }
}