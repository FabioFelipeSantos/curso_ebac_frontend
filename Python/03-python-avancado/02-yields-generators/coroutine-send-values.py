def func():
    print("Parte 1 da função")

    x = yield
    print(x)

    print("Parte 2 da função")

    a = yield
    print(a)

    print("Parte 3 da função")
    yield x + a

y = func()

print(f"Resultado função: {next(y)}")

print(f"Resultado função: {y.send(6)}")

print(f"Resultado função: {y.send(12)}")
