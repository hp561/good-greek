from typing import Dict
from database.mongo import get_database
from models.record_model import Record


client = get_database()
record_access = client["GoodGreek"]["records"]


class RecordLogic:
    def get_records(self):
        item_details = record_access.find()
        records = []
        for item in item_details:
            records.append(Record(**item))
        return records

    def get_record(self, email: str):
        query = {"email": email}
        record = record_access.find_one(query)
        return record

    def post_record(self, record: Dict):
        return record_access.insert_one(record)

    def update_record(self, record: Dict):
        query = {"email": record.get("email")}
        new_data = {"$set": record}
        return record_access.update_one(query, new_data)

    def delete_record(self, email: str):
        record_access.delete_many({"email": email})
