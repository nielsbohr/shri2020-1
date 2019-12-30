
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


  const path = event.path || (event.composedPath && event.composedPath());
  for (let i = 0; i < path.length; i += 1) {
    const { classList } = path[i];
    if (classList && classList.contains('onoffswitch')) {
      if (classList.contains('onoffswitch_checked')) {
        classList.remove('onoffswitch_checked');
      } else {
        classList.add('onoffswitch_checked');
      }
    }
  }
}

function accordion(event) {
  const path = event.path || (event.composedPath && event.composedPath());
  for (let i = 0; i < path.length; i += 1) {
    const { classList } = path[i];
    if (classList && classList.contains('e-accordion')) {
      if (classList.contains('e-accordion_active')) {
        classList.remove('e-accordion_active');
      } else {
        classList.add('e-accordion_active');
      }
    }
  }
}

window.onload = () => {
  document.body.onclick = (e) => {
    if (e.target.classList.contains('onoffswitch__button')) return changeTheme(e);
    return accordion(e);
  };
};
