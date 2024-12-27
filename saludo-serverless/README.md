# Pasos para ejecutar este ejercicio en AWS Lambda Functions

## Requisitos
1. Asegúrate de tener instalados y actualizados los siguientes componentes:
   - **AWS CLI versión 2**
   - **AWS SAM CLI**

2. En el editor de código **Visual Studio Code (VS Code)**, instala la extensión **AWS Toolkit** para facilitar la interacción con los servicios de AWS.

---

## Configuración del proyecto

1. **Creación del archivo `api.yml`**:
   - En la raíz del proyecto, crea un archivo llamado `api.yml`.
   - Haz clic derecho sobre el archivo y selecciona **Abrir con Infrastructure Composer** de AWS.

   > Nota: Si el archivo ya existe, realiza el mismo procedimiento.

2. **Despliegue del proyecto**:
   - Una vez abierta la interfaz del Infrastructure Composer, selecciona la opción **Sync** para desplegar los recursos.
   - Configura un nuevo **stack** y especifica el nombre del bucket **S3** donde se cargarán los archivos necesarios.
   - Espera a que el proceso se complete exitosamente.

---

## Prueba de la API Serverless

1. En VS Code, dirígete al icono de **AWS Toolkit**.
2. Busca el recurso creado en **API Gateway** y haz clic derecho sobre él.
3. Selecciona la opción **Invoke in the Cloud** para realizar pruebas directamente desde la nube.

4. **Endpoints disponibles**:
   - **`/saludar`** (método GET):  
     Este endpoint devuelve un objeto JSON con la siguiente estructura:  
     ```json
     {
         "saludos": "saludos"
     }
     ```

   - **`/responder`** (método POST):  
     En el cuerpo de la solicitud (`body`), proporciona un objeto JSON con cualquier clave y valor.  
     Ejemplo:  
     ```json
     {
         "key": "value"
     }
     ```

     Respuesta esperada:  
     ```json
     {
         "respuesta": "Esta es mi respuesta"
     }
     ```

---

Este proceso garantiza una correcta configuración y prueba de las funciones Lambda y su integración con API Gateway.