local init_foods_file, init_users_file
init_foods_file=$(readlink -f /opt/app-root/src/mysql-init/sql_init.sql)
init_users_file=$(readlink -f /opt/app-root/src/mysql-init/users_init.sql)
log_info "Initializing database from files ${init_foods_file} and ${init_users_file}..."
mysql $mysql_flags ${MYSQL_DATABASE} < ${init_foods_file}
mysql $mysql_flags ${MYSQL_DATABASE} < ${init_users_file}
log_info "Database initialized."
