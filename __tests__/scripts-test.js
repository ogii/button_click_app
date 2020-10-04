test('text is displayed after clicking button', () => {
  // create document body for jsdom
  document.body.innerHTML = `
  <div>
      <button id="button">Click Me to Show Text</button>
      <span id="text"></span>
  </div>
  `;
  require('../public/js/script');
  const testButton = document.getElementById('button');
  const testText = document.getElementById('text');

  testButton.click();

  expect(testText.innerHTML.length).toBeGreaterThan(0);
  expect(testText.innerHTML).toEqual('Some new text');
});