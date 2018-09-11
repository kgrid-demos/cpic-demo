#!/usr/bin/env bash

echo "Stopping Activator, Library and CPIC Demo web site"
pkill -afl http-server
pkill -afl "8082"
pkill -afl "8081"
exit 0