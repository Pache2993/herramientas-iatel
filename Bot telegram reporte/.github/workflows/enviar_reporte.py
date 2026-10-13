import telebot
from telebot.types import InlineKeyboardMarkup, InlineKeyboardButton
from datetime import datetime

TOKEN = "8998395509:AAEmfRz4udeO53TM4spLHSp6d7RnBc9ZlU0"
ID_CHAT_GRUPO = -5153832896

bot = telebot.TeleBot(TOKEN)

REPORTES_DIARIOS_BASE = [
    "Servicios 24h-36h",
    "Servicios +36h",
    "MasMovil +36h"
]

DISTRIBUCION_DIAS = {
    0: {"nombre": "Lunes", "especificos": ["Cust. Complaints 24h-36h", "QBOOST 24h-36h", "VDF (MC y DOWN)"]},
    1: {"nombre": "Martes", "especificos": ["Zona +36h", "PCAR +36h", "Despliegue SMC"]},
    2: {"nombre": "Miércoles", "especificos": ["Cust. Complaints +36h", "RSSI VDF", "Reunión RSSI (3PP, FLM y otros)"]},
    3: {"nombre": "Jueves", "especificos": ["Cust. Complaints 24h-36h", "QBOOST +36h", "Gestión Bloqueos FM"]},
    4: {"nombre": "Viernes", "especificos": ["Estructural Servicios"]},
    5: {"nombre": "Sábado", "especificos": []},
    6: {"nombre": "Domingo", "especificos": []}
}

dia_semana = datetime.now().weekday()
config_dia = DISTRIBUCION_DIAS.get(dia_semana, {"nombre": "Día", "especificos": []})
lista_hoy = REPORTES_DIARIOS_BASE + config_dia["especificos"]

markup = InlineKeyboardMarkup()
for i, nombre in enumerate(lista_hoy):
    markup.add(InlineKeyboardButton(text=f"📄 {nombre} (Libre)", callback_data=f"t{i+1}"))

texto = (
    f"🚨 *REPORTES DISPONIBLES DE HOY ({config_dia['nombre'].upper()})*\n"
    "Pulsad sobre el reporte que vayáis a gestionar:\n\n"
    "@Hector\\_latel\n"
    "@pacheco29\n"
    "@javimm26\n"
    "@rafaiatel"
)

bot.send_message(
    chat_id=ID_CHAT_GRUPO,
    text=texto,
    reply_markup=markup,
    parse_mode="Markdown"
)
print("¡Mensaje enviado con éxito!")