# Pasos para ejecutar este ejercicio en AWS Lambda Functions

## Requisitos
1. Asegúrate de tener instalados y actualizados los siguientes componentes:
   - **AWS CLI versión 2**
   - **AWS SAM CLI**

2. En el editor de código **Visual Studio Code (VS Code)**, instala la extensión **AWS Toolkit** para facilitar la interacción con los servicios de AWS.

---

## Configuración del proyecto

1. **Creación del archivo `api.yml` o `api.yaml` **:
   - En la raíz del proyecto, crea un archivo llamado `api.yml` o `api.yaml`.
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

   - **`/suma`** (método POST):  
   - **`/resta`** (método POST):  
   - **`/multiplicar`** (método POST):  
   - **`/dividir`** (método POST):  

     En el cuerpo de la solicitud (`body`), proporciona un objeto JSON con el siguiente formato
     Ejemplo:  
     ```json
     {
         "num1": "1",
         "num2": "2"
     }
     ```

     Respuesta esperada, en vez de op será la operación realizada:
       
     ```json
     {
         "op": "resultado"
     }
     ```

---

Este proceso garantiza una correcta configuración y prueba de las funciones Lambda y su integración con API Gateway.