From node:16.14

WORKDIR ~/Desktop/develop/vueproject/mumu/Front/mumu

COPY pakage*.json ./
ADD . .
RUN npm install
EXPOSE 8081

CMD ["npm", "run", "serve"]
