'use strict';

function changeTheme(e) {
    const themes = {
        default: 'theme_color_project-default',
        inverse: 'theme_color_project-inverse'
    };

    const themeElements = document.querySelectorAll('.theme');

    themeElements.forEach((el) => {
        if (el.classList.contains(themes.default)) {
            el.classList.add(themes.inverse);
            el.classList.remove(themes.default);
        } else if (el.classList.contains(themes.inverse)) {
            el.classList.add(themes.default);
            el.classList.remove(themes.inverse);
        }
    });

    for (let i = 0; i < e.path.length; i++) {
        if (e.path[i].classList.contains('onoffswitch_checked')) {
            e.path[i].classList.add('onoffswitch_unchecked');
            e.path[i].classList.remove('onoffswitch_checked');
            break;
        } else if (e.path[i].classList.contains('onoffswitch_unchecked')) {
            e.path[i].classList.add('onoffswitch_checked');
            e.path[i].classList.remove('onoffswitch_unchecked');
            break;
        }
    }
}

document.body.onclick = function(e) {
    if (e.target.classList.contains('onoffswitch__button')) {
        changeTheme(e);
    } else {
        for (let i = 0; i < e.path.length; i++) {
            if (e.path[i].classList) {
                if (e.path[i].classList.contains('e-accordion_active')) {
                e.path[i].classList.remove('e-accordion_active');
                } else if (e.path[i].classList.contains('e-accordion')) {
                e.path[i].classList.add('e-accordion_active');
                }   
            }
        }
    }
}