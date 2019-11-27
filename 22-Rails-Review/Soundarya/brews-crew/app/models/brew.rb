class Brew < ApplicationRecord
    has_many :purchases

    def self.strongest
        str = all.max_by {|brew| brew.strength}
        # all.select{ |brew| all.strength == str.strength }
    end
end