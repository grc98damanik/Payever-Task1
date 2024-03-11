window.onload = function() {
    const parent = document.getElementById('main_box');
    const children = document.querySelectorAll('.child-box li.system');
    const lineContainer = document.getElementById('connector_line');

    const parentRect = parent.getBoundingClientRect();
    const parentCenterX = parentRect.left + parentRect.width / 2;
    const parentCenterY = parentRect.top + parentRect.height / 2;

    for (let i = 0; i < children.length; i++) {
        const child = children[i];
        const childRect = child.getBoundingClientRect();
        const childCenterX = childRect.left + childRect.width / 2;
        const childCenterY = childRect.top + childRect.height / 2;

        const line = document.createElement('div');
        line.className = 'line';
        line.style.left = parentCenterX + 'px';
        line.style.top = parentCenterY + 'px';
        line.style.width = Math.sqrt(Math.pow(childCenterX - parentCenterX, 2) + Math.pow(childCenterY - parentCenterY, 2)) + 'px';
        line.style.transformOrigin = 'top left';
        line.style.transform = `rotate(${Math.atan2(childCenterY - parentCenterY, childCenterX - parentCenterX)}rad)`;
        lineContainer.appendChild(line);
    }
};
