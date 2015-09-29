# tracker
Bittorrent tracker built with Node and Redis

## Deploy
Running redis thru docker
`docker run -d -p 6379:6379 -v ./redis:/data --name tracker-redis redis redis-server --requirepass <password>`

Run the application
`node main.js`

### Announce url
`http://ip:6969/announce`
