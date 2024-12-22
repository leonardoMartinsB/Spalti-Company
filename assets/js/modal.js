const projectDetails = {
    1: {
      image: "assets/images/gestao.png",
      text: "Sistema personalizado para otimizar operações administrativas de pequenas e médias empresas."
    },
    2: {
      image: "assets/images/ecommerce.png",
      text: "Loja virtual moderna com integração a sistemas de pagamento e logística para o seu negócio."
    },
    3: {
      image: "assets/images/automacao.webp",
      text: "Solução avançada para monitoramento e controle de processos industriais em tempo real."
    },
    4: {
      image: "assets/images/website.jpg",
      text: "Design profissional e responsivo para destacar a presença online de nossos clientes."
    },
    5: {
      image: "assets/images/mobile.avif",
      text: "Desenvolvimento de apps intuitivos e de alto desempenho para plataformas iOS e Android."
    },
    6: {
      image: "assets/images/dashboard.webp",
      text: "Ferramenta interativa para visualização e análise de dados em tempo real."
    }
  };
  
  function openModal(projectId) {
    const modal = document.getElementById("projectModal");
    const modalImage = document.getElementById("modalImage");
    const modalText = document.getElementById("modalText");
  
    modalImage.src = projectDetails[projectId].image;
    modalText.textContent = projectDetails[projectId].text;
  
    modal.style.display = "flex";
  }
  
  function closeModal() {
    const modal = document.getElementById("projectModal");
    modal.style.display = "none";
  }