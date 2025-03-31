class my_iterator(object):
    def __init__(self, n: int):
        self.i = 0
        self.n = n

    def __iter__(self):
        return self
    
    def __next__(self):
        if self.i == self.n:
            raise StopIteration
        self.i += 1
        return self.i

print("Instanciando o Objeto")

it = my_iterator(2)

try:
    print("iteração: {}".format(next(it)))
    print("iteração: {}".format(next(it)))
    print("iteração: {}".format(next(it)))
    print("iteração: {}".format(next(it)))
    print("iteração: {}".format(next(it)))
    print("iteração: {}".format(next(it)))
    print("iteração: {}".format(next(it)))
    print("iteração: {}".format(next(it)))
    print("iteração: {}".format(next(it)))
    print("iteração: {}".format(next(it)))
    print("iteração: {}".format(next(it)))
    print("iteração: {}".format(next(it)))
except Exception as e:
    print(e.__doc__)
finally:
    print("Houve o Erro")
