const showText = () => {
  const newText = document.getElementById('text');

  newText.innerHTML = "Some new text";
};

document.getElementById('button').addEventListener('click', showText);