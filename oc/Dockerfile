FROM mariadb

ENV MYSQL_USER=admin \
    MYSQL_PASSWORD=pw \
    MYSQL_DATABASE=db

COPY sql_init.sql .

RUN sql_init.sql  
