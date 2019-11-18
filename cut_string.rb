orders = "product_1=1,product_2=1,product_4=1,product_13=2"

s1 = orders.split(/,/)

puts s1.inspect

s1.each do |x|
	s2 = x.split(/=/)
	puts s2.inspect
	s3 = s2[0].split(/_/)

	key = s3[1]
	value = s2[1]
	puts "product id #{key}  value #{s2[1]}" 
end