FROM public.ecr.aws/lambda/nodejs:14

COPY app.js lambda.js package*.json ./

RUN npm install
# If you are building your code for production, instead include a package-lock.json file on this directory and use:
# RUN npm ci --production

# Command can be overwritten by providing a different command in the template directly.
CMD ["lambda.handler"]
