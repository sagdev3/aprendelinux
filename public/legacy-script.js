const modules = [
  {
    title: "Primer contacto",
    stage: "Fundamentos",
    kid: "Linux es como una ciudad: hay carpetas como calles, comandos como instrucciones y usuarios con llaves.",
    pro: "Linux es una familia de sistemas tipo Unix formada por kernel, userland, shell, servicios, herramientas y convenciones POSIX.",
    topics: ["Qué es un sistema operativo", "Distribuciones", "Kernel y programas", "Usuarios y sesiones"],
    mission: "Abre la terminal simulada y ejecuta pwd, whoami, uname y ls para reconocer dónde estás.",
    commands: ["pwd", "whoami", "uname -a", "ls"],
    quiz: {
      question: "¿Qué parte habla directamente con el hardware?",
      options: ["Kernel", "Navegador", "Tema visual"],
      answer: 0
    }
  },
  {
    title: "Terminal y shell",
    stage: "Fundamentos",
    kid: "La terminal es una caja donde escribes instrucciones. La shell escucha y las convierte en acciones.",
    pro: "La shell interpreta comandos, expande patrones, conecta procesos con pipes y controla variables, redirecciones y estado de salida.",
    topics: ["Prompt", "Comandos", "Argumentos", "Historial", "Autocompletado"],
    mission: "Prueba echo, date, history y clear. Observa cómo cambia la salida cuando agregas argumentos.",
    commands: ["echo hola", "date", "history", "clear"],
    quiz: {
      question: "¿Qué hace la shell?",
      options: ["Interpreta comandos", "Instala memoria RAM", "Dibuja pixeles del monitor"],
      answer: 0
    }
  },
  {
    title: "Archivos y rutas",
    stage: "Base diaria",
    kid: "Los archivos viven en carpetas. Una ruta dice cómo llegar desde la raíz hasta un lugar.",
    pro: "El árbol de archivos nace en /; rutas absolutas, relativas, enlaces, inodos y puntos de montaje explican cómo se organizan los datos.",
    topics: ["/, /home, /etc, /var", "Rutas absolutas y relativas", "mkdir, touch, cp, mv, rm", "Enlaces simbólicos"],
    mission: "Navega con cd /, cd ~, ls /etc y cat notes.txt. Construye el mapa mental del árbol.",
    commands: ["cd /", "cd ~", "ls /etc", "cat notes.txt"],
    quiz: {
      question: "¿Cuál es la raíz del sistema de archivos?",
      options: ["/", "C:", "home:"],
      answer: 0
    }
  },
  {
    title: "Permisos y usuarios",
    stage: "Base diaria",
    kid: "Cada archivo tiene reglas: quién puede mirar, cambiar o ejecutar.",
    pro: "El modelo DAC usa propietario, grupo, otros, bits rwx, umask, setuid, setgid, sticky bit, ACLs y sudo para delegación.",
    topics: ["rwx", "chmod", "chown", "sudo", "grupos"],
    mission: "Ejecuta ls -l, chmod +x script.sh y sudo apt update para ver permisos y privilegios.",
    commands: ["ls -l", "chmod +x script.sh", "groups", "sudo apt update"],
    quiz: {
      question: "¿Qué permiso permite ejecutar un archivo?",
      options: ["x", "r", "w"],
      answer: 0
    }
  },
  {
    title: "Procesos",
    stage: "Sistema vivo",
    kid: "Un proceso es un programa corriendo. Puedes verlo, pausarlo o detenerlo.",
    pro: "Procesos tienen PID, PPID, estado, descriptores, señales, prioridades, namespaces y límites de recursos.",
    topics: ["ps", "top", "kill", "nice", "señales"],
    mission: "Lista procesos, busca uno con grep y simula detenerlo con kill.",
    commands: ["ps aux", "ps aux | grep bash", "top", "kill 1234"],
    quiz: {
      question: "¿Qué identifica a un proceso?",
      options: ["PID", "URL", "Extensión"],
      answer: 0
    }
  },
  {
    title: "Paquetes y software",
    stage: "Administración",
    kid: "Un gestor de paquetes es una tienda organizada para instalar y actualizar herramientas.",
    pro: "Los gestores resuelven dependencias, verifican firmas, usan repositorios, mantienen bases locales y ejecutan scripts de mantenimiento.",
    topics: ["apt, dnf, pacman", "repositorios", "dependencias", "actualizaciones", "firmas"],
    mission: "Simula buscar, instalar y actualizar paquetes con apt.",
    commands: ["apt search curl", "sudo apt install curl", "sudo apt update", "sudo apt upgrade"],
    quiz: {
      question: "¿Qué problema resuelve un gestor de paquetes?",
      options: ["Dependencias", "Voltaje del CPU", "Tamaño del monitor"],
      answer: 0
    }
  },
  {
    title: "Texto, filtros y pipes",
    stage: "Poder de shell",
    kid: "Puedes pasar una salida a otro comando como una cadena de trabajo.",
    pro: "Pipes, redirecciones y filtros permiten componer herramientas pequeñas: grep, sed, awk, cut, sort, uniq, xargs y tee.",
    topics: ["stdin, stdout, stderr", "|", ">", "grep", "sed", "awk"],
    mission: "Encadena ps aux | grep ssh y practica grep kernel logs.txt.",
    commands: ["grep kernel logs.txt", "cat logs.txt | sort", "echo hola > file.txt", "ps aux | grep ssh"],
    quiz: {
      question: "¿Qué símbolo conecta la salida de un comando con otro?",
      options: ["|", "#", "@"],
      answer: 0
    }
  },
  {
    title: "Redes",
    stage: "Conectividad",
    kid: "La red permite que tu computadora hable con otras usando direcciones.",
    pro: "Redes en Linux incluyen interfaces, rutas, DNS, sockets, puertos, firewall, systemd-networkd, NetworkManager y herramientas iproute2.",
    topics: ["IP", "DNS", "puertos", "ssh", "curl", "firewall"],
    mission: "Inspecciona ip addr, ping, curl y ss para entender conexión, nombre, puerto y servicio.",
    commands: ["ip addr", "ping linux.org", "curl https://example.com", "ss -tulpn"],
    quiz: {
      question: "¿Qué traduce nombres como example.com a direcciones?",
      options: ["DNS", "chmod", "inode"],
      answer: 0
    }
  },
  {
    title: "Servicios y arranque",
    stage: "Administración",
    kid: "Al encender Linux, varios ayudantes arrancan en orden para dejar todo listo.",
    pro: "El boot pasa por firmware, bootloader, kernel, initramfs, PID 1 y unidades systemd con targets, timers, sockets y journals.",
    topics: ["GRUB", "initramfs", "systemd", "systemctl", "journalctl"],
    mission: "Consulta servicios, revisa logs y simula habilitar un servicio.",
    commands: ["systemctl status ssh", "systemctl list-units", "journalctl -xe", "sudo systemctl enable nginx"],
    quiz: {
      question: "¿Qué comando administra servicios en muchas distros modernas?",
      options: ["systemctl", "paint", "zipper-ui"],
      answer: 0
    }
  },
  {
    title: "Discos y almacenamiento",
    stage: "Administración",
    kid: "Los discos se dividen en partes y se montan para aparecer dentro del árbol de archivos.",
    pro: "Particiones, filesystems, mount, fstab, LVM, RAID, swap, cuotas, snapshots y fsck forman la capa de almacenamiento.",
    topics: ["lsblk", "mount", "fstab", "ext4, xfs, btrfs", "LVM"],
    mission: "Explora lsblk, df -h y mount para entender capacidad y puntos de montaje.",
    commands: ["lsblk", "df -h", "mount", "cat /etc/fstab"],
    quiz: {
      question: "¿Qué significa montar un filesystem?",
      options: ["Conectarlo al árbol de rutas", "Pintar el escritorio", "Cambiar el teclado"],
      answer: 0
    }
  },
  {
    title: "Shell scripting",
    stage: "Automatización",
    kid: "Un script guarda varios comandos para repetir una tarea sin escribirla otra vez.",
    pro: "Bash scripts combinan variables, tests, bucles, funciones, traps, parámetros, códigos de salida y manejo estricto de errores.",
    topics: ["shebang", "variables", "if", "for", "funciones", "exit codes"],
    mission: "Crea mentalmente un script que revise espacio en disco y avise si pasa de 80%.",
    commands: ["bash script.sh", "echo $?", "for f in *; do echo $f; done", "test -f notes.txt"],
    quiz: {
      question: "¿Qué línea suele indicar el intérprete de un script?",
      options: ["#!/bin/bash", "<html>", "SELECT *"],
      answer: 0
    }
  },
  {
    title: "Seguridad",
    stage: "Defensa",
    kid: "Seguridad es cerrar puertas, dar llaves correctas y mirar señales raras.",
    pro: "Endurecimiento incluye mínimos privilegios, actualizaciones, SSH seguro, firewall, logs, MAC con SELinux/AppArmor, auditoría y backups.",
    topics: ["sudoers", "ssh keys", "ufw/nftables", "SELinux", "AppArmor", "backups"],
    mission: "Revisa permisos de claves, servicios abiertos y reglas básicas de firewall.",
    commands: ["sudo ufw status", "ssh-keygen", "chmod 600 id_rsa", "sudo auditctl -s"],
    quiz: {
      question: "¿Qué principio reduce daño si una cuenta falla?",
      options: ["Mínimo privilegio", "Más brillo", "Más ventanas"],
      answer: 0
    }
  },
  {
    title: "Contenedores",
    stage: "Plataforma",
    kid: "Un contenedor empaqueta una app con sus piezas para correr aislada.",
    pro: "Contenedores usan namespaces, cgroups, imágenes por capas, registry, redes virtuales, mounts y runtimes como runc/containerd.",
    topics: ["Docker/Podman", "imágenes", "capas", "namespaces", "cgroups"],
    mission: "Entiende la diferencia entre imagen, contenedor y volumen.",
    commands: ["podman ps", "podman images", "podman run hello-world", "podman logs app"],
    quiz: {
      question: "¿Qué limita CPU y memoria en contenedores?",
      options: ["cgroups", "themes", "wallpapers"],
      answer: 0
    }
  },
  {
    title: "Observabilidad",
    stage: "Operación",
    kid: "Cuando algo falla, Linux deja pistas en métricas y registros.",
    pro: "Observabilidad combina logs, métricas, trazas, profiling, eBPF, perf, strace, lsof, tcpdump y análisis de saturación.",
    topics: ["journalctl", "dmesg", "strace", "lsof", "perf", "eBPF"],
    mission: "Diagnostica una app lenta: mira CPU, logs, syscalls y sockets.",
    commands: ["dmesg", "strace -p 1234", "lsof -i", "perf top"],
    quiz: {
      question: "¿Qué herramienta muestra llamadas al sistema?",
      options: ["strace", "mkdir", "passwd"],
      answer: 0
    }
  },
  {
    title: "Compilar y depurar",
    stage: "Desarrollo",
    kid: "Compilar convierte código en un programa que la máquina puede ejecutar.",
    pro: "Toolchains incluyen gcc/clang, make, cmake, linkers, bibliotecas, símbolos, gdb, sanitizers y empaquetado reproducible.",
    topics: ["gcc", "make", "ldd", "gdb", "core dumps", "debug symbols"],
    mission: "Sigue el camino: código fuente, compilador, enlazador, binario, debugger.",
    commands: ["gcc main.c -o app", "make", "ldd ./app", "gdb ./app"],
    quiz: {
      question: "¿Qué herramienta depura programas nativos?",
      options: ["gdb", "cat", "route"],
      answer: 0
    }
  },
  {
    title: "Kernel por dentro",
    stage: "Avanzado",
    kid: "El kernel coordina memoria, procesos, discos, red y dispositivos sin que choquen.",
    pro: "El kernel administra scheduler, memoria virtual, VFS, drivers, syscalls, interrupciones, locking, módulos, namespaces y cgroups.",
    topics: ["syscalls", "scheduler", "memoria virtual", "VFS", "drivers", "módulos"],
    mission: "Conecta cada comando visible con una pieza interna: ls usa VFS, ping usa red, ps lee /proc.",
    commands: ["cat /proc/cpuinfo", "lsmod", "modinfo ext4", "sysctl -a"],
    quiz: {
      question: "¿Qué interfaz expone información del kernel como archivos?",
      options: ["/proc", "/games", "/paint"],
      answer: 0
    }
  },
  {
    title: "Kernel hacker path",
    stage: "Experto",
    kid: "Aquí ya estás mirando cómo se construye el motor, pieza por pieza.",
    pro: "Estudia código fuente, configura Kconfig, compila kernel, usa QEMU, analiza oops/panic, escribe módulos y sigue LKML/documentación.",
    topics: ["source tree", "Kconfig", "QEMU", "módulos", "debug kernel", "contribuir patches"],
    mission: "Diseña un laboratorio: kernel en QEMU, rootfs mínima, símbolos de debug y una prueba de syscall o módulo.",
    commands: ["make menuconfig", "make -j$(nproc)", "qemu-system-x86_64", "dmesg -w"],
    quiz: {
      question: "¿Dónde conviene probar kernels experimentales primero?",
      options: ["Máquina virtual", "Servidor crítico", "Cajero automático"],
      answer: 0
    }
  }
];

