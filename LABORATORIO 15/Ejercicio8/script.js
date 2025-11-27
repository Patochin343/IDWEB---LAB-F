const ul = document.createElement('ul');

for (let i = 1; i <= 5; i++) {
    const li = document.createElement('li');
    li.textContent = "Elemento " + i;
    ul.appendChild(li);
}

document.body.appendChild(ul);