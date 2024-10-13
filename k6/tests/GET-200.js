import http from 'k6/http';
import { check, sleep } from 'k6';

export default function () {

    const url = 'http://localhost:8080/api/games';  // URL da sua API simulada no Wiremock
    const response = http.get(url);

  // Verifica se o status da resposta é 200

  check(response, {
    'status is 200': (r) => r.status === 200,
    'contains 5 games': (r) => r.json().length === 5,
    'jogo 1 is gowr e aventura': (r) => r.json()[0].model === 'aventura' && r.json()[0].name === 'god of war',
    'jogo 5 is smt rpg': (r) => r.json()[4].model === 'rpg' && r.json()[4].name === 'shin megami tensei',
  });

  // Aguarda 1 segundo entre as requisições
  sleep(1);
}