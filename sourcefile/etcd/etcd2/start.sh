#!/bin/bash
nohup ../bin/etcd --config-file=./conf.yml > ./val/etcd.log 2>&1 &
