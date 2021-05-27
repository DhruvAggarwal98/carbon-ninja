#mysql $mysql_flags < /opt/app-root/src/mysql-init/sql_init.sql
local thisdir
local init_data_file
thisdir=$(dirname ${BASH_SOURCE[0]})
init_data_file=$(readlink -f /opt/app-root/src/mysql-init/sql_init.sql)
log_info "Initializing the arbitrary database from file ${init_data_file}..."
mysql $mysql_flags ${MYSQL_DATABASE} < ${init_data_file}
