from flask import Blueprint, abort, jsonify, request
from shared.model.car import Car
from shared.model.garage import Garage
import logging

bp = Blueprint(name='cars', import_name=__name__, url_prefix='/cars')


def car_list(garage):
    return jsonify(
        [
            {
                'id': c.id,
                'license_plate': c.license_plate,
                'brand': c.brand,
                'color': c.color,
                'storage': c.storage,
                'garage_id': c.garage.id()
            } for c in Car.list(garage)
        ]
    )

def car_item(car):
    return jsonify(
        {
            'id': car.id,
            'license_plate': car.license_plate,
            'brand': car.brand,
            'color': car.color,
            'storage': car.storage,
            'garage_id': car.garage.id()
        }
    )


@bp.route('/', methods=['POST'])
def car_add():
    # import pprint
    # pprint.pprint(request.json)
    garage = Garage.get(key=request.json.pop('garage_id'))
    # pprint.pprint(request.json)
    Car.add(props=request.json, garage=garage.key)
    return car_list(garage)

@bp.route('/', methods=['PUT'])
def car_update():
    props = request.json
    car = Car.get(key=props.pop('id'))
    car.update(props=props)
    return car_item(car)

@bp.route('/', methods=['DELETE'])
def car_delete():
    car = Car.get(key=request.json.pop('car'))
    car.delete()
    return car_item(car)
