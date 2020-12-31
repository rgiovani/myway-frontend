FROM node:12-alpine as build
WORKDIR /app

RUN apk add --no-cache git

COPY package.json yarn.lock ./

RUN yarn install --only=prod

COPY . .

RUN yarn build

FROM nginx:alpine

RUN echo $'\
worker_processes auto;\
worker_rlimit_nofile 65535;\
\
events {\
	multi_accept on;\
	worker_connections 65535;\
}\
\
http {\
	charset utf-8;\
	sendfile on;\
	tcp_nopush on;\
	tcp_nodelay on;\
	server_tokens off;\
	log_not_found off;\
	types_hash_max_size 2048;\
	client_max_body_size 16M;\
\
	# MIME\
	include mime.types;\
	default_type application/octet-stream;\
\
	server {\
		listen 80;\
		listen [::]:80;\
        root /usr/share/nginx/html;\
	\
		# . files\
		location ~ /\.(?!well-known) {\
			deny all;\
		}\
	\
		# index.html fallback\
		location / {\
			try_files $uri $uri/ /index.html;\
		}\
		\
		# assets, media\
		location ~* \.(?:css(\.map)?|js(\.map)?|jpe?g|png|gif|ico|cur|heic|webp|tiff?|mp3|m4a|aac|ogg|midi?|wav|mp4|mov|webm|mpe?g|avi|ogv|flv|wmv)$ {\
			expires 7d;\
		}\
		\
		# svg, fonts\
		location ~* \.(?:svgz?|ttf|ttc|otf|eot|woff2?)$ {\
			add_header Access-Control-Allow-Origin "*";\
			expires 7d;\
		}\
		\
		# gzip\
		gzip on;\
		gzip_vary on;\
		gzip_proxied any;\
		gzip_comp_level 6;\
		gzip_types text/plain text/css text/xml application/json application/javascript application/rss+xml application/atom+xml image/svg+xml;\
	}\
}' > /etc/nginx/nginx.conf

COPY --from=build /app/build /usr/share/nginx/html

