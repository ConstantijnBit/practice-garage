from shared.system.base.model import BaseModel
from google.cloud import ndb



class Car(BaseModel):
    garage = ndb.KeyProperty(kind='Garage')
    license_plate = ndb.StringProperty()
    brand = ndb.StringProperty()
    color = ndb.StringProperty()
    storage = ndb.BooleanProperty()

    @classmethod
    def list(cls, garage, limit=20):
        with cls.ndb_context():
            query = Car.query()
            query = query.filter(Car.garage == garage.key)
            if limit:
                return query.fetch(limit)
            return query.fetch()
