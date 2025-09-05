# Parfumly

**Parfumly** é um SaaS premium para amantes de perfumes: organize sua coleção, avalie fragrâncias, receba recomendações inteligentes, descubra dupes, participe de rankings e conquiste badges.

---

## 🌸 Funcionalidades Principais

- Cadastro de perfumes (coleção)
- Recomendação de usos
- Ranking de usuários e perfumes
- Gamificação (badges, desafios)
- Listas e curadorias
- AI Recommender
- Dupe Finder
- Ofertas e promoções
- Wishlist
- Avaliação dos perfumes (tipo Letterboxd)
- Comparação de perfumes

---

## 🛠️ Stack Tecnológica

- **Backend:** Django + Django REST Framework (DRF)
- **Frontend:** TypeScript + React / Next.js
- **Banco de Dados:** PostgreSQL
- **Cache / Fila:** Redis + Celery
- **AI Recommender:** Python (scikit-learn / TensorFlow / PyTorch)
- **Storage:** AWS S3 ou Google Cloud Storage
- **Notificações:** WebSockets / Firebase / Email
- **Infraestrutura:** Docker + Docker Compose / Kubernetes, CDN Cloudflare

---

## 🚀 Instalação

### Backend (Django)
1. Clone o repositório:
```bash
git clone https://github.com/ehodiogo/parfumly.git
cd parfumly/backend
```

2. Crie e ative o ambiente virtual:
```bash
python -m venv venv
source venv/bin/activate  # Linux / macOS
venv\Scripts\activate     # Windows
```

3. Instale as dependências:
```bash
pip install -r requirements.txt
```

4. Configure variáveis de ambiente (`.env`) para banco de dados e secret key.

5. Rode migrações:
```bash
python manage.py migrate
```

6. Inicie o servidor:
```bash
python manage.py runserver
```

### Frontend (TypeScript + React/Next.js)
1. Navegue para o diretório do frontend:
```bash
cd parfumly/frontend
```

2. Instale dependências:
```bash
npm install
# ou
yarn install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
# ou
yarn dev
```

4. Acesse `http://localhost:3000` no navegador.

---

## ⚡ Uso

- Crie seu usuário e comece a adicionar perfumes, avaliar, criar listas e explorar recomendações.
- Explore badges e rankings para engajar com a comunidade.

---

## 📄 Licença

MIT License © 2025 Parfumly
