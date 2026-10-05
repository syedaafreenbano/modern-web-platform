# Docker Development

## Prerequisites

- Docker Desktop installed and running
- Node.js and npm for local development

## Build the production image

From the repository root:

    docker build -t modern-web-platform:local .

## Run the production container

    docker run --rm -p 3000:3000 --name modern-web-platform modern-web-platform:local

Open http://localhost:3000 in a browser.

The container runs the Next.js standalone production server as the non-root node user.

## Environment variables

The repository includes .env.example as a safe configuration template.

Real .env and .env.local files are ignored by Git and are not included in the Docker build context.

For runtime configuration:

    docker run --rm -p 3000:3000 -e APP_ENV=production modern-web-platform:local

Do not commit secrets or bake secrets into Docker images.

## Verify the container

Check running containers:

    docker ps

To verify the runtime user:

    docker exec modern-web-platform whoami

Expected output:

    node

## Stop the container

If the container is running:

    docker stop modern-web-platform