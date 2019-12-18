class Cake 
    attr_accessor :flavor, :occasion

    def initalize(flavor, occasion)
        @flavor = flavor
        @occasion = occasion
    end 

    def greeting
        puts "Happy #{@occasion} here is a #{@flavor} cake to show we care!"
    end 

    def self.about
        puts 'ruby on cake, a cake making company'
    end 
end

# class Baker < Cake
# end 