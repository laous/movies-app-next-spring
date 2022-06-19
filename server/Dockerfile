FROM openjdk:11-jdk-oracle
ENV APP_HOME=/app
WORKDIR $APP_HOME
COPY target/movie_reviews_webSite_spring_boot-0.0.1-SNAPSHOT.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","app.jar"]