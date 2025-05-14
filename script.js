// Inicializa o mapa usando Leaflet.js
const mapa = L.map("mapaContainer").setView([-23.5505, -46.6333], 5); // São Paulo como centro inicial

// Adiciona o mapa base do OpenStreetMap
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; OpenStreetMap contributors"
}).addTo(mapa);

// Adiciona marcadores para empresas fictícias
const empresas = [
  {
    nome: "Loja Verde Natural",
    coords: [-23.5505, -46.6333],
    cidade: "São Paulo, SP"
  },
  {
    nome: "Eco Moda Sustentável",
    coords: [-25.4284, -49.2733],
    cidade: "Curitiba, PR"
  },
  {
    nome: "BioCosméticos",
    coords: [-19.9167, -43.9345],
    cidade: "Belo Horizonte, MG"
  }
];

empresas.forEach((empresa) => {
  L.marker(empresa.coords)
    .addTo(mapa)
    .bindPopup(`<strong>${empresa.nome}</strong><br>${empresa.cidade}`);
});

