const body = document.querySelector('body');
const container = document.createElement('div');
const title = document.createElement('h1');
const textArea = document.createElement('textarea');
const keyboard = document.createElement('div');
const description = document.createElement('div');
const os = document.createElement('h3');
const language = document.createElement('h3');

const keyCodes = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8',
  'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU',
  'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete', 'CapsLock', 'KeyA', 'KeyS', 'KeyD',
  'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC',
  'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight', 'ControlLeft', 'MetaLeft',
  'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'];

const eng = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del',
  'Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter',
  'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▲', 'Shift',
  'Ctrl', 'Win', 'Alt', ' ', 'Alt', '◄', '▼', '►', 'Ctrl'];

const engShift = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace',
  'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Del',
  'Caps Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter',
  'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '▲', 'Shift',
  'Ctrl', 'Win', 'Alt', ' ', 'Alt', '◄', '▼', '►', 'Ctrl'];

const engCaps = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'Del',
  'Caps Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\'', 'Enter',
  'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '▲', 'Shift',
  'Ctrl', 'Win', 'Alt', ' ', 'Alt', '◄', '▼', '►', 'Ctrl'];

const engShiftCaps = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace',
  'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '{', '}', '|', 'Del',
  'Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ':', '"', 'Enter',
  'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '<', '>', '?', '▲', 'Shift',
  'Ctrl', 'Win', 'Alt', ' ', 'Alt', '◄', '▼', '►', 'Ctrl'];

container.className = 'container';
body.append(container);

title.textContent = 'RSS Виртуальная клавиатура';
container.append(title);

textArea.className = 'textArea';
container.append(textArea);

keyboard.className = 'keyboard';
container.append(keyboard);

eng.forEach((el, ind) => {
  const key = document.createElement('div');
  key.className = 'key';
  if (el === 'Enter' || ind === 54) key.className += ' midKey';
  else if (el.length > 4) key.className += ' longKey';
  else if (el === 'Tab') key.className += ' tabKey';
  else if (el === ' ') key.className += ' spaceKey';
  key.textContent = el;
  key.className += ` ${keyCodes[ind]}`;
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

function rerenderKeyboard(keysArr) {
  for (let i = 0; i < keyboard.children.length; i += 1) {
    keyboard.children[i].textContent = keysArr[i];
  }
}

function insertChar(charValue) {
  const { selectionStart } = textArea;
  textArea.value = textArea.value.slice(0, selectionStart) + charValue
    + textArea.value.slice(textArea.selectionEnd);
  textArea.setSelectionRange(selectionStart + 1, selectionStart + 1);
}

window.addEventListener('keydown', (e) => {
  e.preventDefault();
  const capsLock = keyboard.querySelector('.CapsLock');
  const { selectionStart } = textArea;
  const { selectionEnd } = textArea;
  if (e.code !== 'CapsLock') keyboard.querySelector(`.${e.code}`).classList.add('active');
  if (e.key.length === 1 || e.key.includes('Arrow')) {
    const newChar = keyboard.querySelector(`.${e.code}`).textContent;
    insertChar(newChar);
  } else if (e.key === 'Shift') {
    rerenderKeyboard(capsLock.classList.contains('active') ? engShiftCaps : engShift);
  } else if (e.code === 'CapsLock' && e.repeat === false) {
    if (capsLock.classList.contains('active')) {
      capsLock.classList.remove('active');
      rerenderKeyboard(e.shiftKey ? engShift : eng);
    } else {
      capsLock.classList.add('active');
      rerenderKeyboard(e.shiftKey ? engShiftCaps : engCaps);
    }
  } else if (e.code === 'Enter') {
    insertChar('\n');
  } else if (e.code === 'Tab') {
    insertChar('\t');
  } else if (e.code === 'Backspace') {
    if (selectionStart === selectionEnd) {
      textArea.value = textArea.value.slice(0, selectionStart - 1)
        + textArea.value.slice(textArea.selectionEnd);
      textArea.setSelectionRange(selectionStart - 1, selectionStart - 1);
    } else {
      textArea.value = textArea.value.slice(0, selectionStart)
        + textArea.value.slice(textArea.selectionEnd);
      textArea.setSelectionRange(selectionStart, selectionStart);
    }
  } else if (e.code === 'Delete') {
    if (selectionStart === selectionEnd) {
      textArea.value = textArea.value.slice(0, selectionStart)
        + textArea.value.slice(textArea.selectionEnd + 1);
      textArea.setSelectionRange(selectionStart, selectionStart);
    } else {
      textArea.value = textArea.value.slice(0, selectionStart)
        + textArea.value.slice(textArea.selectionEnd);
      textArea.setSelectionRange(selectionStart, selectionStart);
    }
  }
});

window.addEventListener('keyup', (e) => {
  e.preventDefault();
  const capsLock = keyboard.querySelector('.CapsLock');
  if (e.code !== 'CapsLock') keyboard.querySelector(`.${e.code}`).classList.remove('active');
  if (e.key === 'Shift') {
    rerenderKeyboard(capsLock.classList.contains('active') ? engCaps : eng);
  }
});
