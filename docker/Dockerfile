FROM php:8.2-apache

RUN apt-get update && apt-get install -y nginx git openssl python3 && rm -rf /var/lib/apt/lists/*

RUN git clone https://github.com/mLucasMod/snailpanel.git /etc/snailpanel
WORKDIR /etc/snailpanel

COPY apache2.conf /etc/apache2/apache2.conf
COPY nginx.conf /etc/nginx/sites-available/snailpanel
RUN ln -s /etc/nginx/sites-available/snailpanel /etc/nginx/sites-enabled/

RUN mkdir -p /etc/ssl/certs /etc/ssl/private && \
    openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
    -keyout /etc/ssl/private/snailpanel.key \
    -out /etc/ssl/certs/snailpanel.crt \
    -subj "/C=FR/ST=Paris/L=Paris/O=Snailpanel/OU=IT/CN=snailpanel.local"

EXPOSE 5000 5443

CMD service apache2 start && nginx -g "daemon off;" & python3 -u daemon/bin/start_daemon.py