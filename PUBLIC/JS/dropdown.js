const dd_1_head = document.getElementById('dd_1_head'),
    dd_1_submenu = document.getElementById('dd_1_submenu'),
    dd_2_head = document.getElementById('dd_2_head'),
    dd_2_submenu = document.getElementById('dd_2_submenu');

dd_1_head.addEventListener('click', () => {
    if(dd_1_submenu.style.display === 'block'){
        dd_1_submenu.style.display = 'none';
        dd_1_head.style.backgroundColor = 'var(--color-2)';
    }
    else{
        dd_1_submenu.style.display = 'block';
        dd_1_head.style.backgroundColor = 'var(--color-3)';
    }
});

dd_2_head.addEventListener('click', () => {
    if(dd_2_submenu.style.display === 'block'){
        dd_2_submenu.style.display = 'none';
        dd_2_head.style.backgroundColor = 'var(--color-2)';
    }
    else{
        dd_2_submenu.style.display = 'block';
        dd_2_head.style.backgroundColor = 'var(--color-3)';
    }
});