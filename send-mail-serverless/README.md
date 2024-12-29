# Ejecutar este ejercicio en AWS Lambda Functions con dependencias

## Requisitos previos
1. Asegúrate de tener instalados y actualizados los siguientes componentes:
   - **AWS CLI (versión 2)**
   - **AWS SAM CLI**

2. En el editor de código **Visual Studio Code (VS Code)**, instala la extensión **AWS Toolkit** para facilitar la interacción con los servicios de AWS.

---

## Instalación de dependencias
1. En la raíz del proyecto, ubícate en el directorio `src/SendMail`.
   
2. Instala las dependencias necesarias, en este caso `nodemailer`, utilizando el gestor de paquetes de tu preferencia:

   ```bash
   npm i nodemailer
   ```
   o
   ```bash
   pnpm i nodemailer
   ```

3. Organiza las dependencias:
   - Crea un directorio llamado `nodejs`.
   - Mueve los módulos generados por Node.js al directorio `nodejs`.
   - Comprime el contenido del directorio `nodejs` en un archivo ZIP y renómbralo como `nodemailer-compressed.zip`.

4. Limpia el entorno:
   - Mueve el archivo ZIP fuera de la raíz del proyecto.
   - Elimina los módulos de Node.js del directorio `src/SendMail`, dejando únicamente `index.mjs` y `package.json`.

---

## Configuración del proyecto

1. **Creación del archivo `api.yml` o `api.yaml`:**
   - En la raíz del proyecto, crea un archivo llamado `api.yml` o `api.yaml`.
   - Haz clic derecho sobre el archivo y selecciona **Abrir con Infrastructure Composer** de AWS.

2. **Variables de entorno:**
   - Configura las siguientes variables de entorno en el Infrastructure Composer:

     ```text
     SMTP_HOST
     SMTP_USER
     SMTP_PASSWORD
     ```

     - Selecciona de la interfaz la opción **Lambda Function** donde están las funciones de nuestra API llamada SendMail, damos click en details, se nos abrirá otra interfaz.
     
     - Buscaremos una sección que se llama **environment variables**, le daremos click en Add new item, y tendremos dos apartados, Enter key y Enter value e ingresamos las variables de  entorno con sus valores.

     Ejemplo:
     ```javascript
     key SMTP_HOST      value mail.domain.com
     key SMTP_USER      value user@domain.com
     key SMTP_PASSWORD  value mypassword123
     ```

---

## Despliegue del proyecto

1. Abre el Infrastructure Composer en VS Code.
2. Selecciona la opción **Sync** para desplegar los recursos.
3. Configura un nuevo **stack** y especifica el nombre del bucket **S3** donde se cargarán los archivos necesarios.
4. Espera a que el proceso se complete exitosamente.

---

## Configuración de capas para dependencias

> [!IMPORTANT]   
> Si no se hace este paso, la API no va a funcionar ya que el servidor buscará la dependencia necesaria y no se encontrará, dará un internal server error 502 como respuesta.

1. Accede a la consola de AWS: [AWS Console](https://aws.amazon.com/es/).
2. Navega al servicio **Lambda**: [Lambda Console](https://us-east-1.console.aws.amazon.com/lambda/home?region=us-east-1#/functions).

3. Crea una nueva capa:
   - Asigna un nombre y descripción (e.g., `nodemailer`).
   - Carga el archivo `nodemailer-compressed.zip`.
   - Copia el ARN generado, que será algo similar a: `arn:aws:lambda:<region>:<account-id>:layer:<name>:<version>`.

4. Asocia la capa a tu función Lambda:
   - Navega a la sección de **Aplicaciones** en Lambda.
   - Selecciona tu función Lambda (e.g., `SendMail`).
   - En el apartado **Layers**, selecciona **Añadir una Capa**.
   - Elige la opción **Especificar un ARN** e ingresa el ARN copiado.
   - Guarda los cambios y verifica que la función Lambda se actualice exitosamente.

---

## Pruebas de la API Serverless

1. En VS Code, utiliza el **AWS Toolkit**:
   - Busca el recurso creado en **API Gateway**.
   - Haz clic derecho sobre él y selecciona **Invoke in the Cloud**.

2. **Endpoints disponibles:**

   - **`/send-mail`** (método POST):

     Ejemplo de solicitud:
     ```json
     {
         "subject": "Mi asunto",
         "message": "Mi mensaje"
     }
     ```

     Respuesta exitosa:
     ```json
     {
         "success": true,
         "message": "Email sent successfully!"
     }
     ```

     Respuesta fallida:
     ```json
     {
         "success": false,
         "message": "Message could not be sent."
     }
     ```

---

Este proceso garantiza la configuración correcta de las funciones Lambda, la integración con API Gateway y la gestión de dependencias necesarias para el funcionamiento de la API Serverless.
