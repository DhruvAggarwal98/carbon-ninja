local init_data_file
init_data_file=$(readlink -f /opt/app-root/src/mysql-init/sql_init.sql)
log_info "Initializing database from file ${init_data_file}..."
mysql $mysql_flags ${MYSQL_DATABASE} < ${init_data_file}
log_info "Database initialized."
