dict_tool = {
    "martelo": (4, 5),
    "chave de fenda": [0.851, 1.52], 
    "serrote": (63, 51),
    "parafusadeira": (8, 88),
    "alicate": (75, 43),
    "marreta": (22, 17),
    "tesoura": (91, 12),
    "nível": (34, 78),
    "fita métrica": (50, 22),
    "furadeira": (18, 93),
    "chave inglesa": (67, 56),
    "pá": (39, 2),
    "seringa": (84, 71),
    "trena": (12, 45),
    "grampo": (97, 30),
}

def chatbot_print(objeto):
    print(f"Indo pegar {objeto}")
    pos = dict_tool[objeto]
    print(f"Posição: {pos}")
    return f"Indo pegar {objeto}"

if __name__ == "__main__":
    chatbot_print()