const number = window.prompt("Digite as idades:", "0, 0, 0, 0, 0");

const idades = number.split(", ");
function mediaIdades() {
  let somarIdades = 0;
  for (let i = 0; i < idades.length; i++) {
    somarIdades += parseInt(idades[i]);
  }
  const media = somarIdades / idades.length;
  console.log(`A média é ${media}`);
}
mediaIdades();
