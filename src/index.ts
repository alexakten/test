import { greetUser } from '$utils/greet';

window.Webflow ||= [];
window.Webflow.push(() => {
  const name = 'This is a test';
  greetUser(name);
  document.body.style.backgroundColor = 'red';
});
