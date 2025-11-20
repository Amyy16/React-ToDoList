#!/bin/bash
echo " logging in into Docker"
echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin

docker build -t $DOCKER_USERNAME/ci_backend_full_pipeline:v1 ../backend

docker build -t $DOCKER_USERNAME/ci_frontend_full_pipeline:v1 ../dive-react-app

docker push $DOCKER_USERNAME/ci_backend_full_pipeline:v1
docker push $DOCKER_USERNAME/ci_frontend_full_pipeline:v1