const extraModules = [
  {
    title: "Instalación y elección de distro",
    stage: "Fundamentos",
    kid: "Antes de usar Linux eliges una versión, como escoger una mochila con herramientas para tu aventura.",
    pro: "Comparar distribuciones implica ciclo de soporte, gestor de paquetes, modelo rolling o estable, hardware, comunidad, seguridad y objetivo de uso.",
    topics: ["Ubuntu, Debian, Fedora, Arch, openSUSE", "Live USB", "UEFI/BIOS", "particionado", "dual boot", "soporte LTS"],
    mission: "Diseña una instalación segura: respaldo, USB booteable, prueba live, particiones y plan de recuperación.",
    commands: ["lsblk", "sudo fdisk -l", "efibootmgr", "uname -m"],
    quiz: {
      question: "¿Qué debes hacer antes de instalar en una máquina real?",
      options: ["Respaldar datos", "Borrar al azar", "Ignorar el cargador de arranque"],
      answer: 0
    }
  },
  {
    title: "Escritorio Linux",
    stage: "Fundamentos",
    kid: "El escritorio es la parte visual: ventanas, botones, archivos y configuraciones.",
    pro: "Entornos como GNOME, KDE Plasma, XFCE y tiling WMs se apoyan en display servers, compositores, sesiones, portals y gestores de login.",
    topics: ["GNOME", "KDE Plasma", "Wayland", "X11", "display manager", "atajos"],
    mission: "Compara escritorio tradicional y gestor de ventanas: ergonomía, consumo, accesibilidad y flujo de trabajo.",
    commands: ["echo $XDG_SESSION_TYPE", "loginctl", "ps aux | grep -E 'gnome|kwin|sway'"],
    quiz: {
      question: "¿Qué protocolo moderno reemplaza muchas funciones históricas de X11?",
      options: ["Wayland", "FTP", "BIOS"],
      answer: 0
    }
  },
  {
    title: "Ayuda integrada",
    stage: "Base diaria",
    kid: "Linux trae manuales dentro del sistema para aprender sin internet.",
    pro: "man, info, help, apropos, whatis, documentación en /usr/share/doc y páginas upstream son parte del flujo profesional.",
    topics: ["man", "info", "apropos", "whatis", "--help", "/usr/share/doc"],
    mission: "Busca cómo usar chmod sin copiar comandos: man chmod, apropos permission y chmod --help.",
    commands: ["man ls", "apropos network", "whatis chmod", "ls /usr/share/doc"],
    quiz: {
      question: "¿Qué comando abre páginas de manual?",
      options: ["man", "run", "paint"],
      answer: 0
    }
  },
  {
    title: "Expansiones de shell",
    stage: "Poder de shell",
    kid: "La shell puede completar patrones antes de ejecutar el comando.",
    pro: "Expansiones incluyen globbing, brace expansion, command substitution, arithmetic expansion, parameter expansion y quoting.",
    topics: ["*", "?", "{a,b}", "$(cmd)", "$((1+2))", "comillas"],
    mission: "Predice qué ejecutará la shell antes de correr echo *.txt y echo {dev,prod}.conf.",
    commands: ["echo *.txt", "echo {dev,prod}.conf", "echo $((2+3))", "printf '%s\\n' \"$HOME\""],
    quiz: {
      question: "¿Quién expande *.txt normalmente?",
      options: ["La shell", "El kernel", "El monitor"],
      answer: 0
    }
  },
  {
    title: "Variables y entorno",
    stage: "Poder de shell",
    kid: "Las variables son etiquetas con valores que los programas pueden leer.",
    pro: "El environment transmite pares clave-valor a procesos hijos; PATH, HOME, LANG, EDITOR y variables de servicio cambian comportamiento.",
    topics: ["env", "export", "PATH", "HOME", "LANG", "EDITOR"],
    mission: "Inspecciona PATH y explica por qué puedes escribir ls sin poner /bin/ls.",
    commands: ["env", "echo $PATH", "export EDITOR=nano", "which ls"],
    quiz: {
      question: "¿Qué variable ayuda a encontrar comandos ejecutables?",
      options: ["PATH", "COLOR", "MOUSE"],
      answer: 0
    }
  },
  {
    title: "Editores de texto",
    stage: "Base diaria",
    kid: "Editar archivos es como escribir instrucciones para el sistema.",
    pro: "nano, Vim, Emacs y editores modernos requieren dominio de buffers, modos, búsqueda, reemplazo, permisos y edición remota.",
    topics: ["nano", "vim", "emacs", "micro", "búsqueda", "edición segura"],
    mission: "Aprende una ruta mínima: abrir, editar, guardar, buscar, salir y recuperar un archivo.",
    commands: ["nano notes.txt", "vim notes.txt", "grep -n TODO notes.txt"],
    quiz: {
      question: "¿Qué editor modal es clásico en Unix/Linux?",
      options: ["Vim", "Calc", "Browser"],
      answer: 0
    }
  },
  {
    title: "Búsqueda de archivos",
    stage: "Base diaria",
    kid: "Cuando pierdes algo, Linux puede buscar por nombre, tipo, tamaño o contenido.",
    pro: "find, locate, fd, rg y grep permiten búsquedas por metadatos, expresiones, permisos, fechas y contenido con buen rendimiento.",
    topics: ["find", "locate", "grep -R", "ripgrep", "xargs", "prune"],
    mission: "Encuentra todos los .log grandes y luego busca la palabra error dentro de ellos.",
    commands: ["find . -name '*.log'", "find /var -type f -size +10M", "grep -R error .", "rg kernel"],
    quiz: {
      question: "¿Qué comando busca archivos por criterios complejos?",
      options: ["find", "cd", "clear"],
      answer: 0
    }
  },
  {
    title: "Compresión y archivado",
    stage: "Base diaria",
    kid: "Puedes guardar muchos archivos en una sola caja y hacerla más pequeña.",
    pro: "tar agrupa; gzip, bzip2, xz y zstd comprimen; checksums y firmas verifican integridad.",
    topics: ["tar", "gzip", "xz", "zstd", "zip", "sha256sum"],
    mission: "Empaqueta un proyecto, comprímelo y verifica su suma SHA256.",
    commands: ["tar -czf backup.tgz project", "tar -tf backup.tgz", "sha256sum backup.tgz", "unzip file.zip"],
    quiz: {
      question: "¿Qué hace tar principalmente?",
      options: ["Agrupa archivos", "Cambia contraseñas", "Configura DNS"],
      answer: 0
    }
  },
  {
    title: "Entrada, salida y errores",
    stage: "Poder de shell",
    kid: "Un comando puede leer, responder y avisar errores por caminos distintos.",
    pro: "stdin, stdout, stderr, descriptores 0/1/2, redirección, append, here-docs y process substitution son bases de automatización.",
    topics: ["stdin", "stdout", "stderr", "2>", ">>", "tee"],
    mission: "Separa salida normal y errores en archivos diferentes y usa tee para ver y guardar a la vez.",
    commands: ["cmd > out.txt", "cmd 2> err.txt", "cmd >> log.txt", "cmd | tee log.txt"],
    quiz: {
      question: "¿Qué descriptor representa stderr?",
      options: ["2", "0", "9"],
      answer: 0
    }
  },
  {
    title: "Expresiones regulares",
    stage: "Poder de shell",
    kid: "Una expresión regular es una forma de buscar patrones, no solo palabras exactas.",
    pro: "Regex usa anclas, clases, cuantificadores, grupos y diferencias entre BRE, ERE y PCRE según herramienta.",
    topics: ["^ y $", ".", "*", "+", "[]", "grupos"],
    mission: "Busca líneas que empiezan con error, contienen IPs o terminan en .conf.",
    commands: ["grep '^ERROR' logs.txt", "grep -E '[0-9]+\\.[0-9]+' logs.txt", "sed -n '/ssh/p' logs.txt"],
    quiz: {
      question: "¿Qué símbolo suele significar inicio de línea?",
      options: ["^", "~", "%"],
      answer: 0
    }
  },
  {
    title: "awk a fondo",
    stage: "Poder de shell",
    kid: "awk lee datos en columnas y puede calcular respuestas.",
    pro: "awk procesa registros y campos con patrones, acciones, variables, arrays asociativos, funciones y agregaciones.",
    topics: ["campos", "NR", "NF", "FS", "sumas", "reportes"],
    mission: "Toma una lista de procesos y calcula consumo total o filtra columnas relevantes.",
    commands: ["awk '{print $1}' file.txt", "awk -F: '{print $1}' /etc/passwd", "ps aux | awk '{print $1,$2,$3}'"],
    quiz: {
      question: "¿Qué variable indica número de campos en awk?",
      options: ["NF", "PID", "DNS"],
      answer: 0
    }
  },
  {
    title: "sed a fondo",
    stage: "Poder de shell",
    kid: "sed transforma texto línea por línea.",
    pro: "sed permite sustituciones, rangos, borrado, impresión selectiva, scripts de edición y cambios reproducibles en pipelines.",
    topics: ["s/origen/destino/", "rangos", "-n", "-i", "capturas", "scripts sed"],
    mission: "Cambia puertos en una configuración de prueba y muestra solo el bloque relevante.",
    commands: ["sed 's/foo/bar/' file.txt", "sed -n '1,10p' file.txt", "sed '/DEBUG/d' logs.txt"],
    quiz: {
      question: "¿Para qué se usa mucho sed?",
      options: ["Transformar texto", "Crear particiones", "Medir temperatura"],
      answer: 0
    }
  },
  {
    title: "Gestión avanzada de usuarios",
    stage: "Administración",
    kid: "Puedes crear cuentas, grupos y reglas para compartir la computadora.",
    pro: "Administrar identidades incluye passwd, shadow, useradd, groupadd, PAM, NSS, sudoers, expiración y políticas de contraseña.",
    topics: ["/etc/passwd", "/etc/shadow", "PAM", "NSS", "sudoers", "login"],
    mission: "Diseña usuarios para una escuela: estudiantes, docentes, administradores y permisos mínimos.",
    commands: ["getent passwd", "id quest", "sudo useradd dev", "sudo visudo"],
    quiz: {
      question: "¿Qué subsistema participa en autenticación flexible?",
      options: ["PAM", "VFS", "GPU"],
      answer: 0
    }
  },
  {
    title: "ACLs y atributos",
    stage: "Administración",
    kid: "A veces los permisos normales no alcanzan y necesitas reglas más detalladas.",
    pro: "ACLs, atributos extendidos, chattr, lsattr, capabilities y xattrs refinan autorización y metadatos.",
    topics: ["getfacl", "setfacl", "xattrs", "chattr +i", "capabilities", "umask"],
    mission: "Permite que un usuario lea un archivo sin cambiar el grupo completo.",
    commands: ["getfacl file.txt", "setfacl -m u:ana:r file.txt", "lsattr file.txt", "getcap /usr/bin/ping"],
    quiz: {
      question: "¿Qué permite una ACL?",
      options: ["Permisos más específicos", "Más brillo", "Cambiar DNS público"],
      answer: 0
    }
  },
  {
    title: "Tareas programadas",
    stage: "Automatización",
    kid: "Puedes pedirle a Linux que haga trabajos solo a cierta hora.",
    pro: "cron, anacron y systemd timers ejecutan tareas periódicas con entornos, logs, calendarios y dependencias.",
    topics: ["cron", "crontab", "systemd timers", "anacron", "logs", "idempotencia"],
    mission: "Programa un backup diario y un reporte semanal con logs verificables.",
    commands: ["crontab -l", "crontab -e", "systemctl list-timers", "journalctl -u backup.timer"],
    quiz: {
      question: "¿Qué herramienta clásica agenda tareas periódicas?",
      options: ["cron", "grep", "mount"],
      answer: 0
    }
  },
  {
    title: "Backups y recuperación",
    stage: "Defensa",
    kid: "Un respaldo es una copia para arreglar accidentes.",
    pro: "Backups requieren RPO/RTO, pruebas de restauración, snapshots, cifrado, retención, offsite y automatización.",
    topics: ["rsync", "restic", "borg", "snapshots", "retención", "restore drills"],
    mission: "Diseña una regla 3-2-1: tres copias, dos medios, una fuera del equipo.",
    commands: ["rsync -av src/ dst/", "restic snapshots", "borg list repo", "btrfs subvolume snapshot /data /snap/data"],
    quiz: {
      question: "¿Qué prueba demuestra que un backup sirve?",
      options: ["Restaurarlo", "Cambiarle nombre", "Guardarlo sin revisar"],
      answer: 0
    }
  },
  {
    title: "Logs del sistema",
    stage: "Operación",
    kid: "Los logs son diarios donde el sistema cuenta lo que pasó.",
    pro: "Logs abarcan journald, syslog, logrotate, niveles, unidades, kernel ring buffer, correlación temporal y retención.",
    topics: ["journalctl", "/var/log", "logrotate", "niveles", "dmesg", "timestamps"],
    mission: "Encuentra por qué un servicio no arranca revisando unidad, logs recientes y errores del kernel.",
    commands: ["journalctl -b", "journalctl -u ssh", "tail -f /var/log/syslog", "logrotate -d config"],
    quiz: {
      question: "¿Qué comando consulta journald?",
      options: ["journalctl", "mkfs", "tar"],
      answer: 0
    }
  },
  {
    title: "Red local profunda",
    stage: "Conectividad",
    kid: "En una red local las máquinas se encuentran y se envían paquetes.",
    pro: "LAN implica ARP/NDP, rutas, MTU, VLANs, bridges, bonding, DHCP, DNS local y troubleshooting por capas.",
    topics: ["ARP", "rutas", "MTU", "VLAN", "bridge", "DHCP"],
    mission: "Diagnostica: tengo IP, no tengo DNS, no salgo a internet, o solo falla un puerto.",
    commands: ["ip route", "ip neigh", "resolvectl status", "tracepath example.com"],
    quiz: {
      question: "¿Qué muestra la tabla de rutas?",
      options: ["Por dónde salen paquetes", "Permisos de archivos", "Temperatura del disco"],
      answer: 0
    }
  },
  {
    title: "SSH profesional",
    stage: "Conectividad",
    kid: "SSH te permite entrar a otra computadora de forma segura.",
    pro: "SSH incluye claves, agentes, config por host, túneles, jump hosts, multiplexing, scp/sftp/rsync y hardening.",
    topics: ["ssh keys", "authorized_keys", "ssh-agent", "ProxyJump", "túneles", "known_hosts"],
    mission: "Diseña acceso remoto sin contraseña, con clave protegida y salto por bastion host.",
    commands: ["ssh-keygen", "ssh-copy-id user@host", "ssh -J bastion app", "scp file host:/tmp"],
    quiz: {
      question: "¿Qué archivo lista claves permitidas para entrar a una cuenta?",
      options: ["authorized_keys", "fstab", "resolv.conf"],
      answer: 0
    }
  },
  {
    title: "Firewall moderno",
    stage: "Defensa",
    kid: "Un firewall decide qué tráfico entra o sale.",
    pro: "nftables, iptables legado, firewalld y ufw administran filtrado, NAT, estados de conexión y zonas.",
    topics: ["nftables", "iptables", "ufw", "firewalld", "NAT", "stateful rules"],
    mission: "Permite SSH desde tu red, HTTP público y bloquea lo demás con registro mínimo.",
    commands: ["sudo nft list ruleset", "sudo ufw allow ssh", "sudo firewall-cmd --list-all", "conntrack -L"],
    quiz: {
      question: "¿Qué reemplaza a iptables como base moderna del kernel?",
      options: ["nftables", "cron", "tar"],
      answer: 0
    }
  },
  {
    title: "Servidores web",
    stage: "Servicios",
    kid: "Un servidor web entrega páginas y APIs a otras personas.",
    pro: "Nginx, Apache y Caddy gestionan virtual hosts, TLS, reverse proxy, logs, compresión, caché y balanceo.",
    topics: ["Nginx", "Apache", "TLS", "reverse proxy", "virtual hosts", "logs"],
    mission: "Publica una app local detrás de Nginx con HTTPS y logs separados.",
    commands: ["nginx -t", "sudo systemctl reload nginx", "curl -I localhost", "tail -f /var/log/nginx/access.log"],
    quiz: {
      question: "¿Qué prueba la configuración de Nginx?",
      options: ["nginx -t", "chmod -x", "lsblk"],
      answer: 0
    }
  },
  {
    title: "Bases de datos en Linux",
    stage: "Servicios",
    kid: "Una base de datos guarda información para encontrarla rápido.",
    pro: "Operar PostgreSQL, MySQL/MariaDB y SQLite exige usuarios, backups, sockets, systemd, tuning, logs, migraciones y seguridad.",
    topics: ["PostgreSQL", "MariaDB", "SQLite", "backups", "sockets", "tuning"],
    mission: "Planifica instalación, usuario de app, backup diario y monitoreo de una base PostgreSQL.",
    commands: ["systemctl status postgresql", "psql -l", "pg_dump dbname", "ss -ltnp"],
    quiz: {
      question: "¿Qué comando respalda una base PostgreSQL?",
      options: ["pg_dump", "grep", "mount"],
      answer: 0
    }
  },
  {
    title: "DNS y nombres",
    stage: "Servicios",
    kid: "DNS convierte nombres fáciles en direcciones que las máquinas entienden.",
    pro: "DNS incluye registros A/AAAA/CNAME/MX/TXT, resolvers, caches, split horizon, DNSSEC y herramientas dig/resolvectl.",
    topics: ["A", "AAAA", "CNAME", "MX", "TXT", "DNSSEC"],
    mission: "Resuelve un nombre, revisa servidor usado y diferencia registro A de CNAME.",
    commands: ["dig example.com", "dig MX example.com", "resolvectl query example.com", "cat /etc/resolv.conf"],
    quiz: {
      question: "¿Qué registro suele apuntar a una dirección IPv4?",
      options: ["A", "MX", "TXT"],
      answer: 0
    }
  },
  {
    title: "Correo en Linux",
    stage: "Servicios",
    kid: "El correo necesita enviar, recibir, guardar y proteger mensajes.",
    pro: "Postfix, Dovecot, SPF, DKIM, DMARC, TLS, colas, aliases, antispam y reputación forman operación de mail.",
    topics: ["Postfix", "Dovecot", "SPF", "DKIM", "DMARC", "colas"],
    mission: "Mapea el viaje de un email desde cliente hasta bandeja y qué controles evitan falsificación.",
    commands: ["mailq", "postconf -n", "journalctl -u postfix", "dig TXT example.com"],
    quiz: {
      question: "¿Qué ayuda a verificar que un dominio autoriza servidores de envío?",
      options: ["SPF", "chmod", "VFS"],
      answer: 0
    }
  },
  {
    title: "Virtualización",
    stage: "Plataforma",
    kid: "Una máquina virtual es una computadora dentro de otra.",
    pro: "KVM/QEMU, libvirt, virt-manager, cloud-init, imágenes qcow2, bridges y passthrough habilitan laboratorios y producción.",
    topics: ["KVM", "QEMU", "libvirt", "qcow2", "cloud-init", "bridges"],
    mission: "Crea un laboratorio mental: VM servidor, red aislada, snapshot antes de experimentar.",
    commands: ["virsh list --all", "virt-install --help", "qemu-img info disk.qcow2", "ip link show type bridge"],
    quiz: {
      question: "¿Qué componente del kernel habilita virtualización acelerada en Linux?",
      options: ["KVM", "cron", "sed"],
      answer: 0
    }
  },
  {
    title: "Imágenes y arranque cloud",
    stage: "Plataforma",
    kid: "En la nube se crean computadoras desde plantillas.",
    pro: "Cloud images usan cloud-init, metadata, user-data, SSH keys, particiones growpart y automatización declarativa.",
    topics: ["cloud-init", "metadata", "user-data", "qcow2", "SSH keys", "idempotencia"],
    mission: "Escribe el plan de una instancia que cree usuario, instale paquetes y arranque un servicio.",
    commands: ["cloud-init status", "cloud-init query", "journalctl -u cloud-init", "growpart --help"],
    quiz: {
      question: "¿Qué herramienta inicializa muchas imágenes cloud Linux?",
      options: ["cloud-init", "awk", "fdisk"],
      answer: 0
    }
  },
  {
    title: "Contenedores a bajo nivel",
    stage: "Plataforma",
    kid: "El aislamiento se logra con paredes invisibles dentro del sistema.",
    pro: "unshare, chroot, pivot_root, namespaces, cgroups v2, seccomp y capabilities explican qué hace un runtime.",
    topics: ["unshare", "chroot", "pivot_root", "seccomp", "capabilities", "cgroups v2"],
    mission: "Relaciona cada feature del kernel con una propiedad de contenedor: vista, límites, permisos y syscalls.",
    commands: ["unshare --help", "chroot --help", "cat /proc/self/status", "cat /sys/fs/cgroup/cgroup.controllers"],
    quiz: {
      question: "¿Qué limita llamadas al sistema permitidas?",
      options: ["seccomp", "fstab", "DNS"],
      answer: 0
    }
  },
  {
    title: "Kubernetes desde Linux",
    stage: "Plataforma",
    kid: "Kubernetes coordina muchos contenedores en muchas máquinas.",
    pro: "Linux sustenta Kubernetes con kubelet, container runtime, CNI, CSI, cgroups, namespaces, iptables/nftables y systemd.",
    topics: ["kubelet", "CNI", "CSI", "pods", "services", "nodes"],
    mission: "Explica cómo un Pod usa red, almacenamiento, límites de recursos y logs del nodo Linux.",
    commands: ["kubectl get pods", "kubectl describe node", "crictl ps", "journalctl -u kubelet"],
    quiz: {
      question: "¿Qué agente corre en cada nodo Kubernetes?",
      options: ["kubelet", "bashrc", "initramfs"],
      answer: 0
    }
  },
  {
    title: "Git en Linux",
    stage: "Desarrollo",
    kid: "Git guarda la historia de tus cambios para volver y colaborar.",
    pro: "Git usa objetos, refs, staging, ramas, merges, rebases, hooks, firmas y flujos de revisión.",
    topics: ["init", "status", "add", "commit", "branch", "merge"],
    mission: "Crea una historia limpia: cambio pequeño, commit claro, rama y revisión.",
    commands: ["git status", "git add file", "git commit -m mensaje", "git log --oneline"],
    quiz: {
      question: "¿Qué área prepara cambios antes del commit?",
      options: ["staging", "swap", "journal"],
      answer: 0
    }
  },
  {
    title: "Toolchains y bibliotecas",
    stage: "Desarrollo",
    kid: "Los programas se construyen con herramientas que traducen y unen piezas.",
    pro: "Compilador, ensamblador, linker, libc, dynamic loader, pkg-config, ABI y símbolos determinan cómo corre un binario.",
    topics: ["gcc/clang", "ld", "glibc/musl", "ld.so", "pkg-config", "ABI"],
    mission: "Sigue un binario con ldd, file, readelf y strace para entender qué necesita.",
    commands: ["file /bin/ls", "ldd /bin/ls", "readelf -h /bin/ls", "pkg-config --libs zlib"],
    quiz: {
      question: "¿Qué muestra bibliotecas compartidas de un binario?",
      options: ["ldd", "mkdir", "ip"],
      answer: 0
    }
  },
  {
    title: "Python y automatización",
    stage: "Desarrollo",
    kid: "Python ayuda a automatizar tareas cuando los comandos se quedan cortos.",
    pro: "Python en Linux implica venv, pip, shebang, permisos, subprocess, pathlib, systemd services y empaquetado.",
    topics: ["python3", "venv", "pip", "subprocess", "pathlib", "servicios"],
    mission: "Convierte un comando repetitivo en script Python con argumentos y salida clara.",
    commands: ["python3 --version", "python3 -m venv .venv", "pip install requests", "python3 script.py"],
    quiz: {
      question: "¿Qué aísla dependencias Python por proyecto?",
      options: ["venv", "fstab", "iptables"],
      answer: 0
    }
  },
  {
    title: "Rendimiento CPU",
    stage: "Operación",
    kid: "Si la computadora va lenta, puedes mirar quién usa el procesador.",
    pro: "CPU performance requiere entender load average, runnable tasks, scheduler, perf, flamegraphs, nice, affinity y throttling.",
    topics: ["load average", "top", "mpstat", "perf", "nice", "taskset"],
    mission: "Diferencia CPU saturada de proceso dormido esperando disco o red.",
    commands: ["uptime", "top", "mpstat 1", "perf top"],
    quiz: {
      question: "¿Qué indica load average?",
      options: ["Trabajo esperando CPU o I/O", "Espacio libre exacto", "Contraseña actual"],
      answer: 0
    }
  },
  {
    title: "Rendimiento memoria",
    stage: "Operación",
    kid: "La memoria guarda datos rápidos; si falta, el sistema empieza a sufrir.",
    pro: "Memoria Linux incluye page cache, virtual memory, swap, OOM killer, NUMA, huge pages, cgroups y pressure stall information.",
    topics: ["free", "vmstat", "swap", "OOM", "page cache", "NUMA"],
    mission: "Explica por qué Linux usa memoria libre como caché y cuándo eso es normal.",
    commands: ["free -h", "vmstat 1", "cat /proc/meminfo", "dmesg | grep -i oom"],
    quiz: {
      question: "¿Qué mata procesos cuando no queda memoria recuperable?",
      options: ["OOM killer", "DNS", "tar"],
      answer: 0
    }
  },
  {
    title: "Rendimiento de disco",
    stage: "Operación",
    kid: "Los discos pueden ser el camino lento si muchas cosas leen y escriben.",
    pro: "I/O implica latencia, throughput, IOPS, colas, schedulers, cache, fsync, iostat, blktrace y filesystems.",
    topics: ["iostat", "iotop", "latencia", "IOPS", "fsync", "scheduler"],
    mission: "Investiga si una app lenta espera disco usando iostat, pidstat y logs.",
    commands: ["iostat -xz 1", "iotop", "pidstat -d 1", "lsblk -o NAME,ROTA,SIZE"],
    quiz: {
      question: "¿Qué métrica mide operaciones por segundo?",
      options: ["IOPS", "PID", "TTL"],
      answer: 0
    }
  },
  {
    title: "Rendimiento de red",
    stage: "Operación",
    kid: "La red puede fallar por ruta, nombre, puerto, pérdida o lentitud.",
    pro: "Diagnóstico de red usa ip, ss, tcpdump, ethtool, mtr, nft, MTU, buffers, retransmisiones y saturación.",
    topics: ["tcpdump", "mtr", "ethtool", "ss", "MTU", "retransmisiones"],
    mission: "Crea un árbol de diagnóstico: DNS, ruta, puerto, firewall, TLS, aplicación.",
    commands: ["mtr example.com", "tcpdump -i eth0 port 443", "ethtool eth0", "ss -s"],
    quiz: {
      question: "¿Qué herramienta captura paquetes?",
      options: ["tcpdump", "chmod", "make"],
      answer: 0
    }
  },
  {
    title: "Cifrado y secretos",
    stage: "Defensa",
    kid: "Cifrar es guardar información en una caja que solo abre quien tiene la llave.",
    pro: "Linux soporta LUKS/dm-crypt, GPG, age, OpenSSL, gestores de secretos, TPM, passphrases y rotación de claves.",
    topics: ["LUKS", "dm-crypt", "GPG", "age", "OpenSSL", "TPM"],
    mission: "Diseña protección para laptop perdida: disco cifrado, backup cifrado y llaves recuperables.",
    commands: ["cryptsetup luksDump /dev/sda", "gpg --list-keys", "openssl version", "pass ls"],
    quiz: {
      question: "¿Qué tecnología se usa mucho para cifrado de disco en Linux?",
      options: ["LUKS", "CNAME", "awk"],
      answer: 0
    }
  },
  {
    title: "MAC: SELinux y AppArmor",
    stage: "Defensa",
    kid: "Además de permisos normales, hay reglas de seguridad más estrictas.",
    pro: "Mandatory Access Control limita procesos con políticas, contextos, perfiles, modos enforcing/permissive y auditoría.",
    topics: ["SELinux contexts", "AppArmor profiles", "enforcing", "permissive", "audit logs", "least privilege"],
    mission: "Interpreta un bloqueo: mira modo, perfil/contexto, log de auditoría y ajuste mínimo.",
    commands: ["getenforce", "sestatus", "aa-status", "ausearch -m avc"],
    quiz: {
      question: "¿Qué modo de SELinux aplica políticas activamente?",
      options: ["Enforcing", "Decorating", "Sleeping"],
      answer: 0
    }
  },
  {
    title: "Hardening de servidores",
    stage: "Defensa",
    kid: "Endurecer es quitar riesgos antes de que ocurra un problema.",
    pro: "Hardening incluye mínimos servicios, parches, usuarios, SSH, firewall, auditoría, integridad, sysctl, backups y respuesta a incidentes.",
    topics: ["CIS", "parches", "SSH seguro", "auditd", "AIDE", "sysctl"],
    mission: "Construye checklist de servidor público: antes, durante y después de ponerlo en internet.",
    commands: ["ss -tulpn", "sudo lynis audit system", "sudo auditctl -s", "sysctl kernel.randomize_va_space"],
    quiz: {
      question: "¿Qué conviene desactivar si no se usa?",
      options: ["Servicios innecesarios", "Logs", "Permisos mínimos"],
      answer: 0
    }
  },
  {
    title: "Filesystems avanzados",
    stage: "Almacenamiento",
    kid: "Distintos filesystems tienen poderes distintos: rapidez, copias, reparación o seguridad.",
    pro: "ext4, XFS, Btrfs, ZFS, F2FS y tmpfs difieren en journaling, CoW, snapshots, checksums, cuotas y reparación.",
    topics: ["ext4", "XFS", "Btrfs", "ZFS", "tmpfs", "snapshots"],
    mission: "Elige filesystem para laptop, base de datos, NAS y dispositivo flash justificando tradeoffs.",
    commands: ["findmnt -T .", "stat -f .", "btrfs filesystem usage /", "xfs_info /"],
    quiz: {
      question: "¿Qué feature es típica de Btrfs/ZFS?",
      options: ["Snapshots", "SMTP", "Shell prompt"],
      answer: 0
    }
  },
  {
    title: "RAID, LVM y snapshots",
    stage: "Almacenamiento",
    kid: "Puedes combinar discos para crecer, protegerte o hacer copias rápidas.",
    pro: "mdraid, LVM, thin provisioning, snapshots, striping, mirroring, parity y recuperación requieren diseño cuidadoso.",
    topics: ["mdadm", "LVM", "PV/VG/LV", "RAID 0/1/5/10", "snapshots", "thin pools"],
    mission: "Diseña almacenamiento para servidor: datos, backups, snapshots y monitoreo de fallos.",
    commands: ["sudo mdadm --detail /dev/md0", "pvs", "vgs", "lvs"],
    quiz: {
      question: "¿Qué capa usa PV, VG y LV?",
      options: ["LVM", "DNS", "cron"],
      answer: 0
    }
  },
  {
    title: "Boot avanzado",
    stage: "Avanzado",
    kid: "El arranque es una carrera de relevos hasta que aparece el sistema listo.",
    pro: "UEFI, Secure Boot, GRUB/systemd-boot, kernel cmdline, initramfs, dracut, mkinitcpio y rescue targets explican arranque real.",
    topics: ["UEFI", "Secure Boot", "GRUB", "kernel cmdline", "dracut", "rescue target"],
    mission: "Resuelve un sistema que no arranca: bootloader, root device, initramfs, logs y modo rescue.",
    commands: ["cat /proc/cmdline", "bootctl status", "grub-mkconfig --help", "lsinitramfs /boot/initrd.img"],
    quiz: {
      question: "¿Qué contiene opciones pasadas al kernel al arrancar?",
      options: ["Kernel cmdline", "Historial de bash", "DNS cache"],
      answer: 0
    }
  },
  {
    title: "init y PID 1",
    stage: "Avanzado",
    kid: "El primer proceso organiza el resto de procesos del sistema.",
    pro: "PID 1 tiene semántica especial para señales y reaping; systemd modela dependencias, targets, cgroups y supervisión.",
    topics: ["PID 1", "reaping", "targets", "units", "dependencies", "cgroups"],
    mission: "Explica por qué un contenedor necesita manejar procesos huérfanos y señales correctamente.",
    commands: ["ps -p 1 -o pid,comm,args", "systemctl get-default", "systemd-cgls", "systemctl cat ssh"],
    quiz: {
      question: "¿Qué PID tiene el proceso init?",
      options: ["1", "404", "65535"],
      answer: 0
    }
  },
  {
    title: "Llamadas al sistema",
    stage: "Kernel",
    kid: "Los programas piden ayuda al kernel mediante puertas especiales.",
    pro: "Syscalls cruzan de user mode a kernel mode con ABI estable, validación de punteros, permisos y códigos errno.",
    topics: ["read", "write", "openat", "clone", "execve", "errno"],
    mission: "Usa strace mentalmente: identifica qué syscalls necesita ls para listar un directorio.",
    commands: ["strace ls", "strace -e openat cat notes.txt", "man 2 open", "ausyscall --dump"],
    quiz: {
      question: "¿Qué syscall ejecuta un nuevo programa?",
      options: ["execve", "printf", "malloc"],
      answer: 0
    }
  },
  {
    title: "Scheduler del kernel",
    stage: "Kernel",
    kid: "El scheduler decide qué programa usa el CPU en cada momento.",
    pro: "CFS/EEVDF, clases RT, prioridades, nice, affinity, wakeups, preemption y cgroups CPU gobiernan latencia y reparto.",
    topics: ["CFS/EEVDF", "nice", "RT", "affinity", "preemption", "cgroups CPU"],
    mission: "Compara tarea interactiva, batch y tiempo real; predice cuál necesita baja latencia.",
    commands: ["chrt -p 1", "taskset -p $$", "nice -n 10 command", "cat /proc/sched_debug"],
    quiz: {
      question: "¿Qué controla preferencia básica de CPU en procesos normales?",
      options: ["nice", "DNS", "fstab"],
      answer: 0
    }
  },
  {
    title: "Memoria virtual",
    stage: "Kernel",
    kid: "Cada programa cree tener su propio espacio de memoria ordenado.",
    pro: "Memoria virtual usa páginas, page tables, mmap, copy-on-write, page faults, reclaim, swap y OOM.",
    topics: ["páginas", "mmap", "COW", "page faults", "swap", "OOM"],
    mission: "Explica por qué fork puede ser barato gracias a copy-on-write.",
    commands: ["pmap $$", "cat /proc/self/maps", "vmstat 1", "cat /proc/vmstat"],
    quiz: {
      question: "¿Qué ocurre cuando una página necesaria no está lista?",
      options: ["Page fault", "DNS lookup", "Git merge"],
      answer: 0
    }
  },
  {
    title: "VFS y capa de archivos",
    stage: "Kernel",
    kid: "El kernel usa una capa común para hablar con muchos tipos de archivos.",
    pro: "VFS abstrae inodes, dentries, superblocks, file operations, page cache y mount namespaces.",
    topics: ["inode", "dentry", "superblock", "file operations", "page cache", "mount namespace"],
    mission: "Relaciona open, read, write y close con estructuras internas de VFS.",
    commands: ["stat file.txt", "findmnt", "cat /proc/mounts", "slabtop"],
    quiz: {
      question: "¿Qué estructura representa metadatos de archivo?",
      options: ["inode", "packet", "timer"],
      answer: 0
    }
  },
  {
    title: "Drivers y dispositivos",
    stage: "Kernel",
    kid: "Los drivers traducen entre el kernel y las piezas físicas.",
    pro: "Drivers manejan buses, interrupts, DMA, device tree/ACPI, char/block/net devices, udev y sysfs.",
    topics: ["udev", "sysfs", "ACPI", "device tree", "interrupts", "DMA"],
    mission: "Sigue un dispositivo USB desde conexión hasta nodo en /dev.",
    commands: ["lsusb", "lspci", "udevadm monitor", "ls /sys/class"],
    quiz: {
      question: "¿Dónde expone el kernel muchos dispositivos y atributos?",
      options: ["/sys", "/home", "/tmp/game"],
      answer: 0
    }
  },
  {
    title: "Módulos del kernel",
    stage: "Kernel",
    kid: "Un módulo añade una pieza al kernel sin reiniciar todo.",
    pro: "Módulos usan vermagic, símbolos exportados, dependencias, parámetros, init/exit, taint flags y DKMS.",
    topics: ["insmod", "modprobe", "rmmod", "dkms", "vermagic", "taint"],
    mission: "Carga, inspecciona y descarga un módulo en un laboratorio virtual.",
    commands: ["lsmod", "modprobe dummy", "modinfo dummy", "rmmod dummy"],
    quiz: {
      question: "¿Qué comando carga módulos resolviendo dependencias?",
      options: ["modprobe", "tar", "grep"],
      answer: 0
    }
  },
  {
    title: "Interrupciones y tiempo",
    stage: "Kernel",
    kid: "El hardware avisa al CPU cuando necesita atención.",
    pro: "Interrupciones, softirqs, tasklets, workqueues, timers, jiffies, high-resolution timers y clock sources afectan latencia.",
    topics: ["IRQ", "softirq", "workqueue", "timers", "jiffies", "clocksource"],
    mission: "Observa qué interrupciones suben cuando hay actividad de red o disco.",
    commands: ["cat /proc/interrupts", "cat /proc/softirqs", "cat /sys/devices/system/clocksource/clocksource0/current_clocksource"],
    quiz: {
      question: "¿Qué archivo muestra contadores de interrupciones?",
      options: ["/proc/interrupts", "/etc/hosts", "/var/tmp"],
      answer: 0
    }
  },
  {
    title: "Red dentro del kernel",
    stage: "Kernel",
    kid: "Los paquetes pasan por varias estaciones antes de llegar a una app.",
    pro: "Networking incluye NIC driver, NAPI, sk_buff, qdisc, netfilter, routing, sockets TCP/UDP y eBPF/XDP.",
    topics: ["sk_buff", "NAPI", "qdisc", "netfilter", "sockets", "XDP"],
    mission: "Traza un paquete: tarjeta, driver, kernel, firewall, socket y proceso.",
    commands: ["tc qdisc show", "nft list ruleset", "ss -tan", "bpftool net"],
    quiz: {
      question: "¿Qué framework filtra paquetes en el kernel?",
      options: ["netfilter", "systemd timer", "Vim"],
      answer: 0
    }
  },
  {
    title: "eBPF avanzado",
    stage: "Kernel",
    kid: "eBPF permite observar y controlar partes del kernel de forma segura.",
    pro: "eBPF usa verificador, mapas, helpers, attach points, kprobes, uprobes, tracepoints, XDP y CO-RE.",
    topics: ["verifier", "maps", "kprobes", "uprobes", "tracepoints", "CO-RE"],
    mission: "Diseña una herramienta eBPF que cuente syscalls openat por proceso.",
    commands: ["bpftool prog list", "bpftool map list", "bpftrace -e 'tracepoint:syscalls:sys_enter_openat { @[comm] = count(); }'"],
    quiz: {
      question: "¿Qué componente rechaza programas eBPF inseguros?",
      options: ["Verifier", "Wallpaper", "Crontab"],
      answer: 0
    }
  },
  {
    title: "Construir un kernel",
    stage: "Kernel hacker",
    kid: "Puedes construir tu propio kernel para aprender cómo está hecho.",
    pro: "Compilar kernel requiere toolchain, configuración, módulos, initramfs, bootloader, símbolos, reproducibilidad y rollback.",
    topics: ["make defconfig", "Kconfig", "modules_install", "initramfs", "System.map", "rollback"],
    mission: "Prepara plan seguro para compilar y probar kernel sin dañar tu sistema principal.",
    commands: ["make defconfig", "make menuconfig", "make -j$(nproc)", "make modules_install"],
    quiz: {
      question: "¿Qué interfaz configura opciones del kernel?",
      options: ["menuconfig", "crontab", "ssh-agent"],
      answer: 0
    }
  },
  {
    title: "Debug del kernel",
    stage: "Kernel hacker",
    kid: "Cuando el kernel falla, hay pistas especiales para encontrar la causa.",
    pro: "Debug kernel usa oops/panic, kdump, crash, ftrace, dynamic debug, kgdb, lockdep, KASAN, UBSAN y syzkaller.",
    topics: ["oops", "panic", "kdump", "ftrace", "kgdb", "KASAN"],
    mission: "Interpreta un oops: módulo, función, stack trace, taint y pasos para reproducir.",
    commands: ["cat /proc/sys/kernel/panic", "trace-cmd record -e sched", "dmesg -T", "crash vmcore vmlinux"],
    quiz: {
      question: "¿Qué herramienta puede analizar un vmcore?",
      options: ["crash", "zip", "dig"],
      answer: 0
    }
  },
  {
    title: "Linux embebido",
    stage: "Especialización",
    kid: "Linux también vive en aparatos pequeños, routers y placas.",
    pro: "Embedded Linux combina cross-compiling, BusyBox, Buildroot, Yocto, device tree, init mínimo, rootfs y actualizaciones OTA.",
    topics: ["BusyBox", "Buildroot", "Yocto", "device tree", "cross compile", "rootfs"],
    mission: "Diseña un Linux mínimo para una placa: kernel, rootfs, init, red y actualización.",
    commands: ["make ARCH=arm defconfig", "dtc -I dts -O dtb board.dts", "busybox --help", "qemu-system-arm --help"],
    quiz: {
      question: "¿Qué proyecto ayuda a construir sistemas embebidos completos?",
      options: ["Buildroot", "Postfix", "LibreOffice"],
      answer: 0
    }
  },
  {
    title: "Tiempo real",
    stage: "Especialización",
    kid: "Algunas máquinas necesitan responder exactamente a tiempo.",
    pro: "Linux realtime implica PREEMPT_RT, latencia, prioridades RT, priority inversion, cyclictest, CPU isolation y determinismo.",
    topics: ["PREEMPT_RT", "latencia", "SCHED_FIFO", "priority inversion", "cyclictest", "CPU isolation"],
    mission: "Compara sistema rápido con sistema determinista: no son lo mismo.",
    commands: ["uname -a", "chrt --max", "cyclictest", "cat /sys/kernel/realtime"],
    quiz: {
      question: "¿Qué busca un sistema de tiempo real?",
      options: ["Respuesta determinista", "Más colores", "Archivos más largos"],
      answer: 0
    }
  },
  {
    title: "Alta disponibilidad",
    stage: "Especialización",
    kid: "Si una máquina falla, otra puede continuar el trabajo.",
    pro: "HA usa clustering, health checks, fencing, quorum, failover, load balancers, replicación y pruebas de desastre.",
    topics: ["Pacemaker", "Corosync", "quorum", "fencing", "failover", "replicación"],
    mission: "Diseña un servicio que sobreviva caída de nodo, disco y red.",
    commands: ["pcs status", "crm_mon", "ip addr show", "systemctl status keepalived"],
    quiz: {
      question: "¿Qué evita decisiones divididas en un cluster?",
      options: ["Quorum", "Alias", "Theme"],
      answer: 0
    }
  },
  {
    title: "SRE con Linux",
    stage: "Especialización",
    kid: "Operar bien significa que el sistema siga funcionando y se pueda arreglar rápido.",
    pro: "SRE aplica SLOs, error budgets, incident response, postmortems, automatización, capacidad, monitoreo y reducción de toil.",
    topics: ["SLO", "SLI", "error budget", "postmortem", "toil", "capacidad"],
    mission: "Define SLO para un servicio web y qué alertas realmente despiertan a alguien.",
    commands: ["uptime", "curl -w '%{time_total}\\n'", "journalctl --since '1 hour ago'", "systemctl is-active app"],
    quiz: {
      question: "¿Qué mide una promesa objetiva de confiabilidad?",
      options: ["SLO", "PID", "UID"],
      answer: 0
    }
  },
  {
    title: "Contribuir a Linux",
    stage: "Kernel hacker",
    kid: "También puedes ayudar a mejorar Linux con reportes, documentación y parches.",
    pro: "Contribuir exige leer docs, reproducir bugs, usar git send-email, checkpatch, Signed-off-by, listas, maintainers y revisión paciente.",
    topics: ["MAINTAINERS", "checkpatch", "Signed-off-by", "git send-email", "LKML", "regresión"],
    mission: "Prepara un parche pequeño de documentación con commit message correcto y destinatarios adecuados.",
    commands: ["scripts/checkpatch.pl patch.diff", "git format-patch -1", "git send-email --dry-run *.patch", "get_maintainer.pl file.c"],
    quiz: {
      question: "¿Qué archivo ayuda a encontrar responsables de una parte del kernel?",
      options: ["MAINTAINERS", "fstab", "hosts"],
      answer: 0
    }
  }
];

