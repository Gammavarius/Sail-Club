/* Переключение темы */
let lightThemeButton = document.querySelector('.theme-button-light');
let darkThemeButton = document.querySelector('.theme-button-dark');

lightThemeButton.onclick = function() {
    lightThemeButton.classList.add('active');
    darkThemeButton.classList.remove('active');
    document.body.classList.remove('dark');
}

darkThemeButton.onclick = function() {
    darkThemeButton.classList.add('active');
    lightThemeButton.classList.remove('active');
    document.body.classList.add('dark');
}

/* Переключение шрифта */
let sansSerifButton = document.querySelector('.font-button-sans-serif');
let serifButton = document.querySelector('.font-button-serif');

sansSerifButton.onclick = function() {
    sansSerifButton.classList.add('active');
    serifButton.classList.remove('active');
    document.body.classList.remove('serif');
}

serifButton.onclick = function() {
    serifButton.classList.add('active');
    sansSerifButton.classList.remove('active');
    document.body.classList.add('serif');
}

/*Отобразить полный текст статьиarticle*/
let articles = document.querySelectorAll('.event-advert');
for(let article of articles) {
    let moreButton = article.querySelector('.more');
    moreButton.onclick = function(evt) {
        article.classList.remove('short');
    }
}

/* Переключение раскладки карточек */

let gridButton = document.querySelector('.card-view-button-grid');
let listButton = document.querySelector('.card-view-button-list');
let yachtsList = document.querySelector('.yachts-list');

gridButton.onclick = function() {
    yachtsList.classList.remove('list');
    gridButton.classList.add('active');
    listButton.classList.remove('active');
}

listButton.onclick = function() {
    yachtsList.classList.add('list');
    listButton.classList.add('active');
    gridButton.classList.remove('active');
}

/* Галерея */

let activePhoto = document.querySelector('.active-photo');
let previews = document.querySelectorAll('.gallery-images-list a');

for(let preview of previews) {
    preview.onclick = function (evt) {
        evt.preventDefault();   
        let currentActive = document.querySelector('.gallery-images-list .active-photo');
        currentActive.classList.remove('active-item');
        preview.classList.add("active-item");
        activePhoto.src = preview.href;
    };

}
