import http from 'k6/http'
import { check, sleep } from 'k6'

export default function () {
  const url = 'http://localhost:8080/api/games'; //url da api criada no wiremock
  
  const payload =JSON.stringify({
    "name": "god of war",
    "model": "aventura",
    "year": "2018"
  });

  const params = {
    headers: {
        'Content-Type': 'application/json',
    },
  };

  const response = http.post(url, payload, params);

  // verifica se o status da resposta é 500 e se a mensagem está correta
  check(response, {
    'status is created': (r) => r.status === 201,
    "error messagem is correct": (r) => r.json('message') === "jogo successfully registered!",
    "gamesId is 6": (r) => r.json('gamesId') === 6,
  });

    // aguarda 1 segundo entre uma requisção e outra
    sleep(1);

}
