import scipy.stats as stats
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
sns.set()

%matplotlib inline

df = pd.read_csv('Data/cars.csv')
df.head()

# 1. Print the number of duplicate rows we have in our dataframe.
dup = df.duplicated().sum()
print(f'There are {dup} duplicate values in our dataframe')

#  2. Modify our df to have all duplicate rows removed.
print(df.shape, 'With duplicates')
df = df.drop_duplicates()

# 3. Do a sanity check to make sure all duplicates have been removed by printing the total number of duplicate rows again.
dup_check = df.duplicated().sum()
print(f'There are {dup_check} dupicates')

# * Which column has the most null values and how many null values does it have?
null_val = df.isnull().sum()
print(null_val)
max = null_val.max()
# idxmin() will figure out which column has the least values
least_value = df.count().idxmin()
print()
print(f'{least_value} has the most {max} null values')

# * Print how long our dataframe is
print(df.shape)

# * Remove any row that has a null value in it.
df = df.dropna()

# * Do a sanity check and pring how long our dataframe is now that we have removed our null values.

print(df.shape)


# Making a horizontal bar graph that displays how many times each brand of car appears in this data.

df = pd.read_csv('data/cars.csv')
gb1 = df.groupby('Make')
amount2 = gb1['Make'].count()
sort = amount2.sort_values()
sort.plot(kind='barh', figsize=(30, 30), fontsize=20, color='purple')
