// Dados dos projetos com imagens
const projetos = [
    {
        nome: "E-commerce Fashion",
        descricao: "Loja virtual completa com carrinho de compras, integração de pagamento e painel administrativo.",
        imagem: "images/ecommerce.jpg",
        video: null,
        tipo: "imagem",
        repo: "https://github.com/seuusuario/ecommerce-fashion",
        status: "ativo",
        tecnologias: ["React", "Node.js", "MongoDB", "Stripe"]
    },
    {
        nome: "Dashboard Analytics",
        descricao: "Sistema de análise de dados com gráficos interativos e relatórios em tempo real.",
        imagem: "images/dashboard.jpg",
        video: null,
        tipo: "imagem",
        repo: "https://github.com/seuusuario/dashboard-analytics",
        status: "desenvolvimento",
        tecnologias: ["Vue.js", "D3.js", "Express", "PostgreSQL"]
    },
    {
        nome: "App Delivery",
        descricao: "Aplicativo de entregas com rastreamento em tempo real e geolocalização.",
        imagem: "images/delivery-app.jpg",
        video: null,
        tipo: "imagem",
        repo: "https://github.com/seuusuario/delivery-app",
        status: "finalizado",
        tecnologias: ["React Native", "Firebase", "Google Maps API"]
    },
    {
        nome: "Portfólio Interativo",
        descricao: "Template de portfólio com animações e design responsivo.",
        imagem: "images/portfolio-demo.jpg",
        video: "videos/portfolio-demo.mp4",
        tipo: "video",
        repo: "https://github.com/seuusuario/portfolio-interativo",
        status: "ativo",
        tecnologias: ["HTML5", "CSS3", "JavaScript", "GSAP"]
    },
    {
        nome: "API RESTful",
        descricao: "API completa com autenticação JWT, documentação Swagger e testes automatizados.",
        imagem: "images/api-rest.jpg",
        video: null,
        tipo: "imagem",
        repo: "https://github.com/seuusuario/api-restful",
        status: "manutencao",
        tecnologias: ["Node.js", "Express", "JWT", "Jest"]
    },
    {
        nome: "Sistema de Blog",
        descricao: "Plataforma de blog com editor rich text, comentários e sistema de categorias.",
        imagem: "images/blog-system.jpg",
        video: "videos/blog-demo.mp4",
        tipo: "video",
        repo: "https://github.com/seuusuario/blog-system",
        status: "finalizado",
        tecnologias: ["Django", "Bootstrap", "SQLite", "CKEditor"]
    }
];

// Função para obter classe de status
function getStatusClass(status) {
    const classes = {
        'ativo': 'status-ativo',
        'desenvolvimento': 'status-desenvolvimento',
        'finalizado': 'status-finalizado',
        'manutencao': 'status-manutencao'
    };
    return classes[status] || 'status-ativo';
}

// Função para obter texto do status
function getStatusText(status) {
    const texts = {
        'ativo': '✅ Ativo',
        'desenvolvimento': '🚀 Em desenvolvimento',
        'finalizado': '📦 Finalizado',
        'manutencao': '🔄 Em manutenção'
    };
    return texts[status] || status;
}

// Função para criar elemento de mídia (imagem ou vídeo)
function createMediaElement(projeto) {
    if (projeto.tipo === 'video' && projeto.video) {
        return `
            <div class="projeto-imagem" data-tipo="video" data-src="${projeto.video}">
                <video class="projeto-video" muted preload="metadata">
                    <source src="${projeto.video}" type="video/mp4">
                    Seu navegador não suporta vídeos.
                </video>
                <div class="play-overlay">
                    <i class="play-icon">▶</i>
                </div>
            </div>
        `;
    } else {
        const imagemSrc = projeto.imagem || 'images/placeholder.jpg';
        return `
            <div class="projeto-imagem" data-tipo="imagem" data-src="${imagemSrc}">
                <img src="${imagemSrc}" alt="${projeto.nome}" loading="lazy" onerror="this.src='images/placeholder.jpg'">
            </div>
        `;
    }
}

// Carregar projetos dinamicamente
function carregarProjetos() {
    const grid = document.getElementById('projetos-grid');
    if (!grid) return;
    
    projetos.forEach(projeto => {
        const card = document.createElement('div');
        card.className = 'projeto-card';
        
        const tecnologiasHTML = projeto.tecnologias.map(tech => 
            `<span class="tech-tag">${tech}</span>`
        ).join('');
        
        card.innerHTML = `
            ${createMediaElement(projeto)}
            <div class="projeto-content">
                <h3>${projeto.nome}</h3>
                <p class="projeto-descricao">${projeto.descricao}</p>
                <div class="projeto-tecnologias">
                    ${tecnologiasHTML}
                </div>
                <span class="projeto-status ${getStatusClass(projeto.status)}">
                    ${getStatusText(projeto.status)}
                </span>
                <div style="margin-top: 1rem;">
                    <a href="${projeto.repo}" target="_blank" class="projeto-link">
                        Ver no GitHub →
                    </a>
                </div>
            </div>
        `;
        
        // Adicionar evento de clique para abrir modal
        const mediaDiv = card.querySelector('.projeto-imagem');
        if (mediaDiv) {
            mediaDiv.style.cursor = 'pointer';
            mediaDiv.addEventListener('click', (e) => {
                e.stopPropagation();
                const tipo = mediaDiv.dataset.tipo;
                const src = mediaDiv.dataset.src;
                abrirModal(tipo, src);
            });
        }
        
        grid.appendChild(card);
    });
}

// Modal para visualizar imagem/vídeo ampliado
function criarModal() {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <span class="close-modal">&times;</span>
        <div class="modal-content-container"></div>
    `;
    document.body.appendChild(modal);
    
    const closeBtn = modal.querySelector('.close-modal');
    closeBtn.onclick = () => {
        modal.style.display = 'none';
        const container = modal.querySelector('.modal-content-container');
        container.innerHTML = '';
    };
    
    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
            const container = modal.querySelector('.modal-content-container');
            container.innerHTML = '';
        }
    };
    
    return modal;
}

function abrirModal(tipo, src) {
    let modal = document.querySelector('.modal');
    if (!modal) {
        modal = criarModal();
    }
    
    const container = modal.querySelector('.modal-content-container');
    container.innerHTML = '';
    
    if (tipo === 'video') {
        const video = document.createElement('video');
        video.className = 'modal-content-video';
        video.controls = true;
        video.autoplay = true;
        const source = document.createElement('source');
        source.src = src;
        source.type = 'video/mp4';
        video.appendChild(source);
        container.appendChild(video);
    } else {
        const img = document.createElement('img');
        img.className = 'modal-content';
        img.src = src;
        img.alt = 'Visualização ampliada';
        container.appendChild(img);
    }
    
    modal.style.display = 'block';
}

// Smooth scroll para navegação
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// Adicionar ano atual no footer
function updateFooterYear() {
    const footer = document.querySelector('footer p');
    if (footer) {
        const year = new Date().getFullYear();
        footer.innerHTML = `&copy; ${year} Meu Portfólio - Hospedado no GitHub Pages`;
    }
}

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
    carregarProjetos();
    initSmoothScroll();
    updateFooterYear();
    
    console.log('Site carregado com sucesso!');
    console.log('Hospedagem: GitHub Pages');
});
