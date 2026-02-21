🚀 Docker Lab — Containerizing a Web Application with Database
📌 Project Overview

This lab focuses on containerizing a full-stack application using Docker by deploying a Node.js web application connected to a MySQL database. The objective was to understand how modern applications are packaged, configured, monitored, and distributed using container technologies.

The project demonstrates how multiple services can run in isolated containers while communicating through Docker networking, ensuring portability, scalability, and reproducibility across environments.

🧩 What This Lab Implements

✅ Containerized Node.js web application
✅ MySQL database running in a separate container
✅ Service communication using Docker networking
✅ Persistent database storage using Docker volumes
✅ Application configuration via environment variables
✅ Container monitoring using Docker statistics
✅ Publishing images to Docker Hub (public registry)
✅ Running a local private Docker registry
✅ Pulling and verifying images from both registries

🏗 Architecture
User Browser
      │
      ▼
┌─────────────────┐
│  Web Container  │  (Node.js + Express)
└────────┬────────┘
         │ Docker Network
         ▼
┌─────────────────┐
│ Database        │  (MySQL Container)
└─────────────────┘

Persistent Storage → Docker Named Volume
Logs/Config → Bind Mount
🛠 Technologies Used

Docker

Docker Compose

Node.js

Express.js

MySQL

Docker Hub

Private Docker Registry

Environment Variables (.env)

🎯 Key Learning Outcomes
1️⃣ Containerization Fundamentals

Built custom Docker images using Dockerfiles

Understood image layers and container lifecycle

Learned difference between images and containers

2️⃣ Multi-Container Applications

Managed multiple services using Docker Compose

Enabled inter-container communication via service names

Learned Docker internal DNS and networking concepts

3️⃣ Data Persistence

Implemented named volumes for database persistence

Used bind mounts for application logs and configuration

Understood stateless vs stateful containers

4️⃣ Environment Configuration

Configured applications using:

-e runtime variables

.env files

Learned secure configuration management practices

5️⃣ Debugging & Troubleshooting

Diagnosed container startup failures

Fixed networking and dependency timing issues

Handled database readiness using retry logic

6️⃣ Container Monitoring

Used docker stats to analyze:

CPU usage

Memory consumption

Network I/O

Observed real-time container performance

7️⃣ Image Distribution & Registries

Published images to Docker Hub

Created and used a private registry

Verified image portability across environments

💡 Skills Developed

Docker CLI proficiency

Container networking concepts

DevOps fundamentals

Backend deployment workflows

Environment management

Debugging distributed systems

Image versioning & registry workflows

📚 Why This Lab Matters

This project simulates real-world DevOps workflows where applications are packaged once and deployed anywhere. It introduces core industry practices used in cloud-native development, CI/CD pipelines, and microservice architectures.

▶️ How to Run
docker compose up -d

Then open:

http://localhost:3000
📸 Features Demonstrated

Persistent database across container restarts

Dynamic environment-based configuration

Live container monitoring

Deployment from public and private registries

🧠 Author Notes

This lab strengthened practical understanding of container orchestration basics and demonstrated how Docker simplifies application deployment by eliminating environment inconsistencies.
