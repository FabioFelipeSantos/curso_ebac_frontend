from sys import argv

from extracao import extracao
from visualizacao import visualizacao

file_name = argv[1]

extracao()
visualizacao(file_name)
