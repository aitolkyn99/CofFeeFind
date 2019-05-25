from flask import Flask, render_template, redirect, url_for, request
import pymysql

app = Flask(__name__)

def normal2db(s):
	if (str(type(s)) != "<class 'str'>"):
		return s;
	ans = ''
	for i in s:
		if (i == ' '):
			ans += '_';
		else:
			ans += i;
	return ans;

@app.route("/")
def index():
	db = pymysql.connect(host='localhost',
                         port=3306,
                         user='root',
                         passwd='aitosha',
                         db='CofFeeFind',
                         charset='utf8')
	try:
        # Set cursor to the database
		with db.cursor() as cursor:
			# Write SQL query
			sql = "SELECT * FROM coffeeshop;"
			# Execute SQL
			cursor.execute(sql)

			# Fetch the result
			# result is dictionary type
			coffee_shops = cursor.fetchall()
			# Print tuples

			coffee_shops_str = ""
			# print(result);
			for row in coffee_shops:
				for j in range(0, len(row)):
					coffee_shops_str += normal2db(str(row[j])) + ' '
				coffee_shops_str += '\n'
			sql = "SELECT * FROM menu;"
			# Execute SQL
			cursor.execute(sql)

			# Fetch the result
			# result is dictionary type
			menus = cursor.fetchall()
			# Print tuples

			menus_str = ""
			# print(result);
			for row in menus:
				for j in range(0, len(row)):
					print(row[j]);
					menus_str += normal2db(str(row[j])) + ' '
				menus_str += '\n'        
			sql = "SELECT * FROM review;"
			# Execute SQL
			cursor.execute(sql)

			# Fetch the result
			# result is dictionary type
			reviews = cursor.fetchall()
			# Print tuples

			reviews_str = ""
			# print(result); 
			for row in reviews:
				for j in range(0, len(row)):
					reviews_str += normal2db(str(row[j])) + ' '
				reviews_str += '\n'  
			sql = "SELECT * FROM shoplocation;"
			# Execute SQL
			cursor.execute(sql)

			# Fetch the result
			# result is dictionary type
			locations = cursor.fetchall()
			# Print tuples

			locations_str = ""
			# print(result);
			for row in locations:
				for j in range(0, len(row)):
					locations_str += normal2db(str(row[j])) + ' '
				locations_str += '\n'              	

			sql = "SELECT * FROM customer;"
			# Execute SQL
			cursor.execute(sql)

			# Fetch the result
			# result is dictionary type
			customers = cursor.fetchall()
			# Print tuples

			customers_str = ""
			# print(result);
			for row in customers:
				for j in range(0, len(row)):
					print('row = " ' +  str(row[j]) + ' "');
					print(row[j]);
					# output = [str(ord(x)) for x in output]
					if (j == len(row) - 1):
						customers_str += str(int.from_bytes(row[j],byteorder='big')) + ' '
					else:
						customers_str += normal2db(str(row[j])) + ' '
					print(customers_str);
				customers_str += '\n' 
			sql = "select * from ((coffeeshop natural join menu) natural join shoplocation);"	           
			cursor.execute(sql)
			shops_with_menu = cursor.fetchall()
			shop2menu = {}
			for row in shops_with_menu:
				for j in range(0, len(row)):
					shop2menu





	finally:
		db.close()
	return render_template('index.html', menus_str = menus_str, customers_str=customers_str, coffee_shops_str=coffee_shops_str);
	
if __name__ == "__main__":
    app.run('0.0.0.0', port=5000)