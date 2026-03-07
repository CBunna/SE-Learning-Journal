# 📓 SE Learning Journal

A full-stack web app I built to track my software engineering learning journey.
I built this project to practice React, Node.js, and DevOps skills while preparing for a software engineer role.

---

## What it does

- Add daily learning entries (title + description)
- Delete entries you don't need
- Search through your entries in real time
- Data is saved on the server — entries survive page refresh

---

## Why I built this

I work as an Application Operations Engineer and I wanted to scale up my knowledge.
So I decided to build a real project instead of just watching tutorials.
This project helped me practice React, Node.js, Docker, Kubernetes, and CI/CD — all at the same time.

---

## Tech stack

**Frontend**
- React 18 (with hooks — useState, useEffect)
- Vite
- CSS

**Backend**
- Node.js
- Express.js
- JSON file storage

**DevOps**
- Docker (multi-stage builds)
- Kubernetes (Minikube)
- GitHub Actions (CI/CD)
- ArgoCD (GitOps)

---

## How to run it locally

You need Node.js and npm installed.

**1. Clone the repo**
```bash
git clone https://github.com/CBunna/SE-Learning-Journal.git
cd SE-Learning-Journal
```

**2. Start the backend**
```bash
cd server
npm install
node index.js
```
Server runs at `http://localhost:3001`

**3. Start the frontend**

Open a new terminal:
```bash
npm install
npm run dev
```
App runs at `http://localhost:5173`

---

## How to run with Docker

You need Docker Desktop installed.

```bash
docker-compose up --build
```

- Frontend: `http://localhost:8080`
- Backend API: `http://localhost:3001/api/entries`

---

## CI/CD Pipeline

I set up a GitOps pipeline using GitHub Actions and ArgoCD.

**Here is how it works:**

1. I push code to GitHub
2. CI pipeline runs automatically — it lints, builds, and pushes Docker images to Docker Hub
3. CD pipeline runs after CI — it updates the image tag in the Kubernetes manifest and commits back to Git
4. ArgoCD detects the Git change and deploys the new version to Kubernetes automatically
5. I never touch the cluster manually

```
git push
    ↓
GitHub Actions CI
    ↓
Docker Hub (new image)
    ↓
GitHub Actions CD (updates deployment.yaml)
    ↓
ArgoCD detects change
    ↓
Kubernetes rolling update ✅
```

---

## Kubernetes setup

I used Minikube for local Kubernetes.

```bash
# Start Minikube
minikube start --memory=4096 --cpus=2

# Apply manifests
kubectl apply -f k8s/backend/deployment.yaml
kubectl apply -f k8s/backend/service.yaml
kubectl apply -f k8s/frontend/deployment.yaml
kubectl apply -f k8s/frontend/service.yaml

# Open the app
minikube service journal-frontend
```

---

## ArgoCD setup

```bash
# Install ArgoCD
kubectl create namespace argocd
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml

# Access UI
kubectl port-forward svc/argocd-server -n argocd 8080:443

# Apply ArgoCD app
kubectl apply -f k8s/argocd-app.yaml
```

Open `https://localhost:8080` to see the ArgoCD dashboard.

---

## Project structure

```
SE-Learning-Journal/
  ├── src/                  React frontend
  │   ├── components/       UI components
  │   └── hooks/            custom hooks
  ├── server/               Node.js backend
  ├── k8s/                  Kubernetes manifests
  │   ├── frontend/
  │   └── backend/
  ├── .github/workflows/    CI/CD pipelines
  ├── Dockerfile.frontend
  ├── Dockerfile.backend
  └── docker-compose.yml
```

---

## What I learned from this project

- How React hooks work (useState, useEffect, custom hooks)
- How to build a REST API with Node.js and Express
- How to containerize an app with Docker
- How Kubernetes deployments and services work
- What GitOps means and how ArgoCD works
- How to write GitHub Actions workflows

---

📧 bunnachom88@gmail.com
🐙 github.com/CBunna
📍 Prague, Czech Republic