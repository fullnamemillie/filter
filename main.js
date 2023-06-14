const filterBox = document.querySelectorAll('.box');

document.querySelector('nav').addEventListener('click', function(event) {
    if (event.target.tagName !== 'LI') {
        return false;
    }

    const filterName = event.target.dataset['f'];


    filterBox.forEach(function(elem) {
        elem.classList.remove('hide');
        if (!elem.classList.contains(filterName) && filterName !== 'all') {
            elem.classList.add('hide');
        };
    });
});