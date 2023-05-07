import { greetUser } from '$utils/greet';

window.Webflow ||= [];
window.Webflow.push(() => {
  const name = 'I am just testing';
  greetUser(name);
  document.body.style.backgroundColor = 'red';
});
