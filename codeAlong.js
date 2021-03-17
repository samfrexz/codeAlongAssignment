//querySelector to change the text
const headerTitle = document.querySelector('.title');
headerTitle.innerText = 'hello world';

const items = document.getElementsByClassName('list-group-item');
items[1].textContent = 'welcome Samfrexz';
items[1].style.backgroundColor = '#f4f4f4';
items[1].style.color = 'red';
