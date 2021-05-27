FROM mariadb

ENV MYSQL_USER=admin \
    MYSQL_PASSWORD=pw \
    MYSQL_DATABASE=db

COPY sql_init.sql /usr/share/container-scripts/mysql/

#RUN mysql -h mariadb -u admin -ppw db < sql_init.sql
#ENTRYPOINT ["mysql"]
CMD "run-mysqld" && "mysql -h mariadb -u admin -ppw db < sql_init.sql"

