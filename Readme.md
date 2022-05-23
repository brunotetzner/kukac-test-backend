
Back end do teste tecnico desenvolvido para a kukac.

A aplicação esta rodando localmente na porta 5000.

Rotas:

Calculo de polindromos:
  <Post> BASEURL/api/palindromes
  
    Parâmetros da rota:
      initialValue: Um numero com o valor inicial da contagem(number)
      finalValue: Um numero com o valor onde a contagem terminara(number)
 
Calculo de vendas:
  <Post> BASEURL/api/sales
    
    Parâmetros da rota:
      saleValue: Valor da compra(number)
      receivedValue: Valor entregue pelo cliente(number)  
    
Postagem de carros:
  <Post> BASEURL/api/automoveis/car
     
    Parâmetros da rota:
      model: Modelo do carro(string)
      fabricationYear: Ano de fabricação(number)
      peopleQuantity: capacidade do carro(number)
      mark: marca do carro(string)
      portsQuantity: quantidade de portas(number)
    
    
 Postagem de motos:
  <Post> BASEURL/api/automoveis/motorcycle
     
    Parâmetros da rota:
      model: Modelo do carro(string)
      fabricationYear: Ano de fabricação(number)
      peopleQuantity: capacidade do carro(number)
      mark: marca do carro(string)
      wheels: quantidade de rodas(number)
    
 Busca por cep:
   <GET> https://viacep.com.br/ws/digite_seu_cep_aqui/json/ 
  
Consuma a api juntamente com o front end => https://kukac-test-frontend-brunotetzner.vercel.app/
  Observação: Não esqueça de baixar e rodar a api LOCALMENTE. 
