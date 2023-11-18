FROM node:18.17.0-alpine
ARG WORKDIR
ENV HOME=/${WORKDIR}
WORKDIR ${HOME}

RUN apk update && \
    npm install -g npm

# Viteで開発サーバーを起動する
CMD ["npm", "run", "dev"]