modules.push(...extraModules);

const glossary = [
  ["Kernel", "Núcleo que administra hardware, procesos, memoria, archivos y llamadas al sistema."],
  ["Shell", "Programa que interpreta comandos y permite componer herramientas."],
  ["Distribución", "Sistema Linux empaquetado con instalador, repositorios, configuración y comunidad."],
  ["Filesystem", "Estructura que organiza archivos, directorios, permisos y metadatos."],
  ["Inode", "Registro interno con metadatos de un archivo en muchos filesystems Unix."],
  ["Proceso", "Instancia de un programa en ejecución con PID, memoria y recursos."],
  ["Descriptor", "Referencia abierta a archivo, socket, pipe u otro recurso de entrada/salida."],
  ["Systemd", "Sistema de inicio y administración de servicios usado por muchas distribuciones."],
  ["Cgroup", "Mecanismo del kernel para limitar y medir recursos de grupos de procesos."],
  ["Namespace", "Aislamiento de vistas del sistema, base de contenedores modernos."],
  ["Syscall", "Entrada controlada desde user space hacia servicios del kernel."],
  ["VFS", "Capa virtual del kernel que unifica distintos filesystems."],
  ["Initramfs", "Sistema de archivos temporal usado durante el arranque temprano."],
  ["SELinux", "Control de acceso obligatorio para políticas de seguridad estrictas."],
  ["eBPF", "Tecnología para ejecutar programas verificados dentro del kernel con fines de observación, red y seguridad."]
];

