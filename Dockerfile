FROM oven/bun:latest

WORKDIR /app

COPY package*.json ./

RUN bun install --all

COPY . .

EXPOSE 3000

CMD [ "bun", "run", "dev", "--host" ]