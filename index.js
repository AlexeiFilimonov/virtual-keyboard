const body = document.querySelector('body');
const container = document.createElement('div');
const title = document.createElement('h1');
const textArea = document.createElement('textarea');
const keyboard = document.createElement('div');
const description = document.createElement('div');
const os = document.createElement('h3');
const language = document.createElement('h3');
const keys = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del',
  'Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter',
  'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '^', 'Shift',
  'Ctrl', 'Win', 'Alt', ' ', 'Alt', '<', 'v', '>', 'Ctrl'];

container.className = 'container';
body.append(container);

title.textContent = 'RSS Виртуальная клавиатура';
container.append(title);

textArea.className = 'textArea';
container.append(textArea);

keyboard.className = 'keyboard';
container.append(keyboard);

keys.forEach((el, ind) => {
  const key = document.createElement('div');
  key.className = 'key';
  if (el === 'Enter' || ind === 54) key.className += ' midKey';
  else if (el.length > 4) key.className += ' longKey';
  else if (el === 'Tab') key.className += ' tabKey';
  else if (el === ' ') key.className += ' spaceKey';
  key.textContent = el;
  keyboard.append(key);
});

description.className = 'description';
container.append(description);

os.className = 'description-row';
os.textContent = 'Клавиатура создана в операционной системе Windows';
description.append(os);

language.className = 'description-row';
language.textContent = 'Для переключения языка используйте комбинацию: ctrl + alt';
description.append(language);