glossary.push(
  ["UEFI", "Firmware moderno que inicializa hardware y carga el bootloader o el kernel."],
  ["Bootloader", "Programa inicial como GRUB o systemd-boot que prepara el arranque del kernel."],
  ["Init", "Primer proceso del sistema, normalmente PID 1, encargado de iniciar y supervisar servicios."],
  ["PID", "Identificador numérico de un proceso en ejecución."],
  ["PPID", "Identificador del proceso padre de otro proceso."],
  ["TTY", "Interfaz de terminal histórica o virtual usada para sesiones de texto."],
  ["PATH", "Variable de entorno que lista directorios donde la shell busca ejecutables."],
  ["Globbing", "Expansión de patrones como *.txt realizada por la shell."],
  ["Pipe", "Canal que conecta la salida de un proceso con la entrada de otro."],
  ["Redirección", "Cambio del destino de stdin, stdout o stderr hacia archivos u otros descriptores."],
  ["Exit code", "Número con el que un proceso indica éxito o error al terminar."],
  ["Signal", "Notificación enviada a un proceso, por ejemplo SIGTERM o SIGKILL."],
  ["Daemon", "Proceso de servicio que corre en segundo plano."],
  ["Unit", "Objeto de systemd que representa servicios, sockets, timers, mounts u otros recursos."],
  ["Timer", "Unidad de systemd para ejecutar tareas programadas."],
  ["Cron", "Planificador clásico de tareas periódicas."],
  ["PAM", "Sistema modular de autenticación usado por login, sudo, ssh y otros servicios."],
  ["NSS", "Capa que resuelve usuarios, grupos y nombres desde archivos, LDAP u otras fuentes."],
  ["ACL", "Lista de control de acceso para permisos más detallados que usuario/grupo/otros."],
  ["Capability", "Permiso fino del kernel que divide privilegios tradicionalmente asociados a root."],
  ["LUKS", "Formato común para cifrado de discos sobre dm-crypt."],
  ["GPG", "Herramienta de cifrado y firma basada en OpenPGP."],
  ["Firewall", "Conjunto de reglas que permite, bloquea o modifica tráfico de red."],
  ["nftables", "Framework moderno de filtrado de paquetes en Linux."],
  ["Socket", "Extremo de comunicación usado por procesos para red o IPC local."],
  ["TCP", "Protocolo confiable orientado a conexión."],
  ["UDP", "Protocolo de datagramas sin conexión, útil para baja latencia y consultas pequeñas."],
  ["MTU", "Tamaño máximo de paquete que puede cruzar una interfaz sin fragmentación."],
  ["ARP", "Protocolo que asocia direcciones IPv4 con direcciones MAC en una LAN."],
  ["VLAN", "Segmentación lógica de redes sobre infraestructura compartida."],
  ["TLS", "Capa criptográfica usada para HTTPS y otras comunicaciones seguras."],
  ["Reverse proxy", "Servidor frontal que recibe tráfico y lo reenvía a servicios internos."],
  ["CNI", "Interfaz de red para contenedores usada por Kubernetes."],
  ["CSI", "Interfaz de almacenamiento para Kubernetes."],
  ["KVM", "Virtualización acelerada por hardware dentro del kernel Linux."],
  ["QEMU", "Emulador y virtualizador usado para máquinas virtuales y laboratorios de kernel."],
  ["libvirt", "Capa de administración para virtualización, común con KVM/QEMU."],
  ["cloud-init", "Sistema que configura instancias cloud al primer arranque."],
  ["LVM", "Administrador de volúmenes lógicos para flexibilidad de almacenamiento."],
  ["RAID", "Técnica para combinar discos buscando rendimiento, redundancia o ambas."],
  ["Snapshot", "Copia puntual de un estado de datos o volumen."],
  ["Page cache", "Memoria usada por el kernel para acelerar lectura y escritura de archivos."],
  ["OOM killer", "Mecanismo que mata procesos cuando el sistema no puede recuperar memoria suficiente."],
  ["NUMA", "Arquitectura donde la latencia de memoria depende del nodo físico del CPU."],
  ["IOPS", "Operaciones de entrada/salida por segundo."],
  ["Sysfs", "Filesystem virtual en /sys que expone dispositivos y atributos del kernel."],
  ["Procfs", "Filesystem virtual en /proc con información de procesos y kernel."],
  ["Dentry", "Estructura del VFS que representa nombres de directorio y cachea búsquedas."],
  ["Superblock", "Estructura que describe un filesystem montado."],
  ["Page fault", "Evento que ocurre cuando una página de memoria requerida no está disponible inmediatamente."],
  ["Copy-on-write", "Técnica que comparte datos hasta que alguien intenta modificarlos."],
  ["Scheduler", "Parte del kernel que decide qué tarea corre en CPU."],
  ["Preemption", "Capacidad de interrumpir una tarea para ejecutar otra."],
  ["IRQ", "Interrupción de hardware que solicita atención del CPU."],
  ["DMA", "Acceso directo a memoria realizado por dispositivos sin copiar todo vía CPU."],
  ["NAPI", "Modelo de red Linux que combina interrupciones y polling para alto rendimiento."],
  ["sk_buff", "Estructura central que representa paquetes de red dentro del kernel."],
  ["XDP", "Ruta eBPF temprana para procesar paquetes en alto rendimiento."],
  ["Verifier", "Componente que valida programas eBPF antes de cargarlos."],
  ["Kconfig", "Sistema de opciones para configurar la compilación del kernel."],
  ["Initramfs", "Root filesystem temporal usado antes de montar el sistema real."],
  ["Oops", "Error serio del kernel del que a veces puede recuperarse."],
  ["Kernel panic", "Fallo crítico donde el kernel no puede continuar de forma segura."],
  ["Kdump", "Mecanismo para capturar memoria después de un crash del kernel."],
  ["Ftrace", "Infraestructura de trazado integrada en el kernel."],
  ["PREEMPT_RT", "Parche/configuración para mejorar comportamiento de tiempo real en Linux."],
  ["Buildroot", "Herramienta para construir sistemas Linux embebidos completos."],
  ["Yocto", "Proyecto para crear distribuciones Linux embebidas personalizadas."],
  ["Device tree", "Descripción de hardware usada especialmente en sistemas embebidos ARM."],
  ["SLO", "Objetivo medible de confiabilidad de un servicio."],
  ["Error budget", "Margen aceptable de fallos según un SLO."],
  ["Postmortem", "Análisis posterior a incidente para aprender sin culpar."]
);

const state = {
  active: Number(localStorage.getItem("linuxQuestActive") || 0),
  mode: localStorage.getItem("linuxQuestMode") || "kid",
  done: new Set(JSON.parse(localStorage.getItem("linuxQuestDone") || "[]")),
  history: []
};

const ranks = [
  [0, "Explorador"],
  [20, "Operador"],
  [45, "Administrador"],
  [70, "Ingeniero"],
  [90, "Kernelista"]
];

const fakeFs = {
  "~": ["notes.txt", "script.sh", "projects", "logs.txt"],
  "/": ["bin", "boot", "dev", "etc", "home", "proc", "usr", "var"],
  "/etc": ["fstab", "hosts", "ssh", "systemd"],
  "/proc": ["cpuinfo", "meminfo", "self", "sys"]
};

let cwd = "~";
let activeCommandBlog = "";
let activeCommandCategory = "Todos";
let activeStageFilter = "Todos";
let currentUser = null;
let studentProfile = null;
let syncTimer = null;
let loadingRemoteProgress = false;
let terminalHistoryIndex = null;
let activeView = "perfil";
let csrfToken = null;

const $ = (selector) => document.querySelector(selector);

const goalRoutes = [
  {
    title: "Linux básico",
    description: "Para empezar desde cero y moverte con confianza por archivos, terminal y ayuda.",
    stages: ["Fundamentos", "Base diaria"]
  },
  {
    title: "Administrar servidores",
    description: "Para operar paquetes, usuarios, discos, servicios, logs y red de forma práctica.",
    stages: ["Administración", "Servicios", "Operación", "Conectividad"]
  },
  {
    title: "Ciberseguridad",
    description: "Para practicar permisos, SSH, firewall, cifrado, auditoría y mínimos privilegios.",
    stages: ["Defensa", "Conectividad", "Administración"]
  },
  {
    title: "DevOps y plataforma",
    description: "Para trabajar con contenedores, Kubernetes, cloud, automatización y observabilidad.",
    stages: ["Plataforma", "Poder de shell", "Operación", "Desarrollo"]
  }
];

