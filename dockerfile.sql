FROM mysql/18
LABEL maintainer="developer"
WORKDIR /db_table
COPY create_events.sql .
EXPOSE 3306

# docker build -t mysql . v1
