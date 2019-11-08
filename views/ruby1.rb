hh = {}

loop do

    print 'Enter product id:'
    id = gets.chomp

    print 'Enter amount (how much items you want to order): '
    n = gets.chomp.to_i
    x = x + n
    hh[id] = x

    x = hh[id]to_i # read hash value (0 if it's not exist)

    puts hh.inspect

    total = 0
    hh.each do |key, value|
        total = total hh[key].to_i
    end

    puts '==========================='

end