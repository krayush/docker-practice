# Docker - A practice application

## Commands to run this application
- Use this command to unmount the volume
```
docker-compose down -v   
```

- Use this command to start the container
```
docker-compose up --build
```

- Use dev with hot-reload
```
docker-compose -f ./docker-compose.dev.yml up --build
```