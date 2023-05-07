import { greetUser } from '$utils/greet';

window.Webflow ||= [];
window.Webflow.push(() => {
  const name = 'Hey there!';
  greetUser(name);
  document.body.style.backgroundColor = 'red';
});
