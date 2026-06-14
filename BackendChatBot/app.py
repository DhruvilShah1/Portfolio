from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
from langchain_community.document_loaders import PyPDFLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_groq import ChatGroq
from langchain_community.vectorstores import FAISS
from langchain_huggingface import HuggingFaceEmbeddings
from langchain_classic.chains import ConversationalRetrievalChain
from langchain_core.prompts import PromptTemplate
import os

load_dotenv()
groq_api_key = os.getenv("GROQ_API_KEY")

app = Flask(__name__)
CORS(app)


llm = ChatGroq(
    api_key=groq_api_key,
    model="llama-3.3-70b-versatile"
)
path = os.path.join(os.path.dirname(__file__), "About_Dhruvil_Shah.pdf")

pdf_reader = PyPDFLoader(path)

documents = pdf_reader.load()

text_splitter = RecursiveCharacterTextSplitter(
    chunk_size=1000,
    chunk_overlap=100
)

splits = text_splitter.split_documents(documents)

embeddings = HuggingFaceEmbeddings(
    model_name="sentence-transformers/all-MiniLM-L6-v2"
)

vectorstore = FAISS.from_documents(
    splits,
    embeddings
)

CONDENSE_PROMPT = """
Given the following conversation and a follow-up question,
rephrase the follow-up question to be a standalone question.

Chat History:
{chat_history}

Follow-up Question:
{question}

Standalone Question:
"""

qa = ConversationalRetrievalChain.from_llm(
    llm=llm,
    retriever=vectorstore.as_retriever(),
    condense_question_prompt=PromptTemplate.from_template(
        CONDENSE_PROMPT
    ),
    return_source_documents=False
)

chat_sessions = {}


@app.route("/", methods=["GET"])
def home():
    return jsonify({
        "message": "Resume Chatbot API Running"
    })


@app.route("/chat", methods=["POST"])
def chat():

    data = request.get_json()

    session_id = data.get("session_id")
    question = data.get("question")

    if not session_id:
        return jsonify({
            "error": "session_id is required"
        }), 400

    if session_id not in chat_sessions:
        chat_sessions[session_id] = {
            "name": None,
            "history": []
        }

    session = chat_sessions[session_id]

   
    if not question:
        return jsonify({
            "error": "question is required"
        }), 400

    result = qa.invoke({
        "question": question,
        "chat_history": session["history"]
    })

    answer = result["answer"]

    session["history"].append((question, answer))

    return jsonify({
        "type": "answer",
        "question": question,
        "answer": answer
    })


if __name__ == "__main__":
    app.run(
        debug=False,
        host="0.0.0.0",
        port=5000
    )