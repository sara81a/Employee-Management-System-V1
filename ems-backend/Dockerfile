FROM maven:3.9.8-eclipse-temurin-17 AS build


#set the working directory for the build
WORKDIR /app


COPY . .

RUN mvn clean install -DskipTests

FROM openjdk:21-jdk-slim

COPY --from=build /app/target/ems-backend-0.0.1-SNAPSHOT.jar app.jar

EXPOSE 8080

# Run the application app.jar
# when do container run this ENTRYPOINT is executed
ENTRYPOINT ["java","-jar", "/app.jar"]