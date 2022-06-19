#!/bin/sh

echo "Waiting for MySQL to start..."
./wait-for db:3306

echo "Starting the server..."
java -jar app.jar