import http from 'k6/http'
import { check, sleep } from 'k6'
import { htmlReport } from 'https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js';

// export const options = {
////  vus: 10, // Define 10 usuários virtuais simultâneos
// duration: '30s', // Executa o teste por 30 segundos
//};

export default function () {
  const url = 'http://localhost:8080/api/games'; //url da api criada no wiremock
  
  const payload =JSON.stringify({
    "name": "shin megami tensei",
    "model": "rpg",
    "year": "2022",
  });

  const params = {
    headers: {
        'Content-Type': 'application/json',
    },
  };

  const response = http.post(url, payload, params);

  // verifica se o status da resposta é 500 e se a mensagem está correta
  check(response, {
    'status is 500': (r) => r.status === 500,
    "error messagem is correct": (r) => r.json('message') === "Internal server error: name 'shin megami tensei' is not allowed."
  });

    // aguarda 1 segundo entre uma requisção e outra
    sleep(1);

}
// Exportando o resumo em HTML

export function handleSummary(data) {
  return {
    "./report/POST-500.html": htmlReport(data), // Gera o relatório em HTML
  };
}