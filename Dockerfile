# Utiliza la imagen base de Nginx
FROM nginx:stable

WORKDIR /app

# Copia los archivos de tu aplicación al directorio de Nginx
#COPY ./challenge2 /usr/share/nginx/html
COPY . /usr/share/nginx/html
# Expone el puerto 8000
EXPOSE 8000