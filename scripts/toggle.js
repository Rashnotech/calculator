function toggle (element, attribute) {
    /**
     * toggle - a function that toggle element
     * element: HTML element to manipulate
     * attribute: Attribute to toggle
     */
    element.classList.toggle(attribute);
}

function dismissal (element, attribute) {
    /**
     * dismissal - a function that dismiss element
     * element: HTML element to manipulate
     * attribute: Attribute to toggle
     */
    if (element.hasAttribute(attribute)) {
        element.classList.remove(attribute);
    }
}

document.querySelector('.toggle').addEventListener('click', function () {
    toggle(document.querySelector('.side_nav'), 'hide');
}, false);

document.querySelector('.list').addEventListener('click', function () {
    toggle(document.querySelector('.m_stack'), 'hide');
}, false);
