_Estudo_
### Pré requisito
Para os testes de k6, estou reaproveitando todo conteúdo gerado no estudo de Wiremock: https://github.com/ArturTorres-QA/wiremock

# K6

Framework utilizados para realizar testes de API e principalmente testes de performance.
- Instalando o k6: [https://k6.io](https://grafana.com/docs/k6/latest/set-up/install-k6/)

## executar testes no k6
1.  É possivel definir de forma fixa, a quantidade de usuários virtuais simultâneos e a quantidade de tempo que esse teste será executado.
Basta adicionar dentro do arquivo de teste:

    `export const options = {`
   
      `vus: 10, // Define 10 usuários virtuais simultâneos`
    
      `duration: '30s', // Executa o teste por 30 segundos`
    
    `};`

2. Caso não queira deixar esses valores fixos é possivel definir esses paramentros no comando:

`k6 run --vus 10 --duration 30s arquivo_teste.js`

## Coleta de metricas (report html)

import:

`import { htmlReport } from 'https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js';`

Export:

`export function handleSummary(data) {`

 `return {"./report/arquivo_report.html": htmlReport(data), // Gera o relatório em HTML`};`

`}`
