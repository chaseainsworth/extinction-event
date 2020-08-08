const orderedList = document.querySelectorAll('ol > li');

const line = function(event) {
        event.target.style.textDecoration = 'line-through';
}

for (const item of orderedList) {
    item.addEventListener('click', line);
}

const unorderedList = document.querySelectorAll('ul > li');

const invisible = function(event) {
    event.target.style.opacity = '0';
}

for (item of unorderedList) {
    item.addEventListener('click', invisible);
}

const pics = document.querySelectorAll('section');

const kill = function(event) {
    event.target.style.width = '0px';
}

for (item of pics) {
    item.addEventListener('click', kill);
}

const button = document.querySelector('button');

const nuke = function() {
    for (const item of orderedList) {
        item.style.textDecoration = 'line-through';
    }
    for (const item of unorderedList) {
        item.style.opacity = '0';
    }
    for (const item of pics) {
        item.style.width = '0px';
    }
}


button.addEventListener('click', nuke);


