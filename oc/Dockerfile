FROM mariadb-base

#ENV MYSQL_USER=admin \
#    MYSQL_PASSWORD=pw \
#    MYSQL_DATABASE=db

COPY sql_init.sql mysql-init/
COPY run.sh mysql-init/

CMD run-mysqld

