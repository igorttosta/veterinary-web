<div class="status-bar" style="text-align: center;"> 🛠 Projeto em construção 🛠... </div>

# 🏥 VetCare - Veterinary Clinic Management Platform

This project is a complete platform for managing veterinary clinics, allowing appointment scheduling, pet registration, and medical history tracking.

# 📑 Table of Contents

1.  [Technologies Used](#technologies-used)
2.  [Setup and Installation](#setup-and-installation)
3.  [Tests](#tests)
4.  [Project Structure](#project-structure)
5.  [License](#license)
6.  [Author](#author)


<h1 id="technologies-used">🛠 Technologies Used </h1>

- **NestJS** for the backend
- **NextJS** for the frontend
- **Kafka** for messaging
- **Docker** for containerization
- **PostgreSQL** as the database
- **Jest** for backend testing
- **React Native** for the mobile app
- **MUI/Tailwind** for styles

---
<h1 id="setup-and-installation">⚙️ Setup and Installation </h1>

## Prerequisites

- Node.js: https://nodejs.org/pt/download
- Nesj.js: https://docs.nestjs.com
- Docker: https://www.docker.com/
- React.js

## Steps

1. **Clone the repository:**
    ```bash
        git clone https://github.com/your-repo/vetcare.git
    ```
2. **Start docker-compose:**
    ```bash
        docker-compose up -d
    ```

<h1 id="tests">🧑‍💻 Tests </h1>

1. **To test the aplication**
    ```bash
        pnpm test
    ```

<h1 id="project-structure">📂 Project Structure </h1>

```bash
    ├── backend
    │   ├── src
    │   │   ├── controllers
    │   │   │   ├── pet.controller.ts
    │   │   │   ├── user.controller.ts
    │   │   │   ├── appointment.controller.ts
    │   │   ├── services
    │   │   │   ├── pet.service.ts
    │   │   │   ├── user.service.ts
    │   │   │   ├── appointment.service.ts
    │   │   ├── entities
    │   │   │   ├── pet.entity.ts
    │   │   │   ├── user.entity.ts
    │   │   │   ├── appointment.entity.ts
    │   │   ├── main.ts
    │   │   ├── app.module.ts
    │   │   ├── kafka.module.ts
    │   ├── test
    │   │   ├── pet.service.spec.ts
    │   │   ├── user.service.spec.ts
    │   ├── Dockerfile
    │   ├── package.json
    │
    ├── frontend
    │   ├── app
    │   │   ├── pages
    │   │   │   ├── index.tsx
    │   │   │   ├── login.tsx
    │   │   │   ├── appointments.tsx
    │   │   ├── components
    │   │   │   ├── Header.tsx
    │   │   │   ├── Footer.tsx
    │   ├── Dockerfile
    │   ├── package.json
    │
    ├── mobile
    │   ├── src
    │   │   ├── screens
    │   │   │   ├── Home.tsx
    │   │   │   ├── Pets.tsx
    │   │   │   ├── Profile.tsx
    │   ├── package.json
    │
    ├── docker-compose.yml
    └── README.md
 ```

<h1 id="license">📜 License </h1>

Distributed under the MIT License. See `LICENSE` for more information.

<h1 id="author">✒️ Author </h1>

Made by **Igor T Matos**. For more information: my [LinkedIn](https://www.linkedin.com/in/matos-igor-tosta/)