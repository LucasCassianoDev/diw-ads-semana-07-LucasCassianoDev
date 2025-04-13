const produtos = [
    {
      id: 1,
      nome: "Tacky Tatoo T-shirt",
      preco: 259.90,
      imagem: "Small-809122TRVZ21041_Y.avif",
      descricao: "Camiseta estilosa com estampa de tatuagem."
    },
    {
      id: 2,
      nome: "Pants Cargo",
      preco: 1500.00,
      imagem: "Small-783695TNW111672_X.avif",
      descricao: "Calça cargo confortável e prática."
    }
  ];
  
  
  document.addEventListener("DOMContentLoaded", function() {
    
    const container = document.getElementById('produtos');
  
    
    produtos.forEach(produto => {

      const card = document.createElement('div');
      card.classList.add('card');
  
      
      const img = document.createElement('img');
      img.src = produto.imagem;
      img.alt = produto.nome;
      img.width = 300;
  
    
      const nome = document.createElement('h2');
      nome.textContent = produto.nome;
  
      
      const preco = document.createElement('p');
      preco.textContent = `R$ ${produto.preco.toFixed(2)}`;
  
  
      const link = document.createElement('a');
      link.href = `detalhes.html?id=${produto.id}`;
      link.textContent = "Ver detalhes";
  
      card.appendChild(img);
      card.appendChild(nome);
      card.appendChild(preco);
      card.appendChild(link);
  
      container.appendChild(card);
    });
  });
  