const commandKnowledge = {
  apt: ["Paquetes", "Instala, busca y actualiza software en Debian, Ubuntu y derivadas.", "Nunca ejecutes instalaciones en producción sin revisar repositorios, dependencias y cambios propuestos."],
  awk: ["Texto", "Procesa texto por registros y campos; es excelente para reportes rápidos.", "Empieza imprimiendo columnas antes de hacer cambios complejos."],
  bash: ["Shell", "Ejecuta scripts y sesiones de shell Bash.", "Usa shellcheck y manejo estricto de errores cuando automatices tareas reales."],
  bpftrace: ["Kernel", "Crea trazas eBPF de alto nivel para observar kernel y procesos.", "Úsalo primero en laboratorios; una mala traza puede generar mucha carga."],
  bpftool: ["Kernel", "Inspecciona programas, mapas y enlaces eBPF cargados.", "Requiere privilegios en muchos sistemas."],
  btrfs: ["Almacenamiento", "Administra funciones específicas de Btrfs como subvolúmenes y snapshots.", "No confundas snapshot con backup externo."],
  busybox: ["Embebido", "Agrupa muchas utilidades Unix pequeñas en un solo binario.", "Es común en initramfs, routers y sistemas mínimos."],
  cat: ["Archivos", "Muestra o concatena archivos.", "Para archivos grandes usa less, tail o grep."],
  cd: ["Navegación", "Cambia el directorio actual de la shell.", "Recuerda que cd sin argumentos vuelve a tu HOME."],
  chmod: ["Permisos", "Cambia permisos de lectura, escritura y ejecución.", "Evita chmod 777 salvo en laboratorios; suele esconder un problema de diseño."],
  chroot: ["Aislamiento", "Cambia la raíz visible para un proceso.", "No es una frontera de seguridad completa por sí solo."],
  chrt: ["Procesos", "Consulta o cambia políticas de scheduling en tiempo real.", "Las prioridades RT mal usadas pueden congelar un sistema."],
  cloud_init: ["Cloud", "Configura instancias cloud al primer arranque.", "Diseña user-data idempotente para que repetirlo no rompa nada."],
  conntrack: ["Red", "Inspecciona conexiones rastreadas por netfilter.", "Útil cuando NAT o firewall parecen comportarse raro."],
  crictl: ["Contenedores", "Inspecciona runtimes CRI usados por Kubernetes.", "Mira pods y logs del runtime cuando kubectl no basta."],
  crontab: ["Automatización", "Edita o lista tareas periódicas de cron.", "Define rutas absolutas porque cron tiene entorno mínimo."],
  curl: ["Red", "Hace peticiones HTTP y otros protocolos desde terminal.", "Usa -I para cabeceras y -v para depurar conexión."],
  cyclictest: ["Tiempo real", "Mide latencias para validar sistemas realtime.", "Cierra carga innecesaria si quieres mediciones serias."],
  date: ["Sistema", "Muestra o configura fecha y hora.", "En servidores prefiere sincronización con NTP/chrony."],
  df: ["Almacenamiento", "Muestra uso de espacio por filesystem.", "df dice espacio montado; du explica consumo por directorios."],
  dig: ["DNS", "Consulta registros DNS con detalle.", "Es más preciso para diagnóstico que solo ping."],
  dmesg: ["Kernel", "Lee mensajes del kernel ring buffer.", "Busca errores de hardware, drivers, OOM y arranque."],
  docker: ["Contenedores", "Administra imágenes y contenedores con Docker.", "No metas secretos en imágenes; usa variables o gestores de secretos."],
  dnf: ["Paquetes", "Gestiona paquetes en Fedora, RHEL y derivadas modernas.", "Revisa transacciones antes de confirmar cambios grandes."],
  dtc: ["Embebido", "Compila o descompila device trees.", "Un device tree incorrecto puede impedir que el hardware aparezca."],
  echo: ["Shell", "Imprime texto o variables.", "Para formatos portables usa printf."],
  efibootmgr: ["Arranque", "Administra entradas de arranque UEFI.", "Toca UEFI con cuidado: un cambio malo puede ocultar el sistema del menú de arranque."],
  env: ["Entorno", "Muestra o ejecuta comandos con variables de entorno.", "Sirve para reproducir diferencias entre terminal, cron y systemd."],
  ethtool: ["Red", "Inspecciona y ajusta parámetros de interfaces Ethernet.", "Útil para velocidad, duplex, offloads y errores de NIC."],
  file: ["Archivos", "Identifica tipo de archivo por contenido.", "No dependas solo de extensiones."],
  find: ["Búsqueda", "Busca archivos por nombre, tipo, fecha, tamaño o permisos.", "Prueba primero sin -delete ni -exec destructivo."],
  findmnt: ["Almacenamiento", "Muestra árbol de montajes.", "Más claro que parsear mount a mano."],
  free: ["Memoria", "Resume memoria, swap y caché.", "Memoria usada por caché no significa memoria perdida."],
  gcc: ["Desarrollo", "Compila programas C/C++ y otros lenguajes soportados.", "Agrega -Wall -Wextra para aprender de advertencias."],
  gdb: ["Desarrollo", "Depura programas nativos.", "Compila con -g para tener símbolos útiles."],
  getcap: ["Seguridad", "Muestra capabilities asignadas a archivos.", "Capabilities reducen necesidad de setuid root."],
  getenforce: ["Seguridad", "Muestra modo de SELinux.", "No desactives SELinux sin entender la denegación."],
  getent: ["Usuarios", "Consulta bases NSS como passwd, group o hosts.", "Mejor que leer /etc/passwd cuando hay LDAP u otras fuentes."],
  getfacl: ["Permisos", "Muestra ACLs de archivos.", "Útil cuando permisos rwx no explican el acceso real."],
  git: ["Desarrollo", "Gestiona historial de código.", "Commits pequeños y mensajes claros facilitan revisión."],
  grep: ["Texto", "Busca patrones dentro de texto.", "Aprende -R, -n, -E, -i y --exclude para uso diario."],
  groups: ["Usuarios", "Lista grupos del usuario actual.", "Cierra y abre sesión si acabas de cambiar grupos."],
  grub_mkconfig: ["Arranque", "Genera configuración de GRUB.", "Verifica rutas de kernel e initramfs antes de reiniciar."],
  history: ["Shell", "Muestra comandos ejecutados en la sesión.", "No pegues secretos en terminal; pueden quedar en historial."],
  id: ["Usuarios", "Muestra UID, GID y grupos.", "Es rápido para verificar permisos efectivos."],
  ip: ["Red", "Administra direcciones, rutas, interfaces y vecinos.", "Sustituye herramientas antiguas como ifconfig y route."],
  iostat: ["Rendimiento", "Mide actividad y latencia de dispositivos de bloque.", "Mira await, util y colas para detectar saturación."],
  iotop: ["Rendimiento", "Muestra procesos que consumen I/O.", "Puede requerir privilegios."],
  journalctl: ["Logs", "Consulta logs de systemd-journald.", "Filtra por unidad, boot y ventana de tiempo."],
  kubectl: ["Kubernetes", "Controla recursos Kubernetes.", "describe y logs suelen explicar más que get."],
  ldd: ["Desarrollo", "Lista bibliotecas compartidas de un binario.", "No ejecutes ldd sobre binarios no confiables en sistemas sensibles."],
  loginctl: ["Sesiones", "Consulta sesiones y usuarios gestionados por systemd-logind.", "Útil para diagnosticar sesiones gráficas o remotas."],
  logrotate: ["Logs", "Rota y comprime logs antiguos.", "Prueba configuraciones con -d antes de aplicarlas."],
  ls: ["Archivos", "Lista archivos y directorios.", "Usa ls -la para ver ocultos y permisos."],
  lsattr: ["Archivos", "Muestra atributos extendidos tipo immutable.", "Si root no puede editar un archivo, revisa chattr +i."],
  lsblk: ["Almacenamiento", "Lista discos, particiones y puntos de montaje.", "Primera parada antes de tocar particiones."],
  lsof: ["Procesos", "Lista archivos abiertos por procesos.", "Excelente para descubrir quién usa un puerto o archivo."],
  lspci: ["Hardware", "Lista dispositivos PCI.", "Útil para GPUs, NICs, controladoras y drivers."],
  lsusb: ["Hardware", "Lista dispositivos USB.", "Combínalo con dmesg al conectar hardware."],
  mailq: ["Correo", "Muestra cola de correo.", "Ayuda a diagnosticar entregas bloqueadas."],
  make: ["Desarrollo", "Ejecuta recetas de compilación o automatización.", "Lee objetivos disponibles antes de ejecutar instalaciones."],
  man: ["Ayuda", "Abre páginas de manual.", "Aprende las secciones: man 1 comandos, man 2 syscalls, man 5 archivos."],
  mkdir: ["Archivos", "Crea directorios.", "Usa -p para crear rutas intermedias."],
  modinfo: ["Kernel", "Muestra información de módulos del kernel.", "Revisa parámetros y dependencias antes de cargar módulos."],
  modprobe: ["Kernel", "Carga módulos resolviendo dependencias.", "Prefiere modprobe sobre insmod para uso normal."],
  mount: ["Almacenamiento", "Monta filesystems en el árbol de rutas.", "Monta pruebas en directorios claros y desmonta al terminar."],
  mpstat: ["Rendimiento", "Muestra uso de CPU por procesador.", "Distingue saturación global de un core específico."],
  mtr: ["Red", "Combina ping y traceroute continuamente.", "Útil para pérdida intermitente por salto."],
  nano: ["Editor", "Editor de texto sencillo en terminal.", "Bueno para cambios rápidos de configuración."],
  nft: ["Firewall", "Administra reglas nftables.", "Guarda reglas y prueba acceso antes de cerrar tu sesión SSH."],
  nginx: ["Servicios", "Servidor web y reverse proxy.", "Corre nginx -t antes de reload."],
  pacman: ["Paquetes", "Gestiona paquetes en Arch Linux y derivadas.", "Lee noticias de Arch antes de actualizaciones grandes."],
  pass: ["Secretos", "Gestor de contraseñas basado en GPG.", "Mantén segura tu clave privada."],
  perf: ["Rendimiento", "Analiza rendimiento con contadores y muestras.", "Necesita símbolos para perfiles fáciles de leer."],
  pgrep: ["Procesos", "Busca procesos por nombre.", "Más seguro que ps | grep para scripts."],
  pidstat: ["Rendimiento", "Mide CPU, memoria e I/O por proceso.", "Útil para correlacionar lentitud con un PID."],
  ping: ["Red", "Prueba alcance básico usando ICMP.", "Que ping falle no siempre significa que el servicio falle; ICMP puede estar bloqueado."],
  pmap: ["Memoria", "Muestra mapa de memoria de procesos.", "Útil al investigar uso de memoria."],
  podman: ["Contenedores", "Administra contenedores e imágenes sin daemon central.", "Puede correr rootless, una ventaja de seguridad."],
  postconf: ["Correo", "Muestra configuración de Postfix.", "postconf -n enseña solo valores no predeterminados."],
  printf: ["Shell", "Imprime texto con formato.", "Más predecible que echo para scripts."],
  ps: ["Procesos", "Lista procesos.", "Aprende ps aux y ps -ef, pero filtra con pgrep cuando puedas."],
  psql: ["Bases de datos", "Cliente de PostgreSQL.", "No pegues credenciales en comandos; usa archivos seguros o variables protegidas."],
  pwd: ["Navegación", "Muestra el directorio actual.", "Útil antes de ejecutar comandos que dependen de rutas relativas."],
  python3: ["Desarrollo", "Ejecuta Python 3.", "Usa entornos virtuales por proyecto."],
  qemu: ["Virtualización", "Emula o virtualiza máquinas.", "Ideal para probar kernels y sistemas sin tocar tu equipo principal."],
  qemu_img: ["Virtualización", "Crea e inspecciona imágenes de disco.", "qcow2 permite snapshots y discos dispersos."],
  readelf: ["Desarrollo", "Inspecciona estructuras ELF.", "Útil para ABI, símbolos y cabeceras."],
  resolvectl: ["DNS", "Consulta resolución DNS en sistemas con systemd-resolved.", "Muestra DNS por interfaz."],
  restic: ["Backups", "Realiza backups cifrados y deduplicados.", "Prueba restauraciones, no solo snapshots."],
  rmmod: ["Kernel", "Descarga módulos del kernel.", "No descargues módulos en uso."],
  rsync: ["Backups", "Sincroniza archivos eficientemente.", "Una barra final cambia el significado de origen; pruébalo con --dry-run."],
  scp: ["Red", "Copia archivos por SSH.", "Para sincronización repetida, rsync suele ser mejor."],
  sed: ["Texto", "Edita flujos de texto.", "Primero imprime la transformación antes de usar -i."],
  setfacl: ["Permisos", "Configura ACLs.", "Documenta ACLs porque no siempre se ven con ls -l."],
  sha256sum: ["Integridad", "Calcula hash SHA-256.", "Compara checksums desde fuentes confiables."],
  ssh: ["Red", "Abre sesiones remotas cifradas.", "Usa claves, known_hosts y config por host."],
  ssh_keygen: ["Seguridad", "Crea y administra claves SSH.", "Protege claves privadas con passphrase."],
  ss: ["Red", "Lista sockets y puertos.", "Reemplaza netstat en sistemas modernos."],
  stat: ["Archivos", "Muestra metadatos detallados de archivos.", "Útil para inodos, tiempos y permisos exactos."],
  strace: ["Debug", "Traza llamadas al sistema.", "Excelente para ver permisos, archivos faltantes y bloqueos."],
  sudo: ["Privilegios", "Ejecuta comandos con privilegios delegados.", "No uses sudo por costumbre; entiende qué permiso falta."],
  sysctl: ["Kernel", "Lee o ajusta parámetros del kernel.", "Haz cambios persistentes en archivos dedicados, no solo en vivo."],
  systemctl: ["Servicios", "Administra unidades systemd.", "status, cat y journalctl -u juntos dan mucho contexto."],
  tail: ["Texto", "Muestra el final de archivos.", "tail -f sirve para seguir logs en vivo."],
  tar: ["Archivos", "Empaqueta y extrae archivos.", "Lista con -tf antes de extraer archivos desconocidos."],
  taskset: ["Procesos", "Ajusta afinidad de CPU.", "Útil para pruebas, no como arreglo permanente sin medir."],
  tcpdump: ["Red", "Captura paquetes.", "Filtra bien para no generar archivos enormes ni exponer datos sensibles."],
  test: ["Shell", "Evalúa condiciones en scripts.", "Cuida comillas alrededor de variables."],
  top: ["Procesos", "Muestra procesos y recursos en tiempo real.", "htop puede ser más cómodo, pero top está casi siempre disponible."],
  tracepath: ["Red", "Traza ruta y MTU hacia un destino.", "Útil para problemas de fragmentación."],
  uname: ["Sistema", "Muestra información del kernel y arquitectura.", "uname -a es útil en reportes de soporte."],
  unshare: ["Aislamiento", "Crea namespaces para procesos.", "Herramienta excelente para aprender bases de contenedores."],
  unzip: ["Archivos", "Extrae archivos zip.", "Lista contenido antes si no confías en el origen."],
  uptime: ["Sistema", "Muestra tiempo encendido y load average.", "Load alto requiere contexto de CPU e I/O."],
  useradd: ["Usuarios", "Crea usuarios.", "En distros amigables adduser puede aplicar políticas más completas."],
  vim: ["Editor", "Editor modal potente.", "Aprende i, Esc, :w, :q y /buscar primero."],
  virsh: ["Virtualización", "Administra máquinas virtuales libvirt.", "Muy útil en servidores sin interfaz gráfica."],
  vmstat: ["Rendimiento", "Muestra memoria, CPU, swap e I/O en intervalos.", "Mira columnas wa, si y so para pistas de presión."],
  whoami: ["Usuarios", "Muestra el usuario efectivo actual.", "Rápido para confirmar contexto antes de tocar archivos."]
};

function commandKey(command) {
  return command
    .trim()
    .split(/\s+/)[0]
    .replace(/-/g, "_")
    .replace(/[^a-zA-Z0-9_]/g, "")
    .toLowerCase();
}

function commandBase(command) {
  const first = command.trim().split(/\s+/)[0];
  return first || command;
}

function articleForCommand(command) {
  const base = commandBase(command);
  const info = commandKnowledge[commandKey(command)] || ["Linux", `Comando relacionado con ${base}; estudia su página de manual y pruébalo primero en un entorno seguro.`, "Lee siempre la salida antes de encadenarlo con otros comandos."];
  const moduleHits = modules
    .filter((module) => module.commands.includes(command))
    .map((module) => module.title);

  return {
    command,
    base,
    category: info[0],
    summary: info[1],
    caution: info[2],
    modules: moduleHits,
    examples: [
      command,
      `${base} --help`,
      `man ${base}`
    ],
    challenge: `Ejecuta o simula "${command}", explica cada parte del comando y escribe una variante segura para otro caso.`
  };
}

