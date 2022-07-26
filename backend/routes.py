from fastapi import FastAPI
from models.record_model import Record
from logic.record import RecordLogic
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost:4200",
    "http://localhost" "http://localhost:8080",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/records")
def get_records():
    records = RecordLogic().get_records()
    return records or []


@app.post("/record")
def post_record(record: Record):
    document = RecordLogic().post_record(record.dict())
    return f"Successfully Created Record {document.inserted_id}"


@app.put("/record")
def update_record(record: Record):
    RecordLogic().update_record(record.dict())
    return "Updated \n" + str(record)


@app.delete("/record")
def delete_record(email):
    RecordLogic().delete_record(email)
    return f"Successfully Deleted {email}"
