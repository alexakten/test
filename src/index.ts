import { greetUser } from '$utils/greet';

window.Webflow ||= [];
window.Webflow.push(() => {
  const name = 'Hey Kindred Lab!';
  greetUser(name);
  document.body.style.backgroundColor = 'red';
});