const commandBlogs = [...new Set(modules.flatMap((module) => module.commands))]
  .sort((a, b) => commandBase(a).localeCompare(commandBase(b)) || a.localeCompare(b))
  .map(articleForCommand);

activeCommandBlog = commandBlogs[0]?.command || "";

async function csrfHeader(method = "GET") {
  if (!["POST", "PUT", "PATCH", "DELETE"].includes(method.toUpperCase())) return {};
  if (!csrfToken) {
    const response = await fetch("/api/csrf", { credentials: "same-origin" });
    const data = await response.json().catch(() => ({}));
    if (!response.ok || !data.csrfToken) throw new Error(data.error || "No se pudo preparar la sesión segura");
    csrfToken = data.csrfToken;
  }
  return { "X-CSRF-Token": csrfToken };
}

async function apiRequest(path, options = {}) {
  const method = options.method || "GET";
  const { headers = {}, ...requestOptions } = options;
  const response = await fetch(path, {
    ...requestOptions,
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      ...(await csrfHeader(method)),
      ...headers
    }
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data.error || "Error de servidor");
  return data;
}

function progressPayload() {
  return {
    active: state.active,
    mode: state.mode,
    done: [...state.done]
  };
}

function setAuthFeedback(message, isError = false) {
  const feedback = $("#authFeedback");
  if (!feedback) return;
  feedback.textContent = message;
  feedback.style.color = isError ? "var(--coral)" : "var(--green-dark)";
}

function openAuthModal() {
  $("#authModal").classList.remove("hidden");
  const firstInput = $("#authModal input");
  if (firstInput) firstInput.focus();
}

function closeAuthModal() {
  $("#authModal").classList.add("hidden");
}

