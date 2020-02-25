from flask import Blueprint, abort, jsonify, request
from shared.model.car import Car
from shared.model.garage import Garage
import logging

bp = Blueprint(name='garages', import_name=__name__, url_prefix='/garages')

# @garages.route('/', defaults={'page': 'index'})
@bp.route('/', methods=["GET"])
def garage_list():
    if request.args and 'garage' in request.args:
        garage = Garage.get(key=request.args.get('garage'))
        return jsonify({
            'id': garage.id,
            'name': garage.name,
            'brand': garage.brand,
            'postal_country': garage.postal_country
        })
    return jsonify(
        [
            {
                'id': g.id,
                'name': g.name,
                'brand': g.brand,
                'postal_country': g.postal_country
            } for g in Garage.list()
        ]
    )


@bp.route('/', methods=["POST"])
def garage_add():
    logging.warning(request.json)
    Garage.add(props=request.json)
    return garage_list()

@bp.route('/', methods=["PUT"])
def garage_update():
    props = request.json
    garage = Garage.get(key=props.pop('id'))
    garage.update(props=props)
    return garage_list()

@bp.route('/', methods=["DELETE"])
def garage_delete():
    garage = Garage.get(key=request.json.pop('garage'))
    car_list = Car.list(garage)
    for car in car_list:
        car.delete()
    garage.delete()
    return garage_list()

@bp.route('/<int:garage_id>/cars', methods=["GET"])
def get_garage_cars(garage_id):
    garage = Garage.get(garage_id)

    car_list = Car.list(garage)
    return jsonify(
        [
            {
                'id': c.id,
                'license_plate': c.license_plate,
                'brand': c.brand,
                'color': c.color,
                'storage': c.storage
            } for c in car_list
        ]
    )
