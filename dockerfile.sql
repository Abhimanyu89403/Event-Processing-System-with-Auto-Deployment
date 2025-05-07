FROM mysql/18
LABEL maintainer="developer"
WORKDIR /db_table
COPY create_events.sql .
EXPOSE 3306