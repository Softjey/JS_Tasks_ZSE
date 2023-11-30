const ZAD_COUNT = 40;
const form = document.querySelector('.zad-buttons');

for (let i = 1; i <= ZAD_COUNT; i++) {
  form.appendChild(createTaskButton(i));
  form.appendChild(createCodeButton(i));
}

function WinOpen(task, code = false, height = 800, width = 800, top = 100, left = 100) {
  if (code) {
    window.open(
      `z${task}/z${task}_mysi_kod.html`,
      `okienko_z${task}_kod`,
      `toolbar=no, directories=no, menubar=no, height=${height}, width=${width}, top=${top}, left=${left}`);

    return;
  }

  window.open(
    `z${task}/z${task}_mysi.html`,
    `okienko_z${task}`,
    `toolbar=no, directories=no, menubar=no, height=${height}, width=${width}, top=${top}, left=${left}`);
}

function createTaskButton(index) {
  const button = document.createElement('input');
  button.type = 'button';

  button.name = `zadanie${index}`;
  button.value = `zadanie${index}-Mysiv`;
  button.onclick = () => { WinOpen(index) };

  return button;
}

function createCodeButton(index) {
  const button = document.createElement('input');
  button.type = 'button';

  button.name = `zadanie${index}-kod`;
  button.value = `zadanie${index}-Mysiv-kod`;
  button.onclick = () => { WinOpen(index, true) };

  return button;
}
