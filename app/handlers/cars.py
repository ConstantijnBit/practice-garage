from flask import Blueprint, abort, jsonify, request
from shared.model.car import Car
import logging

bp = Blueprint(name='cars', import_name=__name__, url_prefix='/cars')