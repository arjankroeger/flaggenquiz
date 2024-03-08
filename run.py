f = open('statics/equationsold.txt', 'r')
w = open('statics/equations.txt', 'w')
for i in f:
    if "g" in i: 
        w.write(i)