class User
    attr_accessor :age, :email
    attr_reader :name

    @@all = [ ]

    def initialize(name, age, email)
        @name = name
        @age = age
        @email = email
        @@all << self
    end

    def self.all
        @@all
    end


    def all_my_accounts
        # Account is the join so will be talking through that.
        # #<Social Media>, #<User>
        # User talks to account
        # What am I going to be looking for in the account class.
        # Look up user in username.
        # Accounts.user -> find their Social media account
        Account.all.select do |account| 
            account.user == self
        end            
        # binding.pry
    end
end