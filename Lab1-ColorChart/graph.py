# Maher Nigar
import matplotlib.pyplot as plt
import pandas as pd
# name:"Strawberry", quantity:15, color:"red"

data = {'name': ['Strawberry', 'Peach', 'Banana', 'Pear', 'Grapes'],
        'quantity_of_fruits': [15, 10, 25, 10, 20]
        }
df = pd.DataFrame(data)

colors = ['red', 'orange', 'yellow', 'lightgreen', 'black']
plt.bar(df['name'], df['quantity_of_fruits'], color=colors)
plt.title('Fruit Chart', fontsize=14)
plt.xlabel('name', fontsize=14)
plt.ylabel('Qunatity of Fruits', fontsize=14)
plt.grid(True)
plt.show()
