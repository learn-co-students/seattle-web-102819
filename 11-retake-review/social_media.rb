class SocialMedia
    attr_reader :name, :website_url

    @@all = [ ]
    def initialize(name, website_url)
        #string 
        @name = name
        #string
        @website_url = website_url
        @@all << self
    end

    def self.all
        @@all
    end
end