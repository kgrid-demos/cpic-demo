@echo off
node ./scripts/checkUpdate.js

start "KGrid Library" java -jar library/kgrid-library.jar --server.port=8081 --kgrid.shelf.cdostore.url=filesystem:file://library/shelf

start "KGrid Activator" java -jar activator/kgrid-activator.jar --server.port=8082 --kgrid.shelf.cdostore.url=filesystem:file://activator/shelf

cd web
start node ../node_modules/http-server/bin/http-server -p 8083

echo "Starting CPIC Kit demo web site on http://localhost:8083"
echo "Starting KGrid Activator on http://localhost:8082"
echo "Starting KGrid Library on http://localhost:8081"
