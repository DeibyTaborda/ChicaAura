FROM mysql:8.0

ENV MYSQL_DATABASE=chica_aura
ENV MYSQL_ROOT_PASSWORD=root_password
ENV MYSQL_USER=usuario
ENV MYSQL_PASSWORD=password

COPY chica_aura.sql /docker-entrypoint-initdb.d/

EXPOSE 3306