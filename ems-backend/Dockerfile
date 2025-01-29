FROM maven:3.9.9-eclipse-temurin-17 AS build


#set the working directory for the build
WORKDIR /app


COPY . .

# Install dependencies from pom.xml
RUN mvn clean install -DskipTests


#FROM openjdk:21-jdk-slim this depreacated
#use eclipse-temurino openjdk 21
FROM eclipse-temurin:21

COPY --from=build /app/target/ems-backend-0.0.1-SNAPSHOT.jar app.jar

EXPOSE 8080

# Run the application app.jar
# when do container run this ENTRYPOINT is executed
#java -jar /app.jar
ENTRYPOINT ["java","-jar", "/app.jar"]