# Proyecto de Encriptador/Desencriptador de Texto

## Descripción

Este proyecto es una aplicación web simple que permite encriptar y desencriptar texto según un conjunto de reglas predefinidas. La encriptación se realiza reemplazando las vocales con secuencias de texto específicas. Esta herramienta es útil para ocultar mensajes en un formato que solo puede ser leído por quienes conocen las reglas de desencriptación.

## Reglas de Encriptación

El encriptador convierte las siguientes letras en sus correspondientes cadenas de texto:

- La letra "e" se convierte en "enter".
- La letra "i" se convierte en "imes".
- La letra "a" se convierte en "ai".
- La letra "o" se convierte en "ober".
- La letra "u" se convierte en "ufat".

**Ejemplo:**

- **Texto original:** `hola`
- **Texto encriptado:** `hoberlai`

## Reglas de Desencriptación

La desencriptación es el proceso inverso, donde las secuencias de texto se reemplazan por sus letras originales.

**Ejemplo:**

- **Texto encriptado:** `hoberlai`
- **Texto desencriptado:** `hola`

## Características

- **Interfaz amigable:** Un campo de texto para ingresar el mensaje, botones para encriptar y desencriptar, y un área para mostrar el resultado.
- **Recordatorio:** El usuario es recordado de usar solo letras minúsculas y sin acentos, ya que el encriptador solo funciona con estos caracteres.
- **Responsive Design:** La interfaz se ajusta a diferentes tamaños de pantalla para una mejor experiencia de usuario.

## Tecnologías Utilizadas

- **HTML5**
- **CSS3**
- **JavaScript**

## Instrucciones de Uso

1. Clona este repositorio en tu máquina local:
   ```bash
   git clone https://github.com/tu-usuario/nombre-del-repositorio.git