function showView(view) {
  activeView = view;
  document.querySelectorAll("[data-view]").forEach((section) => {
    section.classList.toggle("active", section.dataset.view === view);
  });
  document.querySelectorAll("[data-view-target]").forEach((button) => {
    button.classList.toggle("active", button.dataset.viewTarget === view);
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderAuth() {
  const forms = $("#authForms");
  const actions = $("#authActions");
  const status = $("#authStatus");
  const accountButton = $("#accountButton");
  if (!forms || !actions || !status) return;
  forms.classList.toggle("hidden", Boolean(currentUser));
  actions.classList.toggle("hidden", !currentUser);
  status.textContent = currentUser
    ? `Sesión activa: ${currentUser.name}. Tu avance se guarda en tu cuenta.`
    : "Sin sesión: tu avance se guarda solo en este navegador.";
  if (accountButton) {
    accountButton.textContent = currentUser ? currentUser.name : "Entrar";
    accountButton.title = currentUser ? "Ver perfil" : "Iniciar sesión";
  }
  const topLogoutButton = $("#topLogoutButton");
  if (topLogoutButton) topLogoutButton.classList.toggle("hidden", !currentUser);
  // Sidebar: indicador de sesión
  const sidenavDot = document.querySelector(".sidenav-session-dot");
  const sidenavLabel = $("#sidenavSessionLabel");
  if (sidenavDot) sidenavDot.classList.toggle("online", Boolean(currentUser));
  if (sidenavLabel) {
    sidenavLabel.textContent = currentUser
      ? currentUser.name
      : "Sin sesión";
  }
  renderProfile();
}

async function logoutCurrentUser({ showModal = true } = {}) {
  try {
    await syncProgressNow();
    await apiRequest("/api/logout", { method: "POST", body: "{}" });
  } catch (error) {
    setAuthFeedback(error.message, true);
  } finally {
    currentUser = null;
    studentProfile = null;
    renderAuth();
    if (showModal) openAuthModal();
    setAuthFeedback("Sesión cerrada. El progreso queda guardado localmente.");
  }
}

function renderProfile() {
  const panel = $("#profilePanel");
  if (!panel) return;
  panel.classList.toggle("hidden", !currentUser);
  if (!currentUser) return;
  const profile = studentProfile || {
    display_name: currentUser.name,
    role: "Estudiante",
    level: "Inicial",
    goal: "",
    bio: ""
  };
  const percent = Math.round((state.done.size / modules.length) * 100);
  const rank = ranks.reduce((current, candidate) => percent >= candidate[0] ? candidate : current, ranks[0])[1];
  $("#profileName").textContent = profile.display_name || currentUser.name;
  $("#profileMeta").textContent = `${profile.role || "Estudiante"} · ${profile.level || "Inicial"}${profile.goal ? ` · Meta: ${profile.goal}` : ""}`;
  $("#profileProgress").textContent = `${percent}%`;
  $("#profileCompleted").textContent = String(state.done.size);
  $("#profileRank").textContent = rank;
  const form = $("#profileForm");
  form.elements.displayName.value = profile.display_name || currentUser.name;
  form.elements.role.value = profile.role || "Estudiante";
  form.elements.level.value = profile.level || "Inicial";
  form.elements.goal.value = profile.goal || "";
  form.elements.bio.value = profile.bio || "";
}

function moduleIndexesForStages(stages) {
  return modules
    .map((item, index) => ({ ...item, index }))
    .filter((item) => stages.includes(item.stage))
    .map((item) => item.index);
}

function recommendedIndexes() {
  const goal = `${studentProfile?.goal || ""} ${studentProfile?.role || ""}`.toLowerCase();
  if (goal.includes("seguridad") || goal.includes("ciber")) {
    return moduleIndexesForStages(["Defensa", "Conectividad", "Administración"]);
  }
  if (goal.includes("servidor") || goal.includes("admin")) {
    return moduleIndexesForStages(["Administración", "Servicios", "Operación", "Conectividad"]);
  }
  if (goal.includes("devops") || goal.includes("kubernetes") || goal.includes("contenedor")) {
    return moduleIndexesForStages(["Plataforma", "Poder de shell", "Operación", "Desarrollo"]);
  }
  if (goal.includes("kernel")) {
    return moduleIndexesForStages(["Avanzado", "Experto", "Desarrollo"]);
  }
  return moduleIndexesForStages(["Fundamentos", "Base diaria", "Poder de shell"]);
}

function nextRecommendedIndex() {
  const route = recommendedIndexes();
  return route.find((index) => !state.done.has(index))
    ?? [...Array(modules.length).keys()].find((index) => !state.done.has(index))
    ?? Math.min(state.active, modules.length - 1);
}

function achievements() {
  const doneStages = new Set([...state.done].map((index) => modules[index]?.stage).filter(Boolean));
  return [
    ["Primer paso", state.done.size >= 1],
    ["Base diaria", doneStages.has("Base diaria")],
    ["Shell activo", doneStages.has("Poder de shell")],
    ["Redes", doneStages.has("Conectividad")],
    ["Defensa", doneStages.has("Defensa")],
    ["Mitad de ruta", state.done.size >= Math.ceil(modules.length / 2)]
  ];
}

function strongestAndPendingStages() {
  const groups = modules.reduce((acc, item, index) => {
    acc[item.stage] = acc[item.stage] || { total: 0, done: 0 };
    acc[item.stage].total += 1;
    if (state.done.has(index)) acc[item.stage].done += 1;
    return acc;
  }, {});
  const rows = Object.entries(groups).map(([stage, value]) => ({
    stage,
    percent: value.done / value.total
  }));
  const strongest = rows.filter((row) => row.percent > 0).sort((a, b) => b.percent - a.percent)[0];
  const pending = rows.filter((row) => row.percent < 1).sort((a, b) => a.percent - b.percent)[0];
  return { strongest, pending };
}

function renderLearningDashboard() {
  const nextIndex = nextRecommendedIndex();
  const next = modules[nextIndex] || modules[0];
  const { strongest, pending } = strongestAndPendingStages();
  $("#nextStepTitle").textContent = next.title;
  $("#nextStepDetail").textContent = `Siguiente módulo recomendado en ${next.stage}: ${next.mission}`;
  $("#studentInsightTitle").textContent = pending ? `Refuerza ${pending.stage}` : "Ruta completada";
  $("#studentInsightText").textContent = strongest
    ? `Área más fuerte: ${strongest.stage}. Área pendiente sugerida: ${pending?.stage || "ninguna"}.`
    : "Empieza por Fundamentos y marca módulos listos para construir tu diagnóstico.";
  $("#achievementList").innerHTML = `<div class="achievement-list">${achievements().map(([name, done]) => `
    <div class="achievement ${done ? "done" : ""}">
      <span class="badge-mark">${done ? "✓" : "·"}</span>
      <span><strong>${escapeHtml(name)}</strong>${done ? "Conseguido" : "Pendiente"}</span>
    </div>
  `).join("")}</div>`;
}

function renderEvaluatedPractice() {
  const item = modules[state.active];
  const command = item.commands[0] || "ls";
  $("#practicePrompt").textContent = `Escribe un comando válido para: ${item.title}`;
  $("#practiceInput").value = "";
  $("#practiceInput").dataset.expectedCommand = commandBase(command);
  $("#practiceFeedback").textContent = `Pista: piensa en un comando clave de este módulo.`;
}

async function loadStudentProfile() {
  if (!currentUser) return;
  const data = await apiRequest("/api/profile");
  studentProfile = data.profile;
  renderProfile();
}

async function syncProgressNow() {
  if (!currentUser || loadingRemoteProgress) return;
  await apiRequest("/api/progress", {
    method: "PUT",
    body: JSON.stringify(progressPayload())
  });
  setAuthFeedback("Avance guardado.");
}

function queueProgressSync() {
  if (!currentUser || loadingRemoteProgress) return;
  clearTimeout(syncTimer);
  syncTimer = setTimeout(() => {
    syncProgressNow().catch((error) => setAuthFeedback(error.message, true));
  }, 500);
}

async function loadRemoteProgress() {
  if (!currentUser) return;
  loadingRemoteProgress = true;
  try {
    const progress = await apiRequest("/api/progress");
    state.active = Math.min(Math.max(Number(progress.active || 0), 0), modules.length - 1);
    state.mode = progress.mode === "pro" ? "pro" : "kid";
    state.done = new Set((progress.done || []).map(Number).filter((index) => index >= 0 && index < modules.length));
    document.querySelectorAll("[data-mode]").forEach((button) => {
      button.classList.toggle("active", button.dataset.mode === state.mode);
    });
    renderLesson();
    renderProfile();
    setAuthFeedback("Avance cargado.");
  } finally {
    loadingRemoteProgress = false;
  }
}

async function initAuth() {
  try {
    const data = await apiRequest("/api/me");
    currentUser = data.user;
    renderAuth();
    if (currentUser) {
      await loadStudentProfile();
      await loadRemoteProgress();
    }
  } catch {
    currentUser = null;
    renderAuth();
  }
}

const categoryDescriptions = {
  Administración: "Tareas de mantenimiento del sistema, servicios, paquetes y configuración.",
  Aislamiento: "Comandos para separar procesos, raíces de archivos o entornos de ejecución.",
  Almacenamiento: "Discos, particiones, montaje y capacidad disponible.",
  Archivos: "Creación, lectura, copia, movimiento, compresión y metadatos.",
  Arranque: "Inicio del sistema, bootloader, kernel e initramfs.",
  Ayuda: "Manuales y documentación integrada para aprender sin depender de memoria.",
  Backups: "Copias, sincronización, restauración y verificación de datos.",
  "Bases de datos": "Herramientas para operar motores de datos desde Linux.",
  Contenedores: "Imágenes, runtimes y operación de apps aisladas.",
  Correo: "Diagnóstico y administración de servicios de email.",
  Defensa: "Seguridad, auditoría, cifrado, firewall y reducción de riesgo.",
  Desarrollo: "Compilación, depuración, Git, lenguajes y bibliotecas.",
  DNS: "Resolución de nombres y registros de dominio.",
  Editor: "Edición de texto y configuración desde terminal.",
  Embebido: "Sistemas mínimos, imágenes pequeñas y Linux para dispositivos.",
  Firewall: "Reglas de tráfico, NAT y filtrado de red.",
  Hardware: "Inspección de dispositivos y capacidades físicas.",
  Integridad: "Verificación de archivos mediante hashes o firmas.",
  Kernel: "Parámetros, módulos, trazas y datos internos del núcleo.",
  Kubernetes: "Operación de clusters y nodos desde herramientas Linux.",
  Linux: "Comandos generales que conviene estudiar desde su manual.",
  Logs: "Registro de eventos, errores y auditoría operativa.",
  Memoria: "Uso de RAM, swap y presión de memoria.",
  Navegación: "Moverse por directorios y confirmar la ubicación actual.",
  Paquetes: "Instalación, actualización y eliminación de software.",
  Permisos: "Reglas de lectura, escritura, ejecución, ACLs y propietarios.",
  Privilegios: "Ejecución controlada de acciones administrativas.",
  Procesos: "Programas en ejecución, señales, prioridad y recursos.",
  Red: "Conectividad, sockets, rutas, puertos y tráfico.",
  Rendimiento: "Medición de CPU, memoria, disco y cuellos de botella.",
  Secretos: "Claves, contraseñas y material sensible.",
  Seguridad: "Accesos seguros, claves y prácticas de protección.",
  Servicios: "Unidades, servidores y procesos persistentes.",
  Sesiones: "Usuarios conectados, login y entorno gráfico o remoto.",
  Shell: "Intérprete, variables, historial, expansión y scripting.",
  Sistema: "Información general del sistema y estado global.",
  Texto: "Filtros, búsquedas, transformaciones y pipelines.",
  Usuarios: "Identidad, grupos, cuentas y autenticación.",
  Virtualización: "Máquinas virtuales, hipervisores e imágenes."
};

function categoryDescription(category) {
  return categoryDescriptions[category] || "Comandos de esta familia funcional dentro de Linux.";
}

function categoryCounts() {
  return commandBlogs.reduce((acc, article) => {
    acc[article.category] = (acc[article.category] || 0) + 1;
    return acc;
  }, {});
}

function saveState() {
  localStorage.setItem("linuxQuestActive", String(state.active));
  localStorage.setItem("linuxQuestMode", state.mode);
  localStorage.setItem("linuxQuestDone", JSON.stringify([...state.done]));
  queueProgressSync();
}

function renderModules() {
  const list = $("#moduleList");
  const rows = modules
    .map((item, index) => ({ ...item, index }))
    .filter((item) => activeStageFilter === "Todos" || item.stage === activeStageFilter);
  list.innerHTML = rows.map((item) => `
    <button class="module-button ${item.index === state.active ? "active" : ""}" type="button" data-index="${item.index}">
      <span class="module-index">${String(item.index + 1).padStart(2, "0")}</span>
      <span>
        <span class="module-name">${escapeHtml(item.title)}</span>
        <span class="module-level">${escapeHtml(item.stage)}</span>
      </span>
      <span class="check">${state.done.has(item.index) ? "✓" : ""}</span>
    </button>
  `).join("") || `<p class="quiz-feedback">No hay módulos en este nivel.</p>`;
}

function renderStageFilter() {
  const stages = [...new Set(modules.map((item) => item.stage))];
  $("#stageFilter").innerHTML = ["Todos", ...stages].map((stage) => `
    <button class="${stage === activeStageFilter ? "active" : ""}" type="button" data-stage-filter="${escapeHtml(stage)}">
      ${escapeHtml(stage)}
    </button>
  `).join("");
}

function guidedStepsForModule(item) {
  const commands = item.commands.slice(0, 3);
  return [
    `Lee la idea central y escribe con tus palabras qué problema resuelve: ${item.title}.`,
    ...commands.map((command) => `Ejecuta ${command} en la terminal simulada y observa la salida.`),
    `Compara los comandos clave con la misión práctica y decide cuál usarías primero en un sistema real.`
  ];
}

function renderLesson() {
  const item = modules[state.active];
  $("#moduleStage").textContent = item.stage;
  $("#moduleTitle").textContent = item.title;
  $("#moduleIntro").textContent = item[state.mode];
  $("#moduleMission").textContent = item.mission;
  $("#moduleTopics").innerHTML = item.topics.map((topic) => `<li>${escapeHtml(topic)}</li>`).join("");
  $("#moduleCommands").innerHTML = item.commands.map((command) => `<button type="button" data-command="${escapeHtml(command)}">${escapeHtml(command)}</button>`).join("");
  $("#guidedSteps").innerHTML = guidedStepsForModule(item).map((step) => {
    const command = item.commands.find((candidate) => step.includes(candidate));
    return `<li class="guided-step">${escapeHtml(step)}${command ? ` <button type="button" data-command="${escapeHtml(command)}">Probar</button>` : ""}</li>`;
  }).join("");
  renderEvaluatedPractice();
  $("#quizQuestion").textContent = item.quiz.question;
  $("#quizOptions").innerHTML = item.quiz.options.map((option, index) => (
    `<button class="quiz-option" type="button" data-answer="${index}">${escapeHtml(option)}</button>`
  )).join("");
  $("#quizFeedback").textContent = "";
  $("#completeModule").classList.toggle("done", state.done.has(state.active));
  $("#completeModule").textContent = state.done.has(state.active) ? "Listo" : "Marcar listo";
  renderModules();
  renderStageFilter();
  renderProgress();
  renderMap();
  renderGoalRoutes();
  renderProfile();
  renderLearningDashboard();
  saveState();
}

function renderProgress() {
  const percent = Math.round((state.done.size / modules.length) * 100);
  const rank = ranks.reduce((current, candidate) => percent >= candidate[0] ? candidate : current, ranks[0]);
  $("#progressPercent").textContent = `${percent}%`;
  $("#progressBar").style.width = `${percent}%`;
  $("#completedCount").textContent = `${state.done.size} / ${modules.length}`;
  $("#currentRank").textContent = rank[1];
  renderLearningDashboard();
}

function renderGlossary(filter = "") {
  const needle = filter.trim().toLowerCase();
  const rows = glossary.filter(([term, definition]) => (
    term.toLowerCase().includes(needle) || definition.toLowerCase().includes(needle)
  ));
  $("#glossaryList").innerHTML = rows.map(([term, definition]) => `
    <article class="term">
      <strong>${escapeHtml(term)}</strong>
      <p>${escapeHtml(definition)}</p>
    </article>
  `).join("");
}

function renderMap() {
  const stageDescriptions = {
    Fundamentos: "Conceptos mínimos para ubicarse: sistema, terminal, ayuda, escritorio e instalación.",
    "Base diaria": "Trabajo cotidiano con archivos, rutas, permisos, editores, búsqueda y compresión.",
    "Sistema vivo": "Procesos, señales y cómo observar programas en ejecución.",
    Administración: "Paquetes, usuarios, almacenamiento y servicios que mantienen un sistema usable.",
    "Poder de shell": "Pipelines, redirecciones, variables, regex, awk y sed para automatizar texto.",
    Conectividad: "IP, DNS, SSH, puertos, rutas y diagnóstico de red.",
    Servicios: "Servidores web, bases de datos, DNS y correo sobre Linux.",
    Defensa: "Backups, firewall, cifrado, permisos reforzados y seguridad del sistema.",
    Plataforma: "Contenedores, virtualización, cloud y Kubernetes.",
    Operación: "Logs, observabilidad y rendimiento de CPU, memoria, disco y red.",
    Desarrollo: "Git, toolchains, compilación, depuración y automatización con lenguajes.",
    Avanzado: "Interior del kernel: syscalls, módulos, VFS, scheduler y memoria.",
    Experto: "Laboratorios de kernel, QEMU, compilación y depuración avanzada."
  };

  const groups = modules.reduce((acc, item, index) => {
    acc[item.stage] = acc[item.stage] || [];
    acc[item.stage].push({ ...item, index });
    return acc;
  }, {});

  const completedAreas = Object.values(groups).filter((items) => items.every((item) => state.done.has(item.index))).length;
  const activeStage = modules[state.active]?.stage || "";

  $("#knowledgeMap").innerHTML = `
    <div class="map-overview" aria-label="Resumen del mapa">
      <div class="map-stat">
        <span>Áreas</span>
        <strong>${Object.keys(groups).length}</strong>
      </div>
      <div class="map-stat">
        <span>Módulos</span>
        <strong>${modules.length}</strong>
      </div>
      <div class="map-stat">
        <span>Áreas completas</span>
        <strong>${completedAreas}</strong>
      </div>
    </div>
    ${Object.entries(groups).map(([stage, items]) => {
      const completed = items.filter((item) => state.done.has(item.index)).length;
      const percent = Math.round((completed / items.length) * 100);
      const status = percent === 100 ? "Completado" : percent > 0 ? "En curso" : "Pendiente";
      const statusClass = percent === 100 ? "done" : percent > 0 ? "" : "pending";
      return `
        <article class="map-area">
          <div class="map-area-head">
            <div>
              <h3>${escapeHtml(stage)}</h3>
              <p>${escapeHtml(stageDescriptions[stage] || "Bloque de aprendizaje dentro de la ruta Linux.")}</p>
              <span class="map-area-status ${statusClass}">${status}</span>
            </div>
            <span class="map-area-count">${completed}/${items.length}</span>
          </div>
          <div class="map-progress" aria-hidden="true"><span style="width: ${percent}%"></span></div>
          <div class="map-module-list">
            ${items.map((item) => `
              <button class="map-module ${state.done.has(item.index) ? "done" : ""} ${item.stage === activeStage && item.index === state.active ? "active" : ""}" type="button" data-map-module="${item.index}">
                ${escapeHtml(item.title)}
              </button>
            `).join("")}
          </div>
        </article>
      `;
    }).join("")}
  `;
  renderAreaEvaluation(groups);
}

function openModule(index) {
  state.active = index;
  activeStageFilter = modules[index]?.stage || activeStageFilter;
  renderLesson();
  showView("aprendizaje");
}

function renderAreaEvaluation(groups) {
  const activeStage = modules[state.active]?.stage || Object.keys(groups)[0];
  const items = groups[activeStage] || [];
  const commands = [...new Set(items.flatMap((item) => item.commands.map(commandBase)))].slice(0, 4);
  const question = `¿Qué comando encaja mejor con el área ${activeStage}?`;
  const correct = commands[0] || "ls";
  const options = [...new Set([correct, "paint", "format c:", "browser"])].slice(0, 4);
  $("#areaEvaluation").innerHTML = `
    <div class="area-quiz">
      <p class="eyebrow">Mini evaluación por área</p>
      <h3>${escapeHtml(activeStage)}</h3>
      <p>${escapeHtml(question)}</p>
      <div class="area-quiz-options">
        ${options.map((option) => `
          <button class="area-quiz-option" type="button" data-area-answer="${escapeHtml(option)}" data-area-correct="${escapeHtml(correct)}">
            ${escapeHtml(option)}
          </button>
        `).join("")}
      </div>
      <p class="quiz-feedback" id="areaQuizFeedback"></p>
    </div>
  `;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function renderCommandBlogs(filter = "") {
  const needle = filter.trim().toLowerCase();
  const counts = categoryCounts();
  const categoryNames = Object.keys(counts).sort((a, b) => a.localeCompare(b));
  $("#commandCategoryList").innerHTML = [
    `<button class="command-category-button ${activeCommandCategory === "Todos" ? "active" : ""}" type="button" data-command-category="Todos">Todos <span>${commandBlogs.length}</span></button>`,
    ...categoryNames.map((category) => `
      <button class="command-category-button ${category === activeCommandCategory ? "active" : ""}" type="button" data-command-category="${escapeHtml(category)}">
        ${escapeHtml(category)} <span>${counts[category]}</span>
      </button>
    `)
  ].join("");

  const rows = commandBlogs.filter((article) => (
    (activeCommandCategory === "Todos" || article.category === activeCommandCategory) &&
    (
      article.command.toLowerCase().includes(needle) ||
      article.base.toLowerCase().includes(needle) ||
      article.category.toLowerCase().includes(needle) ||
      article.summary.toLowerCase().includes(needle)
    )
  ));

  if (!rows.some((article) => article.command === activeCommandBlog)) {
    activeCommandBlog = rows[0]?.command || commandBlogs[0]?.command || "";
  }

  if (!rows.length) {
    $("#commandBlogList").innerHTML = `<p class="quiz-feedback">No hay comandos con ese filtro.</p>`;
    $("#commandArticle").innerHTML = `
      <p class="eyebrow">Sin resultados</p>
      <h2>Prueba otra búsqueda</h2>
      <p>Cambia la clasificación o escribe un comando más general, como <code>ls</code>, <code>grep</code>, <code>ip</code> o <code>systemctl</code>.</p>
    `;
    return;
  }

  const groupedRows = rows.reduce((acc, article) => {
    acc[article.category] = acc[article.category] || [];
    acc[article.category].push(article);
    return acc;
  }, {});

  $("#commandBlogList").innerHTML = Object.entries(groupedRows)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([category, articles]) => `
      <h3 class="command-category-title">${escapeHtml(category)}</h3>
      ${articles.map((article) => `
        <button class="command-blog-button ${article.command === activeCommandBlog ? "active" : ""}" type="button" data-blog-command="${escapeHtml(article.command)}">
          <code>${escapeHtml(article.command)}</code>
          <span>${escapeHtml(article.category)}</span>
        </button>
      `).join("")}
    `).join("");

  renderCommandArticle();
}

function renderCommandArticle() {
  const article = commandBlogs.find((item) => item.command === activeCommandBlog) || commandBlogs[0];
  if (!article) return;
  const relatedCommands = commandBlogs
    .filter((item) => item.category === article.category && item.command !== article.command)
    .slice(0, 8);

  $("#commandArticle").innerHTML = `
    <p class="eyebrow">${escapeHtml(article.category)}</p>
    <h2><code>${escapeHtml(article.command)}</code></h2>
    <p>${escapeHtml(article.summary)}</p>
    <div class="command-meta">
      <span>Base: ${escapeHtml(article.base)}</span>
      <span>Módulos: ${article.modules.length || 1}</span>
      <span>Nivel: práctica segura</span>
    </div>

    <div class="classification-panel">
      <section class="article-note">
        <h3>Clasificación</h3>
        <p>${escapeHtml(categoryDescription(article.category))}</p>
      </section>
      <section class="article-note">
        <h3>Comandos relacionados</h3>
        <div class="related-command-list">
          ${relatedCommands.length ? relatedCommands.map((item) => `<code>${escapeHtml(item.command)}</code>`).join("") : "<p>No hay comandos relacionados en esta ruta.</p>"}
        </div>
      </section>
    </div>

    <div class="article-grid">
      <section class="article-note">
        <h3>Qué problema resuelve</h3>
        <p>Este comando aparece dentro de la ruta porque ayuda a resolver una tarea real de Linux: navegar, inspeccionar, automatizar, diagnosticar o administrar el sistema.</p>
      </section>
      <section class="article-note">
        <h3>Cuándo usarlo</h3>
        <p>Úsalo cuando necesites practicar el flujo mostrado en sus módulos: ${escapeHtml(article.modules.join(", ") || "laboratorio general")}.</p>
      </section>
    </div>

    <h3>Sintaxis mental</h3>
    <pre>${escapeHtml(article.base)} [opciones] [argumentos]</pre>
    <p>Lee el comando de izquierda a derecha: programa, opciones que cambian comportamiento y argumentos sobre los que trabaja. Si hay pipes o redirecciones, analiza cada tramo por separado.</p>

    <h3>Ejemplos para practicar</h3>
    <pre>${article.examples.map(escapeHtml).join("\n")}</pre>

    <h3>Error común</h3>
    <p>${escapeHtml(article.caution)}</p>

    <h3>Reto de blog</h3>
    <p>${escapeHtml(article.challenge)}</p>

    <h3>Cómo profundizar</h3>
    <ul>
      <li>Ejecuta <code>${escapeHtml(article.base)} --help</code> y anota tres opciones útiles.</li>
      <li>Lee <code>man ${escapeHtml(article.base)}</code> y busca la sección de ejemplos o archivos relacionados.</li>
      <li>Prueba el comando en la terminal simulada y después en una VM o contenedor si puede modificar el sistema.</li>
    </ul>
  `;
}

function renderGoalRoutes() {
  $("#goalRoutes").innerHTML = goalRoutes.map((route) => {
    const items = modules
      .map((item, index) => ({ ...item, index }))
      .filter((item) => route.stages.includes(item.stage));
    const completed = items.filter((item) => state.done.has(item.index)).length;
    const firstIndex = items[0]?.index ?? 0;
    return `
      <article class="goal-route">
        <h3>${escapeHtml(route.title)}</h3>
        <p>${escapeHtml(route.description)}</p>
        <div class="meter" aria-hidden="true"><span style="width: ${Math.round((completed / Math.max(items.length, 1)) * 100)}%"></span></div>
        <ul>
          ${items.slice(0, 5).map((item) => `<li>${escapeHtml(item.title)}</li>`).join("")}
        </ul>
        <button type="button" data-goal-start="${firstIndex}">Empezar ruta</button>
      </article>
    `;
  }).join("");
}

function renderCheatSheet(filter = "") {
  const needle = filter.trim().toLowerCase();
  const rows = commandBlogs.filter((article) => (
    article.command.toLowerCase().includes(needle) ||
    article.category.toLowerCase().includes(needle) ||
    article.summary.toLowerCase().includes(needle)
  )).slice(0, 80);

  $("#cheatRows").innerHTML = rows.map((article) => `
    <tr>
      <td><code>${escapeHtml(article.base)}</code></td>
      <td>${escapeHtml(article.category)}</td>
      <td>${escapeHtml(article.summary)}</td>
      <td><code>${escapeHtml(article.command)}</code></td>
    </tr>
  `).join("") || `
    <tr>
      <td colspan="4">No hay resultados para ese filtro.</td>
    </tr>
  `;
}

function globalSearchRows(query) {
  const needle = query.trim().toLowerCase();
  if (needle.length < 2) return [];
  const moduleRows = modules
    .map((item, index) => ({ type: "Módulo", title: item.title, detail: item.stage, action: `module:${index}`, haystack: `${item.title} ${item.stage} ${item.topics.join(" ")} ${item.commands.join(" ")}` }))
    .filter((item) => item.haystack.toLowerCase().includes(needle));
  const commandRows = commandBlogs
    .map((item) => ({ type: "Comando", title: item.command, detail: item.category, action: `command:${item.command}`, haystack: `${item.command} ${item.category} ${item.summary}` }))
    .filter((item) => item.haystack.toLowerCase().includes(needle));
  const glossaryRows = glossary
    .map(([term, definition]) => ({ type: "Glosario", title: term, detail: definition, action: "glossary", haystack: `${term} ${definition}` }))
    .filter((item) => item.haystack.toLowerCase().includes(needle));
  return [...moduleRows, ...commandRows, ...glossaryRows].slice(0, 10);
}

function renderGlobalSearch(query = "") {
  const rows = globalSearchRows(query);
  const box = $("#globalSearchResults");
  box.classList.toggle("active", rows.length > 0);
  box.innerHTML = rows.map((row) => `
    <button class="global-result" type="button" data-global-action="${escapeHtml(row.action)}">
      <strong>${escapeHtml(row.title)}</strong>
      <span>${escapeHtml(row.type)} · ${escapeHtml(row.detail)}</span>
    </button>
  `).join("");
}

function terminalResponse(raw) {
  const command = raw.trim();
  if (!command) return "";
  state.history.push(command);

  if (command === "help" || command === "ayuda") {
    return [
      "Comandos simulados principales:",
      "  pwd, whoami, uname -a, ls, cd, cat, grep, chmod, sudo",
      "  ps, kill, ip, ping, curl, ss, systemctl, journalctl",
      "  lsblk, df -h, mount, dmesg, lsmod, modinfo, sysctl",
      "  man, find, tar, ssh, dig, tcpdump, perf, strace, ldd",
      "La terminal no modifica tu sistema; sirve para practicar vocabulario y flujo."
    ].join("\n");
  }
  if (command === "clear") {
    $("#terminalOutput").textContent = "";
    return "";
  }
  if (command === "pwd") return cwd === "~" ? "/home/quest" : cwd;
  if (command === "whoami") return "quest";
  if (command.startsWith("echo ")) return command.slice(5);
  if (command === "date") return new Date().toString();
  if (command === "history") return state.history.map((entry, index) => `${index + 1}  ${entry}`).join("\n");
  if (command.startsWith("cd")) {
    const target = command.split(/\s+/)[1] || "~";
    if (target === "~" || target === "/home/quest") cwd = "~";
    else if (fakeFs[target]) cwd = target;
    else return `cd: ${target}: no existe en este laboratorio`;
    return "";
  }
  if (command === "ls -la" || command === "ls -l") {
    return [
      "-rwxr-xr-x quest quest  128 script.sh",
      "-rw-r--r-- quest quest  256 notes.txt",
      "drwxr-xr-x quest quest 4096 projects",
      "",
      "Lectura rápida: el primer bloque indica tipo y permisos.",
      "r = leer, w = escribir, x = ejecutar. Dueño, grupo y otros tienen permisos separados."
    ].join("\n");
  }
  if (/^chmod\s+[0-7]{3,4}\s+/.test(command)) {
    const mode = command.split(/\s+/)[1].slice(-3);
    const explain = mode.split("").map((digit, index) => {
      const who = ["dueño", "grupo", "otros"][index];
      const n = Number(digit);
      const bits = `${n & 4 ? "r" : "-"}${n & 2 ? "w" : "-"}${n & 1 ? "x" : "-"}`;
      return `${who}: ${digit} = ${bits}`;
    });
    return [`permisos actualizados en el laboratorio`, ...explain, "Regla: 4 leer, 2 escribir, 1 ejecutar; se suman."].join("\n");
  }
  if (command.startsWith("grep ") && command.includes("-n")) {
    return "3:INFO kernel modulo ext4 cargado\n-n muestra el número de línea donde aparece la coincidencia.";
  }
  if (command.startsWith("systemctl status")) {
    return "ssh.service - OpenSSH server\nLoaded: loaded\nActive: active (running)\nPista: combina status con journalctl -u ssh para ver logs.";
  }
  if (command.startsWith("ip addr")) {
    return "1: lo: 127.0.0.1/8\n2: eth0: 192.168.1.42/24\nPista: lo es loopback; eth0 representa una interfaz de red.";
  }
  if (command.startsWith("ls")) {
    const parts = command.split(/\s+/);
    const target = parts.find((part) => fakeFs[part]) || cwd;
    const long = parts.includes("-l");
    return fakeFs[target].map((name) => long ? `-rw-r--r-- quest quest ${name}` : name).join(long ? "\n" : "  ");
  }
  if (command === "cat notes.txt") return "Notas: aprende rutas, permisos, procesos, red, servicios y kernel en ese orden.";
  if (command === "cat logs.txt") return "INFO boot completo\nWARN ssh reintento\nINFO kernel modulo ext4 cargado";
  if (command === "cat /proc/cpuinfo") return "processor : 0\nmodel name : Linux Quest Virtual CPU\ncpu cores : 4";
  if (command === "cat /etc/fstab") return "UUID=demo-root / ext4 defaults 0 1";
  if (command.startsWith("grep ")) return "kernel modulo ext4 cargado";
  if (command.startsWith("chmod ")) return "permisos actualizados en el laboratorio";
  if (command.startsWith("sudo ")) return "sudo: acción simulada; en un sistema real pediría contraseña y privilegios";
  if (command.startsWith("ps")) return "PID TTY STAT COMMAND\n1 ? Ss systemd\n424 pts/0 S bash\n777 pts/0 R ps";
  if (command.startsWith("kill")) return "señal enviada al PID simulado";
  if (command === "uname -a") return "Linux questbox 6.9.0-learning #1 SMP x86_64 GNU/Linux";
  if (command.startsWith("ip addr")) return "1: lo: 127.0.0.1/8\n2: eth0: 192.168.1.42/24";
  if (command.startsWith("ping")) return "PING simulado: 3 paquetes transmitidos, 3 recibidos, 0% pérdida";
  if (command.startsWith("curl")) return "<html><title>Example Domain</title></html>";
  if (command.startsWith("ss")) return "Netid State Local Address:Port Process\ntcp LISTEN 0.0.0.0:22 sshd";
  if (command.startsWith("systemctl")) return "ssh.service loaded active running OpenSSH server";
  if (command.startsWith("journalctl")) return "jun 23 quest systemd[1]: Started learning service.";
  if (command === "lsblk") return "NAME SIZE TYPE MOUNTPOINT\nvda  40G disk\nvda1 40G part /";
  if (command === "df -h") return "Filesystem Size Used Avail Use% Mounted on\n/dev/vda1 40G 12G 28G 30% /";
  if (command === "mount") return "/dev/vda1 on / type ext4 (rw,relatime)";
  if (command === "dmesg" || command === "dmesg -w") return "[0.000000] Linux Quest kernel booting\n[1.204000] ext4 filesystem mounted";
  if (command === "lsmod") return "Module Size Used by\next4 942080 1\nbridge 421888 0";
  if (command.startsWith("modinfo")) return "filename: /lib/modules/quest/kernel/fs/ext4/ext4.ko\ndescription: Fourth Extended Filesystem";
  if (command.startsWith("sysctl")) return "kernel.hostname = questbox\nvm.swappiness = 60";
  if (command.startsWith("man ")) return "Página de manual simulada: nombre, sinopsis, descripción, opciones, ejemplos y archivos relacionados.";
  if (command.startsWith("apropos") || command.startsWith("whatis")) return "Resultado simulado: comando relacionado encontrado en las páginas de manual.";
  if (command.startsWith("find ")) return "./logs.txt\n./notes.txt\n./projects/app.conf";
  if (command.startsWith("tar ")) return "archivo tar simulado procesado correctamente";
  if (command.startsWith("sha256sum")) return "6f5902ac237024bdd0c176cb93063dc4  backup.tgz";
  if (command.startsWith("awk ")) return "salida awk simulada: campo1 campo2 campo3";
  if (command.startsWith("sed ")) return "salida sed simulada con transformación aplicada";
  if (command.startsWith("ssh")) return "conexión SSH simulada establecida de forma segura";
  if (command.startsWith("dig ")) return "example.com. 300 IN A 93.184.216.34";
  if (command.startsWith("resolvectl")) return "Link 2 (eth0)\nDNS Servers: 192.168.1.1\nDNS Domain: local";
  if (command.startsWith("tcpdump")) return "captura simulada: IP 192.168.1.42.53122 > 93.184.216.34.443";
  if (command.startsWith("mtr") || command.startsWith("tracepath")) return "ruta simulada: gateway -> isp -> destino, sin pérdida";
  if (command.startsWith("ldd ")) return "linux-vdso.so.1\nlibc.so.6 => /lib/libc.so.6";
  if (command.startsWith("file ")) return "ELF 64-bit LSB executable, x86-64, dynamically linked";
  if (command.startsWith("readelf")) return "ELF Header simulado: Type EXEC, Machine x86-64, Entry point 0x401000";
  if (command.startsWith("perf")) return "muestras simuladas: scheduler, libc, app_worker";
  if (command.startsWith("free")) return "Mem: 7.7Gi total, 2.1Gi used, 4.3Gi cache";
  if (command.startsWith("vmstat")) return "r b swpd free buff cache si so bi bo in cs us sy id wa";
  if (command.startsWith("iostat") || command.startsWith("iotop") || command.startsWith("pidstat")) return "métricas de I/O simuladas: latencia normal, uso moderado";
  if (command.startsWith("getfacl") || command.startsWith("setfacl") || command.startsWith("lsattr") || command.startsWith("getcap")) return "metadatos de permisos avanzados simulados";
  if (command.startsWith("getenforce") || command.startsWith("sestatus") || command.startsWith("aa-status") || command.startsWith("ausearch")) return "estado MAC simulado: enforcing/perfil activo sin denegaciones críticas";
  if (command.startsWith("virsh") || command.startsWith("virt-install") || command.startsWith("qemu-img")) return "virtualización simulada: recurso disponible para laboratorio";
  if (command.startsWith("kubectl") || command.startsWith("crictl")) return "cluster simulado: nodos y pods visibles";
  if (command.startsWith("bpftool") || command.startsWith("bpftrace")) return "eBPF simulado: programa cargado y mapa consultado";
  if (command.startsWith("git ")) return "Git simulado: estado limpio después de practicar el comando";
  if (command.startsWith("apt") || command.startsWith("dnf") || command.startsWith("pacman") || command.startsWith("podman") || command.startsWith("docker") || command.startsWith("gcc") || command.startsWith("make") || command.startsWith("gdb") || command.startsWith("qemu") || command.startsWith("python3")) {
    return "comando reconocido; ejecución simulada para practicar sin modificar tu sistema";
  }
  return `${command}: comando no implementado todavía. Prueba ls, pwd, cd, cat, grep, ps, systemctl, ip, dmesg o lsmod.`;
}

function appendTerminal(command, response) {
  const output = $("#terminalOutput");
  const prompt = `quest@linux:${cwd}$ ${command}`;
  output.textContent += `${prompt}\n${response ? `${response}\n` : ""}`;
  output.scrollTop = output.scrollHeight;
}

function runCommandInLab(command) {
  showView("laboratorio");
  const input = $("#terminalInput");
  input.value = command;
  input.focus();
  const response = terminalResponse(command);
  if (command.trim() !== "clear") appendTerminal(command, response);
  input.value = "";
}

document.addEventListener("click", (event) => {
  if (event.target.closest("[data-close-auth]")) {
    closeAuthModal();
    return;
  }

  const viewButton = event.target.closest("[data-view-target]");
  if (viewButton) {
    showView(viewButton.dataset.viewTarget);
    return;
  }

  const globalAction = event.target.closest("[data-global-action]");
  if (globalAction) {
    const [type, value] = globalAction.dataset.globalAction.split(/:(.*)/s);
    $("#globalSearchResults").classList.remove("active");
    $("#globalSearch").value = "";
    if (type === "module") {
      openModule(Number(value));
    } else if (type === "command") {
      activeCommandBlog = value;
      activeCommandCategory = commandBlogs.find((item) => item.command === value)?.category || "Todos";
      renderCommandBlogs();
      showView("recursos");
    } else {
      showView("mapa");
    }
    return;
  }

  const stageButton = event.target.closest("[data-stage-filter]");
  if (stageButton) {
    activeStageFilter = stageButton.dataset.stageFilter;
    renderStageFilter();
    renderModules();
    return;
  }

  const goalButton = event.target.closest("[data-goal-start]");
  if (goalButton) {
    openModule(Number(goalButton.dataset.goalStart));
    return;
  }

  const areaAnswer = event.target.closest("[data-area-answer]");
  if (areaAnswer) {
    const selected = areaAnswer.dataset.areaAnswer;
    const correct = areaAnswer.dataset.areaCorrect;
    document.querySelectorAll("[data-area-answer]").forEach((button) => {
      button.classList.remove("correct", "wrong");
      if (button.dataset.areaAnswer === correct) button.classList.add("correct");
      if (button === areaAnswer && selected !== correct) button.classList.add("wrong");
    });
    $("#areaQuizFeedback").textContent = selected === correct ? "Correcto. Esa herramienta pertenece al área activa." : "Revisa los módulos del área y vuelve a probar.";
    return;
  }

  const categoryButton = event.target.closest("[data-command-category]");
  if (categoryButton) {
    activeCommandCategory = categoryButton.dataset.commandCategory;
    renderCommandBlogs($("#commandSearch").value);
    return;
  }

  const blogButton = event.target.closest("[data-blog-command]");
  if (blogButton) {
    activeCommandBlog = blogButton.dataset.blogCommand;
    renderCommandBlogs($("#commandSearch").value);
    return;
  }

  const moduleButton = event.target.closest(".module-button");
  if (moduleButton) {
    openModule(Number(moduleButton.dataset.index));
    return;
  }

  const mapModuleButton = event.target.closest("[data-map-module]");
  if (mapModuleButton) {
    openModule(Number(mapModuleButton.dataset.mapModule));
    return;
  }

  const modeButton = event.target.closest("[data-mode]");
  if (modeButton) {
    state.mode = modeButton.dataset.mode;
    document.querySelectorAll("[data-mode]").forEach((button) => button.classList.toggle("active", button === modeButton));
    renderLesson();
    return;
  }

  const commandButton = event.target.closest("[data-command]");
  if (commandButton) {
    const command = commandButton.dataset.command;
    runCommandInLab(command);
    const article = commandBlogs.find((item) => item.command === command);
    if (article) {
      activeCommandBlog = command;
      activeCommandCategory = article.category;
      renderCommandBlogs($("#commandSearch").value);
    }
    return;
  }

  const answerButton = event.target.closest("[data-answer]");
  if (answerButton) {
    const selected = Number(answerButton.dataset.answer);
    const correct = modules[state.active].quiz.answer;
    document.querySelectorAll(".quiz-option").forEach((button) => {
      button.classList.remove("correct", "wrong");
      const answer = Number(button.dataset.answer);
      if (answer === correct) button.classList.add("correct");
      if (answer === selected && selected !== correct) button.classList.add("wrong");
    });
    $("#quizFeedback").textContent = selected === correct ? "Correcto. Puedes marcar el módulo como listo." : "Casi. Revisa la idea central y vuelve a probar.";
  }
});

$("#accountButton").addEventListener("click", () => {
  if (currentUser) {
    showView("perfil");
  } else {
    openAuthModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeAuthModal();
});

$("#completeModule").addEventListener("click", () => {
  if (state.done.has(state.active)) {
    state.done.delete(state.active);
  } else {
    state.done.add(state.active);
    if (state.active < modules.length - 1) state.active += 1;
  }
  renderLesson();
});

$("#terminalForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const input = $("#terminalInput");
  const command = input.value;
  const response = terminalResponse(command);
  terminalHistoryIndex = null;
  if (command.trim() !== "clear") appendTerminal(command, response);
  input.value = "";
});

$("#terminalInput").addEventListener("keydown", (event) => {
  if (!["ArrowUp", "ArrowDown"].includes(event.key) || !state.history.length) return;
  event.preventDefault();
  if (event.key === "ArrowUp") {
    terminalHistoryIndex = terminalHistoryIndex === null
      ? state.history.length - 1
      : Math.max(0, terminalHistoryIndex - 1);
  } else {
    terminalHistoryIndex = terminalHistoryIndex === null
      ? state.history.length - 1
      : Math.min(state.history.length, terminalHistoryIndex + 1);
  }
  $("#terminalInput").value = terminalHistoryIndex >= state.history.length ? "" : state.history[terminalHistoryIndex];
});

$("#clearTerminal").addEventListener("click", () => {
  $("#terminalOutput").textContent = "";
});

$("#glossarySearch").addEventListener("input", (event) => {
  renderGlossary(event.target.value);
});

$("#commandSearch").addEventListener("input", (event) => {
  renderCommandBlogs(event.target.value);
});

$("#continueLearning").addEventListener("click", () => {
  openModule(nextRecommendedIndex());
});

$("#recommendedRoute").addEventListener("click", () => {
  const route = recommendedIndexes();
  const first = route.find((index) => !state.done.has(index)) ?? route[0] ?? 0;
  openModule(first);
});

$("#practiceForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const input = $("#practiceInput");
  const expected = input.dataset.expectedCommand || "";
  const answer = input.value.trim();
  if (!answer) {
    $("#practiceFeedback").textContent = "Escribe un comando antes de comprobar.";
    return;
  }
  const answerBase = commandBase(answer);
  const ok = answerBase === expected || modules[state.active].commands.some((command) => commandBase(command) === answerBase);
  $("#practiceFeedback").textContent = ok
    ? "Correcto. Ese comando encaja con el módulo; pruébalo también en la terminal."
    : `Casi. Revisa los comandos clave; una respuesta esperada empieza con ${expected}.`;
  if (ok) {
    runCommandInLab(answer);
  }
});

$("#loginForm").addEventListener("submit", async (event) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  try {
    const data = await apiRequest("/api/login", {
      method: "POST",
      body: JSON.stringify({
        email: form.get("email"),
        password: form.get("password")
      })
    });
    currentUser = data.user;
    renderAuth();
    await loadStudentProfile();
    await loadRemoteProgress();
    closeAuthModal();
  } catch (error) {
    setAuthFeedback(error.message, true);
  }
});

$("#registerForm").addEventListener("submit", async (event) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  try {
    const data = await apiRequest("/api/register", {
      method: "POST",
      body: JSON.stringify({
        name: form.get("name"),
        email: form.get("email"),
        password: form.get("password")
      })
    });
    currentUser = data.user;
    renderAuth();
    await loadStudentProfile();
    await syncProgressNow();
    setAuthFeedback("Cuenta creada. Tu avance quedó guardado.");
    closeAuthModal();
  } catch (error) {
    setAuthFeedback(error.message, true);
  }
});

