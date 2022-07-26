import imp
from typing import Any, List
from pydantic import BaseModel


class Record(BaseModel):
    _id: Any
    firstName: str
    city: str
    lastName: str
    email: str
    state: str
    street: str
    phoneNumber: int
    zipCode: int
    services: List[str] = []
