
let currentItem = document.querySelector('#Home');

const changeTab = Tab => {

    currentItem.classList.remove('active');

    const tab = document.querySelector(`#${Tab}`);
    tab.classList.add('active');

    const title = document.querySelector('.tab-content h1');
    const content = document.querySelector('.tab-content p');

    title.innerHTML = `${Tab}`;
    content.innerHTML = `${Tab} - Content`;

    currentItem = document.querySelector(`#${Tab}`);

}