from flask import Blueprint, abort, jsonify, request
from shared.model.car import Car
import logging

bp = Blueprint(name='cars', import_name=__name__, url_prefix='/cars')

@bp.route('/', methods=['GET'])
def car_list():
    print(request.args)
    if request.args and 'car' in request.args:
        car = Car.get(key=request.args.get('car'))
        return jsonify({
            'id': car.id,
            'license_plate': car.license_plate,
            'brand': car.brand,
            'color': car.color,
            'storage': car.storage,
            'garage_id': car.garage_id
        })
    return jsonify(
        [
            {
                'id': c.id,
                'license_plate': c.license_plate,
                'brand': c.brand,
                'color': c.color,
                'storage': c.storage,
                'garage_id': c.garage_id
            } for c in Car.list()
        ]
    )

@bp.route('/', methods=['POST'])
def car_add():
    logging.warning(request.json)
    car = Car.add(props=request.json)
    return car_list()

@bp.route('/', methods=['PUT'])
def car_update():
    props = request.json
    car = Car.get(key=props.pop('id'))
    car.update(props=props)
    return car_list()

@bp.route('/', methods=['DELETE'])
def car_delete():
    car = Car.get(key=request.json.pop('car'))
    car.delete()
    return car_list()
