FROM mariadb

ENV MYSQL_USER=admin \
    MYSQL_PASSWORD=pw \
    MYSQL_DATABASE=db

COPY sql_init.sql mysql-init/
COPY run.sh mysql-init/

USER root
RUN chmod +x mysql-init/run.sh

USER 27
#RUN mysql -h mariadb -u admin -ppw db < sql_init.sql
#ENTRYPOINT ["mysql"]
CMD run-mysqld

