const textInput = document.querySelector('#text-input');
const logElement = document.getElementById('log');
const checkboxes = document.querySelectorAll('#event-checkboxes input[type="checkbox"]');

function handleEvent(e) {
  const logItem = document.createElement('div');
  logItem.innerHTML = `${e.type} – "<span style="color:red;">${e.target.value}</span>"`;
  logElement.appendChild(logItem);
}

checkboxes.forEach(checkbox => {
  if (checkbox.checked) {
    textInput.addEventListener(checkbox.value, handleEvent);
  }
  checkbox.addEventListener('change', (e) => {
    if (e.target.checked) {
        textInput.addEventListener(e.target.value, handleEvent);
    } else {
        textInput.removeEventListener(e.target.value, handleEvent);
    }
  });
});
