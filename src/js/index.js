
function changeTheme(event) {
  const themes = {
    default: 'theme_color_project-default',
    inverse: 'theme_color_project-inverse',
  };

  const themeElements = document.querySelectorAll('.theme');

  for (let i = 0; i < themeElements.length; i += 1) {
    const { classList } = themeElements[i];
    if (classList && classList.contains(themes.default)) {
      classList.add(themes.inverse);
      classList.remove(themes.default);
    } else if (classList.contains(themes.inverse)) {
      classList.add(themes.default);
      classList.remove(themes.inverse);
    }
  }

  let { target } = event;
  while (target.parentNode !== null) {
    if (target.classList && target.classList.contains('onoffswitch')) {
      if (target.classList.contains('onoffswitch_checked')) {
        target.classList.remove('onoffswitch_checked');
      } else {
        target.classList.add('onoffswitch_checked');
      }
    }
    target = target.parentNode;
  }
}

function accordion(event) {
  let { target } = event;
  while (target.parentNode !== null) {
    if (target.classList && target.classList.contains('e-accordion')) {
      if (target.classList.contains('e-accordion_active')) {
        target.classList.remove('e-accordion_active');
      } else {
        target.classList.add('e-accordion_active');
      }
    }
    target = target.parentNode;
  }
}

window.onload = () => {
  document.body.onclick = (e) => {
    if (e.target.classList.contains('onoffswitch__button')) return changeTheme(e);
    return accordion(e);
  };
};
