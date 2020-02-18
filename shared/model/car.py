from shared.system.base.model import BaseModel, HBKeyProperty
from google.cloud import ndb



class Car(BaseModel):
    car = HBKeyProperty() # ???
    id = ndb.StringProperty()
    license_plate = ndb.StringProperty()
    brand = ndb.StringProperty()
    color = ndb.StringProperty()
    storage = ndb.BooleanProperty()
    garage_id = ndb.StringProperty()

    @classmethod
    def list(cls, car=None, id=None, license_plate=None, brand=None, color=None, storage=False, garage_id=None, limit=20):
        query = Car.query()
        if car:
            query = query.filter(Car.id == car)
        elif id:
            query = query.filter(Car.id == id)
        elif license_plate:
            query = query.filter(Car.license_plate == license_plate)
        elif brand:
            query = query.filter(Car.brand == brand)
        elif color:
            query = query.filter(Car.color == color)
        elif storage:
            query = query.filter(Car.storage == storage)
        elif garage_id:
            query = query.filter(Car.garage_id == garage_id)
        if limit:
            return query.fetch(limit)
        return query.fetch()
