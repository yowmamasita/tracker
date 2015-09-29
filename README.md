# tracker
Bittorrent tracker built with Node and Redis

## Run

`node main.js`

## Run redis thru docker

`docker run -d -p 6379:6379 -v <data-dir>:/data --name redis dockerfile/redis redis-server /etc/redis/redis.conf --requirepass <password>`

redis-cli

`docker run -it --rm --link redis:redis dockerfile/redis bash -c 'redis-cli -h redis'`

## Announce url

`http://ip:6969/announce`