$("#syncProgress").addEventListener("click", () => {
  syncProgressNow().catch((error) => setAuthFeedback(error.message, true));
});

$("#profileForm").addEventListener("submit", async (event) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  try {
    const data = await apiRequest("/api/profile", {
      method: "PUT",
      body: JSON.stringify({
        displayName: form.get("displayName"),
        role: form.get("role"),
        level: form.get("level"),
        goal: form.get("goal"),
        bio: form.get("bio")
      })
    });
    studentProfile = data.profile;
    if (currentUser) currentUser.name = data.profile.display_name;
    renderAuth();
    renderProfile();
    setAuthFeedback("Perfil guardado.");
  } catch (error) {
    setAuthFeedback(error.message, true);
  }
});

$("#logoutButton").addEventListener("click", () => {
  logoutCurrentUser({ showModal: true });
});

$("#topLogoutButton").addEventListener("click", () => {
  logoutCurrentUser({ showModal: false });
});

$("#cheatSearch").addEventListener("input", (event) => {
  renderCheatSheet(event.target.value);
});

$("#globalSearch").addEventListener("input", (event) => {
  renderGlobalSearch(event.target.value);
});

$("#resetProgress").addEventListener("click", () => {
  state.done.clear();
  state.active = 0;
  renderLesson();
});

document.querySelectorAll("[data-mode]").forEach((button) => {
  button.classList.toggle("active", button.dataset.mode === state.mode);
});

renderModules();
renderLesson();
renderGlossary();
renderMap();
renderCommandBlogs();
renderGoalRoutes();
renderCheatSheet();
renderAuth();
initAuth();
appendTerminal("bienvenido", "Escribe comandos reales de Linux para practicar en modo seguro.");
