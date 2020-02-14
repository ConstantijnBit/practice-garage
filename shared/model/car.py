from shared.system.base.model import BaseModel, HBKeyProperty
from google.cloud import ndb



class Car(BaseModel):
    car = HBKeyProperty()
    plate = ndb.StringProperty()
    brand = ndb.StringProperty()
    color = ndb.StringProperty()
    id = ndb.StringProperty()

    license_plate = ndb.StringProperty()

    @classmethod
    def list(cls, garage=None):
        cars = list()
        with cls.ndb_context():
            q = cls.query()
            if car:
                q = q.filter(cls.car==car.key)
            cars = q.fetch()
        return cars
