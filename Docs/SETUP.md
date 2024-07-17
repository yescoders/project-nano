
# Setup issues

mysql port for outside connection is 3307

mysql user shouldn't be root

run these commands to fix mysql shutdown issue
docker-compose down --volumes
sail up --build
