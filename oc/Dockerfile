FROM mariadb

ENV MYSQL_USER=admin \
    MYSQL_PASSWORD=pw \
    MYSQL_DATABASE=db

COPY run.sh mysql-init/
#COPY sql_init.sql /docker-entrypoint-initdb.d/
#RUN mysql -h mariadb -u admin -ppw db < sql_init.sql
#ENTRYPOINT ["mysql"]
CMD run-mysqld

