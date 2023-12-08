from langchain.llms import Ollama
import chatGradio as gr
import re

dict_tool = {
    "martelo": (4, 5),
    "chave de fenda": (11, 39),
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

ollama = Ollama(base_url='http://localhost:11434',
model="Alfred3")
print("running")

def chatbot(tool):
    Input = input()
    ans = ''
    for chunk in ollama.stream(Input):
        print(chunk, end="", flush=True)
        ans += chunk
    print("")
    match = re.search(r"Indo pegar [ao]?\s*([\w\s]+)", ans)
    if match:
        tool = match.group(1)
        print(tool)
        pos = dict_tool[tool]
        print(f"Posição: {pos}")
    else:
        pass

with gr.Blocks() as demo:
    title="LLM Chatbot"
    chatbot = gr.Chatbot()
    msg = gr.Textbox()
    clear = gr.ClearButton([msg, chatbot])

    msg.submit(chatbot, [msg, chatbot], [msg, chatbot])
    #print(ans)