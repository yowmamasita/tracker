# tracker
Bittorrent tracker built with Node and Redis

## Deploy
Running redis thru docker
`docker run -d -p 6379:6379 -v <data-dir>:/data --name redis dockerfile/redis redis-server /etc/redis/redis.conf --requirepass <password>`

redis-cli
`docker run -it --rm --link redis:redis dockerfile/redis bash -c 'redis-cli -h redis'`

Run the application
`node main.js`

## Announce url
`http://ip:6969/announce`
