#!/bin/sh

echo "Waiting for Backend Server to start..."
./wait-for backend:8080

echo "Starting the Frontend Server..."
yarn start