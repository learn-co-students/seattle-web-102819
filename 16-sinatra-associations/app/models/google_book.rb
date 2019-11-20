class GoogleBook < ActiveRecord::Base
    validates :title, :author, :snippet, presence: true
end